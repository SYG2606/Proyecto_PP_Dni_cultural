<?php
require 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Captura de campos
    $nombre = trim($_POST["nombre"]);
    $apellido = trim($_POST["apellido"]);
    $fechaNacimiento = trim($_POST["fechaNacimiento"]);
    $genero = $_POST["genero"];
    $pais = $_POST["pais"];
    $provincia = $_POST["provincia"];
    $municipio = $_POST["municipio"];
    $email = trim($_POST["email"]);
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);
    $intereses = isset($_POST["intereses"]) ? implode(",", $_POST["intereses"]) : "";

    // Validación básica
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("❌ Correo inválido.");
    }

    try {
        $stmt = $conn->prepare("INSERT INTO usuarios (
            nombre, apellido, fechaNacimiento, genero, pais, provincia, municipio,
            email, password, intereses
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

        $stmt->execute([
            $nombre, $apellido, $fechaNacimiento, $genero, $pais, $provincia,
            $municipio, $email, $password, $intereses
        ]);

        // ✅ CAMBIO CLAVE: redireccionar al segundo paso
        header("Location: /Proyecto_PP_Dni_cultural/src/views/pages/auth/registro.html?paso=2");

        exit();

    } catch (PDOException $e) {
        die("❌ Error al registrar: " . $e->getMessage());
    }
}
?>

