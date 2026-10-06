(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.site-header');

  /* ---------- Header parallax ----------
     The CSS variables are set on the header only (not on <html>), so moving the mouse
     no longer invalidates styles for the whole document. */
  if (header && !reducedMotion && window.matchMedia('(pointer: fine)').matches) {
    let raf = 0;
    let mx = 0.5;
    let my = 0.5;
    let visible = true;

    const update = () => {
      header.style.setProperty('--mouse-x', `${(mx - 0.5) * 18}px`);
      header.style.setProperty('--mouse-y', `${(my - 0.5) * 12}px`);
      raf = 0;
    };

    // stop doing work once the header has scrolled out of view
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; }).observe(header);
    }

    window.addEventListener('pointermove', (event) => {
      if (!visible || (event.pointerType && event.pointerType !== 'mouse')) return;
      mx = event.clientX / window.innerWidth;
      my = event.clientY / window.innerHeight;
      if (!raf) raf = requestAnimationFrame(update);
    }, { passive: true });
  }

  /* ---------- Project filters ----------
     Counters on the buttons, and the active filter lives in the URL hash (#paused),
     so a filtered view can be shared and survives a reload. */
  const filters = document.querySelectorAll('.project-filter');
  const projects = document.querySelectorAll('.project[data-status]');
  if (filters.length && projects.length) {
    const tagsOf = (project) => (project.dataset.tags || '').split(',').map((tag) => tag.trim()).filter(Boolean);
    const known = new Set(Array.from(filters, (button) => button.dataset.filter || 'all'));

    const apply = (filter, updateHash) => {
      if (!known.has(filter)) filter = 'all';
      filters.forEach((item) => {
        const active = (item.dataset.filter || 'all') === filter;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      projects.forEach((project) => {
        project.hidden = filter !== 'all' && !tagsOf(project).includes(filter);
      });
      if (updateHash && window.history && history.replaceState) {
        history.replaceState(null, '', filter === 'all' ? location.pathname + location.search : `#${filter}`);
      }
    };

    filters.forEach((button) => {
      const filter = button.dataset.filter || 'all';
      const count = filter === 'all'
        ? projects.length
        : Array.from(projects).filter((project) => tagsOf(project).includes(filter)).length;
      const badge = document.createElement('span');
      badge.className = 'project-filter-count';
      badge.textContent = String(count);
      button.appendChild(badge);
      button.addEventListener('click', () => apply(filter, true));
    });

    apply(decodeURIComponent(location.hash.slice(1)), false);
    window.addEventListener('hashchange', () => apply(decodeURIComponent(location.hash.slice(1)), false));
  }

  /* ---------- Lightbox (used once the archive gets a gallery) ---------- */
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

  /* ---------- Archive filters ---------- */
  const archiveFilters = document.querySelectorAll('.archive-filter');
  const archiveItems = document.querySelectorAll('.archive-item[data-archive-tags]');
  if (archiveFilters.length && archiveItems.length) {
    archiveFilters.forEach((button) => button.addEventListener('click', () => {
      const filter = button.dataset.archiveFilter || 'all';
      archiveFilters.forEach((b) => b.classList.toggle('is-active', b === button));
      archiveItems.forEach((item) => {
        const tags = (item.dataset.archiveTags || '').split(',');
        item.hidden = filter !== 'all' && !tags.includes(filter);
      });
    }));
  }

  /* ---------- Easter egg: ritual mode ----------
     ↑ ↑ ↓ ↓ ← → ← → B A  toggles html.ritual (see "RITUAL MODE" in style.css).
     Remove this block together with that CSS section if you don't want it. */
  const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let progress = 0;
  window.addEventListener('keydown', (event) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const tag = (event.target && event.target.tagName) || '';
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag) || (event.target && event.target.isContentEditable)) return;
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    progress = key === code[progress] ? progress + 1 : (key === code[0] ? 1 : 0);
    if (progress === code.length) {
      progress = 0;
      const on = root.classList.toggle('ritual');
      try { console.log(on ? '✦ The ritual has begun.' : '✦ The ritual is over.'); } catch (e) { /* no console */ }
    }
  });
})();
