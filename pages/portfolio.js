(function main() { 
  const contenedorHeadEl = document.querySelector(".portfolio-home__contenedor-header");
  if (!contenedorHeadEl) { 
    console.error(`No se encontró el contenedor con el selector ".portfolio-home__contenedor-header"`);
    return;
  }
  agregarHeader(contenedorHeadEl);
  agregarServicios(".porfolio-servicios__contenedor");
  const contenedorFooter = document.querySelector(".footer");
  if (!contenedorFooter) { 
    console.error(`No se encontró el contenedor con el selector ".footer"`)
  }
  agregarFooter(contenedorFooter);
})()