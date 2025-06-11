<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Cambio de Clave - DNI Cultural</title>
  <link rel="stylesheet" href="../../../../static/css/main.css" />
  <link rel="stylesheet" href="../../../../static/css/validacion.css" />
  <style>
    .mensaje {
      margin-top: 10px;
      font-weight: bold;
    }
    .exito {
      color: green;
    }
    .error {
      color: red;
    }
  </style>
</head>
<body>
  <header>
   <div class="logo">
    <img src="/static/img/SANTAGO-DEL-ESTERO-2022.svg" alt="Logo Santiago del Estero">
  </div>
    <nav>
      <ul>
        <li><a class="menu" href="../user/dashboard-usuario.html">Volver</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Cambiar Clave</h2>
    <form id="cambiarClaveForm">
      <label for="correo">Correo:</label><br>
      <input type="email" id="correo" required><br>
      <label for="nuevaClave">Nueva Clave:</label><br>
      <input type="password" id="nuevaClave" required><br><br>
      <input type="submit" value="Cambiar Clave">
    </form>
    <p id="mensaje" class="mensaje"></p>
  </main>



  <script>
    document.getElementById("cambiarClaveForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const correo = document.getElementById("correo").value;
      const nuevaClave = document.getElementById("nuevaClave").value;
      const mensaje = document.getElementById("mensaje");

      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      const index = usuarios.findIndex(u => u.correo === correo);

      if (index !== -1) {
        usuarios[index].clave = nuevaClave;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        mensaje.textContent = "✅ La clave fue actualizada correctamente.";
        mensaje.className = "mensaje exito";
      } else {
        mensaje.textContent = "❌ No se encontró un usuario con ese correo.";
        mensaje.className = "mensaje error";
      }
    });
  </script>

   <script src="/static/js/main.js"></script>
  <div id="footer-container"></div>

</body>
</html>
