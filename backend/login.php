<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

require 'config.php';

// Receber os dados JSON
$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$senha = $data['senha'];

// Buscar usuário no banco
$sql = "SELECT * FROM usuarios WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user && password_verify($senha, $user['senha'])) {
    echo json_encode([
        "mensagem" => "Login bem-sucedido",
        "usuario" => [
            "id" => $user['id'],
            "nome" => $user['nome'],
            "email" => $user['email']
        ]
    ]);
} else {
    echo json_encode(["erro" => "Email ou senha incorretos"]);
}

$conn->close();
?>