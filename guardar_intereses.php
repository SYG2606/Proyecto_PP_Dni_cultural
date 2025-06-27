<?php
require 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $intereses = $_POST["intereses"];
    $email = 'usuario@ejemplo.com'; // Tenés que pasar el email por sesión u otro medio

    $stmt = $conn->prepare("UPDATE usuarios SET intereses = ? WHERE email = ?");
    $stmt->execute([$intereses, $email]);

    echo "ok";
}
?>
