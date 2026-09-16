// ── Mobile menu toggle ──
const menu = document.querySelector('.menu');
const mobile = document.querySelector('.mobileNav');
if (menu && mobile) {
  menu.addEventListener('click', () => mobile.classList.toggle('open'));
}

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
