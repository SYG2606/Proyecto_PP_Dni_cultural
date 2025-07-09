<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>DNI Cultural</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <!-- <link rel="stylesheet" href="/static/css/main.css" /> -->
  <link rel="stylesheet" href="/Proyecto_PP_Dni_cultural/static/css/main.css" />

</head>

<body>

  <!-- <div id="navbar"></div> -->
<?php include __DIR__ . '/src/views/pages/public/components/navbar.php'; ?>
  <main>
    <section class="hero">
      <div class="hero-text">
        <h1>Bienvenidos a ID Cultural</h1>

        <p><strong>ID Cultural</strong> es una plataforma digital dedicada a visibilizar, preservar y promover la
          identidad artística y cultural de Santiago del Estero. Nuestro objetivo es ofrecer un espacio accesible y
          confiable donde se registre, documente y difunda la trayectoria de artistas locales, tanto actuales como
          históricos.</p>

        <h2>¿Qué podés hacer en ID Cultural?</h2>
        <ul>
          <li>Buscar artistas por nombre, disciplina, género o localidad.</li>
          <li>Explorar obras y eventos pasados.</li>
          <li>Acceder a una biblioteca digital con recursos culturales.</li>
          <li>Conocer estadísticas que promueven la igualdad y diversidad cultural.</li>
        </ul>

        <p>Te invitamos a explorar, descubrir y formar parte de este espacio pensado para fortalecer nuestras raíces
          culturales y proyectarlas hacia el futuro.</p>

        <p><em>ID Cultural — La identidad de un pueblo, en un solo lugar.</em></p>

      </div>
      <div class="hero-image">
        <picture>
          <source srcset="/Proyecto_PP_Dni_cultural/static/img/logo.jpg" type="image">
          <img src="/Proyecto_PP_Dni_cultural/static/img/logo.jpg" alt="Casa Castro" />
        </picture>
      </div>
    </section>
  </main>

  <!-- <div id="footer"></div> -->
<?php include __DIR__ . '/src/views/pages/public/components/footer.html'; ?>
  <script src="https://unpkg.com/lucide@latest"></script>
  <script src="/Proyecto_PP_Dni_cultural/static/js/navbar.js"></script>
  <script src="/Proyecto_PP_Dni_cultural/static/js/main.js"></script>

</body>

</html>