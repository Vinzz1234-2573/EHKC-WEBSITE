<?php
/**
 * api/jobs.php — replaces sb.from('jobs') calls.
 * GET            -> list all jobs (public), newest first
 * POST           -> create a job (admin only)
 * PUT ?id=<uuid> -> update a job (admin only)
 * DELETE?id=<uuid>-> delete a job (admin only)
 */
require_once __DIR__ . '/db.php';

$method = $_SERVER['REQUEST_METHOD'];
$pdo = db();

if ($method === 'GET') {
    $rows = $pdo->query('SELECT * FROM jobs ORDER BY created_at DESC')->fetchAll();
    json_out(['data' => $rows]);
}

if ($method === 'POST') {
    require_admin();
    $in = json_input();
    $id = make_uuid();
    $pdo->prepare('INSERT INTO jobs (id, title_en, title_zh, type, location, salary, wa, desc_en, desc_zh)
                    VALUES (?,?,?,?,?,?,?,?,?)')
        ->execute([
            $id,
            $in['title_en'] ?? '',
            $in['title_zh'] ?? null,
            $in['type'] ?? 'Full-Time',
            $in['location'] ?? 'Old Klang Road, Kuala Lumpur',
            $in['salary'] ?? null,
            $in['wa'] ?? '60127662911',
            $in['desc_en'] ?? null,
            $in['desc_zh'] ?? null,
        ]);
    $row = $pdo->prepare('SELECT * FROM jobs WHERE id = ?');
    $row->execute([$id]);
    json_out(['data' => $row->fetch()], 201);
}

if ($method === 'PUT') {
    require_admin();
    $id = $_GET['id'] ?? '';
    if (!$id) json_error('Missing id');
    $in = json_input();
    $pdo->prepare('UPDATE jobs SET title_en=?, title_zh=?, type=?, location=?, salary=?, wa=?, desc_en=?, desc_zh=? WHERE id=?')
        ->execute([
            $in['title_en'] ?? '',
            $in['title_zh'] ?? null,
            $in['type'] ?? 'Full-Time',
            $in['location'] ?? '',
            $in['salary'] ?? null,
            $in['wa'] ?? '',
            $in['desc_en'] ?? null,
            $in['desc_zh'] ?? null,
            $id,
        ]);
    json_out(['ok' => true]);
}

if ($method === 'DELETE') {
    require_admin();
    $id = $_GET['id'] ?? '';
    if (!$id) json_error('Missing id');
    $pdo->prepare('DELETE FROM jobs WHERE id = ?')->execute([$id]);
    json_out(['ok' => true]);
}

json_error('Method not allowed', 405);
