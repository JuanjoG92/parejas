<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

require_once __DIR__ . '/init-db.php';
$db = getDB();
ensureColumns($db);
$input = json_decode(file_get_contents('php://input'), true);

$userId = intval($input['user_id'] ?? 0);
$token = $input['token'] ?? '';
if (!$userId || !$token) { echo json_encode(['error'=>'Auth required']); exit; }

$auth = $db->prepare("SELECT id FROM users WHERE id = ? AND token = ?");
$auth->execute([$userId, $token]);
if (!$auth->fetch()) { echo json_encode(['error'=>'Invalid token']); exit; }

$stmt = $db->prepare("UPDATE users SET name=?, bio=?, looking_for=?, denomination=?, country=?, traits=?, sports=?, activities=? WHERE id=?");
$stmt->execute([
    $input['name'] ?? '',
    $input['bio'] ?? '',
    $input['looking_for'] ?? '',
    $input['denomination'] ?? '',
    $input['country'] ?? '',
    $input['traits'] ?? '',
    $input['sports'] ?? '',
    $input['activities'] ?? '',
    $userId
]);

echo json_encode(['success' => true]);
