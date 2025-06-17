const form = document.getElementById('form-artista');
const tabla = document.getElementById('tabla-artistas');
const estadoSelect = document.getElementById('estado');
const datosFallecido = document.getElementById('datosFallecido');
const correoGrupo = document.getElementById('correoGrupo');

function obtenerArtistas() {
  return JSON.parse(localStorage.getItem('artistas')) || [];
}

function guardarArtistas(artistas) {
  localStorage.setItem('artistas', JSON.stringify(artistas));
}

function renderizarArtistas() {
  const artistas = obtenerArtistas();
  tabla.innerHTML = '';

  artistas.forEach((artista, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${artista.nombreCompleto}</td>
      <td>${artista.nombreArtistico}</td>
      <td>${artista.disciplina}</td>
      <td>${artista.estado}</td>
      <td>
        ${artista.estado === 'vivo' ? artista.correo :
          `<strong>${artista.informante}</strong> (${artista.parentesco})<br>📞 ${artista.telefono}`}
      </td>
      <td class="acciones">
        <a href="#" onclick="editarArtista(${index})">Editar</a>
        <a href="#" onclick="eliminarArtista(${index})">Eliminar</a>
      </td>
    `;
    tabla.appendChild(fila);
  });
}

// Mostrar/Ocultar campos según estado
estadoSelect.addEventListener('change', () => {
  if (estadoSelect.value === 'fallecido') {
    datosFallecido.style.display = 'block';
    correoGrupo.style.display = 'none';
  } else {
    datosFallecido.style.display = 'none';
    correoGrupo.style.display = 'block';
  }
});

// Validar campos
function validarFormulario() {
  const nombreCompleto = form.nombreCompleto.value.trim();
  const nombreArtistico = form.nombreArtistico.value.trim();
  const disciplina = form.disciplina.value;
  const estado = form.estado.value;

  if (!nombreCompleto || !nombreArtistico || !disciplina || !estado) {
    alert('Por favor, complete todos los campos obligatorios.');
    return false;
  }

  if (estado === 'vivo') {
    const correo = form.correo.value.trim();
    if (!correo) {
      alert('Debe ingresar el correo del artista.');
      return false;
    }
  } else if (estado === 'fallecido') {
    const fecha = form.fechaFallecimiento.value;
    const informante = form.informante.value.trim();
    const parentesco = form.parentesco.value.trim();
    const telefono = form.telefono.value.trim();

    if (!fecha || !informante || !parentesco || !telefono) {
      alert('Por favor, complete los datos del informante.');
      return false;
    }
  }

  return true;
}

// Envío del formulario
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!validarFormulario()) return;

  const artista = {
    nombreCompleto: form.nombreCompleto.value.trim(),
    nombreArtistico: form.nombreArtistico.value.trim(),
    disciplina: form.disciplina.value,
    estado: form.estado.value
  };

  if (artista.estado === 'vivo') {
    artista.correo = form.correo.value.trim();
  } else {
    artista.fechaFallecimiento = form.fechaFallecimiento.value;
    artista.informante = form.informante.value.trim();
    artista.parentesco = form.parentesco.value.trim();
    artista.telefono = form.telefono.value.trim();
  }

  const artistas = obtenerArtistas();
  artistas.push(artista);
  guardarArtistas(artistas);
  renderizarArtistas();
  form.reset();
  datosFallecido.style.display = 'none';
  correoGrupo.style.display = 'block';
});

// Eliminar artista
function eliminarArtista(index) {
  const artistas = obtenerArtistas();
  if (confirm(`¿Desea eliminar a ${artistas[index].nombreCompleto}?`)) {
    artistas.splice(index, 1);
    guardarArtistas(artistas);
    renderizarArtistas();
  }
}

// Editar artista (simple: precarga y elimina)
function editarArtista(index) {
  const artistas = obtenerArtistas();
  const artista = artistas[index];

  form.nombreCompleto.value = artista.nombreCompleto;
  form.nombreArtistico.value = artista.nombreArtistico;
  form.disciplina.value = artista.disciplina;
  form.estado.value = artista.estado;

  const changeEvent = new Event('change');
  estadoSelect.dispatchEvent(changeEvent);

  if (artista.estado === 'vivo') {
    form.correo.value = artista.correo;
  } else {
    form.fechaFallecimiento.value = artista.fechaFallecimiento;
    form.informante.value = artista.informante;
    form.parentesco.value = artista.parentesco;
    form.telefono.value = artista.telefono;
  }

  artistas.splice(index, 1);
  guardarArtistas(artistas);
  renderizarArtistas();
}

// Inicializar
document.addEventListener('DOMContentLoaded', renderizarArtistas);
