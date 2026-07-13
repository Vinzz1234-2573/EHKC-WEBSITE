<?php
/**
 * api/applications.php — replaces sb.from('applications') calls.
 * GET             -> list all applications (admin only)
 * POST            -> submit a job application (public)
 * PUT  ?id=<uuid> -> update status (admin only)
 * DELETE?id=<uuid> -> delete (admin only)
 */
require_once __DIR__ . '/db.php';

$method = $_SERVER['REQUEST_METHOD'];
$pdo = db();

if ($method === 'GET') {
    require_admin();
    $rows = $pdo->query('SELECT * FROM applications ORDER BY created_at DESC')->fetchAll();
    json_out(['data' => $rows]);
}

if ($method === 'POST') {
    $in = json_input();
    if (empty($in['name']) || empty($in['email'])) {
        json_error('Name and email are required.');
    }
    $id = make_uuid();
    $jobId = $in['job_id'] ?? null;
    if ($jobId !== null && !preg_match('/^[0-9a-f-]{36}$/i', $jobId)) {
        $jobId = null;
    }
    $pdo->prepare('INSERT INTO applications (id, job_id, job_title, name, email, phone, message, cv_name, cv_path, status)
                    VALUES (?,?,?,?,?,?,?,?,?,?)')
        ->execute([
            $id,
            $jobId,
            $in['job_title'] ?? null,
            $in['name'],
            $in['email'],
            $in['phone'] ?? null,
            $in['message'] ?? null,
            $in['cv_name'] ?? null,
            $in['cv_path'] ?? null,
            'new',
        ]);
    json_out(['data' => ['id' => $id]], 201);
}

if ($method === 'PUT') {
    require_admin();
    $id = $_GET['id'] ?? '';
    if (!$id) json_error('Missing id');
    $in = json_input();
    $pdo->prepare('UPDATE applications SET status = ? WHERE id = ?')
        ->execute([$in['status'] ?? 'new', $id]);
    json_out(['ok' => true]);
}

if ($method === 'DELETE') {
    require_admin();
    $id = $_GET['id'] ?? '';
    if (!$id) json_error('Missing id');
    $pdo->prepare('DELETE FROM applications WHERE id = ?')->execute([$id]);
    json_out(['ok' => true]);
}

json_error('Method not allowed', 405);
