function agregarFormulario(container) {
  const nuevoDiv = document.createElement("div");

  nuevoDiv.innerHTML = `
  <div class="section formulario-contacto">
    <div class="contenedor-general">
      <div class="columns is-multiline is-vcentered formulario">
        
        <div class="column is-12-mobile is-4-desktop">
          <h2 class="title is-3 escribime-title">Escribime</h2>
        </div>

        <div class="column is-12-mobile is-8-desktop contenedor-formulario">
          <form id="formulario-principal">
            <div class="form-row-double">
              <div class="field">
                <label class="label" for="input-nombre">Nombre</label>
                <div class="control">
                  <input class="input" name="nombre" id="input-nombre" type="text" placeholder="Tu nombre" required>
                </div>
              </div>

              <div class="field">
                <label class="label" for="input-email">Email</label>
                <div class="control">
                  <input class="input" name="email" id="input-email" type="email" placeholder="tu@mail.com" required>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label" for="input-mensaje">Mensaje</label>
              <div class="control">
                <textarea class="textarea" name="mensaje" id="input-mensaje" placeholder="Tu mensaje..."></textarea>
              </div>
            </div>

            <div class="field has-text-left">
              <button type="submit" class="button is-primary is-rounded">
                <span>Enviar</span>
                <span class="icon">
                  <i class="fas fa-paper-plane"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>`
  ;
  container.appendChild(nuevoDiv);
}
function activarFormulario() { 
  const idFormulario = "formulario-principal";
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
        to: jsonFormData.email,
        message: jsonFormData.mensaje
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('¡Mensaje enviado con éxito!');
      } else {
        alert('Hubo un problema al enviar el mensaje.');
      }
    })
    .catch(error => {
      alert('Error en la conexión. Intenta nuevamente.');
    });
  });
}