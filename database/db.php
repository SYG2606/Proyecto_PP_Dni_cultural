<?php
try {
    $db = new PDO("sqlite:" . __DIR__ . "/usuarios.db");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Crear tabla de usuarios
    $db->exec("CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        apellido TEXT NOT NULL,
        fecha_nacimiento TEXT NOT NULL,
        genero TEXT NOT NULL,
        pais TEXT NOT NULL,
        provincia TEXT NOT NULL,
        municipio TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )");

    // Crear tabla de intereses asociados a usuarios
    $db->exec("CREATE TABLE IF NOT EXISTS intereses_usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario_id INTEGER NOT NULL,
        interes TEXT NOT NULL,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    )");

} catch (PDOException $e) {
    error_log("DB Error: " . $e->getMessage()); // lo guarda en el log
    echo "Error interno del servidor.";
    exit;
}
?>