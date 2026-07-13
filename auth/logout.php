<?php
/** auth/logout.php — replaces sb.auth.signOut. */
require_once __DIR__ . '/../api/db.php';

$_SESSION = [];
session_destroy();

json_out(['ok' => true]);
