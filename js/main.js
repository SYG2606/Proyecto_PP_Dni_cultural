async function includeHTML(id, file) {
    const el = document.getElementById(id);
    if (el) {
      const res = await fetch(file);
      const html = await res.text();
      el.innerHTML = html;
    }
  }

  includeHTML("header", "components/header.html");