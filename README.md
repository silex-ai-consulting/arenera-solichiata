# Arenera Solichata

Landing page comercial de Arenera Solichata con imágenes reales, favicon del logo, certificaciones técnicas y contacto directo por WhatsApp.

## GitHub Pages

URL prevista del sitio publicado:

```text
https://silex-ai-consulting.github.io/arenera-solichiata/
```

Si GitHub Pages aún no está activo, esa URL funcionará después de publicar la rama correspondiente.

## Contenido del sitio

Esta versión presenta la página comercial final de Arenera Solichata, C.A.:

- Landing comercial responsive.
- Productos renderizados desde JavaScript.
- Botones y formulario conectados a WhatsApp.
- Galería visual con fotos reales y modal para ampliar piezas.
- Carrusel de certificaciones técnicas con acceso al informe completo.
- Secciones institucionales de misión, visión, valores y responsabilidad ambiental.

## Abrir localmente

Opción 1:

1. Abre `index.html` directamente en tu navegador.

Opción 2:

1. Abre una terminal en este proyecto.
2. Ejecuta:

```powershell
python -m http.server 4173
```

3. Abre:

```text
http://127.0.0.1:4173/index.html
```

## Estructura

- `index.html`: estructura semántica de la landing.
- `styles.css`: estilos modernos, variables visuales y responsive.
- `script.js`: render de productos, servicios, galería, menú, modal, certificaciones y WhatsApp.
- `assets/images`: logo y fotos principales del negocio (`logo-solichata.png`, `fundador-solichata.jpg`, `hero-operacion.jpg`, `producto-arena.jpg`, `producto-piedra.jpg`).
- `assets/icons`: favicon e iconos generados desde el logo.
- `assets/certificaciones`: imágenes del informe técnico usadas en el carrusel.
- `assets/docs`: informe técnico completo en PDF.

## WhatsApp

El número comercial está centralizado en `script.js`:

```js
const WHATSAPP_NUMBER = "584141290808";
```

Todos los enlaces y el formulario arman la URL con `encodeURIComponent` para enviar mensajes listos por WhatsApp.
