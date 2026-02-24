<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

require_once __DIR__ . '/init-db.php';
$db = getDB();

// Ensure messages table exists
$db->exec("CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    match_id INTEGER NOT NULL,
    sender_id INTEGER NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Get messages for a match
    $userId = intval($_GET['user_id'] ?? 0);
    $matchId = intval($_GET['match_id'] ?? 0);
    $token = $_GET['token'] ?? '';
    $after = intval($_GET['after'] ?? 0);

    if (!$userId || !$matchId || !$token) {
        echo json_encode(['error' => 'Missing params']); exit;
    }

    $auth = $db->prepare("SELECT id FROM users WHERE id = ? AND token = ?");
    $auth->execute([$userId, $token]);
    if (!$auth->fetch()) { echo json_encode(['error' => 'Invalid token']); exit; }

    // Verify user belongs to this match
    $mc = $db->prepare("SELECT id FROM matches WHERE id = ? AND (user1_id = ? OR user2_id = ?)");
    $mc->execute([$matchId, $userId, $userId]);
    if (!$mc->fetch()) { echo json_encode(['error' => 'Not your match']); exit; }

    $stmt = $db->prepare("SELECT id, sender_id, message, created_at FROM messages WHERE match_id = ? AND id > ? ORDER BY id ASC");
    $stmt->execute([$matchId, $after]);
    $msgs = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(['messages' => $msgs]);
}
elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Send a message
    $input = json_decode(file_get_contents('php://input'), true);
    $userId = intval($input['user_id'] ?? 0);
    $matchId = intval($input['match_id'] ?? 0);
    $message = trim($input['message'] ?? '');
    $token = $input['token'] ?? '';

    if (!$userId || !$matchId || !$message || !$token) {
        echo json_encode(['error' => 'Missing data']); exit;
    }

    $auth = $db->prepare("SELECT id FROM users WHERE id = ? AND token = ?");
    $auth->execute([$userId, $token]);
    if (!$auth->fetch()) { echo json_encode(['error' => 'Invalid token']); exit; }

    $mc = $db->prepare("SELECT id FROM matches WHERE id = ? AND (user1_id = ? OR user2_id = ?)");
    $mc->execute([$matchId, $userId, $userId]);
    if (!$mc->fetch()) { echo json_encode(['error' => 'Not your match']); exit; }

    $stmt = $db->prepare("INSERT INTO messages (match_id, sender_id, message) VALUES (?, ?, ?)");
    $stmt->execute([$matchId, $userId, $message]);

    echo json_encode(['success' => true, 'id' => $db->lastInsertId()]);
}
