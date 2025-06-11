async function includeHTML(id, file) {
    const el = document.getElementById(id);
    if (el) {
      const res = await fetch(file);
      const html = await res.text();
      el.innerHTML = html;
    }
  }

  includeHTML("navbar", "/src/views/pages/public/components/navbar.html");
  includeHTML("footer", "/src/views/pages/public/components/footer.html");
  
  
  
// Lógica del formulario de login
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const errorMsg = document.getElementById("mensaje-error");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que recargue la página

    const usuario = document.getElementById("usuario").value.trim();
    const clave = document.getElementById("clave").value.trim();

    // Validación simulada
    if (usuario === "admin" && clave === "1234") {
      // Redirige al dashboard
      window.location.href = "/src/views/pages/user/dashboard-usuario.html";
    } else {
      // Muestra mensaje de error
      errorMsg.style.display = "block";
    }
  });
});
