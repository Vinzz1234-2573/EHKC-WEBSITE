<?php
/**
 * db.php — shared PDO connection.
 * Include this after config.php in every API endpoint.
 */
require_once __DIR__ . '/config.php';

function db(): PDO {
    static $pdo = null;
    if ($pdo === null) {
        $dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4';
        $pdo = new PDO($dsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]);
    }
    return $pdo;
}

/** Generate a v4 UUID string (mirrors Postgres gen_random_uuid()). */
function make_uuid(): string {
    $data = random_bytes(16);
    $data[6] = chr((ord($data[6]) & 0x0f) | 0x40);
    $data[8] = chr((ord($data[8]) & 0x3f) | 0x80);
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}

/** Send a JSON response and stop execution. */
function json_out($data, int $status = 200): void {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

/** Send a JSON error and stop execution. */
function json_error(string $message, int $status = 400): void {
    json_out(['error' => $message], $status);
}

/** Parse the JSON request body into an assoc array. */
function json_input(): array {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

/** Require an active login session; returns the user id or errors out. */
function require_auth(): string {
    if (empty($_SESSION['user_id'])) {
        json_error('Not authenticated', 401);
    }
    return $_SESSION['user_id'];
}

/** Require the logged-in user to have role = admin. */
function require_admin(): string {
    $uid = require_auth();
    $stmt = db()->prepare('SELECT role FROM profiles WHERE id = ?');
    $stmt->execute([$uid]);
    $role = $stmt->fetchColumn();
    if ($role !== 'admin') {
        json_error('Admin access required', 403);
    }
    return $uid;
}
