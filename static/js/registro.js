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
