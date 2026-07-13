<?php
/**
 * api/download.php — admin-only resume download.
 * GET ?path=resumes/<filename>
 */
require_once __DIR__ . '/db.php';
require_admin();

$path = $_GET['path'] ?? '';
if (strpos($path, 'resumes/') !== 0 || strpos($path, '..') !== false) {
    json_error('Invalid path.', 400);
}

$fullPath = UPLOAD_DIR . '/' . $path;
if (!is_file($fullPath)) {
    json_error('File not found.', 404);
}

header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . basename($fullPath) . '"');
header('Content-Length: ' . filesize($fullPath));
readfile($fullPath);
exit;
