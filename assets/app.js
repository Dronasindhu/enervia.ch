// ── Theme toggle (dark/light, saved to localStorage) ──
(function () {
  const STORE_KEY = 'enervia-theme';
  const root = document.documentElement;
  const btn = document.querySelector('.themeToggle');
  if (!btn) return;

  const isDark = () => root.classList.contains('dark');
  const label = (dark) => {
    try {
      var t = window.EnerviaI18n ? window.EnerviaI18n.t('theme.' + (dark ? 'light' : 'dark')) : null;
      return t || (dark ? 'Switch to light mode' : 'Switch to dark mode');
    } catch (e) { return dark ? 'Switch to light mode' : 'Switch to dark mode'; }
  };

  function sync() {
    const dark = isDark();
    btn.innerHTML = dark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    btn.setAttribute('aria-label', label(dark));
    btn.setAttribute('title', label(dark));
  }

  btn.addEventListener('click', () => {
    const dark = !isDark();
    root.classList.toggle('dark', dark);
    try { localStorage.setItem(STORE_KEY, dark ? 'dark' : 'light'); } catch (e) {}
    sync();
  });

  // Keep an up-to-date icon/label even if the lang toggle runs after this
  document.addEventListener('DOMContentLoaded', sync);
  if (document.readyState !== 'loading') sync();
})();

// ── Prototype form handler ──
document.querySelectorAll('form[data-prototype]').forEach(f =>
  f.addEventListener('submit', e => {
    e.preventDefault();
    alert('Prototype: In production, this request would be saved in your CRM and trigger the qualification workflow.');
  })
);

// ── Scroll-reveal animations ──
(function () {
  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Elements that should fade-up on scroll
  const revealSelectors = [
    '.sectionHead',
    '.heroCopy',
    '.heroVisual',
    '.proofPhoto',
    '.proofCopy',
    '.ctaBox',
    '.pageHeroCopy',
    '.pageHeroVisual',
  ];

  // Elements that should scale-in (cards, steps)
  const revealScaleSelectors = [
    '.serviceCard',
    '.step',
    '.infoCard',
    '.floatCard',
    '.check',
  ];

  // Stagger containers – their direct children will be staggered
  const staggerContainers = [
    '.serviceGrid',
    '.steps',
    '.contentGrid3',
    '.checks',
    '.floating',
  ];

  // Tag elements with reveal classes
  revealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
    });
  });

  revealScaleSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      if (!el.classList.contains('reveal-scale') && !el.classList.contains('reveal')) {
        el.classList.add('reveal-scale');
      }
    });
  });

  // Mark stagger containers
  staggerContainers.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.classList.add('stagger');
    });
  });

  // Create IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  // Observe all reveal elements
  document.querySelectorAll('.reveal, .reveal-scale').forEach(el => {
    observer.observe(el);
  });

  // Animate hero section immediately on page load (no scroll needed)
  setTimeout(() => {
    document.querySelectorAll('.hero .reveal, .hero .reveal-scale, .pageHero .reveal, .pageHero .reveal-scale').forEach(el => {
      el.classList.add('visible');
      observer.unobserve(el);
    });
  }, 80);
})();

// ── Hero carousel (homepage) ──
(function () {
  const root = document.querySelector('.heroCarousel');
  if (!root) return;
  const slides = root.querySelectorAll('.hslide');
  const dots = root.querySelectorAll('.heroDots .dot');
  if (!slides.length) return;
  let idx = 0, timer = null;
  const go = (n) => {
    slides[idx].classList.remove('active');
    if (dots[idx]) dots[idx].classList.remove('active');
    idx = (n + slides.length) % slides.length;
    slides[idx].classList.add('active');
    if (dots[idx]) dots[idx].classList.add('active');
  };
  const restart = () => {
    if (timer) clearInterval(timer);
    timer = setInterval(() => go(idx + 1), 4200);
  };
  dots.forEach((d, i) => d.addEventListener('click', () => { go(i); restart(); }));
  restart();
})();
