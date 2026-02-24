<?php
header('Content-Type: application/json');
$checks = [];

// PHP version
$checks['php'] = PHP_VERSION;

// PDO SQLite
$checks['pdo_sqlite'] = extension_loaded('pdo_sqlite') ? 'OK' : 'MISSING';

// Data dir
$dataDir = __DIR__ . '/../data';
$checks['data_dir_exists'] = is_dir($dataDir) ? 'OK' : 'MISSING';
$checks['data_dir_writable'] = is_writable($dataDir) ? 'OK' : 'NOT_WRITABLE';

// Try create DB
try {
    require_once __DIR__ . '/init-db.php';
    $db = getDB();
    $checks['db'] = 'OK';
    $count = $db->query("SELECT COUNT(*) FROM users")->fetchColumn();
    $checks['users_count'] = $count;
} catch (Exception $e) {
    $checks['db'] = 'ERROR: ' . $e->getMessage();
}

echo json_encode($checks, JSON_PRETTY_PRINT);
