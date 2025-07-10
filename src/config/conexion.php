<?php
define('BASE_URL', '/Proyecto_PP_Dni_cultural');

// Cambia la ruta para que apunte a la carpeta database en la raíz del proyecto
$dbPath = dirname(__DIR__, 2) . '/database/usuarios.db';
$databaseDir = dirname($dbPath);

echo "Ruta de la base de datos: $dbPath<br>";
echo "Directorio de la base de datos: $databaseDir<br>";

if (!is_dir($databaseDir)) {
    die('Error: El directorio de la base de datos no existe.');
}
if (!is_writable($databaseDir)) {
    die('Error: El directorio de la base de datos no tiene permisos de escritura.');
}

$crear = !file_exists($dbPath);

try {
    $db = new PDO("sqlite:" . $dbPath);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('Error al conectar con la base de datos: ' . $e->getMessage());
}

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
    );");
}
return $db;