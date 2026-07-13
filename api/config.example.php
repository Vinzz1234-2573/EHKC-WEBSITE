<?php
/**
 * config.example.php
 * -------------------
 * Template for api/config.php — copy this file to config.php and fill
 * in your real cPanel MySQL credentials. config.php itself is
 * git-ignored so real credentials never get committed.
 *
 *   cp api/config.example.php api/config.php
 *
 * DB_HOST is almost always 'localhost' on cPanel.
 */

define('DB_HOST', 'localhost');
define('DB_NAME', 'your_db_name');
define('DB_USER', 'your_db_user');
define('DB_PASS', 'your_db_password');

// Absolute path on the server where uploaded files are stored.
define('UPLOAD_DIR', __DIR__ . '/../uploads');

// Public base URL of the site (no trailing slash), used to build
// public file URLs. Update to your real domain once live.
define('SITE_URL', 'https://yourdomain.com');

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
