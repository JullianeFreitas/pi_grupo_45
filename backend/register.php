<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

require 'config.php';

$data = json_decode(file_get_contents("php://input"), true);

$nome = $data['nome'];
$email = $data['email'];
$senha = password_hash($data['senha'], PASSWORD_DEFAULT);

// Verifica se o email já está cadastrado
$sql_check = "SELECT id FROM usuarios WHERE email = ?";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bind_param("s", $email);
$stmt_check->execute();
$stmt_check->store_result();

if ($stmt_check->num_rows > 0) {
    echo json_encode(["erro" => "E-mail já cadastrado"]);
    $stmt_check->close();
    $conn->close();
    exit;
}
$stmt_check->close();

// Inserir novo usuário
$sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nome, $email, $senha);

if ($stmt->execute()) {
    echo json_encode(["mensagem" => "Usuário cadastrado com sucesso"]);
} else {
    echo json_encode(["erro" => "Erro ao cadastrar: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>