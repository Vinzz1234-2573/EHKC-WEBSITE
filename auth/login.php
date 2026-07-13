<?php
/**
 * auth/login.php — replaces sb.auth.signInWithPassword.
 * POST JSON: { email, password }
 * Response:  { user: { id, email, name, role } }
 */
require_once __DIR__ . '/../api/db.php';

$in = json_input();
$email = trim($in['email'] ?? '');
$password = $in['password'] ?? '';

if (!$email || !$password) {
    json_error('Please enter your email and password.');
}

$pdo = db();
$stmt = $pdo->prepare('SELECT id, password_hash FROM users WHERE email = ?');
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password_hash'])) {
    json_error('Invalid email or password.', 401);
}

$stmt = $pdo->prepare('SELECT name, role FROM profiles WHERE id = ?');
$stmt->execute([$user['id']]);
$profile = $stmt->fetch() ?: ['name' => null, 'role' => 'user'];

$_SESSION['user_id'] = $user['id'];

json_out(['user' => [
    'id' => $user['id'],
    'email' => $email,
    'name' => $profile['name'],
    'role' => $profile['role'],
]]);
