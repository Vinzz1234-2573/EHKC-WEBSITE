/*
  supabase-config.js
  -------------------
  NOTE: despite the filename (kept unchanged so no other file needed to be
  edited except removing the old Supabase CDN <script> tag), this file no
  longer talks to Supabase. It's a lightweight compatibility shim that
  gives every page the same `sb.auth.*` / `sb.from(...)` / `sbUploadFile`
  API they already call, but backed by the PHP + MySQL API in /api and
  /auth instead. This kept every page's existing JS working unchanged.

  API base path — adjust if you deploy the api/ and auth/ folders
  somewhere other than the site root.
*/
const API_BASE = '';

async function apiCall(path, opts = {}) {
  const res = await fetch(API_BASE + path, {
    credentials: 'include',
    headers: opts.body ? { 'Content-Type': 'application/json' } : {},
    ...opts,
  });
  let json = {};
  try { json = await res.json(); } catch (e) { /* no body */ }
  return { res, json };
}

/* ───────────────────────── auth ───────────────────────── */
const auth = {
  async getSession() {
    const { json } = await apiCall('/auth/session.php');
    const session = json.user ? { user: { id: json.user.id, email: json.user.email } } : null;
    return { data: { session }, error: null };
  },

  async signInWithPassword({ email, password }) {
    const { res, json } = await apiCall('/auth/login.php', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) return { data: null, error: { message: json.error || 'Login failed.' } };
    return { data: { user: json.user }, error: null };
  },

  async signUp({ email, password, options }) {
    const name = options?.data?.name || '';
    const { res, json } = await apiCall('/auth/signup.php', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
    if (!res.ok) return { data: null, error: { message: json.error || 'Sign up failed.' } };
    // Signup logs the user in immediately (no email confirmation step).
    return { data: { user: json.user, session: { user: json.user } }, error: null };
  },

  async signOut() {
    await apiCall('/auth/logout.php', { method: 'POST' });
    return { error: null };
  },
};

/* ───────────────────── table query builder ───────────────────── */
const TABLE_ENDPOINTS = {
  jobs: '/api/jobs.php',
  applications: '/api/applications.php',
  posts: '/api/posts.php',
  gallery: '/api/gallery.php',
  profiles: '/api/profiles.php',
};

class QueryBuilder {
  constructor(table) {
    this.table = table;
    this.endpoint = TABLE_ENDPOINTS[table];
    this._op = null;
    this._payload = null;
    this._filters = [];
    this._single = false;
  }
  select() { if (!this._op) this._op = 'select'; return this; }
  insert(payload) { this._op = 'insert'; this._payload = payload; return this; }
  update(payload) { this._op = 'update'; this._payload = payload; return this; }
  upsert(payload) { this._op = 'upsert'; this._payload = payload; return this; }
  delete() { this._op = 'delete'; return this; }
  eq(col, val) { this._filters.push(['eq', col, val]); return this; }
  is(col, val) { this._filters.push(['is', col, val]); return this; }
  order() { return this; } // server already returns rows in the right order
  single() { this._single = true; return this; }

  _idFilter() {
    const f = this._filters.find(f => f[0] === 'eq' && f[1] === 'id');
    return f ? f[2] : null;
  }

  then(resolve, reject) {
    return this._exec().then(resolve, reject);
  }

  async _exec() {
    try {
      if (this._op === 'select') {
        if (this.table === 'profiles') {
          const id = this._idFilter();
          const { json } = await apiCall(this.endpoint + (id ? `?id=${encodeURIComponent(id)}` : ''));
          return { data: json.data ?? null, error: null };
        }
        const { json } = await apiCall(this.endpoint);
        const rows = json.data || [];
        return { data: this._single ? (rows[0] || null) : rows, error: null };
      }

      if (this._op === 'insert') {
        const { res, json } = await apiCall(this.endpoint, {
          method: 'POST',
          body: JSON.stringify(this._payload),
        });
        if (!res.ok) return { data: null, error: { message: json.error || 'Insert failed.' } };
        const row = json.data;
        return { data: this._single ? row : [row], error: null };
      }

      if (this._op === 'update') {
        const id = this._idFilter();
        if (id) {
          const { res, json } = await apiCall(`${this.endpoint}?id=${encodeURIComponent(id)}`, {
            method: 'PUT',
            body: JSON.stringify(this._payload),
          });
          if (!res.ok) return { data: null, error: { message: json.error || 'Update failed.' } };
          return { data: null, error: null };
        }
        // Bulk update via .is(col, null) — fetch matching rows then update one by one.
        const isFilter = this._filters.find(f => f[0] === 'is');
        if (isFilter) {
          const [, col, val] = isFilter;
          const { json: listJson } = await apiCall(this.endpoint);
          const rows = (listJson.data || []).filter(r => r[col] === val);
          for (const r of rows) {
            await apiCall(`${this.endpoint}?id=${encodeURIComponent(r.id)}`, {
              method: 'PUT',
              body: JSON.stringify(this._payload),
            });
          }
          return { data: null, error: null };
        }
        return { data: null, error: { message: 'Update requires .eq("id", ...) or .is(...)' } };
      }

      if (this._op === 'upsert') {
        // Profile rows are created server-side on signup already; nothing to do.
        return { data: null, error: null };
      }

      if (this._op === 'delete') {
        const id = this._idFilter();
        if (!id) return { data: null, error: { message: 'Delete requires .eq("id", ...)' } };
        const { res, json } = await apiCall(`${this.endpoint}?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
        if (!res.ok) return { data: null, error: { message: json.error || 'Delete failed.' } };
        return { data: null, error: null };
      }

      return { data: null, error: { message: 'No operation specified.' } };
    } catch (e) {
      return { data: null, error: { message: e.message || 'Network error.' } };
    }
  }
}

const sb = {
  auth,
  from(table) { return new QueryBuilder(table); },
  storage: {
    from(bucket) {
      return {
        async upload(path, file) {
          const form = new FormData();
          form.append('file', file);
          form.append('bucket', bucket);
          try {
            const res = await fetch('/api/upload.php', { method: 'POST', credentials: 'include', body: form });
            const json = await res.json();
            if (!res.ok) return { error: { message: json.error || 'Upload failed.' } };
            return { data: { path: json.path, url: json.url }, error: null };
          } catch (e) {
            return { error: { message: e.message || 'Upload failed.' } };
          }
        },
        async download(path) {
          try {
            const res = await fetch(`/api/download.php?path=${encodeURIComponent(path)}`, { credentials: 'include' });
            if (!res.ok) {
              let msg = 'Download failed.';
              try { msg = (await res.json()).error || msg; } catch (e) {}
              return { data: null, error: { message: msg } };
            }
            const blob = await res.blob();
            return { data: blob, error: null };
          } catch (e) {
            return { data: null, error: { message: e.message || 'Download failed.' } };
          }
        },
      };
    },
  },
};

/* Public URL helper for storage files (blog-images / gallery-images only). */
function sbPublicUrl(bucket, path) {
  return `/uploads/${bucket}/${path.split('/').pop()}`;
}

/* Upload a File object to a storage bucket; returns the path or null. */
async function sbUploadFile(bucket, file, folder) {
  const { data, error } = await sb.storage.from(bucket).upload(`${folder}/placeholder`, file);
  if (error) { console.error('Upload error:', error); return null; }
  return data.path;
}
