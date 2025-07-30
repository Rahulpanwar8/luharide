<?php
// ✅ Step 1: Set timezone (optional but good practice)
date_default_timezone_set('Asia/Kolkata');

// ✅ Step 2: DB Connection
$host = "localhost";
$username = "newlight_rahul_user";
$password = "R@#ul1078";
$database = "newlight_ride_app";

$conn = new mysqli($host, $username, $password, $database);

// ✅ Step 3: Error handling
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
    exit;
}

// ✅ Step 4: Today's Date
$today = date('Y-m-d');

// ✅ Step 5: Prepare statement securely
$sql = "DELETE FROM rides WHERE ride_date < ?";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    http_response_code(500);
    echo json_encode(["error" => "Prepare failed: " . $conn->error]);
    exit;
}

$stmt->bind_param("s", $today);

// ✅ Step 6: Execute and respond
header('Content-Type: application/json');

if ($stmt->execute()) {
    echo json_encode(["message" => "✅ Old rides deleted successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "❌ Failed: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
