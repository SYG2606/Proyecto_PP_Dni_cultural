document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-artista');
  const tabla = document.getElementById('tabla-artistas');

  // Cargar artistas desde localStorage
  let artistas = JSON.parse(localStorage.getItem('artistas')) || [];

  // Mostrar artistas en la tabla
  function renderArtistas() {
    tabla.innerHTML = ''; // Limpiar tabla
    artistas.forEach((artista, index) => {
      const fila = document.createElement('tr');

      fila.innerHTML = `
        <td>${artista.nombre}</td>
        <td>${artista.disciplina}</td>
        <td>${artista.correo}</td>
        <td class="acciones">
          <a href="#" data-index="${index}" class="eliminar">Eliminar</a>
        </td>
      `;

      tabla.appendChild(fila);
    });
  }

  // Guardar artistas en localStorage
  function guardarEnLocalStorage() {
    localStorage.setItem('artistas', JSON.stringify(artistas));
  }

  // Agregar nuevo artista
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombreArtistico').value.trim();
    const disciplina = document.getElementById('disciplina').value.trim();
    const correo = document.getElementById('correo').value.trim();

    if (nombre && disciplina && correo) {
      artistas.push({ nombre, disciplina, correo });
      guardarEnLocalStorage();
      renderArtistas();
      form.reset();
    }
  });

  // Eliminar artista
  tabla.addEventListener('click', (e) => {
    if (e.target.classList.contains('eliminar')) {
      const index = e.target.getAttribute('data-index');
      artistas.splice(index, 1);
      guardarEnLocalStorage();
      renderArtistas();
    }
  });

  // Mostrar artistas al cargar la página
  renderArtistas();
});
