(() => {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');

  if (!header || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let raf = 0;
  let mx = 0.5;
  let my = 0.5;

  window.addEventListener('pointermove', (event) => {
    mx = event.clientX / window.innerWidth;
    my = event.clientY / window.innerHeight;

    if (!raf) {
      raf = requestAnimationFrame(() => {
        root.style.setProperty('--mouse-x', `${(mx - 0.5) * 18}px`);
        root.style.setProperty('--mouse-y', `${(my - 0.5) * 12}px`);
        raf = 0;
      });
    }
  }, { passive: true });
})();
