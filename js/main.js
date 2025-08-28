// js/main.js
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.dataset.open = String(open);
    if (open) {
      toggle.setAttribute('aria-label', 'Cerrar menú');
    } else {
      toggle.setAttribute('aria-label', 'Abrir menú');
    }
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  });

  // Close with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close when clicking outside on mobile
  document.addEventListener('click', (e) => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (!isOpen) return;
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      setOpen(false);
    }
  });
})();
