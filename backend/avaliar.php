<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

require 'config.php';

// Receber os dados JSON
$data = json_decode(file_get_contents("php://input"), true);

$id_usuario = $data['id_usuario'];
$id_bairro = $data['id_bairro'];
$nota = $data['nota'];
$comentario = $data['comentario'];

// Inserir no banco
$sql = "INSERT INTO avaliacoes (id_usuario, id_bairro, nota, comentario) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("iiis", $id_usuario, $id_bairro, $nota, $comentario);

if ($stmt->execute()) {
    echo json_encode(["mensagem" => "Avaliação enviada com sucesso"]);
} else {
    echo json_encode(["erro" => "Erro ao enviar avaliação: " . $stmt->error]);
}

$conn->close();
?>
