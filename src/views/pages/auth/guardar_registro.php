<?php
require_once(__DIR__ . '/../../../config/conexion.php');
$db = require(__DIR__ . '/../../../config/conexion.php');
require_once(__DIR__ . '/../../../../../controllers/AuthController.php');
try {
    $auth = new AuthController($db);
    $auth->registrar($_POST);
    header("Location: ../views/resultado.php?ok=1");
    exit;
} catch (Exception $e) {
    echo "❌ Error: " . htmlspecialchars($e->getMessage());
}