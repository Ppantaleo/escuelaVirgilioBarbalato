# Sitio web — Escuela Dr. Virgilio Barbalato
**Carlos Pellegrini 331, General Levalle, Córdoba**

---

## Estructura del proyecto

```
/
├── index.html          ← página de inicio
├── historia.html       ← historia institucional
├── socios.html         ← campaña de ex alumnos socios
├── css/
│   └── estilos.css     ← estilos compartidos (no editar sin necesidad)
├── img/
│   └── escuela-logo.jpg   ← foto/logo de la escuela
│   └── [agregar más fotos acá]
└── README.md
```

---

## Cómo publicar en GitHub Pages

1. Crear un repositorio en GitHub (puede ser privado o público).
2. Subir todos estos archivos manteniendo la estructura de carpetas.
3. Ir a **Settings → Pages → Source → Deploy from branch → main → / (root)**.
4. GitHub asigna una URL del tipo `https://usuario.github.io/nombre-repo/`.

---

## Tareas pendientes antes de publicar

### 1. Quitar el badge de "sitio en desarrollo"
En cada uno de los tres archivos HTML, buscar el bloque:
```html
<!-- INICIO PREVIEW BADGE -->
<div class="preview-badge"> ... </div>
<!-- FIN PREVIEW BADGE -->
```
Comentarlo o borrarlo. El badge amarillo desaparece.

### 2. Actualizar los posts de Instagram
En `index.html`, buscar los tres iframes con:
```
src="https://www.instagram.com/p/CODIGO_POST_1/embed/"
```
Reemplazar `CODIGO_POST_1`, `CODIGO_POST_2`, `CODIGO_POST_3` con los
shortcodes reales de los posts que quieran mostrar.

**Cómo obtener el código:**
- Abrí el post en Instagram
- Copiá la URL: `https://www.instagram.com/p/ABC123xyz/`
- El código es lo que está entre `/p/` y el `/` final: `ABC123xyz`

### 3. Definir los precios de los planes de socios
En `socios.html`, buscar los tres bloques con `A definir` y reemplazar
con los montos reales acordados por la institución.

### 4. Activar el formulario de socios
El formulario en `socios.html` actualmente no envía datos (no tiene backend).
Opciones para activarlo sin costo en GitHub Pages:

- **Formspree** (recomendado): https://formspree.io
  - Registrarse, crear un formulario, copiar el ID.
  - Reemplazar `action="#"` por `action="https://formspree.io/f/TU_ID"`.
  - Gratis hasta 50 envíos por mes.

- **Google Forms embebido**: opción más simple, sin configuración técnica.
  - Crear el formulario en Google Forms.
  - Usar el iframe de "insertar" que provee Google.

### 5. Agregar más fotos
Guardar archivos en la carpeta `img/` y referenciarlos con:
```html
<img src="img/nombre-foto.jpg" alt="descripción">
```
En `historia.html` hay un comentario que indica exactamente dónde agregarlas.

---

## Actualización de contenido

Para agregar texto, fotos o videos basta con editar los archivos HTML
directamente. No se necesita ningún gestor de contenidos ni base de datos.

Los videos de YouTube se actualizan cambiando el ID en la URL del iframe:
```
src="https://www.youtube.com/embed/ID_DEL_VIDEO"
```

---

*Sitio construido como sitio estático para GitHub Pages. Sin dependencias de servidor.*

---

## Gestión del archivo fotográfico

### Estructura de carpetas

```
/
├── archivo/
│   ├── index.html              ← página principal del archivo
│   ├── decada-ejemplo.html     ← PLANTILLA — copiar para cada nueva sección
│   ├── decada-1930.html        ← (crear cuando haya fotos)
│   ├── decada-1940.html        ← (crear cuando haya fotos)
│   └── ...
└── img/
    └── archivo/
        ├── portada-fundacion.jpg   ← portadas de las cards de décadas
        ├── portada-1930.jpg
        ├── fundacion-foto1.jpg     ← fotos de cada sección
        └── ...
```

### Agregar una nueva sección/década

1. Copiar `archivo/decada-ejemplo.html` → renombrar a `archivo/decada-1980.html`
2. Editar en el nuevo archivo:
   - `<title>`: cambiar "Fundación 1914–1929" por "Década de 1980"
   - Hero: cambiar eyebrow, título y descripción
   - Contador de fotos
3. Subir las fotos a `img/archivo/` (nombres descriptivos sin espacios, ej: `1980-acto-egresados.jpg`)
4. En el nuevo archivo, reemplazar el bloque "estado vacío" por las fotos usando la estructura indicada en el comentario
5. Actualizar el array `fotos` en el `<script>` al pie de la página
6. En `archivo/index.html`: buscar la card de esa década y:
   - Cambiar `class="decada-card proxima"` por `class="decada-card"`
   - Cambiar `href="#"` por `href="decada-1980.html"`
   - Reemplazar el placeholder por `<img src="../img/archivo/portada-1980.jpg">`
   - Actualizar el badge a `class="decada-badge disponible"` y texto a "X fotos · Ver →"

### Agregar fotos al carrusel destacado (archivo/index.html)

Buscar el comentario "CARRUSEL — CÓMO AGREGAR FOTOS DESTACADAS" y seguir
la estructura indicada. Actualizar también el contador de fotos en el span.

### Recomendaciones para las fotos

- Formato: JPG, calidad 80-85% (equilibrio tamaño/calidad)
- Ancho máximo: 1600px (el lightbox no necesita más)
- Portadas de cards: recortar a proporción 4:3 antes de subir
- Nombres: sin espacios, sin acentos. Ej: `1970-foto-grupo-6grado.jpg`
- Organizar en subcarpetas si la cantidad crece: `img/archivo/1970/`, etc.
