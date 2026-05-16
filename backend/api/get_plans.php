<?php

$allowedOrigins = [
    "https://ekasit-tech.vercel.app",
    "http://localhost:8080"
];

$origin = $_SERVER["HTTP_ORIGIN"] ?? "";

if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: " . $origin);
    header("Vary: Origin");
}

header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Access-Control-Max-Age: 86400");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit(0);
}

if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

include("../config/db.php");

$query = "
SELECT 
    p.id,
    p.speed,
    pp.duration,
    pp.price,
    pp.info1,
    pp.info2
FROM plans p
JOIN plan_prices pp ON p.id = pp.plan_id
ORDER BY p.id
";

$result = mysqli_query($conn, $query);

if (!$result) {
    http_response_code(500);
    echo json_encode(["error" => "Unable to load plans"]);
    exit;
}

$plans = [];

while ($row = mysqli_fetch_assoc($result)) {
    $planId = $row['id'];

    if (!isset($plans[$planId])) {
        $plans[$planId] = [
            "speed" => $row['speed'] . " Mbps",
            "info1" => $row['info1'],
            "info2" => $row['info2'],
            "features" => [],
            "price" => []
        ];
    }

    $plans[$planId]["features"][] = $row['duration'];
    $plans[$planId]["price"][] = $row['price'];
}

echo json_encode(array_values($plans));

?>
