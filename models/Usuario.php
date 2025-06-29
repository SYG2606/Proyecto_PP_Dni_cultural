<?php
class Usuario
{
    private $db;

    public function __construct($conexion)
    {
        $this->db = $conexion;
    }

    public function emailExiste($email)
    {
        $stmt = $this->db->prepare("SELECT COUNT(*) FROM usuarios WHERE email = ?");
        $stmt->execute([$email]);
        return $stmt->fetchColumn() > 0;
    }

    public function registrar($datos)
    {
        $sql = "INSERT INTO usuarios (
            nombre, apellido, fecha_nacimiento, genero,
            pais, provincia, municipio, email, password)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            $datos['nombre'],
            $datos['apellido'],
            $datos['fecha_nacimiento'],
            $datos['genero'],
            $datos['pais'],
            $datos['provincia'],
            $datos['municipio'],
            $datos['email'],
            password_hash($datos['password'], PASSWORD_DEFAULT)
        ]);
    }
}
?>