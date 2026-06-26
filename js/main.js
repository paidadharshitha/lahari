/* =============================================
   LAHARI LEGAL ASSOCIATES — Main JavaScript
   ============================================= */

(function () {
  'use strict';

  /* -------------------------------------------
     HERO SLIDER
     ------------------------------------------- */
  const HeroSlider = {
    slides: [],
    dots: [],
    current: 0,
    interval: null,
    autoPlayDelay: 5000,

    init() {
      this.slides = document.querySelectorAll('.hero-slide');
      this.dots = document.querySelectorAll('.hero-dot');
      if (this.slides.length === 0) return;

      this.slides[0].classList.add('active');
      if (this.dots[0]) this.dots[0].classList.add('active');

      // Dot navigation
      this.dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          this.goTo(index);
          this.resetAutoPlay();
        });
      });

      this.startAutoPlay();
    },

    goTo(index) {
      this.slides[this.current].classList.remove('active');
      if (this.dots[this.current]) this.dots[this.current].classList.remove('active');

      this.current = index;

      this.slides[this.current].classList.add('active');
      if (this.dots[this.current]) this.dots[this.current].classList.add('active');
    },

    next() {
      const next = (this.current + 1) % this.slides.length;
      this.goTo(next);
    },

    startAutoPlay() {
      this.interval = setInterval(() => this.next(), this.autoPlayDelay);
    },

    resetAutoPlay() {
      clearInterval(this.interval);
      this.startAutoPlay();
    }
  };

  /* -------------------------------------------
     STICKY HEADER
     ------------------------------------------- */
  const StickyHeader = {
    header: null,
    threshold: 80,

    init() {
      this.header = document.querySelector('.site-header');
      if (!this.header) return;

      window.addEventListener('scroll', () => this.onScroll(), { passive: true });
      this.onScroll(); // Initial check
    },

    onScroll() {
      if (window.scrollY > this.threshold) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    }
  };

  /* -------------------------------------------
     MOBILE NAVIGATION
     ------------------------------------------- */
  const MobileNav = {
    hamburger: null,
    nav: null,
    links: null,
    isOpen: false,

    init() {
      this.hamburger = document.querySelector('.hamburger');
      this.nav = document.querySelector('.mobile-nav');
      if (!this.hamburger || !this.nav) return;

      this.links = this.nav.querySelectorAll('a');

      this.hamburger.addEventListener('click', () => this.toggle());

      this.links.forEach(link => {
        link.addEventListener('click', () => this.close());
      });
    },

    toggle() {
      this.isOpen = !this.isOpen;
      this.hamburger.classList.toggle('active', this.isOpen);
      this.nav.classList.toggle('active', this.isOpen);
      document.body.style.overflow = this.isOpen ? 'hidden' : '';
    },

    close() {
      this.isOpen = false;
      this.hamburger.classList.remove('active');
      this.nav.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  /* -------------------------------------------
     SMOOTH SCROLL FOR ANCHOR LINKS
     ------------------------------------------- */
  const SmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
          const target = document.querySelector(link.getAttribute('href'));
          if (target) {
            e.preventDefault();
            const headerHeight = document.querySelector('.site-header')?.offsetHeight || 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        });
      });
    }
  };

  /* -------------------------------------------
     SCROLL REVEAL ANIMATIONS
     ------------------------------------------- */
  const ScrollReveal = {
    elements: [],

    init() {
      this.elements = document.querySelectorAll('.reveal');
      if (this.elements.length === 0) return;

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
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      this.elements.forEach(el => observer.observe(el));
    }
  };

  /* -------------------------------------------
     LAZY LOADING IMAGES
     ------------------------------------------- */
  const LazyLoad = {
    init() {
      const images = document.querySelectorAll('img[data-src]');
      if (images.length === 0) return;

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                if (img.dataset.srcset) {
                  img.srcset = img.dataset.srcset;
                }
                img.removeAttribute('data-src');
                img.removeAttribute('data-srcset');
                img.classList.add('loaded');
                observer.unobserve(img);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '200px 0px'
          }
        );

        images.forEach(img => observer.observe(img));
      } else {
        // Fallback: load all images
        images.forEach(img => {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        });
      }
    }
  };

  /* -------------------------------------------
     FORM VALIDATION
     ------------------------------------------- */
  const FormValidation = {
    init() {
      const forms = document.querySelectorAll('[data-validate]');
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          if (this.validateForm(form)) {
            this.showSuccess(form);
          }
        });

        // Real-time validation on blur
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
          input.addEventListener('blur', () => {
            this.validateField(input);
          });
        });
      });
    },

    validateField(field) {
      const group = field.closest('.form-group');
      if (!group) return true;

      const error = group.querySelector('.form-error');
      let isValid = true;
      let message = '';

      // Required check
      if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        message = 'This field is required';
      }

      // Email check
      if (field.type === 'email' && field.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
          isValid = false;
          message = 'Please enter a valid email address';
        }
      }

      // Phone check
      if (field.type === 'tel' && field.value.trim()) {
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{8,15}$/;
        if (!phoneRegex.test(field.value.trim())) {
          isValid = false;
          message = 'Please enter a valid phone number';
        }
      }

      // Min length check
      if (field.minLength > 0 && field.value.trim() && field.value.trim().length < field.minLength) {
        isValid = false;
        message = `Minimum ${field.minLength} characters required`;
      }

      if (isValid) {
        group.classList.remove('error');
        if (error) error.textContent = '';
      } else {
        group.classList.add('error');
        if (error) error.textContent = message;
      }

      return isValid;
    },

    validateForm(form) {
      let isValid = true;
      const fields = form.querySelectorAll('input, textarea, select');

      fields.forEach(field => {
        if (!this.validateField(field)) {
          isValid = false;
        }
      });

      return isValid;
    },

    showSuccess(form) {
      const popup = document.querySelector('.success-popup');
      if (popup) {
        popup.classList.add('active');
        form.reset();

        // Clear all error states
        form.querySelectorAll('.form-group.error').forEach(group => {
          group.classList.remove('error');
        });

        // Close on overlay click
        popup.addEventListener('click', (e) => {
          if (e.target === popup) {
            popup.classList.remove('active');
          }
        });

        // Close button
        const closeBtn = popup.querySelector('.popup-close');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            popup.classList.remove('active');
          });
        }
      }
    }
  };

  /* -------------------------------------------
     BLOG FILTER
     ------------------------------------------- */
  const BlogFilter = {
    init() {
      const filterBtns = document.querySelectorAll('.filter-btn');
      const cards = document.querySelectorAll('.blog-card[data-category]');

      if (filterBtns.length === 0 || cards.length === 0) return;

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const category = btn.dataset.filter;

          // Update active button
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          // Filter cards
          cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
              card.style.display = '';
              card.style.opacity = '0';
              card.style.transform = 'translateY(20px)';
              requestAnimationFrame(() => {
                card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              });
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    }
  };

  /* -------------------------------------------
     COUNTER ANIMATION
     ------------------------------------------- */
  const CounterAnimation = {
    init() {
      const counters = document.querySelectorAll('[data-count]');
      if (counters.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      counters.forEach(counter => observer.observe(counter));
    },

    animateCounter(el) {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 2000;
      const start = 0;
      const startTime = performance.now();

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);

        el.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target + suffix;
        }
      };

      requestAnimationFrame(update);
    }
  };

  /* -------------------------------------------
     COOKIE CONSENT
     ------------------------------------------- */
  const CookieConsent = {
    banner: null,

    init() {
      this.banner = document.querySelector('.cookie-consent');
      if (!this.banner) return;

      // Check if consent already given
      if (localStorage.getItem('cookieConsent')) {
        return;
      }

      // Show banner after a short delay
      setTimeout(() => {
        this.banner.classList.add('active');
      }, 1500);

      // Accept
      const acceptBtn = this.banner.querySelector('.btn-cookie-accept');
      if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
          localStorage.setItem('cookieConsent', 'accepted');
          this.banner.classList.remove('active');
        });
      }

      // Decline
      const declineBtn = this.banner.querySelector('.btn-cookie-decline');
      if (declineBtn) {
        declineBtn.addEventListener('click', () => {
          localStorage.setItem('cookieConsent', 'declined');
          this.banner.classList.remove('active');
        });
      }
    }
  };

  /* -------------------------------------------
     ACTIVE NAV LINK HIGHLIGHTING
     ------------------------------------------- */
  const ActiveNavHighlight = {
    sections: [],
    navLinks: [],

    init() {
      this.sections = document.querySelectorAll('section[id]');
      this.navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

      if (this.sections.length === 0 || this.navLinks.length === 0) return;

      window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    },

    onScroll() {
      const scrollPos = window.scrollY + 150;

      this.sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }
  };

  /* -------------------------------------------
     FILE UPLOAD LABEL
     ------------------------------------------- */
  const FileUpload = {
    init() {
      const fileInputs = document.querySelectorAll('.file-upload input[type="file"]');
      fileInputs.forEach(input => {
        input.addEventListener('change', (e) => {
          const label = input.closest('.file-upload').querySelector('.file-upload-name');
          if (label) {
            const files = e.target.files;
            if (files.length > 0) {
              label.textContent = files[0].name;
            } else {
              label.textContent = 'No file chosen';
            }
          }
        });
      });
    }
  };

  /* -------------------------------------------
     SUCCESS POPUP CLOSE ON ESCAPE
     ------------------------------------------- */
  const SuccessPopup = {
    init() {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const popup = document.querySelector('.success-popup.active');
          if (popup) {
            popup.classList.remove('active');
          }
        }
      });
    }
  };

  /* -------------------------------------------
     INITIALIZE ALL
     ------------------------------------------- */
  function init() {
    HeroSlider.init();
    StickyHeader.init();
    MobileNav.init();
    SmoothScroll.init();
    ScrollReveal.init();
    LazyLoad.init();
    FormValidation.init();
    BlogFilter.init();
    CounterAnimation.init();
    CookieConsent.init();
    ActiveNavHighlight.init();
    FileUpload.init();
    SuccessPopup.init();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
