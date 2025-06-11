document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-blanqueo');
  const correoInput = document.getElementById('correo');
  const mensaje = document.getElementById('mensaje-blanqueo');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const correo = correoInput.value.trim();
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const index = usuarios.findIndex(u => u.correo === correo);

    if (index !== -1) {
      // Simula blanqueo de clave: agrega o actualiza un campo 'clave'
      usuarios[index].clave = '1234'; // Clave por defecto
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      mensaje.style.color = 'green';
      mensaje.textContent = `✅ Clave blanqueada para: ${correo}`;
    } else {
      mensaje.style.color = 'red';
      mensaje.textContent = `❌ No se encontró el usuario con el correo: ${correo}`;
    }

    mensaje.style.display = 'block';
    form.reset();
  });
});
