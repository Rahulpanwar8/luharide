<?php
require_once "config.php";

// ✅ CORS & content headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=utf-8");

// ✅ Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ✅ Get request data
$data = json_decode(file_get_contents("php://input"), true);

$name     = trim($data['name'] ?? '');
$from     = trim($data['from'] ?? '');
$to       = trim($data['to'] ?? '');
$date     = trim($data['date'] ?? '');
$contact  = trim($data['contact'] ?? '');
$vehicle  = trim($data['vehicle'] ?? '');

// ✅ Start SQL query
$sql = "SELECT * FROM rides WHERE 1=1";
$params = [];
$types  = "";

// ✅ Filters
if ($name !== "") {
    $sql .= " AND name LIKE ?";
    $params[] = "%$name%";
    $types   .= "s";
}
if ($from !== "") {
    $sql .= " AND from_place LIKE ?";
    $params[] = "%$from%";
    $types   .= "s";
}
if ($to !== "") {
    $sql .= " AND to_place LIKE ?";
    $params[] = "%$to%";
    $types   .= "s";
}
if ($date !== "") {
    $sql .= " AND ride_date = ?";
    $params[] = $date;
    $types   .= "s";
}
if ($contact !== "") {
    $sql .= " AND contact_number LIKE ?";
    $params[] = "%$contact%";
    $types   .= "s";
}
if ($vehicle !== "") {
    $sql .= " AND vehicle_number LIKE ?";
    $params[] = "%$vehicle%";
    $types   .= "s";
}

// ✅ Prepare and bind
$stmt = $conn->prepare($sql);
if (!empty($params)) {
    $stmt->bind_param($types, ...$params);
}

$stmt->execute();
$res = $stmt->get_result();

$out = [];
while ($row = $res->fetch_assoc()) {
    $out[] = $row;  // This includes contact_number, whatsapp_number, vehicle_number if columns exist
}

// ✅ Output
echo json_encode($out, JSON_UNESCAPED_UNICODE);

// ✅ Cleanup
$stmt->close();
$conn->close();
