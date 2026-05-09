<?php
include("../config/db.php");

$data = json_decode(file_get_contents("php://input"), true);

// Check if data received
if (!$data) {
    echo json_encode([
        "status" => "error",
        "message" => "No data received"
    ]);
    exit;
}

$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);

// Check if email exists
$check = "SELECT * FROM users WHERE email='$email'";
$result = mysqli_query($conn, $check);

if (mysqli_num_rows($result) > 0) {
    echo json_encode(["status" => "error", "message" => "Email already exists"]);
    exit;
}

// Insert user
$query = "INSERT INTO users (name, email, phone, password, status) 
          VALUES ('$name', '$email', '$phone', '$password', 'inactive')";

if (mysqli_query($conn, $query)) {
    echo json_encode(["status" => "success", "message" => "User registered"]);
} else {
    echo json_encode(["status" => "error", "message" => "Registration failed"]);
}
?>