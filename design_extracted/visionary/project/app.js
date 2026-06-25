/* ============================================================
   VISIONARY — interactions + scroll motion + animated background
   ============================================================ */
(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const docEl = document.documentElement;

  /* ---------- Nav: glass intensifies on scroll ---------- */
  const nav = document.getElementById('nav');

  /* ---------- Scroll progress bar ---------- */
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach((item) => {
    const btn = item.querySelector('.faq-q');
    const panel = item.querySelector('.faq-a');
    if (!btn || !panel) return;
    btn.addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach((o) => {
        if (o !== item) {
          o.classList.remove('open');
          o.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      if (open) {
        item.classList.remove('open');
        panel.style.maxHeight = null;
      } else {
        item.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Reveal: stagger + directional + sweep ---------- */
  // assign stagger index to siblings inside known groups
  const groups = document.querySelectorAll('.cards-3, .steps, .cases, .plans, .stats-grid');
  groups.forEach((g) => {
    Array.from(g.children).forEach((child, i) => {
      const r = child.classList.contains('reveal') ? child : child.querySelector('.reveal');
      if (r) r.style.setProperty('--i', i);
    });
  });
  // give cards/cases/plans a 3D tilt host + shimmer sweep hook
  document.querySelectorAll('.card, .case, .plan').forEach((el) => el.classList.add('sweep'));

  const reveals = Array.from(document.querySelectorAll('.reveal'));
  const show = (el) => {
    el.classList.add('in');
    if (el.classList.contains('sweep')) {
      setTimeout(() => el.classList.add('swept'), 220);
    }
  };

  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(show);
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
    // reveal anything already above the fold on first paint
    requestAnimationFrame(() => {
      const vh = window.innerHeight;
      reveals.forEach((el) => {
        if (el.classList.contains('in')) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) show(el);
      });
    });
    // safety net — only reveals what's genuinely in view (never pre-reveals
    // off-screen sections, so they still animate when scrolled into).
    const sweepInView = () => {
      const vh = window.innerHeight;
      reveals.forEach((el) => {
        if (el.classList.contains('in')) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) show(el);
      });
    };
    window.addEventListener('load', () => setTimeout(sweepInView, 200));
  }

  /* ---------- 3D tilt on cards (pointer) ---------- */
  if (!reduce && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.card, .plan').forEach((card) => {
      const parent = card.parentElement;
      if (parent) parent.classList.add('tilt-host');
      const MAX = 6;
      card.addEventListener('pointermove', (e) => {
        const b = card.getBoundingClientRect();
        const px = (e.clientX - b.left) / b.width - 0.5;
        const py = (e.clientY - b.top) / b.height - 0.5;
        card.style.transform =
          `translateY(-5px) rotateX(${(-py * MAX).toFixed(2)}deg) rotateY(${(px * MAX).toFixed(2)}deg)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  /* ---------- Scroll-driven: progress, nav, hero parallax ---------- */
  const heroInner = document.querySelector('.hero-inner');
  const hero = document.querySelector('.hero');

  let scrollY = window.scrollY;
  let ticking = false;

  function onScrollFrame() {
    ticking = false;
    const h = docEl.scrollHeight - window.innerHeight;
    const prog = h > 0 ? scrollY / h : 0;
    bar.style.transform = `scaleX(${prog})`;

    if (nav) nav.classList.toggle('scrolled', scrollY > 24);

    // hero parallax: drift up + fade as it leaves
    if (heroInner && hero && !reduce) {
      const hh = hero.offsetHeight || window.innerHeight;
      const p = Math.min(scrollY / hh, 1);
      heroInner.style.transform = `translateY(${(p * 70).toFixed(1)}px) scale(${(1 - p * 0.04).toFixed(3)})`;
      heroInner.style.opacity = (1 - p * 0.9).toFixed(3);
    }
  }

  function requestFrame() {
    scrollY = window.scrollY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScrollFrame);
    }
  }
  requestFrame();
  window.addEventListener('scroll', requestFrame, { passive: true });
  window.addEventListener('resize', requestFrame);

  /* ---------- Animated abstract background (brand colors on black) ---------- */
  const cv = document.getElementById('bg');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  let W, H, dpr;
  const cols = [
    [34, 211, 238],  // cyan
    [59, 130, 246],  // blue
    [139, 92, 246],  // violet
    [45, 212, 191],  // teal
  ];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.4);
    W = cv.width = Math.round(window.innerWidth * dpr);
    H = cv.height = Math.round(window.innerHeight * dpr);
  }
  resize();
  window.addEventListener('resize', resize);

  const N = 6;
  const orbs = Array.from({ length: N }, (_, i) => ({
    x: 0.2 + Math.random() * 0.6,
    y: 0.2 + Math.random() * 0.6,
    r: 0.34 + Math.random() * 0.22,
    c: cols[i % cols.length],
    ax: 0.10 + Math.random() * 0.10,
    ay: 0.10 + Math.random() * 0.10,
    sx: 0.00005 + Math.random() * 0.00006,
    sy: 0.00005 + Math.random() * 0.00006,
    px: Math.random() * 6.28,
    py: Math.random() * 6.28,
  }));

  // smooth scroll value the bg reacts to
  let bgScroll = 0;

  function paint(t) {
    const h = docEl.scrollHeight - window.innerHeight;
    const target = h > 0 ? window.scrollY / h : 0;
    bgScroll += (target - bgScroll) * 0.06;

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    const maxR = Math.max(W, H);
    for (let k = 0; k < orbs.length; k++) {
      const o = orbs[k];
      // scroll shifts orbs vertically + sideways for a living feel
      const drift = (k % 2 === 0 ? -1 : 1) * bgScroll * 0.5;
      const cx = (o.x + Math.sin(t * o.sx + o.px) * o.ax + drift * 0.15) * W;
      const cy = (o.y + Math.cos(t * o.sy + o.py) * o.ay - bgScroll * 0.6 + (k * 0.13)) * H;
      const rad = o.r * maxR;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
      const [r, gn, b] = o.c;
      g.addColorStop(0, `rgba(${r},${gn},${b},0.52)`);
      g.addColorStop(0.45, `rgba(${r},${gn},${b},0.15)`);
      g.addColorStop(1, `rgba(${r},${gn},${b},0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, rad, 0, 6.2832);
      ctx.fill();
    }
  }

  if (reduce) {
    paint(8000);
  } else {
    let raf;
    const loop = (t) => { paint(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(loop);
    });
  }
})();
