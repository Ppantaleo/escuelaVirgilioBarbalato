/* ============================================================
   Banner de consentimiento de cookies — sitio Virgilio Barbalato
   ------------------------------------------------------------
   Trabaja con Google Consent Mode: en cada página, el snippet de
   gtag declara `analytics_storage: 'denied'` por defecto. Acá solo
   actualizamos a 'granted' si la persona acepta, y recordamos la
   elección en localStorage para no volver a mostrar el aviso.
   ============================================================ */
(function () {
  var KEY = 'vb-cookie-consent'; // valores: 'granted' | 'denied'
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}

  function actualizarConsentimiento(estado) {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: estado === 'granted' ? 'granted' : 'denied'
      });
    }
  }

  function guardar(estado) {
    try { localStorage.setItem(KEY, estado); } catch (e) {}
    actualizarConsentimiento(estado);
    var b = document.getElementById('cookie-banner');
    if (b) {
      b.classList.remove('visible');
      setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 400);
    }
  }

  // Si ya hubo una elección previa, la aplicamos y no mostramos nada.
  if (stored === 'granted') { actualizarConsentimiento('granted'); return; }
  if (stored === 'denied')  { return; }

  // Ruta a legal.html (las páginas de /archivo/ están un nivel adentro).
  var base = location.pathname.indexOf('/archivo/') !== -1 ? '../' : '';

  function construirBanner() {
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Aviso de cookies');
    banner.innerHTML =
      '<div class="cookie-banner-inner">' +
        '<p class="cookie-banner-text">' +
          'Usamos cookies propias y de terceros (Google Analytics y Disqus) para medir las ' +
          'visitas y permitir los comentarios. Podés aceptarlas o continuar solo con las ' +
          'necesarias. <a href="' + base + 'legal.html">Más información</a>.' +
        '</p>' +
        '<div class="cookie-banner-btns">' +
          '<button type="button" class="cookie-btn cookie-btn-rechazar" id="cookieRechazar">Solo necesarias</button>' +
          '<button type="button" class="cookie-btn cookie-btn-aceptar" id="cookieAceptar">Aceptar</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(banner);
    document.getElementById('cookieAceptar').addEventListener('click', function () { guardar('granted'); });
    document.getElementById('cookieRechazar').addEventListener('click', function () { guardar('denied'); });
    requestAnimationFrame(function () { banner.classList.add('visible'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', construirBanner);
  } else {
    construirBanner();
  }
})();
