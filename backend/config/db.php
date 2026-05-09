<?php
$host = "sql304.infinityfree.com";
$username = "if0_41876637";
$password = "03BeecWM34VSLk";
$database = "if0_41876637_broadband_system";




$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}
?>