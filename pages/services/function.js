const productos = [
  {
    titulo: "Pago de Estampillas",
    imagen: "../../images/pago_estampillas.webp",
    descripcion: "Gestionamos el pago de tus estampillas para trámites oficiales.",
    enlace: "https://wa.link/y4hnts"
  },
  {
    titulo: "Formatos para Certificaciones de Alcaldía",
    imagen: "../../images/formato_certificacion_alcaldia.webp",
    descripcion: "Consigue los formatos correctos y listos para tus certificaciones.",
    enlace: "https://wa.link/y4hnts"
  },
  {
    titulo: "Pago de Multas y Comparendos",
    imagen: "../../images/multas_comparendos.jpg",
    descripcion: "Te ayudamos a pagar tus multas y comparendos sin complicaciones.",
    enlace: "https://wa.link/y4hnts"
  },
  {
    titulo: "Certificación Cámara de Comercio",
    imagen: "../../images/certificacion_comercio.png",
    descripcion: "Gestionamos tu certificado de Cámara de Comercio en minutos.",
    enlace: "https://wa.link/y4hnts"
  },
  {
    titulo: "Actualización del RUT (DIAN)",
    imagen: "../../images/rut_dian.jpg",
    descripcion: "Actualiza tu RUT sin filas ni estrés, nosotros te guiamos.",
    enlace: "https://wa.link/y4hnts"
  },
  {
    titulo: "Copias e Impresiones",
    imagen: "../../images/impresiones_copias.avif",
    descripcion: "Copias nítidas e impresiones en alta calidad para tus documentos.",
    enlace: "https://wa.link/y4hnts"
  },
  {
    titulo: "Venta de SOAT",
    imagen: "../../images/venta_soat.jpg",
    descripcion: "Compra tu SOAT en minutos, sin salir de casa.",
    enlace: "https://wa.link/y4hnts"
  },
  {
    titulo: "Pagos PSE y Acuerdos de Pago",
    imagen: "../../images/pagos_pse.jpg",
    descripcion: "Realizamos tus pagos PSE y acuerdos directamente por ti.",
    enlace: "https://wa.link/y4hnts"
  }
];

function crearProductosDOM() {
  const contenedor = document.getElementById("contenedor-productos");
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <div class="info">
        <h3>${producto.titulo}</h3>
        <div class="image">
          <img src="${producto.imagen}" alt="${producto.titulo}">
        </div>
        <div class="span">
          <p>${producto.descripcion}</p>
        </div>
        <a href="${producto.enlace}" class="purchase" target="_blank">
          <i class="fa-brands fa-whatsapp"></i><p>SABER MÁS</p>
        </a>
      </div>
    `;
    contenedor.appendChild(div);
  });
}

// Ejecutar al cargar
crearProductosDOM();
