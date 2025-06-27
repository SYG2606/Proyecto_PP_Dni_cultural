<?php
$db = new PDO('sqlite:database.sqlite');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    fechaNacimiento TEXT,
    genero TEXT,
    pais TEXT,
    provincia TEXT,
    municipio TEXT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    intereses TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

$db->exec($query);

echo "✅ Base de datos y tabla 'usuarios' creadas correctamente.";
?>
