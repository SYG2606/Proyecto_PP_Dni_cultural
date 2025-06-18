
// =======================
// CONFIGURACIÓN INICIAL
// =======================

document.addEventListener("DOMContentLoaded", function () {
    // Mostrar el paso 1 al inicio
    mostrarPaso1();

    // Inicializar selects de país/provincia/municipio
    inicializarUbicacion();

    // Inicializar validación de fecha
    inicializarFechaNacimiento();

    // Inicializar validación de intereses
    inicializarValidacionIntereses();

    // Eventos de formulario
    inicializarEventosFormularios();

    // Botones navegación pasos
    inicializarNavegacionPasos();
});

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

  // Fecha nacimiento
  const fechaInput = document.getElementById("fechaNacimiento");
  const hoy = new Date().toISOString().split("T")[0];
  const min = "1970-01-01";
  fechaInput.setAttribute("min", min);
  fechaInput.setAttribute("max", hoy);

// =======================
// UBICACIÓN DINÁMICA
// =======================

function inicializarUbicacion() {
    const provinciasPorPais = {
        Argentina: {
            "Buenos Aires": ["La Plata", "Mar del Plata", "Bahía Blanca"],
            "Córdoba": ["Córdoba Capital", "Villa Carlos Paz", "Río Cuarto"],
            "Santiago del Estero": [
                "Santiago Capital",
                "La Banda",
                "Termas de Río Hondo",
            ],
        },
    };

    const paisSelect = document.getElementById("pais");
    const provinciaSelect = document.getElementById("provincia");
    const municipioSelect = document.getElementById("municipio");

    paisSelect.addEventListener("change", function () {
        const pais = this.value;

        provinciaSelect.innerHTML =
            '<option value="" disabled selected>Seleccioná una provincia</option>';
        municipioSelect.innerHTML =
            '<option value="" disabled selected>Seleccioná un municipio</option>';
        municipioSelect.disabled = true;

        if (provinciasPorPais[pais]) {
            provinciaSelect.disabled = false;
            Object.keys(provinciasPorPais[pais]).forEach(function (provincia) {
                const option = document.createElement("option");
                option.value = provincia;
                option.textContent = provincia;
                provinciaSelect.appendChild(option);
            });
        } else {
            provinciaSelect.disabled = true;
        }
    });

    provinciaSelect.addEventListener("change", function () {
        const pais = paisSelect.value;
        const provincia = this.value;

        municipioSelect.innerHTML =
            '<option value="" disabled selected>Seleccioná un municipio</option>';

        if (provinciasPorPais[pais] && provinciasPorPais[pais][provincia]) {
            municipioSelect.disabled = false;
            provinciasPorPais[pais][provincia].forEach(function (municipio) {
                const option = document.createElement("option");
                option.value = municipio;
                option.textContent = municipio;
                municipioSelect.appendChild(option);
            });
        } else {
            municipioSelect.disabled = true;
        }
    });
}

// =======================
// VALIDACIÓN DE FECHA
// =======================

function inicializarFechaNacimiento() {
    const fechaInput = document.getElementById("fechaNacimiento");
    const hoy = new Date().toISOString().split("T")[0];
    const min = "1970-01-01";
    fechaInput.setAttribute("min", min);
    fechaInput.setAttribute("max", hoy);
}

// =======================
// VALIDACIÓN DE INTERESES
// =======================

function inicializarValidacionIntereses() {
    const checkboxes = document.querySelectorAll('input[name="intereses"]');
    const btnSiguienteIntereses = document.getElementById("btnSiguiente");

    if (checkboxes.length && btnSiguienteIntereses) {
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", () => {
                const algunoMarcado = Array.from(checkboxes).some((c) => c.checked);
                btnSiguienteIntereses.disabled = !algunoMarcado;
            });
        });
    }
}

// =======================
// EVENTOS DE FORMULARIOS
// =======================


function inicializarEventosFormularios() {
    const interesesForm = document.getElementById("interesesForm");
    const registroForm = document.getElementById("registroForm");

    if (registroForm) {
        registroForm.addEventListener("submit", (e) => {
            e.preventDefault();

    if (!registroForm.checkValidity()) {
        registroForm.reportValidity();
        return;
    }

    const email = document.getElementById("email").value.trim();
    const confirmarEmail = document.getElementById("confirmarEmail").value.trim();
    const password = document.getElementById("password").value;
    const confirmarPassword = document.getElementById("confirmarPassword").value;

    if (email !== confirmarEmail) {
        alert("Los correos electrónicos no coinciden.");
        return;
    }

    if (password !== confirmarPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }
            
            mostrarPaso2();
        });
    }

    if (interesesForm) {
        interesesForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // alert("Formulario completado. Gracias por registrarte en el DNI Cultural.");
            window.location.href = "registro-completado.html";
        });
    }
}

// =======================
// NAVEGACIÓN DE PASOS
// =======================

function inicializarNavegacionPasos() {
    const paso1 = document.querySelector(".formulario-paso1");
    const paso2 = document.querySelector(".formulario-paso2");
    const btnSiguiente = document.getElementById("btn-siguiente");
    const btnAnterior = document.getElementById("btn-anterior");

    if (btnSiguiente) {
        btnSiguiente.addEventListener("click", function () {
            paso1.classList.remove("active");
            paso2.classList.add("active");
        });
    }

    if (btnAnterior) {
        btnAnterior.addEventListener("click", function () {
            paso2.classList.remove("active");
            paso1.classList.add("active");
        });
    }
}

function mostrarPaso1() {
    document.getElementById("paso1").classList.add("active");
    document.getElementById("paso2").classList.remove("active");

    // Cambiar estado visual de pasos
    const pasos = document.querySelectorAll(".wizard-pasos .paso");
    pasos[0].classList.add("activo");
    pasos[1].classList.remove("activo");
}

function mostrarPaso2() {
    document.getElementById("paso1").classList.remove("active");
    document.getElementById("paso2").classList.add("active");

    // Cambiar estado visual de pasos
    const pasos = document.querySelectorAll(".wizard-pasos .paso");
    pasos[0].classList.remove("activo");
    pasos[1].classList.add("activo");
}

