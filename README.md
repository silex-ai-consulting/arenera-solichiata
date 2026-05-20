# Arenera Solichata

Prototipo visual inicial de la landing page comercial de Arenera Solichata.

## Objetivo de esta etapa

Esta version esta enfocada en validacion visual con el cliente:

- Landing comercial responsive.
- Productos renderizados desde JavaScript.
- Botones y formulario conectados a WhatsApp.
- Galeria visual y modal para ampliar piezas.
- Base lista para crecer luego con Firebase y panel admin.

## Abrir localmente

Opcion 1:

1. Abre `index.html` directamente en tu navegador.

Opcion 2:

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

- `index.html`: estructura semantica de la landing.
- `styles.css`: estilos modernos, variables visuales y responsive.
- `script.js`: render de productos, servicios, galeria, menu, modal y WhatsApp.
- `assets/images`: logo del proyecto y piezas visuales locales de apoyo.

## Siguiente etapa

Mas adelante se pueden conectar:

- Firebase Hosting.
- Firebase Auth para administrador.
- Firestore para productos, servicios y publicaciones.
- Firebase Storage para imagenes reales del negocio.
- Ruta protegida `/admin` y panel administrativo.
