/*!
 * animations.js — EHKC Website 3D Parallax & Micro-interactions
 * Shared across all pages. Works alongside existing per-page JS.
 */
(function () {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile = () => window.innerWidth < 768;

  /* ─────────────────────────────────────────────────────────────────
     0. PAGE LOAD ANIMATION & LOADING BAR
     Smooth fade-in with polished loading progress bar
  ───────────────────────────────────────────────────────────────── */
  (function pageLoadAnimation() {
    // Inject loading bar
    const bar = document.createElement('div');
    bar.id = 'loading-bar';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:3px;width:0%;z-index:9999;background:linear-gradient(90deg,#c47a4a,#daa520,#c47a4a);background-size:200% 100%;box-shadow:0 0 12px rgba(196,122,74,.6),0 0 24px rgba(218,165,32,.3)';
    document.body.insertBefore(bar, document.body.firstChild);

    // Animated progress
    let progress = 0;
    const loadingTimer = setInterval(() => {
      progress += Math.random() * 30;
      if (progress > 90) progress = 90;
      bar.style.width = progress + '%';
    }, 200);

    // Complete on page fully load
    const complete = () => {
      clearInterval(loadingTimer);
      bar.style.width = '100%';
      bar.classList.add('complete');
      setTimeout(() => bar.remove(), 800);
    };

    if (document.readyState === 'complete') {
      complete();
    } else {
      window.addEventListener('load', complete, { once: true });
    }

    // Hero card entrance with delay
    setTimeout(() => {
      const heroCard = document.querySelector('.hero-card');
      if (heroCard && !heroCard.style.animation) {
        heroCard.style.cssText += `
          animation: heroCardEntrance 1.2s cubic-bezier(.2,.7,.3,1) forwards;
        `;
      }
    }, 150);

    // Inject entrance keyframe
    if (!document.getElementById('entrance-kf')) {
      const style = document.createElement('style');
      style.id = 'entrance-kf';
      style.textContent = `
        @keyframes heroCardEntrance {
          0%   { opacity: 0; transform: translateY(40px) scale(.95) rotateY(-8deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotateY(0); }
        }
      `;
      document.head.appendChild(style);
    }
  })();

  /* ─────────────────────────────────────────────────────────────────
     0.5 STAGGERED CONTENT REVEAL
     Cards fade in with stagger on initial page load for polish
  ───────────────────────────────────────────────────────────────── */
  (function staggeredReveal() {
    if (reducedMotion) return;

    // Stagger service cards, stat cards, etc. on load
    const cardSelectors = [
      '.stat', '.svc-card', '.why-card', '.story-card',
      '.evt-card', '.news-card', '.pb-row'
    ];

    setTimeout(() => {
      cardSelectors.forEach(selector => {
        const cards = document.querySelectorAll(selector);
        cards.forEach((card, idx) => {
          if (card.style.opacity !== '0') { // skip if already hidden
            const delay = idx * 45; // 45ms between each
            card.style.cssText += `
              opacity: 0;
              transform: translateY(12px);
              animation: cardFadeInUp .6s cubic-bezier(.2,.7,.3,1) ${delay}ms forwards;
            `;
          }
        });
      });
    }, 200);

    if (!document.getElementById('card-reveal-kf')) {
      const style = document.createElement('style');
      style.id = 'card-reveal-kf';
      style.textContent = `
        @keyframes cardFadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `;
      document.head.appendChild(style);
    }
  })();
  /* ─────────────────────────────────────────────────────────────────
     1. CURSOR GLOW
     A warm gradient orb that follows the cursor with smooth lag
  ───────────────────────────────────────────────────────────────── */
  (function cursorGlow() {
    if (mobile()) return;
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    Object.assign(glow.style, {
      pointerEvents: 'none',
      position: 'fixed',
      top: '0', left: '0',
      width: '600px', height: '600px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(196,122,74,.10) 0%, rgba(218,165,32,.06) 40%, transparent 70%)',
      transform: 'translate(-50%,-50%)',
      zIndex: '9998',
      opacity: '0',
      transition: 'opacity .5s ease',
      willChange: 'transform',
    });
    document.body.appendChild(glow);

    let mx = -9999, my = -9999, gx = -9999, gy = -9999;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
    document.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });
    document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });

    (function loop() {
      if (!reducedMotion) {
        gx += (mx - gx) * 0.08;
        gy += (my - gy) * 0.08;
        glow.style.transform = `translate(${gx - 300}px, ${gy - 300}px)`;
      }
      requestAnimationFrame(loop);
    })();
  })();

  /* ─────────────────────────────────────────────────────────────────
     2. ENHANCED PARALLAX
     Multi-layer parallax for hero sections on every page.
     Skips main_page which has its own parallax logic but layers on top.
  ───────────────────────────────────────────────────────────────── */
  (function parallaxEngine() {
    if (reducedMotion) return;

    /* Hero background layers — any element with .hero-bg or data-px */
    const heroShapes = document.querySelectorAll('.hero-shape[data-px]');
    const heroBgGlobal = document.querySelector('.hero-bg');

    /* Section parallax backgrounds — parallax-break, cta-band */
    const pbBgGlobal = document.getElementById('pbBg');
    const deepLayers = document.querySelectorAll('[data-parallax-deep]');

    let ticking = false;

    function onScroll() {
      if (!ticking) { requestAnimationFrame(applyAll); ticking = true; }
    }

    function applyAll() {
      const sy = window.scrollY;

      /* Hero shapes (already have data-px, enhance depth) */
      heroShapes.forEach(el => {
        const speed = parseFloat(el.dataset.px || '0.15');
        el.style.transform = `translate3d(0, ${sy * speed}px, 0)`;
      });

      /* Parallax-break bg (on pages that have it) */
      if (pbBgGlobal) {
        const rect = pbBgGlobal.parentElement.getBoundingClientRect();
        const off = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * 0.2;
        pbBgGlobal.style.transform = `translate3d(0, ${off}px, 0)`;
      }

      /* Hero bg (on pages that have it and isn't already handled) */
      if (heroBgGlobal && !document.getElementById('heroBg')) {
        heroBgGlobal.style.transform = `translate3d(0, ${sy * 0.32}px, 0)`;
      }

      /* Custom deep-parallax elements */
      deepLayers.forEach(el => {
        const speed = parseFloat(el.dataset.parallaxDeep || '0.12');
        const rect = el.getBoundingClientRect();
        const dist = window.innerHeight / 2 - (rect.top + rect.height / 2);
        el.style.transform = `translate3d(0, ${dist * speed}px, 0)`;
      });

      ticking = false;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    applyAll();
  })();

  /* ─────────────────────────────────────────────────────────────────
     3. 3D CARD TILT
     Cards tilt toward mouse with CSS perspective. Snaps back smoothly.
  ───────────────────────────────────────────────────────────────── */
  (function cardTilt() {
    if (reducedMotion || mobile()) return;

    const TILT = 18; // max degrees — stronger 3D feel
    const LIFT = 28; // translateZ px — more depth pop

    const selectors = [
      '.svc-card', '.why-card', '.story-card', '.news-card',
      '.evt-card:not(.featured)', '.pic-card', '.pb-row'
    ].join(',');

    document.querySelectorAll(selectors).forEach(card => {
      /* Inject shine layer */
      if (!card.querySelector('.card-shine')) {
        const shine = document.createElement('div');
        shine.className = 'card-shine';
        card.appendChild(shine);
      }

      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width  - 0.5;
        const y = (e.clientY - r.top)  / r.height - 0.5;
        const rx = -y * TILT;
        const ry =  x * TILT;
        card.style.transition = 'transform .08s ease, box-shadow .15s ease';
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${LIFT}px)`;

        /* Dynamic shadow that shifts in the direction of tilt */
        const sx = ry * 1.6;
        const sy = -rx * 1.6 + LIFT * 0.7;
        card.style.boxShadow = [
          `${sx}px ${sy + 14}px 40px rgba(10,40,45,.18)`,
          `${sx * 0.4}px ${sy * 0.4 + 5}px 14px rgba(196,122,74,.13)`,
          `0 2px 4px rgba(10,40,45,.06)`,
        ].join(',');

        /* Move shine with pointer */
        const shine = card.querySelector('.card-shine');
        if (shine) {
          shine.style.background = `radial-gradient(circle at ${(x+0.5)*100}% ${(y+0.5)*100}%, rgba(255,255,255,.18), transparent 55%)`;
          shine.style.opacity = '1';
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform .6s cubic-bezier(.2,.7,.3,1), box-shadow .5s ease';
        card.style.transform = '';
        card.style.boxShadow = '';
        const shine = card.querySelector('.card-shine');
        if (shine) { shine.style.background = ''; shine.style.opacity = '0'; }
      });
    });

    /* Hero card tilt — boosted angles + Z depth */
    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
      heroCard.addEventListener('mousemove', e => {
        const r = heroCard.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width  - 0.5;
        const y = (e.clientY - r.top)  / r.height - 0.5;
        heroCard.style.transition = 'transform .08s ease';
        heroCard.style.transform = `perspective(1200px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg) translateZ(28px)`;
        heroCard.style.boxShadow = `${x * 20}px ${-y * 16 + 32}px 64px rgba(6,47,49,.4)`;
      });
      heroCard.addEventListener('mouseleave', () => {
        heroCard.style.transition = 'transform .6s cubic-bezier(.2,.7,.3,1), box-shadow .5s ease';
        heroCard.style.transform = '';
        heroCard.style.boxShadow = '';
      });
    }
  })();

  /* ─────────────────────────────────────────────────────────────────
     4. FLOATING ORB PARTICLES
     Soft glowing orbs injected into hero and dark sections
  ───────────────────────────────────────────────────────────────── */
  (function floatingOrbs() {
    if (reducedMotion) return;

    const targets = document.querySelectorAll('.parallax-break, .cta-band, .pic-band');

    targets.forEach(section => {
      if (section.querySelector('.orb-field')) return; // already injected
      const field = document.createElement('div');
      field.className = 'orb-field';
      field.setAttribute('aria-hidden', 'true');
      field.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:0;overflow:hidden';

      const palette = [
        'rgba(196,122,74,',
        'rgba(218,165,32,',
        'rgba(238,196,163,',
        'rgba(255,255,255,',
      ];

      for (let i = 0; i < 5; i++) {
        const orb = document.createElement('div');
        const size  = 60 + Math.random() * 140;
        const color = palette[Math.floor(Math.random() * palette.length)];
        const alpha = 0.04 + Math.random() * 0.05;
        const x     = 5 + Math.random() * 90;
        const y     = 5 + Math.random() * 90;
        const dur   = 18 + Math.random() * 20;
        const delay = -(Math.random() * 35);

        orb.style.cssText = [
          'position:absolute',
          `width:${size}px`,
          `height:${size}px`,
          `left:${x}%`,
          `top:${y}%`,
          'border-radius:50%',
          `background:radial-gradient(circle, ${color}${(alpha * 3).toFixed(3)}) 0%, ${color}${alpha.toFixed(3)}) 55%, transparent 75%)`,
          `filter:blur(${size * 0.28}px)`,
          `animation:orbFloat ${dur.toFixed(1)}s ${delay.toFixed(1)}s ease-in-out infinite`,
          'will-change:transform',
        ].join(';');

        field.appendChild(orb);
      }

      const pos = getComputedStyle(section).position;
      if (pos === 'static') section.style.position = 'relative';
      section.insertBefore(field, section.firstChild);
    });

    /* Hero gets subtler, warm orbs (complement the existing ambient icons) */
    const hero = document.querySelector('.hero');
    if (hero && !hero.querySelector('.orb-field-hero')) {
      const field = document.createElement('div');
      field.className = 'orb-field-hero';
      field.setAttribute('aria-hidden', 'true');
      field.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:0;overflow:hidden';

      for (let i = 0; i < 3; i++) {
        const orb = document.createElement('div');
        const size  = 200 + Math.random() * 280;
        const x     = 20 + Math.random() * 60;
        const y     = 15 + Math.random() * 65;
        const dur   = 25 + Math.random() * 20;
        const delay = -(Math.random() * 40);
        orb.style.cssText = [
          'position:absolute',
          `width:${size}px`,
          `height:${size}px`,
          `left:${x}%`,
          `top:${y}%`,
          'border-radius:50%',
          `background:radial-gradient(circle, rgba(218,165,32,0.07) 0%, rgba(196,122,74,0.04) 50%, transparent 70%)`,
          `filter:blur(${size * 0.35}px)`,
          `animation:orbFloat ${dur.toFixed(1)}s ${delay.toFixed(1)}s ease-in-out infinite`,
          'will-change:transform',
        ].join(';');
        field.appendChild(orb);
      }

      hero.insertBefore(field, hero.firstChild);
    }
  })();

  /* ─────────────────────────────────────────────────────────────────
     5. COUNTER ANIMATION
     Stat numbers count up when they scroll into view
  ───────────────────────────────────────────────────────────────── */
  (function counterAnim() {
    const statEls = document.querySelectorAll('.stat-n');
    if (!statEls.length) return;

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        obs.unobserve(el);

        /* Find the raw number from the first text node */
        let textNode = null;
        for (const node of el.childNodes) {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            textNode = node; break;
          }
        }
        if (!textNode) return;

        const raw = textNode.textContent.replace(/,/g, '');
        const target = parseInt(raw, 10);
        if (isNaN(target)) return;

        const dur = 1800;
        let start = null;

        function step(ts) {
          if (!start) start = ts;
          const prog = Math.min((ts - start) / dur, 1);
          const ease = 1 - Math.pow(1 - prog, 3);
          const val  = Math.round(ease * target);
          textNode.textContent = val >= 1000 ? val.toLocaleString('en') : String(val);
          if (prog < 1) requestAnimationFrame(step);
        }

        if (reducedMotion) {
          textNode.textContent = target >= 1000 ? target.toLocaleString('en') : String(target);
        } else {
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.6 });

    statEls.forEach(el => obs.observe(el));
  })();

  /* ─────────────────────────────────────────────────────────────────
     6. SECTION DEPTH REVEAL
     Sections rise and fade in as they enter the viewport
  ───────────────────────────────────────────────────────────────── */
  (function sectionDepth() {
    if (reducedMotion) return;

    const candidates = document.querySelectorAll(
      'section, .stats, .events-band, .gallery-band, .news-band, .cta-band, .map-section'
    );

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        e.target.classList.toggle('depth-in', e.isIntersecting);
      });
    }, { threshold: 0.04, rootMargin: '0px 0px -4% 0px' });

    candidates.forEach(el => {
      el.classList.add('depth-section');
      obs.observe(el);
    });
  })();

  /* ─────────────────────────────────────────────────────────────────
     7. HERO ENTRANCE ANIMATION
     Staggered fade-up for hero text on each page
  ───────────────────────────────────────────────────────────────── */
  (function heroEntrance() {
    if (reducedMotion) return;

    /* h1 only — eyebrow/sub/cta/trust are handled by the Anime.js v4 module script */
    const h1 = document.querySelector('.hero h1');
    if (h1) {
      h1.style.cssText += `
        opacity:0;
        transform:translateY(20px);
        transition:opacity .85s cubic-bezier(.2,.7,.3,1) 120ms,
                   transform .85s cubic-bezier(.2,.7,.3,1) 120ms;
      `;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        h1.style.opacity = '1';
        h1.style.transform = 'none';
      }));
    }

    /* Hero card entrance */
    const card = document.querySelector('.hero-card');
    if (card) {
      card.style.cssText += `
        opacity:0;
        transform:translateY(30px) scale(.97);
        transition:opacity 1s cubic-bezier(.2,.7,.3,1) 300ms,
                   transform 1s cubic-bezier(.2,.7,.3,1) 300ms;
      `;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = '';
      }));
    }
  })();

  /* ─────────────────────────────────────────────────────────────────
     8. SCROLL PROGRESS INDICATOR
     Thin gold line at the top of the page showing read progress
  ───────────────────────────────────────────────────────────────── */
  (function scrollProgress() {
    if (reducedMotion) return;

    const bar = document.createElement('div');
    bar.id = 'scroll-progress';
    bar.style.cssText = [
      'position:fixed',
      'top:0', 'left:0',
      'height:2px',
      'width:0%',
      'background:linear-gradient(90deg,#c47a4a,#daa520)',
      'z-index:9999',
      'pointer-events:none',
      'will-change:width',
      'transition:width .1s linear',
    ].join(';');
    document.body.appendChild(bar);

    window.addEventListener('scroll', () => {
      const doc  = document.documentElement;
      const scrolled = window.scrollY;
      const total = doc.scrollHeight - doc.clientHeight;
      bar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
    }, { passive: true });
  })();

  /* ─────────────────────────────────────────────────────────────────
     8.2 MAGNETIC BUTTON EFFECT
     Primary / coral buttons subtly follow the cursor for a premium feel
  ───────────────────────────────────────────────────────────────── */
  (function magneticButtons() {
    if (reducedMotion || mobile()) return;

    const btns = document.querySelectorAll(
      '.btn-primary, .btn-coral, .float-wa, .float-donate, .map-cta'
    );

    btns.forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width  / 2) * 0.22;
        const y = (e.clientY - r.top  - r.height / 2) * 0.22;
        btn.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  })();

  /* ─────────────────────────────────────────────────────────────────
     8.3 STAGGERED INNER-ELEMENT REVEAL FOR DARK BAND SECTIONS
     When pic-band, cta-band, parallax-break enter view, animate children
  ───────────────────────────────────────────────────────────────── */
  (function darkBandReveal() {
    if (reducedMotion) return;

    const bands = document.querySelectorAll('.cta-band, .map-section .map-header');
    bands.forEach(band => {
      const children = [...band.children];
      children.forEach((el, i) => {
        el.style.cssText += `
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.75s cubic-bezier(.2,.7,.3,1) ${i * 130}ms,
                      transform 0.75s cubic-bezier(.2,.7,.3,1) ${i * 130}ms;
        `;
      });

      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          children.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
          });
          obs.unobserve(e.target);
        });
      }, { threshold: 0.15 });

      obs.observe(band);
    });
  })();

  /* ─────────────────────────────────────────────────────────────────
     8.5 PAGE SHINE EFFECT
     Subtle light sweep across page on load for premium feel
  ───────────────────────────────────────────────────────────────── */
  (function pageShine() {
    if (reducedMotion || mobile()) return;

    setTimeout(() => {
      const shine = document.createElement('div');
      shine.id = 'page-shine';
      shine.style.cssText = [
        'position:fixed',
        'top:0', 'left:-100%',
        'width:100%', 'height:100%',
        'pointer-events:none',
        'z-index:9997',
        'background:linear-gradient(90deg, transparent, rgba(255,255,255,.15), transparent)',
        'animation:pageShineEffect 1.2s ease-out forwards',
      ].join(';');
      document.body.appendChild(shine);
    }, 400);

    if (!document.getElementById('shine-kf')) {
      const style = document.createElement('style');
      style.id = 'shine-kf';
      style.textContent = `
        @keyframes pageShineEffect {
          0%   { left: -100%; }
          100% { left: 100%; }
        }
      `;
      document.head.appendChild(style);
    }
  })();

  /* ─────────────────────────────────────────────────────────────────
     9. PERSPECTIVE GRID CONTAINERS
     Sets CSS perspective on all card-grid containers so tilt effects
     render with coherent 3D depth across the whole grid.
  ───────────────────────────────────────────────────────────────── */
  (function perspectiveGrids() {
    const grids = document.querySelectorAll(
      '.svc-grid, .why-grid, .story-grid, .news-grid, .stats-in, .evt-grid, .gal-thumbs'
    );
    grids.forEach(g => {
      g.style.perspective = '1600px';
      g.style.perspectiveOrigin = '50% -10%';
    });
  })();

  /* ─────────────────────────────────────────────────────────────────
     10. HERO MOUSE-DEPTH PARALLAX
     Hero background shapes move at different Z-depth speeds as the
     user moves the mouse, creating a convincing 3D layered illusion.
  ───────────────────────────────────────────────────────────────── */
  (function heroMouseDepth() {
    if (reducedMotion || mobile()) return;
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const layers = [
      { el: hero.querySelector('.hero-shape.s1'), depth: 42 },
      { el: hero.querySelector('.hero-shape.s2'), depth: 30 },
      { el: hero.querySelector('.hero-shape.s3'), depth: 18 },
      { el: hero.querySelector('.hero-bg'),       depth: 9  },
      { el: hero.querySelector('.hero-grain'),    depth: 4  },
    ].filter(l => l.el);

    let mx = 0, my = 0, cx = 0, cy = 0;

    hero.addEventListener('mousemove', e => {
      const r = hero.getBoundingClientRect();
      mx = (e.clientX - r.left)  / r.width  - 0.5;
      my = (e.clientY - r.top)   / r.height - 0.5;
    }, { passive: true });

    hero.addEventListener('mouseleave', () => { mx = 0; my = 0; });

    (function loop() {
      cx += (mx - cx) * 0.06;
      cy += (my - cy) * 0.06;
      layers.forEach(({ el, depth }) => {
        el.style.transform = `translate3d(${cx * depth}px, ${cy * depth * 0.7}px, 0)`;
      });
      requestAnimationFrame(loop);
    })();
  })();

  /* ─────────────────────────────────────────────────────────────────
     11. SCROLL TILT 3D
     Card grids subtly rotate on the X-axis as they approach from
     below the fold, then flatten as they fully enter view — giving
     every section a cinematic 3D "rising" entrance.
  ───────────────────────────────────────────────────────────────── */
  (function scrollTilt3D() {
    if (reducedMotion || mobile()) return;

    const grids = document.querySelectorAll(
      '.svc-grid, .why-grid, .story-grid, .news-grid, .evt-grid'
    );

    grids.forEach(g => {
      g.classList.add('grid-tilt-active');
      g.style.transformOrigin = 'center bottom';
    });

    let ticking = false;

    function update() {
      const vh = window.innerHeight;
      grids.forEach(grid => {
        const r   = grid.getBoundingClientRect();
        const top = r.top;
        if (top > vh || top < -r.height) return; // off-screen
        /* 0 = section top at viewport bottom (fully incoming)
           1 = section top at 30% from top (fully settled) */
        const progress = Math.max(0, Math.min(1, (vh - top) / (vh * 0.7)));
        const tilt = progress < 1 ? (1 - progress) * 14 : 0;
        grid.style.transform = tilt > 0.3
          ? `rotateX(${tilt.toFixed(2)}deg)`
          : '';
      });
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });

    update();
  })();

  /* ─────────────────────────────────────────────────────────────────
     12. SCROLL-DRIVEN ANIMATIONS  (Anime.js v4  onScroll)
     Every matching element on every page gets a continuous animation
     whose progress is locked to scroll position — not just triggered.
     Dynamic import so no extra <script> needed on any page.
  ───────────────────────────────────────────────────────────────── */
  (async function scrollDriven() {
    if (reducedMotion) return;

    let mod;
    try { mod = await import('https://esm.sh/animejs'); }
    catch (e) { return; } // ESM unavailable — skip gracefully

    const { animate, onScroll } = mod;

    /* ── Reusable helper ── */
    function scrollAnim(selector, props, opts = {}) {
      document.querySelectorAll(selector).forEach(el => {
        animate(el, {
          ease: 'linear',
          ...props,
          autoplay: onScroll({
            enter: 'bottom-=80 top',
            leave: 'top+=80 bottom',
            sync:  0.55,
            ...opts,
          }),
        });
      });
    }

    /* 1 ── Eyebrow labels — slide in from left as section scrolls up */
    scrollAnim('.eyebrow:not(.pic-eyebrow), .sec-eyebrow, .hero-eyebrow, .gal-cap-eyebrow', {
      x: ['-1.8rem', '0rem'],
    }, { sync: 0.65, enter: 'bottom-=60 top', leave: 'top+=110 bottom' });

    /* 1b ── Person-in-charge eyebrow — fade only, no directional slide */
    scrollAnim('.pic-eyebrow', {
      opacity: [0, 1],
    }, { sync: 0.65, enter: 'bottom-=60 top', leave: 'top+=110 bottom' });

    /* 2 ── Section headings — y drift, feels like content rising */
    scrollAnim('h2.section-h, h1', {
      y: ['1.2rem', '0rem'],
    }, { sync: 0.60, enter: 'bottom-=50 top', leave: 'top+=130 bottom' });

    /* 3 ── Section paragraphs — subtle x + opacity sweep */
    scrollAnim('.section-p, .hero-sub, .pb-quote', {
      x:       ['-0.8rem', '0rem'],
      opacity: [0.45, 1],
    }, { sync: 0.70, enter: 'bottom-=30 top', leave: 'top+=110 bottom' });

    /* 4 ── Service / stat / why icons — quarter-turn on enter */
    scrollAnim('.svc-ic, .stat-ic, .why-ic, .v-ic, .mi-ico', {
      rotate: ['0.25turn', '0turn'],
      scale:  [0.78, 1],
    }, { sync: 0.75, enter: 'bottom-=50 top', leave: 'top+=70 bottom' });

    /* 5 ── Card grid containers — rise from below */
    scrollAnim('.svc-grid, .why-grid, .story-grid, .news-grid, .evt-grid, .gal-thumbs, .stats-in', {
      y: ['1.8rem', '0rem'],
    }, { sync: 0.55, enter: 'bottom-=100 top', leave: 'top+=100 bottom' });

    /* 6 ── Parallax-break decorative rings — rotation sync with scroll */
    scrollAnim('.pb-c', {
      rotate: ['25deg', '0deg'],
    }, { sync: 0.28, enter: 'bottom top', leave: 'top bottom' });

    /* 7 ── Parallax-break side rows — x drift */
    scrollAnim('.pb-row', {
      x: ['1.5rem', '0rem'],
    }, { sync: 0.50, enter: 'bottom-=40 top', leave: 'top+=80 bottom' });

    /* 8 ── About photo — inner parallax float */
    scrollAnim('.about-img', {
      y: ['-1.4rem', '1.4rem'],
    }, { sync: 0.20, enter: 'bottom top', leave: 'top bottom' });

    /* 9 ── Gallery track wrapper — y nudge + slight de-rotate */
    scrollAnim('.gal-track-wrap', {
      y:      ['1.2rem', '0rem'],
      rotate: ['-0.6deg', '0deg'],
    }, { sync: 0.60, enter: 'bottom-=80 top', leave: 'top+=80 bottom' });

    /* 10 ── Event / news card images — scale in as you scroll */
    scrollAnim('.evt-img, .news-img', {
      scale: [0.92, 1],
    }, { sync: 0.70, enter: 'bottom-=50 top', leave: 'top+=70 bottom' });

    /* 11 ── CTA band heading — zoom-in from slight scale */
    scrollAnim('.cta-band h2, .cta-band p', {
      y:     ['1rem', '0rem'],
      scale: [0.96, 1],
    }, { sync: 0.65, enter: 'bottom-=40 top', leave: 'top+=100 bottom' });

    /* 12 ── Footer — rise from below as you reach the end */
    scrollAnim('footer', {
      y: ['2.5rem', '0rem'],
    }, { sync: 0.70, enter: 'bottom-=60 top', leave: 'top+=60 bottom' });

    /* 13 ── Map / location section — x slide */
    scrollAnim('.map-header, .map-info', {
      x: ['1rem', '0rem'],
    }, { sync: 0.60, enter: 'bottom-=60 top', leave: 'top+=80 bottom' });

    /* 14 ── Job / value rows — x slide from right */
    scrollAnim('.v-row, .pb-side .pb-row, .mi-row', {
      x: ['1.2rem', '0rem'],
    }, { sync: 0.65, enter: 'bottom-=40 top', leave: 'top+=90 bottom' });

  })(); // scrollDriven

})(); // close outer IIFE
