<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Blanqueo de Clave - DNI Cultural</title>
  <link rel="stylesheet" href="../../../../static/css/main.css" />
  <link rel="stylesheet" href="../../../../static/css/validacion.css" />

  <style>
    .mensaje {
      margin-top: 15px;
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
    <h2>Blanqueo de Clave (Administrador)</h2>
    <form id="blanqueoForm">
      <label for="email">Correo del Usuario a Blanquear:</label><br>
      <input type="email" id="email" required><br><br>
      <input type="submit" value="Blanquear Clave">
    </form>
    <p id="mensaje" class="mensaje"></p>
  </main>

 <script src="/static/js/main.js"></script>
  <div id="footer-container"></div>

  <script>
    document.getElementById("blanqueoForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const correo = document.getElementById("email").value;
      const mensaje = document.getElementById("mensaje");

      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      const index = usuarios.findIndex(u => u.correo === correo);

      if (index !== -1) {
        usuarios[index].clave = "1234";
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        mensaje.textContent = `✅ La clave del usuario ${correo} fue blanqueada. La nueva contraseña es: 1234`;
        mensaje.className = "mensaje exito";
      } else {
        mensaje.textContent = `❌ No se encontró el usuario con el correo: ${correo}`;
        mensaje.className = "mensaje error";
      }
    });
  </script>

  
</body>
</html>
