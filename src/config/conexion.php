<?php
define('BASE_URL', '/Proyecto_PP_Dni_cultural');

$dbPath = __DIR__ . '/../database/usuarios.db';
$crear = !file_exists($dbPath);

$db = new PDO("sqlite:" . $dbPath);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if ($crear) {
    $db->exec("CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        apellido TEXT NOT NULL,
        fecha_nacimiento TEXT NOT NULL,
        genero TEXT NOT NULL,
        pais TEXT NOT NULL,
        provincia TEXT NOT NULL,
        municipio TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        intereses TEXT
    )");
}
return $db;