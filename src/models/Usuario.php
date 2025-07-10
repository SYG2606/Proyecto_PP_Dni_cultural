<?php
class Usuario {
    private $db;

    public function __construct($conexion) {
        $this->db = $conexion;
    }

    public function registrar($datos) {
        $stmt = $this->db->prepare("
            INSERT INTO usuarios (
                nombre, apellido, fecha_nacimiento, genero,
                pais, provincia, municipio, email, password, rol
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ");

        return $stmt->execute([
            trim($datos['nombre']),
            trim($datos['apellido']),
            $datos['fechaNacimiento'],
            $datos['genero'],
            $datos['pais'],
            $datos['provincia'],
            $datos['municipio'],
            trim($datos['email']),
            password_hash($datos['password'], PASSWORD_DEFAULT),
            isset($datos['rol']) ? $datos['rol'] : 'usuario'
        ]);
    }

    public function actualizarRol($usuarioId, $nuevoRol) {
        $stmt = $this->db->prepare("UPDATE usuarios SET rol = ? WHERE id = ?");
        return $stmt->execute([$nuevoRol, $usuarioId]);
    }
}