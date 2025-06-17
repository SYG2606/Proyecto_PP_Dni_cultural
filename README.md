```
## 🎭 DNI Cultural

Proyecto desarrollado para la Subsecretaría de Cultura de Santiago del Estero como parte de las Prácticas Profesionalizantes del ITSE.

---

## 📚 Descripción

**DNI Cultural** es una plataforma web tipo "Wikipedia local", destinada a registrar, validar y consultar información sobre artistas de Santiago del Estero. El sistema permite cargar obras, gestionar solicitudes de validación.

---

## 🗂️ Estructura del Proyecto

DNI_Cultural/
│
├── src/
│   ├── controllers/       # Lógica del sistema y gestión de rutas
│   ├── models/            # Representación de datos
│   └── views/             # Interfaz HTML
│       ├── components/    # Navbar, footer, etc.
│       └── pages/
│           ├── public/    # Inicio, búsqueda, eventos
│           ├── auth/      # Login, registro
│           ├── user/      # Panel de artistas
│           └── admin/     # Administración del sistema
│
├── static/
│   ├── css/
│   │   └── main.css       # Estilos generales
│   │   └── login.css      # Estilos por página
│   │   └── admin.css
│   │   └── wiki.css
│   ├── js/
│   │   └── login.js
│   │   └── admin.js
│   └── img/
│       └── logo.png
│
├── database/
│   └── esquema.sql
│   └── datos-ejemplo.sql
│
├── config/
│   └── db.php             # Conexión a base de datos
│   └── rutas.php
│
├── tests/
│   └── test-usuarios.js
│   └── test-artistas.js
│
└── docs/
    └── manual-usuario.pdf
    └── informe-tecnico.docx


---

## ⚙️ Tecnologías Utilizadas

- HTML5, CSS3, JavaScript

---

## ✅ Funcionalidades Clave

- Registro y autenticación de artistas
- Validación manual por administradores
- Carga de obras, eventos y biografías
- Buscador avanzado con filtros por género, localidad, tipo, año
- Biblioteca digital con contenido de artistas
- Panel de usuario (artista) y panel de administración

---

## 👥 Equipo de Desarrollo

**Runatech** - Estudiantes del ITSE Santiago del Estero

- Maximiliano Fabián Padilla
- Marcos Ariel Romano
- Mario Sebastián Ruiz

Colaboración: Subsecretaría de Cultura de Santiago del Estero

---

## 📄 Licencia

Este proyecto fue realizado con fines educativos. Derechos reservados al equipo Runatech y a la Subsecretaría de Cultura.
.
