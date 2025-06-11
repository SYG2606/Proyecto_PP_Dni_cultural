// Lista simulada de artistas
const artistas = [
  {
    nombre: "Juan Pérez",
    fechaSolicitud: "15/04/2024",
    estado: "Validado",
    fechaValidacion: "17/04/2024"
  },
  {
    nombre: "Ana Gómez",
    fechaSolicitud: "10/05/2024",
    estado: "Pendiente",
    fechaValidacion: ""
  },
  {
    nombre: "Carlos Ruiz",
    fechaSolicitud: "02/06/2024",
    estado: "Suspendido",
    fechaValidacion: "05/06/2024"
  }
];

// Devuelve color según el estado
function colorPorEstado(estado) {
  switch (estado.toLowerCase()) {
    case "validado":
      return "green";
    case "pendiente":
      return "orange";
    case "rechazado":
      return "red";
    case "suspendido":
      return "gray";
    default:
      return "black";
  }
}

// Crea la tabla en el HTML
function mostrarArtistas() {
  const tbody = document.querySelector("#tabla-artistas tbody");
  tbody.innerHTML = "";

  artistas.forEach((artista, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${artista.nombre}</td>
      <td>${artista.fechaSolicitud}</td>
      <td style="color:${colorPorEstado(artista.estado)}"><strong>${artista.estado}</strong></td>
      <td>${artista.fechaValidacion || "-"}</td>
      <td>
        <select onchange="cambiarEstado(${index}, this.value)">
          <option value="">Cambiar estado</option>
          <option value="Validado">Validado</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Rechazado">Rechazado</option>
          <option value="Suspendido">Suspendido</option>
        </select>
      </td>
    `;

    tbody.appendChild(fila);
  });
}

// Cambia el estado de un artista
function cambiarEstado(index, nuevoEstado) {
  if (!nuevoEstado) return;
  artistas[index].estado = nuevoEstado;

  if (nuevoEstado === "Validado") {
    const hoy = new Date().toLocaleDateString("es-AR");
    artistas[index].fechaValidacion = hoy;
  } else {
    artistas[index].fechaValidacion = "";
  }

  mostrarArtistas();
}

// Inicializa la vista
document.addEventListener("DOMContentLoaded", mostrarArtistas);
