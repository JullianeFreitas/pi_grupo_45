<?php
// Evita que erros ou espaços sejam enviados antes do JSON
ob_start();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require 'config.php';

$sql = "SELECT * FROM bairros";
$result = $conn->query($sql);

$bairros = [];

while ($row = $result->fetch_assoc()) {
    $bairros[] = $row;
}

echo json_encode($bairros);

$conn->close();
// Limpa qualquer saída inesperada
ob_end_flush();
?>