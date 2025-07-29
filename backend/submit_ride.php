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

$data = json_decode(file_get_contents("php://input"), true);

$name     = trim($data['name'] ?? '');
$contact  = trim($data['contact'] ?? '');
$whatsapp = trim($data['whatsapp'] ?? '');
$vehicle  = trim($data['vehicle'] ?? '');
$from     = trim($data['from'] ?? '');
$to       = trim($data['to'] ?? '');
$date     = trim($data['date'] ?? '');
$time     = trim($data['time'] ?? '');

if (!$name || !$contact || !$vehicle || !$from || !$to || !$date || !$time) {
    http_response_code(400);
    echo json_encode(["message" => "All required fields must be filled."]);
    exit;
}

$sql = "INSERT INTO rides 
        (name, contact_number, whatsapp_number, vehicle_number, from_place, to_place, ride_date, ride_time) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param(
    "ssssssss",
    $name, $contact, $whatsapp, $vehicle, $from, $to, $date, $time
);

if ($stmt->execute()) {
    echo json_encode(["message" => "Ride added successfully", "id" => $stmt->insert_id]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Insert failed: " . $stmt->error]);
}

$stmt->close();
$conn->close();
