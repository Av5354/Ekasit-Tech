<?php
include("../config/db.php");

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$password = $data['password'];

$query = "SELECT * FROM users WHERE email='$email'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) == 0) {
    echo json_encode(["status" => "error", "message" => "User not found"]);
    exit;
}

$user = mysqli_fetch_assoc($result);

// Verify password
if (password_verify($password, $user['password'])) {
    echo json_encode([
        "status" => "success",
        "message" => "Login successful",
        "user" => $user
    ]);
} else {
    echo json_encode(["status" => "error", "message" => "Wrong password"]);
}
?>