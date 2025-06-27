async function includeHTML(id, file) {
  const el = document.getElementById(id);
  if (el) {
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error("Archivo no encontrado");
      const html = await res.text();
      el.innerHTML = html;
    } catch (error) {
      console.error("Error cargando HTML:", error);
    }
  }
}

// 
includeHTML("navbar", "../public/components/navbar.html");
includeHTML("footer", "../public/components/footer.html");


/*  includeHTML("navbar", "/Proyecto_PP_Dni_cultural/src/views/pages/public/components/navbar.html");
  includeHTML("footer", "/Proyecto_PP_Dni_cultural/src/views/pages/public/components/footer.html");*/

