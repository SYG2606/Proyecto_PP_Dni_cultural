document.addEventListener('DOMContentLoaded', function () {
  // --- LÓGICA PARA CAMPOS DINÁMICOS DEL FORMULARIO ---
  const categoriaSelect = document.getElementById('categoria');
  const camposDinamicosContainer = document.getElementById('campos-dinamicos-container');

  categoriaSelect.addEventListener('change', function() {
    // 1. Ocultar todos los campos específicos primero
    document.querySelectorAll('.campos-especificos').forEach(function(div) {
      div.style.display = 'none';
      // Limpiamos la animación para poder volver a aplicarla
      div.classList.remove('animate__fadeIn'); 
    });

    // 2. Mostrar el div correspondiente a la categoría seleccionada
    const categoriaSeleccionada = this.value;
    const divAMostrar = document.getElementById('campos-' + categoriaSeleccionada);

    if (divAMostrar) {
      divAMostrar.style.display = 'flex'; // Usamos flex por el 'gap' y 'flex-direction' del CSS
      // Añadimos una animación suave para que aparezca
      divAMostrar.classList.add('animate__fadeIn');
    }
  });

  // --- LÓGICA PARA ENLACES DINÁMICOS (la que ya teníamos) ---
  const linksContainer = document.getElementById('links-container');

  function createLinkRow(isFirst = false) {
    // ... (El código para crear filas de enlaces sigue siendo el mismo de antes)
    const row = document.createElement('div');
    row.className = 'link-input-row';

    const input = document.createElement('input');
    input.type = 'url';
    input.name = 'links[]';
    input.placeholder = 'https://ejemplo.com/tu-obra';
    input.required = true;

    const button = document.createElement('button');
    button.type = 'button'; 
    
    if (isFirst) {
      button.className = 'btn-link-action btn-add-link';
      button.innerHTML = '<i class="fas fa-plus"></i>';
    } else {
      button.className = 'btn-link-action btn-remove-link';
      button.innerHTML = '<i class="fas fa-minus"></i>';
    }

    row.appendChild(input);
    row.appendChild(button);
    linksContainer.appendChild(row);
  }

  linksContainer.addEventListener('click', function(e) {
    const addButton = e.target.closest('.btn-add-link');
    const removeButton = e.target.closest('.btn-remove-link');

    if (addButton) {
      createLinkRow(); 
    }

    if (removeButton) {
      removeButton.closest('.link-input-row').remove();
    }
  });

  createLinkRow(true); // Crea la primera fila de enlaces

  // --- LÓGICA DEL FORMULARIO PRINCIPAL ---
  document.getElementById("form-borrador").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("✅ Borrador guardado correctamente.");
      // Aquí el fetch() enviaría todos los datos, incluyendo los campos específicos que estén visibles.
  });
});