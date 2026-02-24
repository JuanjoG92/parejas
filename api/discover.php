<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

require_once __DIR__ . '/init-db.php';
$db = getDB();

$userId = intval($_GET['user_id'] ?? 0);
$token = $_GET['token'] ?? '';
if (!$userId || !$token) { echo json_encode(['error'=>'Auth required']); exit; }

$auth = $db->prepare("SELECT id, gender FROM users WHERE id = ? AND token = ?");
$auth->execute([$userId, $token]);
$user = $auth->fetch(PDO::FETCH_ASSOC);
if (!$user) { echo json_encode(['error'=>'Invalid token']); exit; }

// Get profiles: opposite gender, not self, not already liked/passed
$opposite = $user['gender'] === 'male' ? 'female' : 'male';

$where = "id != ? AND gender = ? AND id NOT IN (SELECT target_id FROM likes WHERE user_id = ?)";
$params = [$userId, $opposite, $userId];

// Optional filters
$country = $_GET['country'] ?? '';
if ($country) { $where .= " AND country = ?"; $params[] = $country; }

$ageMin = intval($_GET['age_min'] ?? 0);
if ($ageMin > 0) { $where .= " AND age >= ?"; $params[] = $ageMin; }

$ageMax = intval($_GET['age_max'] ?? 0);
if ($ageMax > 0) { $where .= " AND age <= ?"; $params[] = $ageMax; }

$denom = $_GET['denomination'] ?? '';
if ($denom) { $where .= " AND denomination = ?"; $params[] = $denom; }

$stmt = $db->prepare("
    SELECT id, name, age, country, denomination, bio, photo
    FROM users
    WHERE $where
    ORDER BY RANDOM()
    LIMIT 20
");
$stmt->execute($params);
$profiles = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['profiles' => $profiles]);
