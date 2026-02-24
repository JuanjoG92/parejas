<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

require_once __DIR__ . '/init-db.php';
$db = getDB();

$userId = intval($_POST['user_id'] ?? 0);
$token = $_POST['token'] ?? '';
if (!$userId || !$token) { echo json_encode(['error' => 'Auth required']); exit; }

$auth = $db->prepare("SELECT id FROM users WHERE id = ? AND token = ?");
$auth->execute([$userId, $token]);
if (!$auth->fetch()) { echo json_encode(['error' => 'Invalid token']); exit; }

if (!isset($_FILES['photo']) || $_FILES['photo']['error'] !== UPLOAD_ERR_OK) {
    echo json_encode(['error' => 'No file uploaded']); exit;
}

$file = $_FILES['photo'];
$allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);

if (!in_array($mime, $allowed)) {
    echo json_encode(['error' => 'Invalid file type. Use JPG, PNG, WebP or GIF']); exit;
}

if ($file['size'] > 5 * 1024 * 1024) {
    echo json_encode(['error' => 'File too large. Max 5MB']); exit;
}

$uploadDir = __DIR__ . '/../uploads';
if (!is_dir($uploadDir)) { mkdir($uploadDir, 0755, true); }

$ext = ['image/jpeg'=>'jpg','image/png'=>'png','image/webp'=>'webp','image/gif'=>'gif'];
$filename = 'user_' . $userId . '_' . time() . '.' . $ext[$mime];
$filepath = $uploadDir . '/' . $filename;

if (!move_uploaded_file($file['tmp_name'], $filepath)) {
    echo json_encode(['error' => 'Upload failed']); exit;
}

// Delete old photo if local
$old = $db->prepare("SELECT photo FROM users WHERE id = ?");
$old->execute([$userId]);
$oldPhoto = $old->fetchColumn();
if ($oldPhoto && strpos($oldPhoto, 'uploads/') === 0) {
    $oldPath = __DIR__ . '/../' . $oldPhoto;
    if (file_exists($oldPath)) { unlink($oldPath); }
}

$photoUrl = 'uploads/' . $filename;
$db->prepare("UPDATE users SET photo = ? WHERE id = ?")->execute([$photoUrl, $userId]);

echo json_encode(['success' => true, 'photo' => $photoUrl]);
