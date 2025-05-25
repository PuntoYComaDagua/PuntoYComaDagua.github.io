const productos = [
    {
      titulo: "",
      imagen: "images/certificacion_comercio.png",
    },
    {
      titulo: "",
      imagen: "images/impresiones_copias.avif",
    },
    {
      titulo: "",
      imagen: "images/pago_estampillas.webp",
    },
    {
      titulo: "",
      imagen: "images/multas_comparendos.jpg",
    },
    {
      titulo: "",
      imagen: "images/rut_dian.jpg",
    }
  ];
  
  let currentIndex = 0;
  const sliderImg = document.getElementById("slider-img");
  
  function mostrarSiguienteImagen() {
    sliderImg.style.opacity = 0;
  
    setTimeout(() => {
      sliderImg.src = productos[currentIndex].imagen;
      sliderImg.alt = productos[currentIndex].titulo;
      sliderImg.title = productos[currentIndex].titulo;
      sliderImg.style.opacity = 1;
  
      currentIndex = (currentIndex + 1) % productos.length;
    }, 500);
  }
  
  mostrarSiguienteImagen();
  setInterval(mostrarSiguienteImagen, 3000);
  