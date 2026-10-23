# Entrega técnica del sitio Arenera Solichiata

Última verificación: 23 de octubre de 2026, zona horaria America Caracas.

## Resumen de la solución

El sitio es una página estática en HTML, CSS y JavaScript alojada con GitHub Pages. No usa base de datos, framework frontend, sistema de construcción ni servicio de analítica. La conversión principal ocurre mediante enlaces y un formulario que preparan mensajes para WhatsApp.

## Dominio principal y alojamiento

- Dominio principal: `arenerasolichiata.net`.
- Sitio público: `https://arenerasolichiata.net/`.
- Repositorio: `silex-ai-consulting/arenera-solichiata`.
- Plataforma de alojamiento: GitHub Pages.
- Organización técnica visible en el repositorio: Silex AI Consulting. La persona responsable y su acuerdo de soporte deben confirmarse por contrato o por el propietario de la cuenta.
- El dominio raíz resuelve a las cuatro direcciones públicas de GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153` y `185.199.111.153`.
- `www.arenerasolichiata.net` es un CNAME hacia `silex-ai-consulting.github.io`.
- Los servidores DNS del dominio principal son `ns65.domaincontrol.com` y `ns66.domaincontrol.com`.
- El registro RDAP identifica a GoDaddy.com, LLC como registrador del dominio principal, con fecha de expiración registrada el 31 de julio de 2027. La renovación y la facturación deben verificarse directamente en la cuenta del cliente o de Silex.

## Dominios adicionales observados

### arenerasolichiata.xyz

- Resuelve a `76.223.105.230` y `13.248.243.5`.
- Usa `ns37.domaincontrol.com` y `ns38.domaincontrol.com`.
- Presenta una página independiente con título `arenerasolichiata.xyz`; no redirige al sitio principal.
- RDAP identifica a GoDaddy.com, LLC como registrador y una expiración registrada el 31 de julio de 2027.

### arenerasolichiata.vip

- Resuelve a `15.197.148.33` y `3.33.130.190`.
- Usa `ns65.domaincontrol.com` y `ns66.domaincontrol.com`.
- Responde con una página mínima que envía al visitante a `/lander`; no redirige al sitio principal.
- El proveedor DNS es coherente con GoDaddy. El registrador y la fecha de expiración deben confirmarse en la cuenta porque el servicio RDAP del registro `.vip` no respondió durante esta verificación.

### arenerasolichiata.store

- Resuelve a `3.33.130.190` y `15.197.148.33`.
- Usa `ns75.domaincontrol.com` y `ns76.domaincontrol.com`.
- Responde como página de aterrizaje independiente; no redirige al sitio principal.
- RDAP identifica a GoDaddy.com, LLC como registrador y una expiración registrada el 31 de julio de 2027.

Los dominios adicionales están activos en DNS, pero no están configurados como redirecciones al dominio principal. Antes de cambiarlos debe definirse si se conservarán como protección de marca, si se redirigirán o si se dejarán vencer.

## Publicación y GitFlow

- `main` es la rama de producción.
- `develop` es la rama de integración.
- Las actualizaciones se preparan en `feature/*` y se revisan mediante Pull Request hacia `develop`.
- La publicación requiere un Pull Request separado de `develop` hacia `main`, después de la aprobación del cliente.
- `main` contiene `CNAME` con el dominio personalizado y `develop` no lo contiene. Al promover cambios a producción debe verificarse que el merge conserve `CNAME`.
- La configuración exacta de GitHub Pages en Settings, incluido el origen de publicación, debe confirmarse con un usuario que tenga permisos de administración del repositorio.

## Servicios externos utilizados

- GitHub y GitHub Pages: control de versiones y alojamiento.
- GoDaddy o DNS administrado bajo `domaincontrol.com`: dominios y DNS observados.
- Google Fonts: tipografías Manrope y Montserrat.
- Google Maps: mapa embebido y enlace de ubicación.
- WhatsApp: pedidos y cotizaciones mediante enlaces `wa.me`.
- Instagram: la cuenta `@arenerasolichiata` se muestra como dato de contacto, pero el sitio no integra un feed ni una API.

No se detectaron analítica, cookies de seguimiento, pasarela de pago, Firebase, CRM ni servicios de correo en el código actual.

## Recursos del sitio

- `assets/images`: fotografías, logotipo y portadas WebP.
- `assets/videos`: videos MP4 preparados con `faststart` y audio AAC de menor bitrate.
- `assets/certificaciones`: imágenes del informe para el carrusel.
- `assets/docs`: informe técnico completo en PDF.
- `assets/icons`: favicons e icono para dispositivos Apple.

Los originales entregados por el cliente permanecen fuera del repositorio. Solo se incorporaron versiones finales necesarias. La captura `earth.jpg.jpeg`, el HTML descargado de Google Maps y el DOCX comercial no se publicaron.

## Datos comerciales verificados en el código

- WhatsApp publicado: `584149215880`, visible como 0414-9215880.
- Teléfono de oficina de planta: 0424-2230217.
- RIF visible: J-31445571-0.
- Instagram visible: `@arenerasolichiata`.
- Dirección visible: Autopista Guatire-Caucagua, Sector El Banqueo, Chuspita, Caucagua.

El README anterior documentaba `584141290808`, pero ese número no era utilizado por la página. Se actualizó la documentación para coincidir con el número realmente publicado. No se modificaron teléfonos, RIF ni dirección.

## Ubicación

El mapa público conserva `10.332263946533203, -66.4330825805664`. El archivo de mapa entregado por el cliente señala `10.3329324, -66.4325024`. La separación aproximada entre ambos puntos es de 97,7 metros.

No se cambió el punto publicado porque debe confirmarse si el nuevo punto representa la entrada, la planta o una referencia interna. La captura de Google Earth no se incorporó para evitar una reutilización sin validación de licencia y porque el mapa embebido ya mantiene la atribución del proveedor.

## Contenido técnico y comercial pendiente de aprobación

- Confirmar que `Est. 2006` y la identidad del logotipo están aprobados para usos adicionales fuera del propio logotipo y de los textos históricos ya existentes.
- Confirmar con el responsable técnico qué afirmaciones pueden aplicarse a lotes o despachos futuros. El informe describe muestras concretas y contiene observaciones diferentes según el ensayo; no se presenta como garantía general.
- Confirmar si el audio de los videos contiene diálogo relevante. Si lo contiene, se necesita una transcripción aprobada para crear subtítulos fieles.
- Confirmar si el punto alternativo de Google Maps debe sustituir la ubicación actual.
- Confirmar si los dominios `.xyz`, `.vip` y `.store` deben redirigir al dominio principal.

## Futuras actualizaciones

1. Obtener la versión más reciente con `git fetch origin --prune`.
2. Crear una rama `feature/*` desde `develop` o usar la rama asignada.
3. Editar HTML, CSS, JavaScript o recursos dentro de `assets`.
4. Probar localmente con `python -m http.server 4173` y abrir `http://127.0.0.1:4173/index.html`.
5. Ejecutar `node --check script.js` y verificar rutas, navegación, formulario, videos, galería y responsive.
6. Hacer commit y push únicamente en la rama feature.
7. Abrir Pull Request hacia `develop`.
8. Publicar mediante Pull Request de `develop` hacia `main` solo después de la aprobación.

## Respaldo y recuperación

- Mantener el repositorio remoto como respaldo principal y clonar o descargar una copia antes de cambios de DNS o publicación.
- Identificar el commit estable de producción y crear una etiqueta o release cuando se apruebe una versión importante.
- Para recuperar una versión, crear una rama desde el commit estable y abrir un Pull Request que revierta los cambios. No usar force push ni reescribir el historial de `main`.
- Conservar por separado los originales del cliente, ya que el repositorio contiene versiones optimizadas para web.

## Accesos recomendados para el cliente

- GitHub: invitar al cliente como colaborador de este repositorio o mediante un equipo con acceso limitado. No compartir credenciales personales ni acceso a otros repositorios.
- GoDaddy: usar acceso delegado o un rol limitado disponible en la cuenta. No compartir contraseña, códigos de verificación ni métodos de pago.
- Facturación y renovación: documentar en un gestor seguro quién paga cada dominio, la renovación automática, el método de pago y el contacto de recuperación. Estos datos no deben guardarse en el repositorio.

## Datos que falta confirmar fuera del repositorio

- Propietario contractual de cada dominio y de la cuenta de GitHub.
- Fuente exacta de publicación configurada en Settings de GitHub Pages.
- Renovación automática, importes, moneda, método de pago y responsable de facturación.
- Fechas internas de contrato, soporte y mantenimiento.
- Accesos concedidos al cliente y procedimiento de recuperación de cuenta.
