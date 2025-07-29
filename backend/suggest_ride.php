<?php
require_once "config.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$input  = json_decode(file_get_contents("php://input"), true);
$search = trim($input['search'] ?? '');
$field  = trim($input['field'] ?? 'from_place');

// Allow only safe columns
$allowed_fields = ['from_place', 'to_place', 'name', 'vehicle_number']; // <- vehicle भी allow कर दिया
if (!in_array($field, $allowed_fields, true)) {
    echo json_encode([]);
    exit;
}

if ($search === '' || mb_strlen($search) < 2) {
    echo json_encode([]);
    exit;
}

$conn->set_charset('utf8mb4');

$sql = "SELECT DISTINCT $field AS v 
        FROM rides 
        WHERE $field LIKE CONCAT(?, '%')
        ORDER BY v 
        LIMIT 8";

$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $search);
$stmt->execute();
$res = $stmt->get_result();

$out = [];
while ($row = $res->fetch_assoc()) {
    $out[] = $row['v'];
}

echo json_encode($out, JSON_UNESCAPED_UNICODE);

$stmt->close();
$conn->close();
