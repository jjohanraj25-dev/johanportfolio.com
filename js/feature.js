/* Johan Raj J — page script.
   The engine drives the acts. This file owns the folio, the ground switch, and
   the chromostereopsis plate. scrollcraft.js itself is never edited. */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  ScrollCraft.mount(document.body);

  /* ---------------------------------------------------------- the folio -- */
  var links = [].slice.call(document.querySelectorAll('.folio__index a'));
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var nowLabel = document.getElementById('folio-now');

  var chapters = [].slice.call(document.querySelectorAll('[data-ground]'));
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var id = e.target.id;
        // The margin furniture flips with the ground it is sitting on.
        root.setAttribute('data-ground', e.target.getAttribute('data-ground'));
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        if (byId[id]) {
          byId[id].setAttribute('aria-current', 'true');
          if (nowLabel) nowLabel.textContent = byId[id].querySelector('.folio__title').textContent;
        } else if (nowLabel) {
          nowLabel.textContent = 'Title page';
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    chapters.forEach(function (c) { spy.observe(c); });
  }

  /* ------------------------------------------------- the index, on phones -- */
  var btn = document.getElementById('index-btn');
  var sheet = document.getElementById('index-sheet');
  function setSheet(open) {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close chapter index' : 'Open chapter index');
    sheet.classList.toggle('is-open', open);
    root.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', function () {
    setSheet(btn.getAttribute('aria-expanded') !== 'true');
  });
  sheet.addEventListener('click', function (e) { if (e.target.closest('a')) setSheet(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sheet.classList.contains('is-open')) { setSheet(false); btn.focus(); }
  });

  /* ------------------------------------------------------------ the plate --
     Two copies of one word, one long-wavelength, one short. Scroll pulls them
     into their colours and apart; the slider hands that control to the reader.
     Both write one custom property, so there is a single source of truth. */
  var act = document.getElementById('ch4');
  var plate = document.getElementById('plate');
  var slider = document.getElementById('sep');
  var MAX_SCROLL_SEP = 52;   // hundredths of an em, either side of centre
  var MAX_HAND_SEP = 44;
  var handSep = 0;
  var scrollSep = 0;
  var wash = 1;
  var queued = false;

  function ease(t) { return t < 0 ? 0 : t > 1 ? 1 : t * t * (3 - 2 * t); }

  function paint() {
    queued = false;
    var total = scrollSep + handSep;
    plate.style.setProperty('--sep', total.toFixed(2));
    plate.style.setProperty('--wash', wash.toFixed(3));
    plate.classList.toggle('is-split', total > 1.5);
  }
  function request() { if (!queued) { queued = true; requestAnimationFrame(paint); } }

  function readScroll() {
    var travel = Math.max(act.offsetHeight - window.innerHeight, 1);
    var top = act.getBoundingClientRect().top + window.pageYOffset;
    var p = (window.pageYOffset - top) / travel;
    p = p < 0 ? 0 : p > 1 ? 1 : p;

    // in: superimposed and white. middle: split and coloured. out: back to one.
    if (p < 0.2) scrollSep = 0;
    else if (p < 0.55) scrollSep = ease((p - 0.2) / 0.35) * MAX_SCROLL_SEP;
    else if (p < 0.82) scrollSep = MAX_SCROLL_SEP;
    else scrollSep = MAX_SCROLL_SEP * (1 - ease((p - 0.82) / 0.14));

    wash = p < 0.06 ? ease(p / 0.06) : 1;
    request();
  }

  if (act && plate && slider) {
    slider.addEventListener('input', function () {
      handSep = (parseFloat(slider.value) / 100) * MAX_HAND_SEP;
      request();
    });

    if (reduce.matches) {
      // No scroll choreography, but the illusion is colour, not motion: show it
      // settled and split so the chapter still means something.
      scrollSep = 40;
      paint();
    } else {
      var watching = false;
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          watching = entries[0].isIntersecting;
          if (watching) readScroll();
        }, { rootMargin: '10% 0px 10% 0px' }).observe(act);
      } else { watching = true; }
      window.addEventListener('scroll', function () { if (watching) readScroll(); }, { passive: true });
      window.addEventListener('resize', function () { if (watching) readScroll(); });
      readScroll();
    }
  }

  /* --------------------------------------------------- reveal safety net --
     The engine's entry observer only fires for a block that is sampled while it
     is on screen. Someone who presses End, or follows a deep link past a block,
     can leave one behind at opacity 0. Anything already scrolled past counts as
     seen. */
  function catchUp() {
    var blocks = document.querySelectorAll('[data-sc-in]:not(.sc-in)');
    for (var i = 0; i < blocks.length; i++) {
      var r = blocks[i].getBoundingClientRect();
      if (r.bottom < 0) {
        blocks[i].classList.add('sc-in');
        var kids = blocks[i].children;
        for (var k = 0; k < kids.length; k++) kids[k].classList.add('sc-in');
      }
    }
  }
  var catchUpQueued = false;
  window.addEventListener('scroll', function () {
    if (catchUpQueued) return;
    catchUpQueued = true;
    setTimeout(function () { catchUpQueued = false; catchUp(); }, 250);
  }, { passive: true });
  window.addEventListener('load', catchUp);

  /* ------------------------------------------------------------------ year -- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
