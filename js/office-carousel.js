/**
 * LAHARI LEGAL ASSOCIATES — Office Carousel Module
 * =================================================
 * Self-contained IIFE that manages the office preview image carousel.
 * Features: slide navigation (prev/next + dots), auto-play with pause on hover,
 * basic touch/swipe support, smooth CSS transform transitions.
 *
 * Requires:
 *   - CSS classes defined in style.css (.office-carousel, .office-carousel-track, etc.)
 *   - Font Awesome 6 (loaded via CDN)
 */
(function () {
  'use strict';

  /* ==========================================================================
     Slide Data
     6 office images with captions from Unsplash.
     ========================================================================== */

  var slides = [
    {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      caption: 'Main Reception'
    },
    {
      src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
      caption: 'Conference Room'
    },
    {
      src: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600&q=80',
      caption: 'Reception Lobby'
    },
    {
      src: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?w=600&q=80',
      caption: 'Consultation Room'
    },
    {
      src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
      caption: 'Law Library'
    },
    {
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
      caption: 'Team Meeting'
    }
  ];

  /* ==========================================================================
     Configuration
     ========================================================================== */

  var AUTO_PLAY_INTERVAL = 4000; /* 4 seconds */

  /* ==========================================================================
     State
     ========================================================================== */

  var currentIndex = 0;
  var autoPlayTimer = null;
  var touchStartX = 0;
  var touchEndX = 0;

  /* ==========================================================================
     DOM References
     ========================================================================== */

  var carousel = document.querySelector('.office-carousel');

  function getElements() {
    return {
      track:       carousel ? carousel.querySelector('.office-carousel-track') : null,
      prevBtn:     carousel ? carousel.querySelector('.office-carousel-prev') : null,
      nextBtn:     carousel ? carousel.querySelector('.office-carousel-next') : null,
      dotsWrap:    carousel ? carousel.querySelector('.office-carousel-dots') : null,
      counter:     carousel ? carousel.querySelector('.office-carousel-counter') : null
    };
  }

  var els = getElements();

  /* ==========================================================================
     Build Slides
     Dynamically creates slide elements inside the track if not present.
     ========================================================================== */

  function buildSlides() {
    if (!carousel) {
      return;
    }

    /* Create track if it doesn't exist */
    var track = carousel.querySelector('.office-carousel-track');
    if (!track) {
      track = document.createElement('div');
      track.className = 'office-carousel-track';
      carousel.appendChild(track);
    }
    els.track = track;

    /* Create slides if track is empty */
    if (track.children.length === 0) {
      var i, slide, img, caption;
      for (i = 0; i < slides.length; i++) {
        slide = document.createElement('div');
        slide.className = 'office-carousel-slide';

        img = document.createElement('img');
        img.src = slides[i].src;
        img.alt = slides[i].caption;
        img.loading = 'lazy';

        caption = document.createElement('div');
        caption.className = 'office-carousel-caption';
        caption.textContent = slides[i].caption;

        slide.appendChild(img);
        slide.appendChild(caption);
        track.appendChild(slide);
      }
    }

    /* Create dots if they don't exist */
    var dotsWrap = carousel.querySelector('.office-carousel-dots');
    if (!dotsWrap) {
      dotsWrap = document.createElement('div');
      dotsWrap.className = 'office-carousel-dots';
      carousel.appendChild(dotsWrap);
    }
    els.dotsWrap = dotsWrap;

    if (dotsWrap.children.length === 0) {
      var j, dot;
      for (j = 0; j < slides.length; j++) {
        dot = document.createElement('button');
        dot.className = 'office-carousel-dot' + (j === 0 ? ' active' : '');
        dot.setAttribute('data-slide', j);
        dot.setAttribute('aria-label', 'Go to slide ' + (j + 1));
        dotsWrap.appendChild(dot);
      }
    }

    /* Create counter if it doesn't exist */
    if (!carousel.querySelector('.office-carousel-counter')) {
      var counter = document.createElement('div');
      counter.className = 'office-carousel-counter';
      counter.innerHTML = '<span class="office-carousel-current">1</span> / <span class="office-carousel-total">' + slides.length + '</span>';
      carousel.appendChild(counter);
    }
    els.counter = carousel.querySelector('.office-carousel-counter');
  }

  /* ==========================================================================
     Inject CSS
     ========================================================================== */

  function injectStyles() {
    if (document.getElementById('office-carousel-styles')) {
      return;
    }

    var style = document.createElement('style');
    style.id = 'office-carousel-styles';
    style.textContent =
      /* Container */
      '.office-carousel {' +
        'position:relative;overflow:hidden;border-radius:12px;' +
        'border:1px solid var(--border-light);background:var(--bg-card-solid);' +
        'box-shadow:var(--shadow-md);' +
      '}' +
      /* Track */
      '.office-carousel-track {' +
        'display:flex;transition:transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);' +
        'will-change:transform;' +
      '}' +
      /* Slide */
      '.office-carousel-slide {' +
        'min-width:100%;position:relative;' +
      '}' +
      '.office-carousel-slide img {' +
        'width:100%;height:400px;object-fit:cover;display:block;' +
      '}' +
      /* Caption */
      '.office-carousel-caption {' +
        'position:absolute;bottom:0;left:0;right:0;' +
        'padding:16px 24px;background:linear-gradient(transparent,rgba(0,0,0,0.7));' +
        'color:#fff;font-family:var(--font-body);font-size:0.95rem;font-weight:600;' +
        'letter-spacing:0.5px;' +
      '}' +
      /* Prev/Next Buttons */
      '.office-carousel-prev,' +
      '.office-carousel-next {' +
        'position:absolute;top:50%;transform:translateY(-50%);' +
        'width:44px;height:44px;border-radius:50%;' +
        'border:1px solid rgba(255,255,255,0.3);background:rgba(0,0,0,0.4);' +
        'backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);' +
        'color:#fff;font-size:0.9rem;cursor:pointer;' +
        'display:flex;align-items:center;justify-content:center;' +
        'transition:all 0.25s ease;z-index:10;' +
      '}' +
      '.office-carousel-prev { left:12px; }' +
      '.office-carousel-next { right:12px; }' +
      '.office-carousel-prev:hover,' +
      '.office-carousel-next:hover {' +
        'background:rgba(201,162,74,0.8);border-color:var(--gold);' +
      '}' +
      /* Dots */
      '.office-carousel-dots {' +
        'display:flex;align-items:center;justify-content:center;' +
        'gap:8px;padding:12px 0;position:absolute;bottom:12px;left:50%;' +
        'transform:translateX(-50%);z-index:10;' +
      '}' +
      '.office-carousel-dot {' +
        'width:10px;height:10px;border-radius:50%;' +
        'border:1px solid rgba(255,255,255,0.4);background:transparent;' +
        'cursor:pointer;transition:all 0.25s ease;padding:0;' +
      '}' +
      '.office-carousel-dot.active {' +
        'background:var(--gold);border-color:var(--gold);transform:scale(1.2);' +
      '}' +
      '.office-carousel-dot:hover {' +
        'border-color:var(--gold);background:rgba(201,162,74,0.5);' +
      '}' +
      /* Counter */
      '.office-carousel-counter {' +
        'position:absolute;top:12px;right:12px;z-index:10;' +
        'padding:6px 14px;border-radius:4px;' +
        'background:rgba(0,0,0,0.5);backdrop-filter:blur(8px);' +
        '-webkit-backdrop-filter:blur(8px);' +
        'color:#fff;font-size:0.78rem;font-weight:600;letter-spacing:1px;' +
        'font-family:var(--font-body);' +
      '}' +
      /* Responsive */
      '@media(max-width:768px) {' +
        '.office-carousel-slide img { height:280px; }' +
        '.office-carousel-prev,.office-carousel-next { width:36px;height:36px;font-size:0.8rem; }' +
        '.office-carousel-prev { left:8px; }' +
        '.office-carousel-next { right:8px; }' +
      '}' +
      '@media(max-width:480px) {' +
        '.office-carousel-slide img { height:220px; }' +
      '}';

    document.head.appendChild(style);
  }

  /* ==========================================================================
     Navigation
     ========================================================================== */

  function goToSlide(index) {
    if (index < 0) {
      index = slides.length - 1;
    }
    if (index >= slides.length) {
      index = 0;
    }

    currentIndex = index;

    /* Move track */
    if (els.track) {
      els.track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    }

    /* Update dots */
    var dots = els.dotsWrap ? els.dotsWrap.querySelectorAll('.office-carousel-dot') : [];
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.toggle('active', i === currentIndex);
    }

    /* Update counter */
    if (els.counter) {
      var currentEl = els.counter.querySelector('.office-carousel-current');
      if (currentEl) {
        currentEl.textContent = currentIndex + 1;
      }
    }
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  /* ==========================================================================
     Auto-Play
     ========================================================================== */

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
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

  /* ==========================================================================
     Touch / Swipe Support
     Basic touchstart/touchend detection for mobile swipe gestures.
     ========================================================================== */

  function initTouchSupport() {
    if (!carousel) {
      return;
    }

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
    var minSwipe = 50; /* Minimum px to count as a swipe */

    if (diff > minSwipe) {
      /* Swiped left → next slide */
      nextSlide();
    } else if (diff < -minSwipe) {
      /* Swiped right → prev slide */
      prevSlide();
    }
  }

  /* ==========================================================================
     Event Handlers
     ========================================================================== */

  function initEvents() {
    /* Prev/Next buttons */
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

    /* Dot navigation */
    if (els.dotsWrap) {
      els.dotsWrap.addEventListener('click', function (e) {
        var dot = e.target.closest('.office-carousel-dot');
        if (!dot) {
          return;
        }
        var index = parseInt(dot.getAttribute('data-slide'), 10);
        if (!isNaN(index)) {
          goToSlide(index);
          resetAutoPlay();
        }
      });
    }

    /* Pause on hover */
    if (carousel) {
      carousel.addEventListener('mouseenter', stopAutoPlay);
      carousel.addEventListener('mouseleave', startAutoPlay);
    }
  }

  /* ==========================================================================
     Create Navigation Controls (if not in HTML)
     ========================================================================== */

  function createControls() {
    if (!carousel) {
      return;
    }

    /* Prev button */
    if (!carousel.querySelector('.office-carousel-prev')) {
      var prevBtn = document.createElement('button');
      prevBtn.className = 'office-carousel-prev';
      prevBtn.setAttribute('aria-label', 'Previous slide');
      prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
      carousel.appendChild(prevBtn);
    }
    els.prevBtn = carousel.querySelector('.office-carousel-prev');

    /* Next button */
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
    if (!carousel) {
      return;
    }

    injectStyles();
    buildSlides();
    createControls();
    initEvents();
    initTouchSupport();

    /* Set initial slide */
    goToSlide(0);

    /* Start auto-play */
    startAutoPlay();
  }

  /* Run when DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
