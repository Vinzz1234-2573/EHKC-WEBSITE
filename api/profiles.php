<?php
/**
 * api/profiles.php — replaces sb.from('profiles').select(...).eq('id', ...) calls.
 * GET ?id=<uuid> -> returns { data: { id, email, name, role, created_at } } or { data: null }
 * If ?id is omitted, returns the current logged-in user's profile.
 */
require_once __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    json_error('Method not allowed', 405);
}

$id = $_GET['id'] ?? ($_SESSION['user_id'] ?? null);
if (!$id) {
    json_out(['data' => null]);
}

$stmt = db()->prepare('SELECT id, email, name, role, created_at FROM profiles WHERE id = ?');
$stmt->execute([$id]);
$row = $stmt->fetch();

json_out(['data' => $row ?: null]);
