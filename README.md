# Arenera Solichiata

Sitio comercial estático de Arenera Solichiata, C.A. con contenido institucional, productos, ensayos técnicos, galería, videos de planta y contacto directo por WhatsApp.

## GitHub Pages

Sitio público:

```text
https://arenerasolichiata.net/
```

El dominio apunta a GitHub Pages. La rama `main` conserva el archivo `CNAME`; no debe eliminarse al promover cambios desde `develop`.

## Contenido del sitio

Esta versión presenta la página comercial final de Arenera Solichiata, C.A.:

- Landing comercial responsive y accesible por teclado.
- Productos renderizados desde JavaScript.
- Botones y formulario conectados a WhatsApp.
- Galería visual con fotos reales optimizadas y modal accesible.
- Sección de videos verticales con carga bajo demanda y portadas locales.
- Sección comercial sobre selección responsable de materiales.
- Carrusel de ensayos técnicos con acceso al informe completo.
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
- `assets/images`: logo, fotos principales, nuevas imágenes WebP y portadas de video.
- `assets/videos`: videos MP4 optimizados para reproducción web.
- `assets/icons`: favicon e iconos generados desde el logo.
- `assets/certificaciones`: imágenes del informe técnico usadas en el carrusel.
- `assets/docs`: informe técnico completo en PDF.
- `docs/entrega-cliente.md`: inventario técnico, dominios, publicación, respaldo y pendientes.

## WhatsApp

El número comercial está centralizado en `script.js`:

```js
const WHATSAPP_NUMBER = "584149215880";
```

Todos los enlaces y el formulario arman la URL con `encodeURIComponent` para enviar mensajes listos por WhatsApp.

El número anterior `584141290808` solo aparecía en una versión desactualizada de este README. La página publicada, el formulario y los enlaces usan `584149215880` (0414-9215880).

## Flujo de actualización

1. Crear o reutilizar una rama `feature/*` desde `develop`.
2. Probar localmente con el servidor estático.
3. Abrir un Pull Request de la feature hacia `develop`.
4. Después de la revisión del cliente, abrir un Pull Request de `develop` hacia `main`.
5. Verificar que `CNAME` siga presente en `main` antes de publicar.

No se deben hacer force pushes ni publicar directamente en `main`.
