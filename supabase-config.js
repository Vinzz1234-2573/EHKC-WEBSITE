/*
  supabase-config.js
  ------------------
  Replace SUPABASE_URL and SUPABASE_ANON_KEY with your real project values.
  Get them from: https://supabase.com → your project → Settings → API

  SQL SCHEMA (run once in Supabase SQL Editor):
  ─────────────────────────────────────────────
  -- Jobs table
  create table if not exists jobs (
    id          uuid primary key default gen_random_uuid(),
    title_en    text not null,
    title_zh    text,
    type        text default 'Full-Time',
    location    text default 'Old Klang Road, Kuala Lumpur',
    salary      text,
    wa          text default '60127762911',
    desc_en     text,
    desc_zh     text,
    posted      date default current_date,
    created_at  timestamptz default now()
  );

  -- Applications table
  create table if not exists applications (
    id          uuid primary key default gen_random_uuid(),
    job_id      uuid references jobs(id) on delete set null,
    job_title   text,
    name        text not null,
    email       text not null,
    phone       text,
    message     text,
    cv_name     text,
    cv_path     text,
    status      text default 'new',
    created_at  timestamptz default now()
  );

  -- Blog posts table
  create table if not exists posts (
    id          uuid primary key default gen_random_uuid(),
    title_en    text not null,
    title_zh    text,
    category    text default 'News',
    event_date  date,
    content     text,
    content_zh  text,
    link        text,
    image_path  text,
    posted      date default current_date,
    created_at  timestamptz default now()
  );

  -- Gallery table
  create table if not exists gallery (
    id          uuid primary key default gen_random_uuid(),
    src         text not null,
    caption     text,
    sort_order  int default 0,
    posted      date default current_date,
    created_at  timestamptz default now()
  );

  -- Storage buckets (create in Supabase Storage panel):
  --   "resumes"       → private (admin-only download)
  --   "blog-images"   → public
  --   "gallery-images"→ public

  -- Row-level security: enable RLS on all tables then:
  -- applications: allow insert for anon; select/update/delete for authenticated
  -- jobs/posts/gallery: allow select for anon; all for authenticated
  -- (or disable RLS for quick start — enable before going live)

  -- Edge Function for email trigger (optional):
  -- Create function "notify-application" in Supabase Edge Functions.
  -- It fires on insert to applications via a Database Webhook.
*/

const SUPABASE_URL      = 'https://gdswyxjmrqtwrbslgykw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_wURpSXWfiXJYDlyOVyekBg_WR5zk5ZP';

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* Public URL helper for storage files */
function sbPublicUrl(bucket, path) {
  return `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${path}`;
}

/* Upload a File object to a storage bucket; returns the public URL or null */
async function sbUploadFile(bucket, file, folder) {
  const ext  = file.name.split('.').pop();
  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const { error } = await sb.storage.from(bucket).upload(path, file, { upsert: false });
  if (error) { console.error('Upload error:', error); return null; }
  return path;
}
