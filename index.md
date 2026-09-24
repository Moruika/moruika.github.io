(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.site-header');

  if (header && !reducedMotion) {
    let raf = 0;
    let mx = 0.5;
    let my = 0.5;

    const update = () => {
      root.style.setProperty('--mouse-x', `${(mx - 0.5) * 18}px`);
      root.style.setProperty('--mouse-y', `${(my - 0.5) * 12}px`);
      raf = 0;
    };

    window.addEventListener('pointermove', (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      mx = event.clientX / window.innerWidth;
      my = event.clientY / window.innerHeight;
      if (!raf) raf = requestAnimationFrame(update);
    }, { passive: true });
  }

  const filters = document.querySelectorAll('.project-filter');
  const projects = document.querySelectorAll('.project[data-status]');
  if (filters.length && projects.length) {
    filters.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter || 'all';
        filters.forEach((item) => {
          item.classList.toggle('is-active', item === button);
          item.setAttribute('aria-pressed', item === button ? 'true' : 'false');
        });
        projects.forEach((project) => {
          const tags = (project.dataset.tags || '').split(',');
          project.hidden = filter !== 'all' && !tags.includes(filter);
        });
      });
    });
    filters.forEach((button) => button.setAttribute('aria-pressed', button.classList.contains('is-active') ? 'true' : 'false'));
  }

  const dialog = document.querySelector('.lightbox');
  const preview = document.querySelector('.lightbox-image');
  const close = document.querySelector('.lightbox-close');
  const openers = document.querySelectorAll('.gallery-open[data-lightbox-src]');

  if (dialog && preview && openers.length) {
    const closeDialog = () => {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
      preview.removeAttribute('src');
    };

    openers.forEach((opener) => {
      opener.addEventListener('click', () => {
        preview.src = opener.dataset.lightboxSrc;
        preview.alt = opener.dataset.lightboxAlt || '';
        if (typeof dialog.showModal === 'function') dialog.showModal();
        else dialog.setAttribute('open', '');
      });
    });

    close?.addEventListener('click', closeDialog);
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) closeDialog();
    });
    dialog.addEventListener('cancel', closeDialog);
  }
})();
