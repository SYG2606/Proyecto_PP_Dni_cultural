// Obtener referencias al formulario y la tabla
const form = document.getElementById('form-artista');
const tabla = document.getElementById('tabla-artistas');

// Función para obtener artistas del localStorage
function obtenerArtistas() {
  return JSON.parse(localStorage.getItem('artistas')) || [];
}

// Función para guardar artistas en localStorage
function guardarArtistas(artistas) {
  localStorage.setItem('artistas', JSON.stringify(artistas));
}

// Función para renderizar la tabla
function renderizarArtistas() {
  const artistas = obtenerArtistas();
  tabla.innerHTML = '';

  artistas.forEach((artista, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${artista.nombreArtistico}</td>
      <td>${artista.disciplina}</td>
      <td>${artista.correo}</td>
      <td class="acciones">
        <a href="#" onclick="editarArtista(${index})">Editar</a>
        <a href="#" onclick="eliminarArtista(${index})">Eliminar</a>
      </td>
    `;
    tabla.appendChild(fila);
  });
}

// Función para manejar el envío del formulario
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nuevoArtista = {
    nombreArtistico: form.nombreArtistico.value.trim(),
    disciplina: form.disciplina.value.trim(),
    correo: form.correo.value.trim()
  };

  const artistas = obtenerArtistas();
  artistas.push(nuevoArtista);
  guardarArtistas(artistas);
  renderizarArtistas();
  form.reset();
});

// Eliminar artista
function eliminarArtista(index) {
  const artistas = obtenerArtistas();
  if (confirm(`¿Eliminar a ${artistas[index].nombreArtistico}?`)) {
    artistas.splice(index, 1);
    guardarArtistas(artistas);
    renderizarArtistas();
  }
}

// Editar artista (básico: rellena el formulario)
function editarArtista(index) {
  const artistas = obtenerArtistas();
  const artista = artistas[index];

  form.nombreArtistico.value = artista.nombreArtistico;
  form.disciplina.value = artista.disciplina;
  form.correo.value = artista.correo;

  artistas.splice(index, 1); // eliminar temporalmente hasta que se reenvíe
  guardarArtistas(artistas);
  renderizarArtistas();
}

// Inicializar
document.addEventListener('DOMContentLoaded', renderizarArtistas);
