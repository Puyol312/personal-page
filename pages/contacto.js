(function main() {
  const ubicacionHead = ".contenedor-header";
  const contHeadEl = document.querySelector(ubicacionHead);
  if (!contHeadEl) { 
    console.error(`No se encontro la ubicacion de "${ubicacionHead}"`);
  }
  agregarHeader(contHeadEl);
  const ubicacionForm = ".contenedor-form";
  const contForm = document.querySelector(ubicacionForm);
  if (!contForm) { 
    console.error(`No se encontro la ubicacion de "${ubicacionForm}"`);
  }
  agregarFormulario(contForm);
  activarFormulario();
  const ubicacionFooter = ".footer";
  const contFooter = document.querySelector(ubicacionFooter);
  if (!contFooter) { 
    console.error(`No se encontro la ubicacion de "${ubicacionFooter}"`)
  }
  agregarFooter(contFooter);
})()