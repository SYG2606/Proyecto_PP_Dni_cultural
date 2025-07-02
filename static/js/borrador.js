document.addEventListener('DOMContentLoaded', function () {
    const linksContainer = document.getElementById('links-container');
  
    // Función para crear una nueva fila de input
    function createLinkRow(isFirst = false) {
      const row = document.createElement('div');
      row.className = 'link-input-row';
  
      const input = document.createElement('input');
      input.type = 'url';
      input.name = 'links[]'; // Usamos 'links[]' para que el backend reciba un array
      input.placeholder = 'https://ejemplo.com/tu-obra';
      input.required = true;
  
      // El botón cambia dependiendo de si es la primera fila o no
      const button = document.createElement('button');
      button.type = 'button'; // Importante para que no envíe el formulario
      
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
  
    // Manejador de eventos para los botones
    linksContainer.addEventListener('click', function(e) {
      // Busca el botón más cercano al clic
      const addButton = e.target.closest('.btn-add-link');
      const removeButton = e.target.closest('.btn-remove-link');
  
      if (addButton) {
        // Si se hizo clic en '+', crea una nueva fila (que tendrá un botón '-')
        createLinkRow(); 
      }
  
      if (removeButton) {
        // Si se hizo clic en '-', elimina la fila entera
        removeButton.closest('.link-input-row').remove();
      }
    });
  
    // Crea la primera fila de input al cargar la página
    createLinkRow(true);
  
    // Lógica del formulario principal
    document.getElementById("form-borrador").addEventListener("submit", function (e) {
      e.preventDefault();
      // Aquí recolectarías todos los datos, incluyendo los enlaces
      const links = Array.from(document.querySelectorAll('input[name="links[]"]')).map(input => input.value);
      console.log("Enlaces enviados:", links);
      
      alert("✅ Borrador guardado correctamente. Revisa la consola para ver los enlaces.");
      // Aquí iría el fetch() para enviar los datos al backend
    });
  });