<?php
// Evita que erros ou espaços sejam enviados antes do JSON
ob_start();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require 'config.php';

// Verifica se foi enviado o ID do bairro
if (!isset($_GET['bairro_id'])) {
    echo json_encode(["erro" => "ID do bairro não informado"]);
    exit;
}

$id_bairro = intval($_GET['bairro_id']);

$sql = "SELECT a.id, a.nota, a.comentario, a.data, u.nome AS usuario
        FROM avaliacoes a
        JOIN usuarios u ON a.id_usuario = u.id
        WHERE a.id_bairro = ?
        ORDER BY a.data DESC";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id_bairro);
$stmt->execute();

$result = $stmt->get_result();

$avaliacoes = [];

while ($row = $result->fetch_assoc()) {
    $avaliacoes[] = $row;
}

echo json_encode($avaliacoes);

$conn->close();
// Limpa qualquer saída inesperada
ob_end_flush();
?>