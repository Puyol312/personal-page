function getWorks() {
  return fetch("https://cdn.contentful.com/spaces/q4ksfde3nakq/environments/master/entries?access_token=zalSZdF8xugwJfh3g0bC3K_f0raWh7qgf5CGTK4B2qg&content_type=work")
    .then(res => res.json())
    .then((data) => { 
      const fieldsCollections = data.items.map((item) => { 
        const imageAsset = data.includes.Asset.find(asset => asset.sys.id === item.fields.imagen.sys.id);
        return {
          title: item.fields.titulo,
          description: item.fields.descripcin,
          image: imageAsset ? imageAsset.fields.file.url : null
        }
      });
      return fieldsCollections;
    });
}
function servicios(params = {}, ubicacion) {
  const container = document.querySelector(ubicacion);
  if (!container) {
    console.error(`No se encontró el contenedor con el selector "${ubicacion}"`);
    return;
  }
  const nuevaTarjeta = document.createElement("div");
  nuevaTarjeta.classList.add("portfolio-card");

  nuevaTarjeta.innerHTML = `
    <img src="${params.image}" alt="${params.title}" class="portfolio-img">
    <div class="portfolio-card-content">
      <h4 class="portfolio-card-title">${params.title}</h4>
      <p class="portfolio-card-text">${params.description}</p>
      <a href="${params.url || '#'}" class="portfolio-card-link" target="_blank">Ver más</a>
    </div>
  `;

  container.appendChild(nuevaTarjeta);
}

let trabajosMostrados = 0;
const TRABAJOS_POR_PAGINA = 3;

function agregarServicios(content) {
  getWorks().then((res) => {
    const totalTrabajos = res.length;
    const trabajosParaMostrar = res.slice(trabajosMostrados, trabajosMostrados + TRABAJOS_POR_PAGINA);

    for (const work of trabajosParaMostrar) {
      servicios(work, content);
    }

    trabajosMostrados += TRABAJOS_POR_PAGINA;

    if (trabajosMostrados < totalTrabajos) {
      const verMasBtn = document.createElement('button');
      verMasBtn.textContent = 'Ver más';
      verMasBtn.classList.add('ver-mas-btn');
      document.querySelector(content).appendChild(verMasBtn);

      verMasBtn.addEventListener('click', () => {
        verMasBtn.remove();
        agregarServicios(content);
      });
    }
  });
}