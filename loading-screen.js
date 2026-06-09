/* ================================================================
   PREMIUM LOADING SCREEN v4 — Amitabha Foundation / EHKC
   Bugs fixed:
   • Veil removed BEFORE setting body visible (was overridden by !important)
   • Canvas element removed from HTML template (was an invisible stray flex item)
   • CSS var() in @keyframes replaced with per-element keyframes in CSS
   • Logo hover enabled only after entrance animation completes
   ================================================================ */
(function () {
  'use strict';

  var LOGO_SRC = 'Photo/AF_EH%20ARGB%20LOGO%20.png';
  var DURATION = 3400; /* ms until auto-exit */
  var MESSAGES = ['Welcome', 'Preparing Your Experience', 'Loading Resources', 'Almost Ready'];

  /* ── Safety net: ensure body stays hidden until loader is ready */
  if (!document.getElementById('ls-veil')) {
    var veil = document.createElement('style');
    veil.id  = 'ls-veil';
    veil.textContent = 'html,body{background:#060c16!important;visibility:hidden!important}';
    (document.head || document.documentElement).appendChild(veil);
  }

  /* ── Build DOM ──────────────────────────────────────────────── */
  function buildHTML() {
    var el = document.createElement('div');
    el.id = 'loading-screen';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-label', 'Loading');

    el.innerHTML = [
      '<div id="ls-bg"></div>',
      '<div id="ls-grid"></div>',

      /* Layer 1 – orbs */
      '<div class="ls-layer" id="ls-l1">',
        '<div class="ls-orb ls-orb-1"></div>',
        '<div class="ls-orb ls-orb-2"></div>',
        '<div class="ls-orb ls-orb-3"></div>',
        '<div class="ls-orb ls-orb-4"></div>',
      '</div>',

      /* Layer 2 – geometry */
      '<div class="ls-layer" id="ls-l2">',
        '<div class="ls-flat-ring ls-flat-ring-1"></div>',
        '<div class="ls-flat-ring ls-flat-ring-2"></div>',
        '<div class="ls-orbit ls-orbit-1"></div>',
        '<div class="ls-orbit ls-orbit-2"></div>',
        '<div class="ls-orbit ls-orbit-3"></div>',
        '<div id="ls-scan"></div>',
        '<div class="ls-line ls-line-1"></div>',
        '<div class="ls-line ls-line-2"></div>',
        '<div class="ls-line ls-line-3"></div>',
        '<div class="ls-panel ls-panel-1"></div>',
        '<div class="ls-panel ls-panel-2"></div>',
        '<div class="ls-panel ls-panel-3"></div>',
        '<div class="ls-bracket ls-bracket-tl"></div>',
        '<div class="ls-bracket ls-bracket-tr"></div>',
        '<div class="ls-bracket ls-bracket-bl"></div>',
        '<div class="ls-bracket ls-bracket-br"></div>',
      '</div>',

      /* Layer 3 – particles */
      '<div class="ls-layer" id="ls-l3"></div>',

      /* Centre */
      '<div id="ls-center">',
        '<div id="ls-logo-wrap">',
          '<div id="ls-logo-aura"></div>',
          '<div id="ls-logo-glow"></div>',
          '<div id="ls-logo-ring-outer"></div>',
          '<div id="ls-logo-ring-inner"></div>',
          '<img id="ls-logo" src="' + LOGO_SRC + '" alt="Amitabha Foundation" width="210" height="210" draggable="false">',
          '<div id="ls-logo-ref"></div>',
        '</div>',

        '<div id="ls-brand">',
          '<span id="ls-brand-name">Amitabha Foundation</span>',
          '<span id="ls-brand-sub">Elder Home &amp; Care</span>',
        '</div>',

        '<div id="ls-ring-wrap">',
          '<svg viewBox="0 0 100 100" aria-hidden="true">',
            '<defs>',
              '<linearGradient id="ls-grad" x1="0%" y1="0%" x2="100%" y2="100%">',
                '<stop offset="0%"   stop-color="#c47a4a"/>',
                '<stop offset="50%"  stop-color="#d68d5b"/>',
                '<stop offset="100%" stop-color="#eec4a3"/>',
              '</linearGradient>',
            '</defs>',
            '<circle class="ls-ring-track" cx="50" cy="50" r="44"/>',
            '<circle class="ls-ring-arc"   cx="50" cy="50" r="44"/>',
          '</svg>',
        '</div>',

        '<div id="ls-status">',
          '<span class="ls-msg" id="ls-msg">' + MESSAGES[0] + '</span>',
        '</div>',

        '<div id="ls-dots">',
          '<div class="ls-dot"></div>',
          '<div class="ls-dot"></div>',
          '<div class="ls-dot"></div>',
        '</div>',
      '</div>',

      '<div id="ls-skip">Tap anywhere to skip</div>'
    ].join('');

    return el;
  }

  /* ── Particles ──────────────────────────────────────────────── */
  function spawnParticles(container) {
    var cols = ['#c47a4a', '#d68d5b', '#e3a681', '#b86838', '#eec4a3'];
    for (var i = 0; i < 55; i++) {
      var p  = document.createElement('div');
      var sz = (Math.random() * 3.8 + 0.5).toFixed(1);
      var c  = cols[i % cols.length];
      p.className = 'ls-particle';
      p.style.cssText = [
        'width:'   + sz + 'px',
        'height:'  + sz + 'px',
        'left:'    + (Math.random() * 100).toFixed(1) + '%',
        'top:'     + (Math.random() * 100).toFixed(1) + '%',
        'background:' + c,
        'box-shadow:0 0 ' + (parseFloat(sz) * 3.5).toFixed(0) + 'px ' + c,
        '--dur:'   + (Math.random() * 7 + 3).toFixed(1) + 's',
        '--delay:' + (Math.random() * -14).toFixed(1) + 's',
        '--op:'    + (Math.random() * 0.55 + 0.08).toFixed(2),
        '--tx:'    + ((Math.random() - 0.5) * 65).toFixed(0) + 'px',
        '--ty:'    + ((Math.random() - 0.5) * 65).toFixed(0) + 'px'
      ].join(';');
      container.appendChild(p);
    }
  }

  /* ── Rotating messages ──────────────────────────────────────── */
  function startMessages(el) {
    var idx = 0;
    setTimeout(function () { el.classList.add('ls-msg-show'); }, 100);
    var t = setInterval(function () {
      if (++idx >= MESSAGES.length) { clearInterval(t); return; }
      el.classList.remove('ls-msg-show');
      el.classList.add('ls-msg-exit');
      setTimeout(function () {
        el.textContent = MESSAGES[idx];
        el.classList.remove('ls-msg-exit');
        void el.offsetWidth;
        el.classList.add('ls-msg-show');
      }, 360);
    }, 900);
    return t;
  }

  /* ── Parallax ───────────────────────────────────────────────── */
  function setupParallax(layers) {
    var tx = 0, ty = 0, cx = 0, cy = 0, raf;

    function onMove(e) {
      var ex = e.touches ? e.touches[0].clientX : e.clientX;
      var ey = e.touches ? e.touches[0].clientY : e.clientY;
      tx = (ex / window.innerWidth  - 0.5) * 2;
      ty = (ey / window.innerHeight - 0.5) * 2;
    }
    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('touchmove', onMove, { passive: true });

    function tick() {
      cx += (tx - cx) * 0.04;
      cy += (ty - cy) * 0.04;
      if (layers.l1) layers.l1.style.transform = 'translate3d(' + (cx*6)  + 'px,' + (cy*6)  + 'px,0)';
      if (layers.l2) layers.l2.style.transform = 'translate3d(' + (cx*12) + 'px,' + (cy*12) + 'px,0)';
      if (layers.l3) layers.l3.style.transform = 'translate3d(' + (cx*20) + 'px,' + (cy*20) + 'px,0)';
      if (layers.logo) {
        layers.logo.style.transform =
          'perspective(800px) rotateX(' + (-cy*14).toFixed(1) + 'deg) rotateY(' + (cx*14).toFixed(1) + 'deg)';
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return function () {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('touchmove', onMove);
    };
  }

  /* ── Exit ───────────────────────────────────────────────────── */
  function exitLoader(loader, stopParallax, msgTimer) {
    clearInterval(msgTimer);
    loader.classList.add('ls-out');
    document.body.classList.remove('ls-active');
    setTimeout(function () {
      stopParallax();
      if (loader.parentNode) loader.parentNode.removeChild(loader);
    }, 860);
  }

  /* ── Init ───────────────────────────────────────────────────── */
  function init() {
    var loader = buildHTML();

    /* Inject loader as very first body child */
    if (document.body.firstChild) {
      document.body.insertBefore(loader, document.body.firstChild);
    } else {
      document.body.appendChild(loader);
    }

    /* FIX: remove veil FIRST (the !important rule), THEN set inline visibility */
    var v = document.getElementById('ls-veil');
    if (v && v.parentNode) v.parentNode.removeChild(v);
    document.body.style.visibility = 'visible';

    document.body.classList.add('ls-active');

    spawnParticles(document.getElementById('ls-l3'));

    var msgEl    = document.getElementById('ls-msg');
    var msgTimer = startMessages(msgEl);

    var stopParallax = function () {};
    setTimeout(function () {
      stopParallax = setupParallax({
        l1:   document.getElementById('ls-l1'),
        l2:   document.getElementById('ls-l2'),
        l3:   document.getElementById('ls-l3'),
        logo: document.getElementById('ls-logo-wrap')
      });
    }, 500);

    /* Enable hover interaction after entrance animation finishes (~1.5s) */
    setTimeout(function () {
      var wrap = document.getElementById('ls-logo-wrap');
      if (wrap) wrap.classList.add('ls-hoverable');
    }, 1500);

    var autoTimer = setTimeout(function () {
      exitLoader(loader, stopParallax, msgTimer);
    }, DURATION);

    /* Click/tap anywhere to skip */
    loader.addEventListener('click', function () {
      clearTimeout(autoTimer);
      exitLoader(loader, stopParallax, msgTimer);
    }, { once: true });
  }

  /* ── Entry ──────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', init);

}());
