<?php
$host = 'localhost';
$db = 'avaliador_bairros';
$user = 'root';
$pass = ''; // deixe em branco se não colocou senha no MySQL

$conn = new mysqli($host, $user, $pass, $db);

// Testar conexão
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}
?>
