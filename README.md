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
