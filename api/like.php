<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

require_once __DIR__ . '/init-db.php';
$db = getDB();
$input = json_decode(file_get_contents('php://input'), true);

$userId = intval($input['user_id'] ?? 0);
$targetId = intval($input['target_id'] ?? 0);
$action = $input['action'] ?? 'like';
$token = $input['token'] ?? '';

if (!$userId || !$targetId || !$token) { echo json_encode(['error'=>'Missing data']); exit; }

$auth = $db->prepare("SELECT id FROM users WHERE id = ? AND token = ?");
$auth->execute([$userId, $token]);
if (!$auth->fetch()) { echo json_encode(['error'=>'Invalid token']); exit; }

// Record the action
$stmt = $db->prepare("INSERT OR REPLACE INTO likes (user_id, target_id, action) VALUES (?, ?, ?)");
$stmt->execute([$userId, $targetId, $action]);

$isMatch = false;
if ($action === 'like' || $action === 'superlike') {
    // Check if target also liked this user
    $check = $db->prepare("SELECT id FROM likes WHERE user_id = ? AND target_id = ? AND action IN ('like','superlike')");
    $check->execute([$targetId, $userId]);
    if ($check->fetch()) {
        // It's a match!
        $isMatch = true;
        $u1 = min($userId, $targetId);
        $u2 = max($userId, $targetId);
        $db->prepare("INSERT OR IGNORE INTO matches (user1_id, user2_id) VALUES (?, ?)")->execute([$u1, $u2]);
    }
}

echo json_encode(['success' => true, 'match' => $isMatch]);
