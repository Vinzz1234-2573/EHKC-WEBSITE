<?php
/**
 * api/gallery.php — replaces sb.from('gallery') calls.
 * GET             -> list all photos (public), by sort_order asc
 * POST            -> add a photo {src, caption, sort_order} (admin only)
 * PUT  ?id=<uuid> -> update a photo, e.g. reordering (admin only)
 * DELETE?id=<uuid> -> delete a photo (admin only)
 */
require_once __DIR__ . '/db.php';

$method = $_SERVER['REQUEST_METHOD'];
$pdo = db();

if ($method === 'GET') {
    $rows = $pdo->query('SELECT * FROM gallery ORDER BY sort_order ASC')->fetchAll();
    json_out(['data' => $rows]);
}

if ($method === 'POST') {
    require_admin();
    $in = json_input();
    $id = make_uuid();
    $pdo->prepare('INSERT INTO gallery (id, src, caption, sort_order) VALUES (?,?,?,?)')
        ->execute([
            $id,
            $in['src'] ?? '',
            $in['caption'] ?? null,
            $in['sort_order'] ?? 0,
        ]);
    $row = $pdo->prepare('SELECT * FROM gallery WHERE id = ?');
    $row->execute([$id]);
    json_out(['data' => $row->fetch()], 201);
}

if ($method === 'PUT') {
    require_admin();
    $id = $_GET['id'] ?? '';
    if (!$id) json_error('Missing id');
    $in = json_input();
    $fields = [];
    $params = [];
    foreach (['caption', 'sort_order'] as $f) {
        if (array_key_exists($f, $in)) {
            $fields[] = "$f = ?";
            $params[] = $in[$f];
        }
    }
    if ($fields) {
        $params[] = $id;
        $pdo->prepare('UPDATE gallery SET ' . implode(',', $fields) . ' WHERE id = ?')->execute($params);
    }
    json_out(['ok' => true]);
}

if ($method === 'DELETE') {
    require_admin();
    $id = $_GET['id'] ?? '';
    if (!$id) json_error('Missing id');
    $pdo->prepare('DELETE FROM gallery WHERE id = ?')->execute([$id]);
    json_out(['ok' => true]);
}

json_error('Method not allowed', 405);
