<?php
/**
 * api/posts.php — replaces sb.from('posts') calls (blog/news).
 * GET             -> list all posts (public), newest "posted" first
 * POST            -> create a post (admin only)
 * PUT  ?id=<uuid> -> update a post (admin only)
 * DELETE?id=<uuid> -> delete a post (admin only)
 */
require_once __DIR__ . '/db.php';

$method = $_SERVER['REQUEST_METHOD'];
$pdo = db();

if ($method === 'GET') {
    $rows = $pdo->query('SELECT * FROM posts ORDER BY posted DESC, created_at DESC')->fetchAll();
    json_out(['data' => $rows]);
}

if ($method === 'POST') {
    require_admin();
    $in = json_input();
    $id = make_uuid();
    $pdo->prepare('INSERT INTO posts (id, title_en, title_zh, category, event_date, content, content_zh, link, image_path)
                    VALUES (?,?,?,?,?,?,?,?,?)')
        ->execute([
            $id,
            $in['title_en'] ?? '',
            $in['title_zh'] ?? null,
            $in['category'] ?? 'News',
            $in['event_date'] ?? null,
            $in['content'] ?? null,
            $in['content_zh'] ?? null,
            $in['link'] ?? null,
            $in['image_path'] ?? null,
        ]);
    $row = $pdo->prepare('SELECT * FROM posts WHERE id = ?');
    $row->execute([$id]);
    json_out(['data' => $row->fetch()], 201);
}

if ($method === 'PUT') {
    require_admin();
    $id = $_GET['id'] ?? '';
    if (!$id) json_error('Missing id');
    $in = json_input();
    $pdo->prepare('UPDATE posts SET title_en=?, title_zh=?, category=?, event_date=?, content=?, content_zh=?, link=? WHERE id=?')
        ->execute([
            $in['title_en'] ?? '',
            $in['title_zh'] ?? null,
            $in['category'] ?? 'News',
            $in['event_date'] ?? null,
            $in['content'] ?? null,
            $in['content_zh'] ?? null,
            $in['link'] ?? null,
            $id,
        ]);
    json_out(['ok' => true]);
}

if ($method === 'DELETE') {
    require_admin();
    $id = $_GET['id'] ?? '';
    if (!$id) json_error('Missing id');
    $pdo->prepare('DELETE FROM posts WHERE id = ?')->execute([$id]);
    json_out(['ok' => true]);
}

json_error('Method not allowed', 405);
