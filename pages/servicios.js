(function main() { 
  const ubicacionHeader = ".contenedor-header";
  const ubicacionFooter = ".footer";
  const contHeader = document.querySelector(ubicacionHeader);
  const contFooter = document.querySelector(ubicacionFooter);
  if ((!contHeader) || (!contFooter)) { 
    console.error(`No se encontro la etiqueta especificada`);
  }
  agregarHeader(contHeader);
  agregarFooter(contFooter);
})()