/**
 * LAHARI LEGAL ASSOCIATES — Office Carousel Module
 * =================================================
 * Premium infinite auto-scrolling carousel with smooth fade+slide transitions.
 * Features: infinite loop, auto-scroll, pause on hover, rounded premium frames,
 * dot navigation, prev/next buttons, touch/swipe support.
 */
(function () {
  'use strict';

  /* ==========================================================================
     Slide Data — Premium law office images from Unsplash
     ========================================================================== */

  var slides = [
    {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      caption: 'Modern Office Reception'
    },
    {
      src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      caption: 'Executive Conference Room'
    },
    {
      src: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=1200&q=80',
      caption: 'Client Consultation Room'
    },
    {
      src: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80',
      caption: 'Corporate Workspace'
    },
    {
      src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      caption: 'Board Room'
    },
    {
      src: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80',
      caption: 'Premium Office Interior'
    },
    {
      src: 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?auto=format&fit=crop&w=1200&q=80',
      caption: 'Team Meeting Space'
    },
    {
      src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
      caption: 'Partner\'s Office'
    }
  ];

  /* ==========================================================================
     Configuration
     ========================================================================== */

  var AUTO_PLAY_INTERVAL = 4500;
  var TRANSITION_DURATION = 700;

  /* ==========================================================================
     State
     ========================================================================== */

  var currentIndex = 0;
  var autoPlayTimer = null;
  var touchStartX = 0;
  var touchEndX = 0;
  var isTransitioning = false;

  /* ==========================================================================
     DOM References
     ========================================================================== */

  var carousel = document.querySelector('.office-carousel');

  var els = {
    track: null,
    prevBtn: null,
    nextBtn: null,
    dotsWrap: null,
    counter: null
  };

  function getElements() {
    return {
      track:    carousel ? carousel.querySelector('.office-carousel-track') : null,
      prevBtn:  carousel ? carousel.querySelector('.office-carousel-prev') : null,
      nextBtn:  carousel ? carousel.querySelector('.office-carousel-next') : null,
      dotsWrap: carousel ? carousel.querySelector('.office-carousel-dots') : null,
      counter:  carousel ? carousel.querySelector('.office-carousel-counter') : null
    };
  }

  /* ==========================================================================
     Inject CSS — Premium carousel styles
     ========================================================================== */

  function injectStyles() {
    if (document.getElementById('office-carousel-styles')) {
      return;
    }

    var style = document.createElement('style');
    style.id = 'office-carousel-styles';
    style.textContent =
      '.office-carousel {' +
        'position:relative;overflow:hidden;border-radius:16px;' +
        'border:1px solid var(--border-light);background:var(--bg-card-solid);' +
        'box-shadow:var(--shadow-lg);' +
      '}' +
      '.office-carousel-track {' +
        'display:flex;transition:transform ' + TRANSITION_DURATION + 'ms cubic-bezier(0.25,0.46,0.45,0.94);' +
        'will-change:transform;' +
      '}' +
      '.office-carousel-slide {' +
        'min-width:100%;position:relative;overflow:hidden;' +
      '}' +
      '.office-carousel-slide img {' +
        'width:100%;height:480px;object-fit:cover;display:block;' +
        'transition:transform 6s ease-out;' +
      '}' +
      '.office-carousel-slide.active img {' +
        'transform:scale(1.05);' +
      '}' +
      '.office-carousel-caption {' +
        'position:absolute;bottom:0;left:0;right:0;' +
        'padding:20px 28px;' +
        'background:linear-gradient(transparent, rgba(0,0,0,0.75));' +
        'color:#fff;font-family:var(--font-body);font-size:1rem;font-weight:600;' +
        'letter-spacing:0.5px;' +
      '}' +
      '.office-carousel-prev,' +
      '.office-carousel-next {' +
        'position:absolute;top:50%;transform:translateY(-50%);' +
        'width:48px;height:48px;border-radius:50%;' +
        'border:1px solid rgba(255,255,255,0.25);' +
        'background:rgba(0,0,0,0.35);' +
        'backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);' +
        'color:#fff;font-size:0.95rem;cursor:pointer;' +
        'display:flex;align-items:center;justify-content:center;' +
        'transition:all 0.3s ease;z-index:10;' +
      '}' +
      '.office-carousel-prev { left:16px; }' +
      '.office-carousel-next { right:16px; }' +
      '.office-carousel-prev:hover,' +
      '.office-carousel-next:hover {' +
        'background:rgba(201,162,74,0.85);border-color:var(--gold);' +
        'box-shadow:0 4px 20px rgba(201,162,74,0.4);' +
        'transform:translateY(-50%) scale(1.08);' +
      '}' +
      '.office-carousel-dots {' +
        'display:flex;align-items:center;justify-content:center;' +
        'gap:10px;padding:0;position:absolute;bottom:60px;left:50%;' +
        'transform:translateX(-50%);z-index:10;' +
      '}' +
      '.office-carousel-dot {' +
        'width:10px;height:10px;border-radius:50%;' +
        'border:1px solid rgba(255,255,255,0.35);background:transparent;' +
        'cursor:pointer;transition:all 0.3s ease;padding:0;' +
      '}' +
      '.office-carousel-dot.active {' +
        'background:var(--gold);border-color:var(--gold);transform:scale(1.3);' +
        'box-shadow:0 0 10px rgba(201,162,74,0.5);' +
      '}' +
      '.office-carousel-dot:hover {' +
        'border-color:var(--gold);background:rgba(201,162,74,0.5);' +
      '}' +
      '.office-carousel-counter {' +
        'position:absolute;top:16px;right:16px;z-index:10;' +
        'padding:6px 16px;border-radius:20px;' +
        'background:rgba(0,0,0,0.45);backdrop-filter:blur(10px);' +
        '-webkit-backdrop-filter:blur(10px);' +
        'color:#fff;font-size:0.8rem;font-weight:600;letter-spacing:1px;' +
        'font-family:var(--font-body);border:1px solid rgba(255,255,255,0.1);' +
      '}' +
      '.office-carousel-progress {' +
        'position:absolute;bottom:0;left:0;right:0;height:3px;' +
        'background:rgba(255,255,255,0.1);z-index:10;overflow:hidden;' +
      '}' +
      '.office-carousel-progress-bar {' +
        'height:100%;width:0;background:var(--gold-gradient);' +
        'transition:width 0.3s linear;' +
      '}' +
      '@media(max-width:1024px) {' +
        '.office-carousel-slide img { height:400px; }' +
      '}' +
      '@media(max-width:768px) {' +
        '.office-carousel-slide img { height:300px; }' +
        '.office-carousel-prev,.office-carousel-next { width:40px;height:40px;font-size:0.85rem; }' +
        '.office-carousel-prev { left:10px; }' +
        '.office-carousel-next { right:10px; }' +
        '.office-carousel-dots { bottom:50px; gap:8px; }' +
        '.office-carousel-caption { padding:16px 20px; font-size:0.9rem; }' +
      '}' +
      '@media(max-width:480px) {' +
        '.office-carousel-slide img { height:240px; }' +
        '.office-carousel-prev,.office-carousel-next { width:36px;height:36px;font-size:0.8rem; }' +
        '.office-carousel-prev { left:8px; }' +
        '.office-carousel-next { right:8px; }' +
        '.office-carousel-dots { bottom:44px; }' +
        '.office-carousel-caption { padding:12px 16px; font-size:0.82rem; }' +
        '.office-carousel-counter { font-size:0.72rem; padding:4px 12px; }' +
      '}';

    document.head.appendChild(style);
  }

  /* ==========================================================================
     Build Slides — Create DOM elements dynamically
     ========================================================================== */

  function buildSlides() {
    if (!carousel) { return; }

    var track = carousel.querySelector('.office-carousel-track');
    if (!track) {
      track = document.createElement('div');
      track.className = 'office-carousel-track';
      carousel.appendChild(track);
    }
    els.track = track;

    if (track.children.length === 0) {
      for (var i = 0; i < slides.length; i++) {
        var slide = document.createElement('div');
        slide.className = 'office-carousel-slide';

        var img = document.createElement('img');
        img.src = slides[i].src;
        img.alt = slides[i].caption;
        img.loading = (i === 0) ? 'eager' : 'lazy';
        img.onerror = (function (slideEl) {
          return function () {
            slideEl.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)';
            this.style.display = 'none';
          };
        })(slide);

        var caption = document.createElement('div');
        caption.className = 'office-carousel-caption';
        caption.textContent = slides[i].caption;

        slide.appendChild(img);
        slide.appendChild(caption);
        track.appendChild(slide);
      }
    }

    /* Create dots */
    var dotsWrap = carousel.querySelector('.office-carousel-dots');
    if (!dotsWrap) {
      dotsWrap = document.createElement('div');
      dotsWrap.className = 'office-carousel-dots';
      carousel.appendChild(dotsWrap);
    }
    els.dotsWrap = dotsWrap;

    if (dotsWrap.children.length === 0) {
      for (var j = 0; j < slides.length; j++) {
        var dot = document.createElement('button');
        dot.className = 'office-carousel-dot' + (j === 0 ? ' active' : '');
        dot.setAttribute('data-slide', j);
        dot.setAttribute('aria-label', 'Go to slide ' + (j + 1));
        dotsWrap.appendChild(dot);
      }
    }

    /* Create counter */
    if (!carousel.querySelector('.office-carousel-counter')) {
      var counter = document.createElement('div');
      counter.className = 'office-carousel-counter';
      counter.innerHTML = '<span class="office-carousel-current">1</span> / <span class="office-carousel-total">' + slides.length + '</span>';
      carousel.appendChild(counter);
    }
    els.counter = carousel.querySelector('.office-carousel-counter');

    /* Create progress bar */
    if (!carousel.querySelector('.office-carousel-progress')) {
      var progressWrap = document.createElement('div');
      progressWrap.className = 'office-carousel-progress';
      var progressBar = document.createElement('div');
      progressBar.className = 'office-carousel-progress-bar';
      progressWrap.appendChild(progressBar);
      carousel.appendChild(progressWrap);
    }
  }

  /* ==========================================================================
     Navigation
     ========================================================================== */

  function goToSlide(index) {
    if (isTransitioning) { return; }

    if (index < 0) { index = slides.length - 1; }
    if (index >= slides.length) { index = 0; }

    isTransitioning = true;
    currentIndex = index;

    if (els.track) {
      els.track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    }

    var allSlides = els.track ? els.track.querySelectorAll('.office-carousel-slide') : [];
    for (var s = 0; s < allSlides.length; s++) {
      allSlides[s].classList.toggle('active', s === currentIndex);
    }

    var dots = els.dotsWrap ? els.dotsWrap.querySelectorAll('.office-carousel-dot') : [];
    for (var d = 0; d < dots.length; d++) {
      dots[d].classList.toggle('active', d === currentIndex);
    }

    if (els.counter) {
      var currentEl = els.counter.querySelector('.office-carousel-current');
      if (currentEl) {
        currentEl.textContent = currentIndex + 1;
      }
    }

    setTimeout(function () {
      isTransitioning = false;
    }, TRANSITION_DURATION);
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  /* ==========================================================================
     Auto-Play with Progress Bar
     ========================================================================== */

  var progressValue = 0;

  function startAutoPlay() {
    stopAutoPlay();
    progressValue = 0;
    updateProgressBar(0);
    autoPlayTimer = setInterval(function () {
      progressValue += 100 / (AUTO_PLAY_INTERVAL / 50);
      updateProgressBar(progressValue);
      if (progressValue >= 100) {
        nextSlide();
        progressValue = 0;
      }
    }, 50);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  function updateProgressBar(pct) {
    var bar = carousel ? carousel.querySelector('.office-carousel-progress-bar') : null;
    if (bar) {
      bar.style.width = Math.min(pct, 100) + '%';
    }
  }

  /* ==========================================================================
     Touch / Swipe Support
     ========================================================================== */

  function initTouchSupport() {
    if (!carousel) { return; }

    carousel.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    }, { passive: true });

    carousel.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      startAutoPlay();
    }, { passive: true });
  }

  function handleSwipe() {
    var diff = touchStartX - touchEndX;
    var minSwipe = 50;

    if (diff > minSwipe) {
      nextSlide();
    } else if (diff < -minSwipe) {
      prevSlide();
    }
  }

  /* ==========================================================================
     Event Handlers
     ========================================================================== */

  function initEvents() {
    if (els.prevBtn) {
      els.prevBtn.addEventListener('click', function () {
        prevSlide();
        resetAutoPlay();
      });
    }

    if (els.nextBtn) {
      els.nextBtn.addEventListener('click', function () {
        nextSlide();
        resetAutoPlay();
      });
    }

    if (els.dotsWrap) {
      els.dotsWrap.addEventListener('click', function (e) {
        var dot = e.target.closest('.office-carousel-dot');
        if (!dot) { return; }
        var index = parseInt(dot.getAttribute('data-slide'), 10);
        if (!isNaN(index)) {
          goToSlide(index);
          resetAutoPlay();
        }
      });
    }

    if (carousel) {
      carousel.addEventListener('mouseenter', stopAutoPlay);
      carousel.addEventListener('mouseleave', startAutoPlay);
    }
  }

  /* ==========================================================================
     Create Navigation Controls (if not in HTML)
     ========================================================================== */

  function createControls() {
    if (!carousel) { return; }

    if (!carousel.querySelector('.office-carousel-prev')) {
      var prevBtn = document.createElement('button');
      prevBtn.className = 'office-carousel-prev';
      prevBtn.setAttribute('aria-label', 'Previous slide');
      prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
      carousel.appendChild(prevBtn);
    }
    els.prevBtn = carousel.querySelector('.office-carousel-prev');

    if (!carousel.querySelector('.office-carousel-next')) {
      var nextBtn = document.createElement('button');
      nextBtn.className = 'office-carousel-next';
      nextBtn.setAttribute('aria-label', 'Next slide');
      nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
      carousel.appendChild(nextBtn);
    }
    els.nextBtn = carousel.querySelector('.office-carousel-next');
  }

  /* ==========================================================================
     Initialize
     ========================================================================== */

  function init() {
    if (!carousel) { return; }

    els = getElements();
    injectStyles();
    buildSlides();
    createControls();
    initEvents();
    initTouchSupport();

    goToSlide(0);
    startAutoPlay();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
