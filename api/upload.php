<?php
/**
 * api/upload.php — replaces sb.storage.from(bucket).upload().
 * POST multipart/form-data:
 *   file   -> the uploaded file
 *   bucket -> one of: resumes | blog-images | gallery-images
 *
 * Response: { path: "<bucket>/<generated-name>", url: "<public url or null>" }
 *
 * "resumes" is treated as private: the returned url is null and files
 * live outside the public web root's easy reach (blocked via .htaccess);
 * admins fetch them through api/download.php instead.
 * "blog-images" / "gallery-images" are public and get a direct URL.
 */
require_once __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_error('Method not allowed', 405);
}

$bucket = $_POST['bucket'] ?? '';
$allowed = ['resumes', 'blog-images', 'gallery-images'];
if (!in_array($bucket, $allowed, true)) {
    json_error('Invalid bucket.');
}

if ($bucket !== 'resumes') {
    // Only admins manage blog/gallery images.
    require_admin();
}

if (empty($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    json_error('No file uploaded, or upload failed.');
}

$file = $_FILES['file'];
$maxBytes = 10 * 1024 * 1024; // 10MB
if ($file['size'] > $maxBytes) {
    json_error('File too large (max 10MB).');
}

$ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
$safeExt = preg_replace('/[^a-z0-9]/', '', $ext);
$name = date('YmdHis') . '-' . bin2hex(random_bytes(6)) . ($safeExt ? ".$safeExt" : '');

$destDir = UPLOAD_DIR . '/' . $bucket;
if (!is_dir($destDir)) {
    mkdir($destDir, 0755, true);
}

$destPath = $destDir . '/' . $name;
if (!move_uploaded_file($file['tmp_name'], $destPath)) {
    json_error('Could not save file.', 500);
}

$relPath = $bucket . '/' . $name;
$publicUrl = $bucket === 'resumes'
    ? null
    : SITE_URL . '/uploads/' . $bucket . '/' . $name;

json_out(['path' => $relPath, 'url' => $publicUrl]);
