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

    // malformed hashes must not throw; unrelated anchors (#main, skip-link) must not reset the filter
    const applyHash = () => {
      let hash = '';
      try { hash = decodeURIComponent(location.hash.slice(1)); } catch (e) { /* malformed hash */ }
      if (known.has(hash)) apply(hash, false);
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
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

  /* ---------- Helpers for the lazy widgets below ---------- */
  const whenVisible = (el, run) => {
    if (!('IntersectionObserver' in window)) { run(); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { io.disconnect(); run(); }
    }, { rootMargin: '200px' });
    io.observe(el);
  };
  const cached = (key, ttl) => {
    try {
      const hit = JSON.parse(sessionStorage.getItem(key) || 'null');
      return hit && Date.now() - hit.t < ttl ? hit.d : null;
    } catch (e) { return null; }
  };
  const remember = (key, data) => { try { sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), d: data })); } catch (e) { /* storage full or blocked */ } };

  /* ---------- Last Dota 2 match (public OpenDota API, no key) ----------
     Hidden until real data arrives; stays hidden if the profile hides match data or the API is down. */
  document.querySelectorAll('[data-last-match]').forEach((card) => {
    const api = 'https://api.opendota.com/api';
    const lang = card.dataset.lang || 'en';
    const f = (name) => card.querySelector(`[data-f="${name}"]`);
    const getJSON = async (path, ttl, shape) => {
      const key = `od:${path}`;
      const hit = cached(key, ttl);
      if (hit) return hit;
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 8000);
      try {
        const res = await fetch(api + path, { signal: ctl.signal });
        if (!res.ok) throw new Error(String(res.status));
        const data = shape(await res.json());
        remember(key, data);
        return data;
      } finally { clearTimeout(timer); }
    };
    const run = async () => {
      try {
        const id = encodeURIComponent(card.dataset.account);
        const [matches, heroes] = await Promise.all([
          getJSON(`/players/${id}/recentMatches`, 10 * 60 * 1000, (d) => (Array.isArray(d) ? d.slice(0, 20) : [])),
          getJSON('/heroes', 24 * 60 * 60 * 1000, (d) => Object.fromEntries((Array.isArray(d) ? d : []).map((h) => [h.id, h.localized_name]))),
        ]);
        if (!matches.length) return;
        const won = (m) => (m.player_slot < 128) === Boolean(m.radiant_win);
        const last = matches[0];
        const win = won(last);
        const result = f('result');
        result.textContent = win ? card.dataset.win : card.dataset.loss;
        card.classList.toggle('is-win', win);
        card.classList.toggle('is-loss', !win);
        f('hero').textContent = heroes[last.hero_id] || `Hero #${last.hero_id}`;
        f('kda').textContent = `${last.kills}/${last.deaths}/${last.assists}`;
        const mins = Math.floor(last.duration / 60);
        f('dur').textContent = `${mins}:${String(last.duration % 60).padStart(2, '0')}`;
        const days = Math.round((last.start_time * 1000 - Date.now()) / 86400000);
        try {
          const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });
          f('when').textContent = Math.abs(days) >= 1
            ? rtf.format(days, 'day')
            : rtf.format(Math.round((last.start_time * 1000 - Date.now()) / 3600000), 'hour');
        } catch (e) { f('when').textContent = new Date(last.start_time * 1000).toLocaleDateString(lang); }
        const wins = matches.filter(won).length;
        f('record').textContent = `${wins}W ${matches.length - wins}L`;
        const form = f('form');
        form.textContent = '';
        matches.slice(0, 20).reverse().forEach((m) => {
          const pip = document.createElement('i');
          pip.className = won(m) ? 'w' : 'l';
          form.appendChild(pip);
        });
        f('link').href = `https://www.opendota.com/matches/${last.match_id}`;
        card.hidden = false;
      } catch (e) { /* offline, rate-limited or private profile: keep the card hidden */ }
    };
    whenVisible(card, run);
  });

  /* ---------- SoundCloud: nothing third-party loads until the button is pressed ---------- */
  document.querySelectorAll('[data-music]').forEach((card) => {
    const button = card.querySelector('.music-load');
    if (!button || !card.dataset.src) return;
    button.addEventListener('click', () => {
      const frame = document.createElement('iframe');
      frame.src = card.dataset.src;
      frame.title = card.dataset.title || 'SoundCloud';
      frame.loading = 'lazy';
      frame.allow = 'autoplay';
      frame.setAttribute('scrolling', 'no');
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      card.classList.add('is-loaded');
      card.appendChild(frame);
      button.remove();
    });
  });

  /* ---------- Guestbook (giscus). The include renders nothing until repo/category ids are set in _config.yml ---------- */
  document.querySelectorAll('[data-guestbook]').forEach((box) => {
    const d = box.dataset;
    whenVisible(box, () => {
      const s = document.createElement('script');
      s.src = 'https://giscus.app/client.js';
      s.async = true;
      s.crossOrigin = 'anonymous';
      Object.entries({
        repo: d.repo, repoId: d.repoId, category: d.category, categoryId: d.categoryId,
        mapping: 'specific', term: d.term, strict: '0', reactionsEnabled: '1', emitMetadata: '0',
        inputPosition: 'top', theme: 'transparent_dark', lang: d.lang || 'en', loading: 'lazy',
      }).forEach(([k, v]) => { s.dataset[k] = v; });
      box.querySelector('.guestbook-slot').appendChild(s);
    });
  });

  /* ---------- Status line: typed out once per session ---------- */
  const statusText = document.querySelector('.status-line .status-text');
  let typedBefore = false;
  try { typedBefore = sessionStorage.getItem('typed-status') === '1'; } catch (e) { /* ignore */ }
  if (statusText && !reducedMotion && !typedBefore) {
    const full = statusText.textContent.trim();
    const line = statusText.parentElement;
    const sr = document.createElement('span');
    sr.className = 'visually-hidden';
    sr.textContent = full;
    line.appendChild(sr);
    statusText.setAttribute('aria-hidden', 'true');
    statusText.style.display = 'inline-block';
    statusText.style.minWidth = `${statusText.offsetWidth}px`;
    statusText.textContent = '';
    statusText.classList.add('is-typing');
    let i = 0;
    const tick = () => {
      statusText.textContent = full.slice(0, ++i);
      if (i < full.length) setTimeout(tick, 42);
      else {
        statusText.classList.remove('is-typing');
        try { sessionStorage.setItem('typed-status', '1'); } catch (e) { /* ignore */ }
      }
    };
    setTimeout(tick, 400);
  }

  /* ---------- Card tilt (mouse only) ---------- */
  if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.hub-card, .member-card').forEach((el) => {
      let raf = 0;
      el.addEventListener('pointermove', (event) => {
        if (event.pointerType && event.pointerType !== 'mouse') return;
        const rect = el.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          el.style.setProperty('--tx', `${(-py * 5).toFixed(2)}deg`);
          el.style.setProperty('--ty', `${(px * 7).toFixed(2)}deg`);
          el.classList.add('tilt-active');
        });
      }, { passive: true });
      el.addEventListener('pointerleave', () => {
        el.classList.remove('tilt-active');
        el.style.removeProperty('--tx');
        el.style.removeProperty('--ty');
      });
    });
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
