document.addEventListener('DOMContentLoaded', function () {
  const provinciasPorPais = {
    Argentina: {
      "Buenos Aires": ["La Plata", "Mar del Plata", "Bahía Blanca"],
      "Córdoba": ["Córdoba Capital", "Villa Carlos Paz", "Río Cuarto"],
      "Santiago del Estero": ["Santiago Capital", "La Banda", "Termas de Río Hondo"]
    }
  };

  const paisSelect = document.getElementById('pais');
  const provinciaSelect = document.getElementById('provincia');
  const municipioSelect = document.getElementById('municipio');

  paisSelect.addEventListener('change', function () {
    const pais = this.value;
    provinciaSelect.innerHTML = '<option value="" disabled selected>Seleccioná una provincia</option>';
    municipioSelect.innerHTML = '<option value="" disabled selected>Seleccioná un municipio</option>';
    municipioSelect.disabled = true;

    if (provinciasPorPais[pais]) {
      provinciaSelect.disabled = false;
      Object.keys(provinciasPorPais[pais]).forEach(function (provincia) {
        const option = document.createElement('option');
        option.value = provincia;
        option.textContent = provincia;
        provinciaSelect.appendChild(option);
      });
    } else {
      provinciaSelect.disabled = true;
    }
  });

  provinciaSelect.addEventListener('change', function () {
    const pais = paisSelect.value;
    const provincia = this.value;

    municipioSelect.innerHTML = '<option value="" disabled selected>Seleccioná un municipio</option>';

    if (provinciasPorPais[pais] && provinciasPorPais[pais][provincia]) {
      municipioSelect.disabled = false;
      provinciasPorPais[pais][provincia].forEach(function (municipio) {
        const option = document.createElement('option');
        option.value = municipio;
        option.textContent = municipio;
        municipioSelect.appendChild(option);
      });
    } else {
      municipioSelect.disabled = true;
    }
  });

  // Fecha nacimiento: autoformato
  document.getElementById('fechaNacimiento').addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, '');
    if (input.length >= 3 && input.length <= 4) {
      input = input.slice(0, 2) + '/' + input.slice(2);
    } else if (input.length > 4) {
      input = input.slice(0, 2) + '/' + input.slice(2, 4) + '/' + input.slice(4, 8);
    }
    e.target.value = input;
  });

  // Validación intereses
  const checkboxes = document.querySelectorAll('input[name="intereses"]');
  const btnSiguiente = document.getElementById('btnSiguiente');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const algunoMarcado = Array.from(checkboxes).some(c => c.checked);
      btnSiguiente.disabled = !algunoMarcado;
    });
  });

  document.getElementById('interesesForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Formulario completado. Gracias por registrarte en el DNI Cultural.");
    // Aquí podés agregar el código para enviar al backend
  });
});

// Funciones para mostrar pasos
function mostrarPaso1() {
  document.getElementById('paso1').classList.add('active');
  document.getElementById('paso2').classList.remove('active');
}

function volverPaso1() {
  mostrarPaso1();
}

function mostrarPaso2() {
  document.getElementById('paso1').classList.remove('active');
  document.getElementById('paso2').classList.add('active');
}
function abrirModal(event) {
    event.preventDefault();
    const modal = document.getElementById('modalTerminos');
    modal.style.display = 'block';
}

function cerrarModal() {
    const modal = document.getElementById('modalTerminos');
    modal.style.display = 'none';
}

// Cerrar el modal si se hace clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('modalTerminos');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
