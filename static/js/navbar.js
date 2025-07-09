// window.addEventListener('DOMContentLoaded', () => {
//   const navbar = document.getElementById('navbar');
//   const footer = document.getElementById('footer');

//   if (navbar) {
//     fetch("/Proyecto_PP_Dni_cultural/src/views/pages/public/components/navbar.html")
//       .then(res => res.text())
//       .then(html => {
//         navbar.innerHTML = "";
//         navbar.insertAdjacentHTML("beforeend", html);
//         if (window.lucide) lucide.createIcons(); // activa íconos si usás Lucide
//       })
//       .catch(err => console.error("Error al cargar navbar:", err));
//   }

//   if (footer) {
//     fetch("/Proyecto_PP_Dni_cultural/src/views/pages/public/components/footer.html")
//       .then(res => res.text())
//       .then(html => {
//         footer.innerHTML = "";
//         footer.insertAdjacentHTML("beforeend", html);
//       })
//       .catch(err => console.error("Error al cargar footer:", err));
//   }
// });

const basePath = "/Proyecto_PP_Dni_cultural/src/views/pages/public/components/";

fetch(basePath + "navbar.html")
  .then(res => res.ok ? res.text() : Promise.reject("Navbar no encontrado"))
  .then(html => {
    document.getElementById("navbar").innerHTML = "";
    document.getElementById("navbar").insertAdjacentHTML("beforeend", html);
    if (window.lucide) lucide.createIcons();
  })
  .catch(err => console.error("Error cargando navbar:", err));

fetch(basePath + "footer.html")
  .then(res => res.ok ? res.text() : Promise.reject("Footer no encontrado"))
  .then(html => {
    document.getElementById("footer").innerHTML = "";
    document.getElementById("footer").insertAdjacentHTML("beforeend", html);
  })
  .catch(err => console.error("Error cargando footer:", err));