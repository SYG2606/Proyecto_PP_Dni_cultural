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
});

    document.getElementById('fechaNacimiento').addEventListener('input', function (e) {
        let input = e.target.value.replace(/\D/g, '');
        if (input.length >= 3 && input.length <= 4) {
            input = input.slice(0, 2) + '/' + input.slice(2);
        } else if (input.length > 4) {
            input = input.slice(0, 2) + '/' + input.slice(2, 4) + '/' + input.slice(4, 8);
        }
        e.target.value = input;
    });

function mostrarPaso1() {
    document.getElementById('paso1').classList.add('active');
    document.getElementById('paso2').classList.remove('active');
}

function mostrarPaso2() {
    document.getElementById('paso1').classList.remove('active');
    document.getElementById('paso2').classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
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
        // enviar datos al backend aquí si querés
    });

    // Al enviar el formulario de paso 1, pasamos a paso 2
    document.getElementById('registroForm').addEventListener('submit', (e) => {
        e.preventDefault(); // evitamos que recargue
        mostrarPaso2();
    });

    // Inicializar mostrando solo el paso 1
    mostrarPaso1();
});

document.addEventListener("DOMContentLoaded", function () {
    const paso1 = document.querySelector(".formulario-paso1");
    const paso2 = document.querySelector(".formulario-paso2");
    const btnSiguiente = document.getElementById("btn-siguiente");
    const btnAnterior = document.getElementById("btn-anterior");

    btnSiguiente.addEventListener("click", function () {
        paso1.classList.remove("active");
        paso2.classList.add("active");
    });

    btnAnterior.addEventListener("click", function () {
        paso2.classList.remove("active");
        paso1.classList.add("active");
    });
});