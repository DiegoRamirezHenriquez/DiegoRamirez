const form = document.querySelector("#contacto form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // aquí puedes agregar el código necesario para procesar el formulario y enviar el mensaje
  alert("Mensaje enviado");
});