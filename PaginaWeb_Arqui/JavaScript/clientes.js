document.getElementById("miFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario por defecto

  // Obtener los datos del formulario
  const formData = new FormData(this);

  // Enviar los datos del formulario al servidor
  fetch("/procesar_formulario", {
      method: "POST",
      body: formData
  })
  .then(response => {
      if (response.ok) {
          alert("¡Formulario enviado y procesado correctamente!");
          this.reset(); // Limpiar el formulario después de enviar
      } else {
          alert("Error al procesar el formulario. Por favor, inténtelo de nuevo.");
      }
  })
  .catch(error => {
      alert("Error de red. Por favor, inténtelo de nuevo más tarde.");
      console.error(error);
  });
});
