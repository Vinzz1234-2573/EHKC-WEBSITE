<?php
/**
 * auth/session.php — replaces sb.auth.getSession() + profile lookup.
 * GET. Response: { user: null } or { user: { id, email, name, role } }
 */
require_once __DIR__ . '/../api/db.php';

if (empty($_SESSION['user_id'])) {
    json_out(['user' => null]);
}

$stmt = db()->prepare('SELECT u.id, u.email, p.name, p.role, p.created_at
                        FROM users u JOIN profiles p ON p.id = u.id
                        WHERE u.id = ?');
$stmt->execute([$_SESSION['user_id']]);
$row = $stmt->fetch();

if (!$row) {
    json_out(['user' => null]);
}

json_out(['user' => $row]);
