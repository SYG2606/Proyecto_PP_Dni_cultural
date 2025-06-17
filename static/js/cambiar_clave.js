// cambiar_clave.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cambiarClaveForm");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const nuevaClave = document.getElementById("nuevaClave").value.trim();

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
});
