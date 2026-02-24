<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

require_once __DIR__ . '/init-db.php';
$db = getDB();
ensureColumns($db);

$userId = intval($_GET['user_id'] ?? 0);
$token = $_GET['token'] ?? '';
if (!$userId || !$token) { echo json_encode(['error'=>'Auth required']); exit; }

$auth = $db->prepare("SELECT id FROM users WHERE id = ? AND token = ?");
$auth->execute([$userId, $token]);
if (!$auth->fetch()) { echo json_encode(['error'=>'Invalid token']); exit; }

$stmt = $db->prepare("
    SELECT m.id as match_id, u.id, u.name, u.age, u.country, u.denomination, u.bio, u.photo
    FROM matches m
    JOIN users u ON (
        (m.user1_id = ? AND u.id = m.user2_id) OR
        (m.user2_id = ? AND u.id = m.user1_id)
    )
    ORDER BY m.created_at DESC
");
$stmt->execute([$userId, $userId]);
$matches = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['matches' => $matches]);
