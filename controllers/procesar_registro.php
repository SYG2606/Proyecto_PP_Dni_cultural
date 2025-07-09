<?php
require_once __DIR__ . '/../database/db.php';
require_once __DIR__ . '/../models/Usuario.php';

$usuario = new Usuario($db);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // VALIDACIÓN BÁSICA
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $confirmarEmail = filter_var(trim($_POST["confirmarEmail"]), FILTER_SANITIZE_EMAIL);
    $password = $_POST["password"];
    $confirmarPassword = $_POST["confirmarPassword"];

    if ($email !== $confirmarEmail || $password !== $confirmarPassword) {
        echo "❌ El correo o la contraseña no coinciden.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "❌ El correo no es válido.";
        exit;
    }

    if (strlen($password) < 8) {
        echo "❌ La contraseña debe tener al menos 8 caracteres.";
        exit;
    }

    if ($usuario->emailExiste($email)) {
        echo "⚠️ El correo ya está registrado.";
        exit;
    }

    // SANITIZACIÓN
    $datos = [
        'nombre' => htmlspecialchars(trim($_POST["nombre"])),
        'apellido' => htmlspecialchars(trim($_POST["apellido"])),
        'fecha_nacimiento' => $_POST["fechaNacimiento"],
        'genero' => htmlspecialchars(trim($_POST["genero"])),
        'pais' => htmlspecialchars(trim($_POST["pais"])),
        'provincia' => htmlspecialchars(trim($_POST["provincia"])),
        'municipio' => htmlspecialchars(trim($_POST["municipio"])),
        'email' => $email,
        'password' => password_hash($password, PASSWORD_DEFAULT) 
    ];

    if ($usuario->registrar($datos)) {
        echo "✅ Registro exitoso";
    } else {
        echo "❌ Hubo un error al registrar el usuario.";
    }
}
?>
