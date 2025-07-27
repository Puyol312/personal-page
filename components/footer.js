function agregarFooter(container) {
  const nuevoDiv = document.createElement("div");

  nuevoDiv.innerHTML = `
    <div class="footer custom-footer">
      <div class="content has-text-centered">
        <!-- Logo -->
        <img src="./assets/logos/main-logo-caio.png" alt="Logo" class="footer-logo">

        <!-- Navegación principal -->
        <div class="columns is-mobile is-multiline is-variable is-1 menu-footer">
          <div class="column is-12-mobile is-one-third-desktop has-text-centered">
            <a href="./index.html">
              <span class="icon"><i class="fas fa-home"></i></span>
              <span>Home</span>
            </a>
          </div>
          <div class="column is-12-mobile is-one-third-desktop has-text-centered">
            <a href="./servicios.html">
              <span class="icon"><i class="fas fa-briefcase"></i></span>
              <span>Servicios</span>
            </a>
          </div>
          <div class="column is-12-mobile is-one-third-desktop has-text-centered">
            <a href="./contacto.html">
              <span class="icon"><i class="fas fa-envelope"></i></span>
              <span>Contacto</span>
            </a>
          </div>
        </div>

        <!-- Redes sociales -->
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/caio-renato-puyol-leguiza-353753298" target="_blank" class="social-link">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Puyol312" target="_blank" class="social-link">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/caio_puyol/" target="_blank" class="social-link">
            <i class="fab fa-instagram"></i>
          </a>
        </div>

        <!-- Créditos -->
        <p class="footer-copy">© 2025 Caio Puyol</p>
      </div>
    </div>
  `;

  container.appendChild(nuevoDiv);
}
