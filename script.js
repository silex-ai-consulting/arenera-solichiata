const WHATSAPP_NUMBER = "584141290808";

// TODO(firebase): Reemplazar este array por datos de Firestore para administrar
// productos, imagenes y disponibilidad desde un panel interno.
const products = [
  {
    name: "Arena lavada",
    description:
      "Material ideal para construccion, mezclas, acabados y obras que requieren arena limpia y de buena calidad.",
    // Foto real de arena; si el cliente confirma que esta imagen corresponde a piedra,
    // intercambiar solo esta ruta con la del siguiente producto.
    image: "assets/images/producto-arena.jpg",
    category: "Material de construccion",
    message: "Hola, quiero cotizar Arena lavada."
  },
  {
    name: "Piedra",
    description:
      "Piedra para construccion, relleno, bases y diferentes necesidades de obra.",
    // Foto real de piedra; si visualmente estuviera invertida, cambiar esta ruta por producto-arena.jpg.
    image: "assets/images/producto-piedra.jpg",
    category: "Material de construccion",
    message: "Hola, quiero cotizar Piedra."
  }
];

// TODO(firebase): Esta lista luego puede salir de Firestore para permitir
// editar servicios y textos comerciales sin tocar el codigo fuente.
const services = [
  {
    title: "Venta de materiales para construccion",
    description: "Presentacion clara de productos principales con enfoque comercial y directo.",
    icon: "layers"
  },
  {
    title: "Despacho de arena y piedra",
    description: "Espacio listo para comunicar cobertura, tiempos y condiciones de entrega.",
    icon: "truck"
  },
  {
    title: "Transporte en volqueta",
    description: "Seccion orientada a destacar capacidad de movimiento y servicio para obra.",
    icon: "route"
  },
  {
    title: "Cotizaciones para obras",
    description: "Botones y mensajes listos para iniciar conversaciones comerciales desde WhatsApp.",
    icon: "document"
  },
  {
    title: "Atencion por WhatsApp",
    description: "Llamados a la accion visibles en hero, cards, formulario y cierre comercial.",
    icon: "message"
  },
  {
    title: "Pedidos por cantidad",
    description: "Formulario preparado para capturar volumen, ubicacion y comentarios del cliente.",
    icon: "measure"
  }
];

// TODO(firebase-storage): Reemplazar o ampliar estas fotos desde Storage cuando
// se implemente el panel administrativo.
const galleryItems = [
  {
    title: "Operacion y despacho",
    description: "Vista real de la zona de trabajo y movimiento operativo.",
    image: "assets/images/hero-operacion.jpg",
    alt: "Operacion real de Arenera Solichata con maquinaria y despacho"
  },
  {
    title: "Arena lavada",
    description: "Material disponible para mezclas, acabados y obra.",
    image: "assets/images/producto-arena.jpg",
    alt: "Arena lavada disponible en Arenera Solichata"
  },
  {
    title: "Piedra",
    description: "Material para bases, relleno y necesidades de construccion.",
    image: "assets/images/producto-piedra.jpg",
    alt: "Piedra disponible en Arenera Solichata"
  },
  {
    title: "Legado familiar",
    description: "La historia y el compromiso detras de Arenera Solichata.",
    image: "assets/images/fundador-solichata.jpg",
    alt: "Fundador de Arenera Solichata y legado familiar"
  }
];

const productsGrid = document.querySelector("#products-grid");
const servicesGrid = document.querySelector("#services-grid");
const galleryGrid = document.querySelector("#gallery-grid");
const productInterestSelect = document.querySelector("#product-interest");
const orderForm = document.querySelector("#order-form");
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-panel a");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxClose = document.querySelector("#lightbox-close");
const revealElements = document.querySelectorAll(".reveal");

const iconMap = {
  layers: `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M12 3 3 8l9 5 9-5-9-5Z"></path>
      <path d="m3 12 9 5 9-5"></path>
      <path d="m3 16 9 5 9-5"></path>
    </svg>
  `,
  truck: `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M3 6h11v8H3z"></path>
      <path d="M14 9h3l4 4v1h-7z"></path>
      <circle cx="7" cy="18" r="2"></circle>
      <circle cx="17" cy="18" r="2"></circle>
    </svg>
  `,
  route: `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M4 6h5l2 4h9"></path>
      <path d="M8 10 5 7 8 4"></path>
      <path d="M20 18h-5l-2-4H4"></path>
      <path d="m16 14 3 3-3 3"></path>
    </svg>
  `,
  document: `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M7 3h7l5 5v13H7z"></path>
      <path d="M14 3v5h5"></path>
      <path d="M10 13h6"></path>
      <path d="M10 17h6"></path>
    </svg>
  `,
  message: `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M4 6h16v10H8l-4 4V6z"></path>
      <path d="M8 10h8"></path>
      <path d="M8 13h5"></path>
    </svg>
  `,
  measure: `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M3 16 16 3l5 5L8 21H3z"></path>
      <path d="m14 5 5 5"></path>
      <path d="m6 18 3-3"></path>
      <path d="m8 14 2 2"></path>
    </svg>
  `
};

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderProducts() {
  const cards = products
    .map((product) => {
      const quoteMessage = `Hola, quiero cotizar ${product.name}.`;

      return `
        <article class="product-card reveal">
          <div class="product-media">
            <img src="${product.image}" alt="${product.name} disponible en Arenera Solichata">
          </div>
          <div class="product-body">
            <span class="category-chip">${product.category}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-actions">
              <a
                class="button button-primary js-whatsapp-link"
                href="${buildWhatsAppUrl(product.message)}"
                data-message="${product.message}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir ${product.name.toLowerCase()}
              </a>
              <a
                class="button button-secondary js-whatsapp-link"
                href="${buildWhatsAppUrl(quoteMessage)}"
                data-message="${quoteMessage}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar cotizacion
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  productsGrid.innerHTML = cards;
}

function renderServices() {
  servicesGrid.innerHTML = services
    .map(
      (service) => `
        <article class="service-card reveal">
          <div class="service-icon">${iconMap[service.icon] || ""}</div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </article>
      `
    )
    .join("");
}

function renderGallery() {
  galleryGrid.innerHTML = galleryItems
    .map(
      (item) => `
        <article
          class="gallery-card reveal${item.isLogo ? " gallery-card-logo" : ""}"
          tabindex="0"
          role="button"
          data-image="${item.image}"
          data-title="${item.title}"
          data-alt="${item.alt}"
          aria-label="Ampliar ${item.title}"
        >
          <img src="${item.image}" alt="${item.alt}">
          <div class="gallery-caption">
            <strong>${item.title}</strong>
            <span>${item.description}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function populateProductSelect() {
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productInterestSelect.appendChild(option);
  });
}

function handleOrderSubmit(event) {
  event.preventDefault();

  const formData = new FormData(orderForm);
  const payload = {
    name: formData.get("name")?.toString().trim() || "",
    product: formData.get("product")?.toString().trim() || "",
    quantity: formData.get("quantity")?.toString().trim() || "",
    location: formData.get("location")?.toString().trim() || "",
    comment: formData.get("comment")?.toString().trim() || "Sin comentario adicional."
  };

  const message =
    `Hola, quiero hacer un pedido en Arenera Solichata.\n` +
    `Nombre: ${payload.name}\n` +
    `Producto: ${payload.product}\n` +
    `Cantidad aproximada: ${payload.quantity}\n` +
    `Ubicacion: ${payload.location}\n` +
    `Comentario: ${payload.comment}`;

  window.open(buildWhatsAppUrl(message), "_blank", "noopener");
}

function setupWhatsAppLinks() {
  document.querySelectorAll(".js-whatsapp-link").forEach((link) => {
    link.setAttribute("href", buildWhatsAppUrl(link.dataset.message || ""));
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest(".js-whatsapp-link");
    if (!link) {
      return;
    }

    link.setAttribute("href", buildWhatsAppUrl(link.dataset.message || ""));
  });
}

function toggleMenu(forceState) {
  const shouldOpen = typeof forceState === "boolean"
    ? forceState
    : !navPanel.classList.contains("is-open");

  navPanel.classList.toggle("is-open", shouldOpen);
  menuToggle.setAttribute("aria-expanded", String(shouldOpen));
  document.body.classList.toggle("menu-open", shouldOpen);

  menuToggle.classList.toggle("is-open", shouldOpen);
}

function setupMobileMenu() {
  menuToggle.addEventListener("click", () => toggleMenu());

  navLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 960) {
      toggleMenu(false);
    }
  });
}

function openLightbox(imageSrc, altText, captionText) {
  lightboxImage.src = imageSrc;
  lightboxImage.alt = altText;
  lightboxCaption.textContent = captionText;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  document.body.classList.remove("menu-open");
}

function setupGalleryLightbox() {
  galleryGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".gallery-card");
    if (!card) {
      return;
    }

    openLightbox(card.dataset.image, card.dataset.alt, card.dataset.title);
  });

  galleryGrid.addEventListener("keydown", (event) => {
    const card = event.target.closest(".gallery-card");
    if (!card || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    openLightbox(card.dataset.image, card.dataset.alt, card.dataset.title);
  });

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

function setupRevealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
}

function init() {
  renderProducts();
  renderServices();
  renderGallery();
  populateProductSelect();
  setupWhatsAppLinks();
  setupMobileMenu();
  setupGalleryLightbox();
  setupRevealOnScroll();
  orderForm.addEventListener("submit", handleOrderSubmit);
}

init();
