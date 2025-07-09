<?php require_once(__DIR__ . '/../../../config/conexion.php'); ?>
<header class="navbar">
  <div class="logo">
  <img src="/Proyecto_PP_Dni_cultural/static/img/SANTAGO-DEL-ESTERO-2022.svg" alt="Logo" />
  </div>
  <h1 class="title">ID Cultural</h1>
  <nav class="animate__animated animate__fadeInDown">
    <ul>
      <li><a class="menu" href="/Proyecto_PP_Dni_cultural/Index.html" class="menu">
        <i data-lucide="house"></i> Inicio</a>
    </li>
<!--      <li><a class="menu" href="/src/views/pages/public/busqueda.html">Explorar Artistas</a></li>-->
      <!-- <li><a class="menu" href="/Proyecto_PP_Dni_cultural/src/views/pages/public/wiki.php">Wiki de artistas</a></li> -->
      <li><a href="<?= BASE_URL ?>/src/views/pages/public/wiki.php">Wiki de artistas</a></li>
      <!-- <li><a class="menu" href="/Proyecto_PP_Dni_cultural/src/views/pages/auth/login.php">Iniciar Sesion</a></li> -->
      <li><a href="<?= BASE_URL ?>/src/views/pages/auth/login.php">Iniciar Sesion</a></li>
      <!-- <li><a class="btn" href="/Proyecto_PP_Dni_cultural/src/views/pages/auth/registro.php">Crear cuenta</a></li> -->
      <li><a href="<?= BASE_URL ?>/src/views/pages/auth/registro.php">Crear cuenta</a></li>
    </ul>
  </nav>
  <script>
    lucide.createIcons();
  </script>

</header>
