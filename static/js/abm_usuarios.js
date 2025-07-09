// Variables del DOM
const form = document.getElementById("form-usuario");
const tabla = document.getElementById("tabla-usuarios");
const buscador = document.getElementById("buscador");
const filtroRol = document.getElementById("filtro-rol"); // Usamos el filtro correcto

// Recuperar usuarios guardados en localStorage (si hay)
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Guardar en localStorage cada vez que cambia
function guardarUsuarios() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Función para renderizar la tabla según filtro y búsqueda
function renderizarTabla() {
  const filtro = filtroRol.value;
  const busqueda = buscador.value.toLowerCase();

  tabla.innerHTML = "";

  // Filtrar usuarios según búsqueda y rol
  const usuariosFiltrados = usuarios.filter(u => {
    const nombreMatch = u.nombre.toLowerCase().includes(busqueda);
    const correoMatch = u.correo.toLowerCase().includes(busqueda);
    const rolMatch = filtro === "Todos" || u.rol === filtro;
    return (nombreMatch || correoMatch) && rolMatch;
  });

  // Renderizar filas
  usuariosFiltrados.forEach((usuario, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${usuario.nombre}</td>
      <td>${usuario.correo}</td>
      <td>${usuario.rol}</td>
      <td><button onclick="eliminarUsuario(${index})">🗑️</button></td>
    `;
    tabla.appendChild(fila);
  });
}

// Evento submit para agregar usuario
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const rol = document.getElementById("rol").value;

  // Validar campos obligatorios
  if (!nombre || !correo || !rol) {
    alert("Por favor, completá todos los campos.");
    return;
  }

  // Control de duplicados por correo
  const emailExistente = usuarios.some(u => u.correo.toLowerCase() === correo.toLowerCase());
  if (emailExistente) {
    alert("Ya existe un usuario con ese correo.");
    return;
  }

  // Crear nuevo usuario y agregar al array
  const nuevoUsuario = { nombre, correo, rol };
  usuarios.push(nuevoUsuario);

  guardarUsuarios();
  renderizarTabla();
  form.reset();
});

// Evento input para búsqueda dinámica
buscador.addEventListener("input", renderizarTabla);

// Evento change para filtro de rol
filtroRol.addEventListener("change", renderizarTabla);

// Función para eliminar usuario
function eliminarUsuario(index) {
  if (confirm("¿Querés eliminar este usuario?")) {
    usuarios.splice(index, 1);
    guardarUsuarios();
    renderizarTabla();
  }
}

// Inicializar tabla al cargar la página
renderizarTabla();
