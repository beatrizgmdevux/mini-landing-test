// src/js/main.js
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.dataset.open = String(open);
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');

    // Enfoca el primer enlace al abrir (accesibilidad)
    if (open) {
      const firstLink = nav.querySelector('a');
      firstLink && firstLink.focus();
    }
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setOpen(false);
      toggle.focus();
    }
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', (e) => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (!isOpen) return;
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      setOpen(false);
    }
  });

  // Cerrar al hacer clic en un enlace del menú
  nav.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a) setOpen(false);
  });
})();
