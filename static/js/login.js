// Esperar que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  // Manejar login
  const form = document.getElementById("loginForm");
  const mensajeError = document.getElementById("mensaje-error");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const usuario = document.getElementById("usuario").value.trim();
      const clave = document.getElementById("clave").value.trim();

      if (usuario === "admin" && clave === "1234") {
        window.location.href = "/user/dashboard-usuario.html";
      } else {
        mensajeError.style.display = "block";
      }
    });
  }

  // Cargar dinámicamente el navbar
  fetch("/componentes/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(err => {
      console.error("Error al cargar el navbar:", err);
    });

  // Cargar dinámicamente el footer
  fetch("/componentes/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => {
      console.error("Error al cargar el footer:", err);
    });
});
