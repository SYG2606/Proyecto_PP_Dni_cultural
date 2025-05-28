let registrosArtistas = [
  {
    nombre: "Juan Pérez",
    genero: "Masculino",
    area: "Música 🎶",
    descripcion: "Guitarrista y compositor.",
    imagen: "https://via.placeholder.com/100",
  },
  {
    nombre: "María González",
    genero: "Femenino",
    area: "Literatura 📖",
    descripcion: "Escritora de poesía.",
    imagen: "https://via.placeholder.com/100",
  },
  {
    nombre: "Carlos Gómez",
    genero: "Masculino",
    area: "Pintura 🎨",
    descripcion: "Artista plástico especializado en óleo.",
    imagen: "https://via.placeholder.com/100",
  },
  {
    nombre: "Laura Fernández",
    genero: "Femenino",
    area: "Teatro 🎭",
    descripcion: "Actriz y directora de teatro independiente.",
    imagen: "https://via.placeholder.com/100",
  },
  {
    nombre: "Sofía Martínez",
    genero: "Femenino",
    area: "Fotografía 📸",
    descripcion: "Fotógrafa profesional enfocada en paisajes.",
    imagen: "https://via.placeholder.com/100",
  },
  {
    nombre: "Luis Torres",
    genero: "Masculino",
    area: "Danza 💃",
    descripcion: "Bailarín contemporáneo con 10 años de trayectoria.",
    imagen: "https://via.placeholder.com/100",
  },
  {
    nombre: "Ana López",
    genero: "Femenino",
    area: "Escultura 🗿",
    descripcion: "Escultora en mármol y bronce.",
    imagen: "https://via.placeholder.com/100",
  },
  {
    nombre: "Pedro Castro",
    genero: "Masculino",
    area: "Cine 🎥",
    descripcion: "Director de cine documental.",
    imagen: "https://via.placeholder.com/100",
  },
  {
    nombre: "Lucía Vega",
    genero: "Femenino",
    area: "Artesanía 🧵",
    descripcion: "Artesana especializada en tejidos tradicionales.",
    imagen: "https://via.placeholder.com/100",
  },
  {
    nombre: "Diego Álvarez",
    genero: "Masculino",
    area: "Literatura 📖",
    descripcion: "Escritor de novelas de ciencia ficción.",
    imagen: "https://via.placeholder.com/100",
  },
  {
    nombre: "Elena Ruiz",
    genero: "Femenino",
    area: "Música 🎶",
    descripcion: "Cantante de música folclórica.",
    imagen: "https://via.placeholder.com/100",
  },
  {
    nombre: "Martín Cáceres",
    genero: "Masculino",
    area: "Pintura 🎨",
    descripcion: "Especialista en acuarela y murales urbanos.",
    imagen: "https://via.placeholder.com/100",
  },
  {
    nombre: "Carla Herrera",
    genero: "Femenino",
    area: "Danza 💃",
    descripcion: "Bailarina de tango reconocida internacionalmente.",
    imagen: "https://via.placeholder.com/100",
  },
  {
    nombre: "Ricardo Bustos",
    genero: "Masculino",
    area: "Escultura 🗿",
    descripcion: "Escultor de piezas abstractas.",
    imagen: "https://via.placeholder.com/100",
  },
  {
    nombre: "Verónica Rojas",
    genero: "Femenino",
    area: "Cine 🎥",
    descripcion: "Guionista de películas independientes.",
    imagen: "https://via.placeholder.com/100",
  },
];

function validarLogin(event) {
  event.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  if (usuario === "Validador" && clave === "123") {
    mostrarPanel("panel-validacion");
    mostrarRegistros();
  } else if (usuario === "Artista" && clave === "123") {
    mostrarPanel("panel-perfil");
  } else {
    alert("Usuario o clave incorrectos ❌");
  }
}

function mostrarPanel(panelId) {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("panel-validacion").style.display = "none";
  document.getElementById("panel-perfil").style.display = "none";
  document.getElementById(panelId).style.display = "block";
}

function mostrarRegistros() {
  const tablaRegistros = document.getElementById("tabla-registros");
  tablaRegistros.innerHTML = "";
  registrosArtistas.forEach((artista) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td>${artista.nombre}</td>
                    <td>${artista.genero}</td>
                    <td>${artista.area}</td>
                    <td>${artista.descripcion}</td>
                    <td><img src="${artista.imagen}" alt="Imagen del Artista" style="width:100px;"></td>
                    <td>
                        <button onclick="validarArtista('${artista.nombre}')">Validar ✅</button>
                        <button onclick="rechazarArtista('${artista.nombre}')">Rechazar ❌</button>
                        <button onclick="verPerfilCompleto('${artista.nombre}')">Ver Perfil Completo 👤</button>
                    </td>`;
    tablaRegistros.appendChild(row);
  });
}

function validarArtista(nombre) {
  alert(`El artista ${nombre} ha sido validado ✅`);
}

function rechazarArtista(nombre) {
  alert(`El artista ${nombre} ha sido rechazado ❌`);
}

function solicitarActualizacion() {
  alert("Solicitud de actualización enviada 📄");
}

function verObras() {
  alert("Redirigiendo a las obras del artista 📂");
}
