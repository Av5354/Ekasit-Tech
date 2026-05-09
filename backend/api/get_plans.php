<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}
$conn = new mysqli("localhost", "root", "", "broadband_system");

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

$result = $conn->query($query);

$plans = [];

while ($row = $result->fetch_assoc()) {
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