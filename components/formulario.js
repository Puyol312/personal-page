function agregarFormulario(container) {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.classList.add("contenedor-por-defecto")

  nuevoDiv.innerHTML = `
    <div class="formulario-contacto">
      <div class="fila-formulario">
        
        <div class="columna escribime">
          <h2 class="escribime-title">Escribime</h2>
        </div>

        <div class="columna formulario">
          <form id="formulario-principal" class="formulario-principal">
            <div class="form-row-double">
              <div class="campo">
                <label for="input-nombre">Nombre</label>
                <input name="nombre" id="input-nombre" type="text" placeholder="Tu nombre" required>
              </div>

              <div class="campo">
                <label for="input-email">Email</label>
                <input name="email" id="input-email" type="email" placeholder="tu@mail.com" required>
              </div>
            </div>

            <div class="campo">
              <label for="input-mensaje">Mensaje</label>
              <textarea name="mensaje" id="input-mensaje" placeholder="Tu mensaje..."></textarea>
            </div>

            <div class="campo boton">
              <button type="submit">
                <span>Enviar</span>
                <span class="icono">
                  <i class="fas fa-paper-plane"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
  </div>
  `;
  container.appendChild(nuevoDiv);
}
function activarFormulario() { 
  const idFormulario = "formulario-principal";
  const email = "caiopuyolleguiza@gmail.com";
  const formEl = document.getElementById(idFormulario);
  if (!formEl) { 
    console.error(`No se encontró el contenedor con el selector "${idFormulario}"`);
    return;
  }
  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const jsonFormData = Object.fromEntries(formData.entries());

    fetch('https://apx.school/api/utils/email-to-student', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        to: email,
        message: `Name:${jsonFormData.nombre} <br> From: ${jsonFormData.email} <br> Mensaje: ${jsonFormData.mensaje}`
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('¡Mensaje enviado con éxito!');
      } else {
        alert('¡Mensaje enviado con éxito!');
      }
      
      formEl.reset();
    })
    .catch(error => {
      alert('Error en la conexión. Intenta nuevamente.');
    });
  });
}
