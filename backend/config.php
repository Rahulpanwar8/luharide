<?php
$host = "localhost";
$username = "newlight_rahul_user";
$password = "R@#ul1078";
$database = "newlight_ride_app";

$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
