// Esperar que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const mensajeError = document.getElementById("mensaje-error");

  // Manejar login real con backend
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const usuario = document.getElementById("usuario").value.trim();
      const clave = document.getElementById("clave").value.trim();

      const formData = new FormData();
      formData.append("usuario", usuario);
      formData.append("clave", clave);

      try {
        const res = await fetch("../../../../controllers/verificar_usuario.php", {
          method: "POST",
          body: formData
        });

        const texto = await res.text();
        console.log("Respuesta:", texto);

        if (texto.includes("✅")) {
          window.location.href = "../user/dashboard-user.html";
        } else {
          mensajeError.textContent = texto;
          mensajeError.hidden = false;
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        mensajeError.textContent = "Error de conexión al servidor.";
        mensajeError.hidden = false;
      }
    });
  }

  // Cargar navbar
  fetch("/Proyecto_PP_Dni_cultural/src/views/pages/public/components/navbar.html")
    .then(response => response.text())
    .then(data => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.innerHTML = data;
        if (window.lucide) lucide.createIcons?.();
      }
    })
    .catch(err => {
      console.error("Error al cargar el navbar:", err);
    });

  // Cargar footer
  fetch("/Proyecto_PP_Dni_cultural/src/views/pages/public/components/footer.html")
    .then(response => response.text())
    .then(data => {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.innerHTML = data;
      }
    })
    .catch(err => {
      console.error("Error al cargar el footer:", err);
    });
});
