<?php
require_once(__DIR__ . '/../models/Usuario.php');
require_once(__DIR__ . '/../../src/config/conexion.php');
$db = require(__DIR__ . '/../../src/config/conexion.php');

class AuthController {
    private $usuario;

    public function __construct($conexion) {
        $this->usuario = new Usuario($conexion);
    }

    public function registrar($post) {
        if (
            empty($post['email']) || empty($post['password']) ||
            $post['email'] !== $post['confirmarEmail'] ||
            $post['password'] !== $post['confirmarPassword']
        ) {
            throw new Exception("Validación fallida. Revisá los campos.");
        }
        // Si el rol no está presente, se asigna por defecto en el modelo
        return $this->usuario->registrar($post);
    }
}