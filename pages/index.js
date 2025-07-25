(function main() { 
  const sectionEl = document.querySelector(".home-page__contenedor-header");
  const footerEl = document.querySelector(".footer")
  const formEl = document.querySelector(".formulario")
  agregarHeader(sectionEl);
  agregarFooter(footerEl);
  agregarFormulario(formEl);
  activarFormulario();
})()