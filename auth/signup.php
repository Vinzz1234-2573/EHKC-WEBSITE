<?php
/**
 * auth/signup.php — replaces sb.auth.signUp + profile upsert.
 * POST JSON: { email, password, name }
 * Response:  { user: { id, email, name, role } }
 */
require_once __DIR__ . '/../api/db.php';

$in = json_input();
$email = trim($in['email'] ?? '');
$password = $in['password'] ?? '';
$name = trim($in['name'] ?? '');

if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_error('Please enter a valid email address.');
}
if (strlen($password) < 6 || !preg_match('/[a-z]/', $password)
    || !preg_match('/[A-Z]/', $password) || !preg_match('/[0-9]/', $password)) {
    json_error('Password must be 6+ chars with upper, lower, and a digit.');
}
if (!$name) {
    json_error('Please enter your full name.');
}

$pdo = db();

$stmt = $pdo->prepare('SELECT id FROM users WHERE email = ?');
$stmt->execute([$email]);
if ($stmt->fetch()) {
    json_error('An account with that email already exists.', 409);
}

$id = make_uuid();
$hash = password_hash($password, PASSWORD_DEFAULT);

$pdo->beginTransaction();
try {
    $pdo->prepare('INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?)')
        ->execute([$id, $email, $hash]);

    $pdo->prepare('INSERT INTO profiles (id, email, name, role) VALUES (?, ?, ?, ?)')
        ->execute([$id, $email, $name, 'user']);

    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollBack();
    json_error('Could not create account.', 500);
}

$_SESSION['user_id'] = $id;

json_out(['user' => ['id' => $id, 'email' => $email, 'name' => $name, 'role' => 'user']]);
