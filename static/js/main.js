// Función para incluir contenido HTML externo en un elemento con un ID específico
async function includeHTML(id, file) {
  const el = document.getElementById(id);
  if (el) {
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error("No se pudo cargar el archivo: " + file);
      const html = await res.text();
      el.innerHTML = html;
    } catch (error) {
      console.error("Error al incluir HTML:", error);
    }
  }
}

// Cuando el DOM esté listo, se carga el footer y otros componentes
document.addEventListener("DOMContentLoaded", () => {
  includeHTML("footer-container", "/src/views/pages/public/components/footer.html");

  // Si querés usar también un navbar, descomentá la siguiente línea:
  // includeHTML("navbar-container", "/src/views/pages/public/components/navbar.html");
});

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

    const usuario = document.getElementById("usuario").value.trim().toLowerCase();
    const clave = document.getElementById("clave").value.trim();

    // Validación de usuarios
    if (usuario === "admin" && clave === "1234") {
      localStorage.setItem("usuarioActivo", "admin");
      window.location.href = "/src/views/pages/user/dashboard-adm.html";

    } else if (usuario === "artista" && clave === "1234") {
      localStorage.setItem("usuarioActivo", "artista");
      window.location.href = "/src/views/pages/user/dashboard-user.html";

    } else if (usuario === "editor" && clave === "1234") {
      localStorage.setItem("usuarioActivo", "editor");
      window.location.href = "/src/views/pages/user/dashboard-editor.html";

    } else {
      errorMsg.style.display = "block";
    }
  });
});
