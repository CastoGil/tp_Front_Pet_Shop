document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-contacto");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validar los campos
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;
    const motivo = document.getElementById("motivo").value;

    if (!nombre || !email || !telefono || !mensaje || !motivo) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    Swal.fire({
      position: "center",
      icon: "success",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FwVKsNgHefF7uRQwbGOpUEtofXTQjURBMUOdnpacKw&s",
      title:
        "Formulario enviado correctamente, Pronto nos pondremos en contacto!",
      showConfirmButton: false,
      timer: 3500,
    });
    formulario.reset();
  });
  const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const cartItemCount = document.querySelector(".badge");

      const currentCount = parseInt(cartItemCount.innerText);
      const newCount = currentCount + 1;
      Toastify({
        text: "Agregado al Carrito",

        duration: 4000,
        gravity: "bottom",
        position: "right",
      }).showToast();
      // Actualizar la cantidad en el carrito
      cartItemCount.innerText = newCount;
    });
  });
  const moreInfoButtons = document.querySelectorAll(".btn-servicio");
    
  moreInfoButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const serviceName = button.parentNode.querySelector("h3").textContent;
      let alertTitle = "";
      let alertText = "";
      let imageUrl = "";

      // Asignar contenido según el servicio
      switch (serviceName) {
        case "Peluquería":
          alertTitle = "Peluquería";
          alertText =
            "Nuestro servicio de peluquería para mascotas está diseñado para dejar a tu compañero peludo luciendo su mejor aspecto. Nuestros estilistas caninos son expertos en cortes de pelo adaptados a cada raza y estilo, asegurando que tu mascota se sienta cómoda y feliz durante todo el proceso. Escribenos en alguna de nuestras redes sociales o completa el formulario y te estaremos contactando";
          imageUrl =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1HLZoYPABm3gnZpVE7QdNfiFzgWzNkwIUyJllTRGIw&s";
          break;
        case "Veterinaria":
          alertTitle = "Veterinaria";
          alertText =
            "Nuestro equipo veterinario altamente calificado ofrece una amplia gama de servicios médicos para garantizar la salud y el bienestar de tu mascota. Desde consultas de rutina hasta tratamientos especializados, estamos aquí para proporcionar la atención veterinaria excepcional que tu mascota merece. Escribenos en alguna de nuestras redes sociales o completa el formulario y te estaremos contactando";
          imageUrl =
            "https://nupec.com/wp-content/uploads/2022/09/vet-appointment-2021-09-24-03-25-35-utc-min.jpg";
          break;
        case "Adopciones":
          alertTitle = "Adopciones";
          alertText =
            "Nuestro programa de adopción de mascotas ofrece una oportunidad para que perros y gatos abandonados encuentren un hogar amoroso y permanente. Si estás buscando un nuevo compañero peludo, visita nuestro refugio y conoce a las adorables mascotas que están esperando ser adoptadas.Escribenos en alguna de nuestras redes sociales o completa el formulario y te estaremos contactando";
          imageUrl =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5s38kGHk9O-t18S195JmlB-yWScBv5XahqaajSI1cXA&s";
          break;
        default:
          alertTitle = "Información general";
          alertText =
            "¡Bienvenido a nuestro sitio! Aquí encontrarás información sobre nuestros servicios para mascotas.";
          imageUrl = "https://unsplash.it/400/200";
          break;
      }

      Swal.fire({
        title: alertTitle,
        text: alertText,
        imageUrl: imageUrl,
        imageWidth: 500,
        imageHeight: 300,
        imageAlt: "Custom image",
      });
    });
  });
});
