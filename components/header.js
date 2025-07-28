function agregarHeader(container) {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.innerHTML = `
    <div class="header-container custom-wide-container">
      <div class="columns is-mobile is-vcentered is-variable is-1 header">
        <div class="column is-narrow">
          <a href="./index.html">
          <img src="./assets/logos/main-logo-caio.png" alt="Logo" class="header-logo">
          </a>
        </div>

        <div class="column is-hidden-touch has-text-right">
          <nav class="desktop-nav">
            <a href="./portfolio.html">Portfolio</a>
            <a href="./servicios.html">Servicios</a>
            <a href="./contacto.html">Contacto</a>
          </nav>
        </div>

        <div class="column is-hidden-desktop has-text-right">
          <button class="button is-large burger-button" aria-label="menu" id="open-header-menu">
            <span class="icon">
              <i class="fas fa-bars"></i>
            </span>
          </button>
        </div>
      </div>
    </div>

    <div id="header-menu" class="header-menu">
      <div class="menu-content box">
        <button id="close-header-menu" class="delete is-large" aria-label="close"></button>
        <ul>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="servicios.html">Servicios</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </div>
    </div>
  `;

  container.insertBefore(nuevoDiv, container.firstChild);

  const openBtn = nuevoDiv.querySelector('#open-header-menu');
  const closeBtn = nuevoDiv.querySelector('#close-header-menu');
  const menu = nuevoDiv.querySelector('#header-menu');

  if (openBtn && closeBtn && menu) {
    openBtn.addEventListener("click", () => {
      menu.classList.add("is-active");
    });

    closeBtn.addEventListener("click", () => {
      menu.classList.remove("is-active");
    });
  }
}
