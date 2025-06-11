document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-usuario');
  const tabla = document.getElementById('tabla-usuarios');

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  function renderUsuarios() {
    tabla.innerHTML = '';
    usuarios.forEach((usuario, index) => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${usuario.nombre}</td>
        <td>${usuario.correo}</td>
        <td>${usuario.rol}</td>
        <td><a href="#" class="eliminar" data-index="${index}">Eliminar</a></td>
      `;
      tabla.appendChild(fila);
    });
  }

  function guardarEnLocalStorage() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const rol = document.getElementById('rol').value;

    if (nombre && correo && rol) {
      usuarios.push({ nombre, correo, rol });
      guardarEnLocalStorage();
      renderUsuarios();
      form.reset();
    }
  });

  tabla.addEventListener('click', (e) => {
    if (e.target.classList.contains('eliminar')) {
      const index = e.target.getAttribute('data-index');
      usuarios.splice(index, 1);
      guardarEnLocalStorage();
      renderUsuarios();
    }
  });

  renderUsuarios();
});
