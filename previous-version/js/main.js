/* Johan Raj J — Portfolio · main.js
   Theme toggle, mobile navigation, scroll-spy, scroll reveal, footer year. */
(() => {
  const root = document.documentElement;
  const THEME_KEY = 'theme';
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Theme ---------- */
  const themeToggle = document.querySelector('[data-theme-toggle]');

  const storedTheme = () => {
    try { return localStorage.getItem(THEME_KEY); } catch { return null; }
  };

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  };

  applyTheme(root.getAttribute('data-theme') || (darkQuery.matches ? 'dark' : 'light'));

  themeToggle?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch { /* storage unavailable */ }
  });

  // Follow the OS setting until the visitor picks a theme explicitly
  darkQuery.addEventListener('change', (e) => {
    if (!storedTheme()) applyTheme(e.matches ? 'dark' : 'light');
  });

  /* ---------- Header shadow on scroll ---------- */
  const header = document.querySelector('[data-header]');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  /* ---------- Mobile navigation ---------- */
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.getElementById('site-nav');
  const desktopQuery = window.matchMedia('(min-width: 1024px)');

  const setNav = (open) => {
    if (!navToggle || !nav) return;
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
    root.classList.toggle('nav-open', open);
  };

  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') !== 'true';
    setNav(open);
    if (open) nav.querySelector('a')?.focus();
  });

  nav?.addEventListener('click', (e) => {
    if (e.target.closest('a')) setNav(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav?.classList.contains('is-open')) {
      setNav(false);
      navToggle.focus();
    }
  });

  desktopQuery.addEventListener('change', (e) => {
    if (e.matches) setNav(false);
  });

  /* ---------- Scroll-spy: highlight the section in view ---------- */
  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const linkById = new Map(navLinks.map((a) => [a.getAttribute('href').slice(1), a]));

  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.removeAttribute('aria-current'));
        linkById.get(entry.target.id)?.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    document.querySelectorAll('main section[id]').forEach((section) => spy.observe(section));
  }

  /* ---------- Scroll reveal ---------- */
  document.querySelectorAll('[data-stagger]').forEach((group) => {
    group.querySelectorAll(':scope > .reveal').forEach((el, i) => {
      el.style.setProperty('--delay', `${Math.min(i, 6) * 70}ms`);
    });
  });

  const revealEls = document.querySelectorAll('.reveal');
  const showAll = () => revealEls.forEach((el) => el.classList.add('is-visible'));

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    showAll();
  } else {
    const revealer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.01 });

    revealEls.forEach((el) => revealer.observe(el));
  }

  // Print should always show everything
  window.addEventListener('beforeprint', showAll);

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
