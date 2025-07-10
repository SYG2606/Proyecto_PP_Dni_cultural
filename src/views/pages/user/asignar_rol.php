<?php
session_start();
require_once(__DIR__ . '/../../../config/conexion.php');
require_once(__DIR__ . '/../../../models/Usuario.php');

// Solo superusuario puede acceder
if (!isset($_SESSION['rol']) || $_SESSION['rol'] !== 'superusuario') {
    echo "Acceso denegado.";
    exit;
}

$usuarioModel = new Usuario($db); // Cambiado de $conexion a $db

// Actualizar rol si se envió el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['usuario_id'], $_POST['nuevo_rol'])) {
    $usuarioModel->actualizarRol($_POST['usuario_id'], $_POST['nuevo_rol']);
    echo "<p>Rol actualizado correctamente.</p>";
}

// Obtener lista de usuarios
$stmt = $db->query("SELECT id, nombre, apellido, email, rol FROM usuarios"); // Cambiado de $conexion a $db
$usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Asignar Rol a Usuarios</title>
</head>
<body>
    <h1>Asignar Rol a Usuarios</h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol Actual</th>
            <th>Nuevo Rol</th>
            <th>Acción</th>
        </tr>
        <?php foreach ($usuarios as $usuario): ?>
        <tr>
            <form method="post">
                <td><?= htmlspecialchars($usuario['id']) ?></td>
                <td><?= htmlspecialchars($usuario['nombre'] . ' ' . $usuario['apellido']) ?></td>
                <td><?= htmlspecialchars($usuario['email']) ?></td>
                <td><?= htmlspecialchars($usuario['rol']) ?></td>
                <td>
                    <select name="nuevo_rol">
                        <option value="usuario" <?= $usuario['rol'] === 'usuario' ? 'selected' : '' ?>>Usuario</option>
                        <option value="validador" <?= $usuario['rol'] === 'validador' ? 'selected' : '' ?>>Validador</option>
                        <option value="administrador" <?= $usuario['rol'] === 'administrador' ? 'selected' : '' ?>>Administrador</option>
                        <option value="superusuario" <?= $usuario['rol'] === 'superusuario' ? 'selected' : '' ?>>Superusuario</option>
                    </select>
                </td>
                <td>
                    <input type="hidden" name="usuario_id" value="<?= htmlspecialchars($usuario['id']) ?>">
                    <button type="submit">Actualizar</button>
                </td>
            </form>
        </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>
