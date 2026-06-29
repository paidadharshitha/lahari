/**
 * LAHARI LEGAL ASSOCIATES — Main JavaScript
 * ==========================================
 * Core site functionality: theme toggle, navigation, scroll animations,
 * hero slideshow, testimonials carousel, micro-interactions, and more.
 *
 * Pattern: Single IIFE, 'use strict', ES5-compatible (var, function, no arrows).
 */
(function () {
  'use strict';


  /* ==========================================================================
     3. SERVICES DROPDOWN (Desktop)
     Click and hover interactions for the desktop nav services dropdown.
     ========================================================================== */

  (function () {
    var wrappers = document.querySelectorAll('.nav-dropdown-wrapper');

    function closeAllDropdowns() {
      var openWrappers = document.querySelectorAll('.nav-dropdown-wrapper.open');
      for (var j = 0; j < openWrappers.length; j++) {
        openWrappers[j].classList.remove('open');
      }
    }

    for (var i = 0; i < wrappers.length; i++) {
      (function (wrapper) {
        var trigger = wrapper.querySelector('.nav-dropdown-trigger');

        /* Click toggle */
        if (trigger) {
          trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            var isOpen = wrapper.classList.contains('open');
            closeAllDropdowns();
            if (!isOpen) {
              wrapper.classList.add('open');
            }
          });
        }

        /* Mouseenter open */
        wrapper.addEventListener('mouseenter', function () {
          closeAllDropdowns();
          wrapper.classList.add('open');
        });

        /* Mouseleave close */
        wrapper.addEventListener('mouseleave', function () {
          wrapper.classList.remove('open');
        });
      })(wrappers[i]);
    }

    /* Close on outside click */
    document.addEventListener('click', function () {
      closeAllDropdowns();
    });

    /* Close on Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeAllDropdowns();
      }
    });
  })();


  /* ==========================================================================
     4. MOBILE NAV
     Hamburger menu toggle with body scroll lock and backdrop overlay.
     ========================================================================== */

  (function () {
    var toggle = document.querySelector('.mobile-toggle');
    var mobileNav = document.querySelector('.mobile-nav');
    var overlay = null;

    function createOverlay() {
      overlay = document.createElement('div');
      overlay.className = 'mobile-nav-overlay';
      document.body.appendChild(overlay);
      overlay.addEventListener('click', closeMobileNav);
    }

    function openMobileNav() {
      mobileNav.classList.add('open');
      if (toggle) toggle.classList.add('active');
      document.body.classList.add('mobile-nav-open');
      if (!overlay) {
        createOverlay();
      }
      setTimeout(function () {
        overlay.classList.add('visible');
      }, 10);
    }

    function closeMobileNav() {
      mobileNav.classList.remove('open');
      if (toggle) toggle.classList.remove('active');
      document.body.classList.remove('mobile-nav-open');
      if (overlay) {
        overlay.classList.remove('visible');
        setTimeout(function () {
          if (overlay && overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
          }
          overlay = null;
        }, 300);
      }
    }

    function toggleMobileNav() {
      if (mobileNav.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    }

    if (toggle && mobileNav) {
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMobileNav();
      });

      /* Close when a nav link is clicked */
      var mobileLinks = mobileNav.querySelectorAll('a');
      for (var i = 0; i < mobileLinks.length; i++) {
        mobileLinks[i].addEventListener('click', function () {
          closeMobileNav();
        });
      }
    }
  })();


  /* ==========================================================================
     5. MOBILE SERVICES TOGGLE
     Accordion-style expand/collapse for mobile services list.
     ========================================================================== */

  (function () {
    var toggleBtn = document.querySelector('.mobile-services-toggle');
    var servicesList = document.querySelector('.mobile-services-list');

    if (toggleBtn && servicesList) {
      toggleBtn.addEventListener('click', function () {
        var isOpen = servicesList.classList.contains('open');
        servicesList.classList.toggle('open');
        toggleBtn.classList.toggle('active');
        /* Rotate chevron icon */
        var arrow = toggleBtn.querySelector('i');
        if (arrow) {
          arrow.style.transform = isOpen ? '' : 'rotate(180deg)';
        }
      });
    }
  })();


  /* ==========================================================================
     6. ACTIVE NAV HIGHLIGHTING
     Compares current page filename against nav links and adds .active class.
     ========================================================================== */

  (function () {
    var path = window.location.pathname;
    var filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

    function setActive(links) {
      for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute('href');
        if (!href) {
          continue;
        }
        var linkFile = href.substring(href.lastIndexOf('/') + 1);
        /* Remove hash fragment for comparison */
        if (linkFile.indexOf('#') !== -1) {
          linkFile = linkFile.substring(0, linkFile.indexOf('#'));
        }
        if (linkFile === filename) {
          links[i].classList.add('active');
        } else {
          links[i].classList.remove('active');
        }
      }
    }

    /* Desktop nav direct links */
    var mainNavLinks = document.querySelectorAll('.main-nav > a');
    setActive(mainNavLinks);

    /* Mobile nav direct links */
    var mobileNavLinks = document.querySelectorAll('.mobile-nav > a');
    setActive(mobileNavLinks);
  })();


  /* ==========================================================================
     7. SCROLL ANIMATIONS (IntersectionObserver — Enhanced)
     Observes fade-in elements and adds .visible class on intersection.
     Supports stagger-children containers for cascading reveal.
     ========================================================================== */

  (function () {
    var classes = [
      '.fade-in', '.fade-in-up', '.fade-in-left', '.fade-in-right',
      '.slide-up-sm', '.scale-in'
    ];
    var elements = [];
    var c, els, i;

    for (c = 0; c < classes.length; c++) {
      els = document.querySelectorAll(classes[c]);
      for (i = 0; i < els.length; i++) {
        elements.push(els[i]);
      }
    }

    if ('IntersectionObserver' in window && elements.length > 0) {
      var observer = new IntersectionObserver(function (entries) {
        for (var j = 0; j < entries.length; j++) {
          if (entries[j].isIntersecting) {
            var el = entries[j].target;

            /* Handle stagger-children: add .visible to each child with delay */
            if (el.classList.contains('stagger-children')) {
              var children = el.children;
              for (var k = 0; k < children.length; k++) {
                (function (child, delay) {
                  setTimeout(function () {
                    child.classList.add('visible');
                  }, delay);
                })(children[k], k * 100);
              }
            }

            el.classList.add('visible');
            observer.unobserve(el);
          }
        }
      }, {
        threshold: 0.1
      });

      for (var m = 0; m < elements.length; m++) {
        observer.observe(elements[m]);
      }
    } else {
      /* Fallback: show all elements immediately */
      for (var n = 0; n < elements.length; n++) {
        elements[n].classList.add('visible');
      }
    }
  })();


  /* ==========================================================================
     8. HEADER SCROLL EFFECT
     Adds .scrolled class to .site-header when user scrolls past 50px.
     ========================================================================== */

  (function () {
    var header = document.querySelector('.site-header');
    if (!header) {
      return;
    }

    function onScroll() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    /* Run once on load */
    onScroll();
  })();


  /* ==========================================================================
     9. HERO SLIDESHOW
     Cycles through .hero-slide elements with a progress bar indicator.
     ========================================================================== */

  (function () {
    var slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) {
      return;
    }

    var INTERVAL = 6000; /* 6 seconds */
    var current = 0;
    var total = slides.length;
    var timer = null;

    function showSlide(index) {
      for (var i = 0; i < total; i++) {
        slides[i].classList.remove('active');
      }
      slides[index].classList.add('active');
    }

    function nextSlide() {
      current = (current + 1) % total;
      showSlide(current);
    }

    function startSlideshow() {
      showSlide(0);
      timer = setInterval(nextSlide, INTERVAL);
    }

    /* Initialize */
    startSlideshow();
  })();


  /* ==========================================================================
     10. SMOOTH SCROLL FOR ANCHOR LINKS
     Smooth scrolls to anchor targets with an 80px header offset.
     ========================================================================== */

  (function () {
    var HEADER_OFFSET = 80;

    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) {
        return;
      }

      var href = link.getAttribute('href');
      if (!href || href === '#' || href.length < 2) {
        return;
      }

      var target = document.querySelector(href);
      if (!target) {
        return;
      }

      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    });
  })();


  /* ==========================================================================
     11. TESTIMONIALS CAROUSEL
     Auto-rotating carousel with prev/next buttons and dot indicators.
     ========================================================================== */

  (function () {
    var track = document.querySelector('.testimonials-track');
    var cards = track ? track.querySelectorAll('.testimonial-slide') : [];
    var dotsContainer = document.getElementById('testimonialDots');
    var prevBtn = document.getElementById('prevTestimonial');
    var nextBtn = document.getElementById('nextTestimonial');

    if (!track || !cards.length) {
      return;
    }

    var total = cards.length;
    var current = 0;
    var autoTimer = null;
    var INTERVAL = 5000; /* 5 seconds */
    var dots = [];

    /* Build dot indicators */
    function buildDots() {
      if (!dotsContainer) {
        return;
      }
      dotsContainer.innerHTML = '';
      dots = [];
      for (var i = 0; i < total; i++) {
        var dot = document.createElement('button');
        dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('data-index', i);
        dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
        (function (idx) {
          dot.addEventListener('click', function () {
            goTo(idx);
            resetAuto();
          });
        })(i);
        dotsContainer.appendChild(dot);
        dots.push(dot);
      }
    }

    function goTo(index) {
      if (index < 0) {
        index = total - 1;
      }
      if (index >= total) {
        index = 0;
      }
      current = index;

      var cardWidth = cards[0].offsetWidth;
      var gap = parseInt(window.getComputedStyle(track).gap) || 24;
      track.style.transform = 'translateX(-' + (current * (cardWidth + gap)) + 'px)';

      /* Update dots */
      for (var i = 0; i < dots.length; i++) {
        dots[i].classList.toggle('active', i === current);
      }
    }

    function nextSlide() {
      goTo(current + 1);
    }

    function prevSlide() {
      goTo(current - 1);
    }

    function startAuto() {
      autoTimer = setInterval(nextSlide, INTERVAL);
    }

    function resetAuto() {
      clearInterval(autoTimer);
      startAuto();
    }

    /* Button handlers */
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prevSlide();
        resetAuto();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        nextSlide();
        resetAuto();
      });
    }

    /* Build and initialize */
    buildDots();
    goTo(0);
    startAuto();
  })();


  /* ==========================================================================
     12. SERVICES SPA ROUTING
     Single-page experience on services.html: show/hide service details
     based on the URL hash, sidebar link clicks, and back/forward navigation.
     ========================================================================== */

  (function () {
    /* Only run on pages with the SPA layout */
    var spaLayout = document.querySelector('.services-spa-layout');
    if (!spaLayout) {
      return;
    }

    var sidebarLinks = document.querySelectorAll('.services-sidebar-link');
    var serviceDetails = document.querySelectorAll('[id^="service-"]');
    var servicesSection = document.querySelector('.services-spa-content') || spaLayout;

    function showService(serviceId) {
      /* Build the expected detail element id: service-{slug} */
      var detailId = 'service-' + serviceId;

      /* Hide all service details */
      for (var i = 0; i < serviceDetails.length; i++) {
        serviceDetails[i].style.display = 'none';
      }

      /* Show matching detail */
      var target = document.getElementById(detailId);
      if (target) {
        target.style.display = 'block';
      }

      /* Update sidebar active states */
      for (var j = 0; j < sidebarLinks.length; j++) {
        var linkService = sidebarLinks[j].getAttribute('data-service');
        if (linkService && linkService === serviceId) {
          sidebarLinks[j].classList.add('active');
        } else {
          sidebarLinks[j].classList.remove('active');
        }
      }

      /* Smooth scroll to top of services section */
      var top = servicesSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }

    function handleHash() {
      var hash = window.location.hash;
      if (hash && hash.length > 1) {
        showService(hash.replace('#', ''));
      } else {
        /* No hash: show first service by default */
        showService(sidebarLinks.length > 0 ? sidebarLinks[0].getAttribute('data-service') : '');
      }
    }

    /* Sidebar link clicks */
    for (var k = 0; k < sidebarLinks.length; k++) {
      (function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          var serviceId = link.getAttribute('data-service');
          window.location.hash = serviceId;
          showService(serviceId);
        });
      })(sidebarLinks[k]);
    }

    /* Hashchange event for back/forward navigation */
    window.addEventListener('hashchange', handleHash);
    handleHash();
  })();


  /* ==========================================================================
     13. INSIGHTS MODAL (Unified)
     Handles both category cards (data-category) and article cards (data-insight).
     ========================================================================== */

  (function () {
    var overlay = document.querySelector('.insight-modal-overlay');
    if (!overlay) { return; }

    var closeBtn = overlay.querySelector('.insight-modal-close');
    var modalTitle = overlay.querySelector('#insightModalTitle');
    var modalBody = overlay.querySelector('#insightModalContent');
    var modalTag = overlay.querySelector('#insightModalTag');
    var modalDate = overlay.querySelector('#insightModalDate');

    /* Content for top 4 category cards */
    var categoryContent = {
      'legal-news': {
        title: 'Legal News',
        tag: 'Legal News',
        date: '',
        html: '<ul style="list-style:none;display:flex;flex-direction:column;gap:16px;">' +
          '<li><strong>Supreme Court Upholds Digital Privacy Ruling</strong><br>The Supreme Court has reaffirmed the right to digital privacy as a fundamental right under Article 21, striking down provisions that allowed unchecked surveillance. The ruling impacts ongoing data protection litigation across India.</li>' +
          '<li><strong>New Land Acquisition Guidelines Issued</strong><br>The Ministry of Rural Development has released updated guidelines for land acquisition, impacting ongoing property dispute cases in Telangana.</li>' +
          '<li><strong>Telangana High Court Expands Fast-Track Courts</strong><br>An additional 12 fast-track courts will be operational by Q3 2026 to address pending civil and criminal cases in Hyderabad.</li>' +
          '</ul>'
      },
      'court-judgments': {
        title: 'Court Judgments',
        tag: 'Judgments',
        date: '',
        html: '<ul style="list-style:none;display:flex;flex-direction:column;gap:16px;">' +
          '<li><strong>Krishna v. State of Telangana (2026)</strong><br>Landmark judgment on tenant eviction procedures, requiring landlords to provide 90-day notice periods before filing eviction suits.</li>' +
          '<li><strong>Ramesh Enterprises v. GTech Solutions (2026)</strong><br>High Court ruled in favor of enforcing arbitration clauses in commercial contracts, streamlining dispute resolution.</li>' +
          '<li><strong>Srinivas v. Srinivas (2026)</strong><br>Family Court ruling on mutual consent divorce timelines, reducing mandatory waiting periods in amicable separations.</li>' +
          '</ul>'
      },
      'government-updates': {
        title: 'Government Updates',
        tag: 'Policy',
        date: '',
        html: '<ul style="list-style:none;display:flex;flex-direction:column;gap:16px;">' +
          '<li><strong>Telangana RERA Amendments 2026</strong><br>New registration requirements for real estate developers and agents effective from July 2026.</li>' +
          '<li><strong>Digital Court Filing Mandate</strong><br>All district courts in Telangana must adopt e-filing systems by December 2026.</li>' +
          '<li><strong>New Cybersecurity Compliance Requirements</strong><br>Businesses handling personal data must comply with updated IT Act provisions by September 2026.</li>' +
          '</ul>'
      },
      'legal-alerts': {
        title: 'Legal Alerts',
        tag: 'Alerts',
        date: '',
        html: '<ul style="list-style:none;display:flex;flex-direction:column;gap:16px;">' +
          '<li><strong>Deadline: Annual Compliance Filing</strong><br>Companies registered in Telangana must complete annual compliance filings before September 30, 2026.</li>' +
          '<li><strong>New GST Advisory</strong><br>Revised GST return filing procedures effective from August 2026. All businesses must update their registration details.</li>' +
          '<li><strong>Property Tax Reassessment</strong><br>GHMC has announced property tax reassessment for commercial properties in Jubilee Hills and Banjara Hills.</li>' +
          '</ul>'
      }
    };

    /* Content for article insight cards */
    var articleContent = {
      'legal-updates': {
        title: 'New Land Acquisition Laws in Telangana',
        tag: 'Legal Updates',
        date: 'June 2026',
        html: '<p>The Telangana government has introduced significant amendments to land acquisition procedures under the Telangana Land Acquisition, Rehabilitation and Resettlement Act. These changes affect both property owners and developers across the state.</p>' +
          '<p><strong>Key Changes:</strong></p>' +
          '<ul style="list-style:disc;padding-left:20px;display:flex;flex-direction:column;gap:10px;">' +
          '<li>Enhanced compensation rates for acquired land, now linked to current market value rather than government circle rates.</li>' +
          '<li>Mandatory social impact assessment for all acquisitions exceeding 5 acres.</li>' +
          '<li>Faster dispute resolution through dedicated Land Acquisition Tribunals.</li>' +
          '<li>Increased rehabilitation package including housing and employment guarantees.</li>' +
          '</ul>' +
          '<p><strong>What This Means for You:</strong> If you own land in Telangana or are planning property transactions, these new provisions offer stronger protections and fairer compensation. However, compliance requirements have also increased. We recommend consulting with our property law experts to understand how these changes specifically affect your holdings.</p>' +
          '<p>Contact our Property Disputes team for a detailed assessment of your land acquisition concerns.</p>'
      },
      'case-studies': {
        title: 'How We Secured a Major Corporate Settlement',
        tag: 'Case Study',
        date: 'May 2026',
        html: '<p>A detailed look at our recent landmark case where we negotiated a favorable settlement for a mid-size IT company in a complex breach-of-contract dispute worth over 15 crores.</p>' +
          '<p><strong>Background:</strong> Our client, a Hyderabad-based IT services company, engaged us after their former vendor refused to deliver on a multi-crore service agreement. The vendor had already received partial payment and was countersuing for alleged non-payment.</p>' +
          '<p><strong>Our Strategy:</strong></p>' +
          '<ul style="list-style:disc;padding-left:20px;display:flex;flex-direction:column;gap:10px;">' +
          '<li>Comprehensive contract analysis revealing 14 specific breach clauses violated by the vendor.</li>' +
          '<li>Strategic evidence compilation including email communications, delivery milestones, and financial records.</li>' +
          '<li>Aggressive pre-trial negotiation positioning our client for maximum leverage.</li>' +
          '<li>Coordinated arbitration proceedings under the commercial arbitration framework.</li>' +
          '</ul>' +
          '<p><strong>Outcome:</strong> After 4 months of intensive legal proceedings and negotiation, we secured a settlement of 15.2 crores in favor of our client — representing one of the largest commercial dispute resolutions in Telangana\'s IT sector this year.</p>'
      },
      'law-tips': {
        title: '5 Things Every Startup Must Know About Indian Business Law',
        tag: 'Law Tips',
        date: 'April 2026',
        html: '<p>Starting a business in India? Here are the essential legal fundamentals every founder needs to get right from day one:</p>' +
          '<p><strong>1. Choose the Right Business Structure</strong><br>The type of entity you register (Private Limited, LLP, OPC) has profound tax, liability, and compliance implications. Most tech startups benefit from Private Limited company registration for ease of raising capital.</p>' +
          '<p><strong>2. Protect Your Intellectual Property</strong><br>Register trademarks for your brand name and logo immediately. File patents for unique inventions and processes. Copyright your software code and content. IP protection should begin on Day 1, not after you scale.</p>' +
          '<p><strong>3. Employment Law Compliance</strong><br>Proper employment contracts, PF/ESI registration, gratuity provisions, and adherence to labor laws are mandatory. Non-compliance can result in penalties and legal disputes with employees.</p>' +
          '<p><strong>4. Tax Registration and GST</strong><br>Obtain GST registration if your annual turnover exceeds the threshold. Understand input tax credits, filing deadlines, and e-way bill requirements. Late filings attract penalties and interest.</p>' +
          '<p><strong>5. Founders Agreement</strong><br>A comprehensive founders agreement covering equity split, roles, vesting schedules, exit clauses, and dispute resolution mechanisms prevents costly legal battles if co-founders disagree or depart.</p>'
      },
      'government-rules': {
        title: 'Key Changes in Family Law Legislation 2026',
        tag: 'Government Rules',
        date: 'March 2026',
        html: '<p>Recent amendments to the Hindu Marriage Act and associated family law provisions have introduced significant changes to divorce procedures, custody arrangements, and maintenance guidelines.</p>' +
          '<p><strong>Key Amendments:</strong></p>' +
          '<ul style="list-style:disc;padding-left:20px;display:flex;flex-direction:column;gap:10px;">' +
          '<li><strong>Reduced Waiting Period:</strong> The mandatory waiting period for mutual consent divorce has been reduced from 6 months to 3 months for couples with no minor children.</li>' +
          '<li><strong>Enhanced Maintenance Guidelines:</strong> New formulas for calculating alimony and child maintenance, now factoring in the cost of living index and earning capacity of both spouses.</li>' +
          '<li><strong>Shared Custody Preference:</strong> Courts now prefer shared custody arrangements over sole custody, prioritizing the childs relationship with both parents.</li>' +
          '<li><strong>Mediation-First Approach:</strong> Mandatory family mediation before contested hearings in most family law disputes, reducing court burden and promoting amicable resolutions.</li>' +
          '</ul>' +
          '<p><strong>Impact:</strong> These changes make divorce proceedings faster and less adversarial while ensuring better financial protection for dependent spouses. If you are considering family law proceedings, our experienced team can help you navigate these updated provisions effectively.</p>'
      }
    };

    function openModal(key, isArticle) {
      var data = isArticle ? articleContent[key] : categoryContent[key];
      if (!data) { return; }
      if (modalTitle) { modalTitle.textContent = data.title; }
      if (modalTag) { modalTag.textContent = data.tag; }
      if (modalDate) { modalDate.textContent = data.date; }
      if (modalBody) { modalBody.innerHTML = data.html; }
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    /* Category card click handlers */
    var catCards = document.querySelectorAll('.insight-category-card');
    for (var i = 0; i < catCards.length; i++) {
      catCards[i].addEventListener('click', function () {
        var cat = this.getAttribute('data-category');
        openModal(cat, false);
      });
    }

    /* Article insight card click handlers */
    var artCards = document.querySelectorAll('.insight-card[data-insight]');
    for (var j = 0; j < artCards.length; j++) {
      artCards[j].addEventListener('click', function () {
        var key = this.getAttribute('data-insight');
        openModal(key, true);
      });
    }

    /* Close button */
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    /* Click on overlay background to close */
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeModal();
      }
    });

    /* Escape key closes modal */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeModal();
      }
    });
  })();


  /* ==========================================================================
     14. CAREERS APPLY MODAL
     "Apply Now" buttons open a modal pre-filled with the job position.
     Form submit shows a success popup with WhatsApp + email confirmation UI.
     Requires the careers modal markup to exist before this script runs —
     on careers.html the main.js <script> tag is the last element in <body>.
     ========================================================================== */

  (function () {
    var overlay = document.querySelector('.careers-modal-overlay');
    if (!overlay) {
      return;
    }

    var closeBtn = overlay.querySelector('.careers-modal-close');
    var positionField = overlay.querySelector('.modal-position');
    var positionInput = document.getElementById('career-position');
    var form = overlay.querySelector('#careersForm');

    var fileInput = document.getElementById('career-resume-file');
    var fileLabel = document.getElementById('careerFileLabel');
    var fileNameEl = document.getElementById('careerFileName');
    var filePlaceholder = '<i class="fas fa-cloud-upload-alt"></i> <span>Click to upload your resume (PDF, DOC, DOCX)</span>';

    var successOverlay = document.getElementById('careersSuccess');
    var successPosition = document.getElementById('careersSuccessPosition');
    var successEmail = document.getElementById('careersSuccessEmail');
    var whatsappBtn = document.getElementById('careersSuccessWhatsapp');
    var successClosers = document.querySelectorAll('.careers-success-close');

    function resetFileLabel() {
      if (fileLabel) { fileLabel.innerHTML = filePlaceholder; }
      if (fileNameEl) { fileNameEl.textContent = ''; }
    }

    function openModal(position) {
      position = position || 'Open Position';
      if (positionField) { positionField.textContent = position; }
      if (positionInput) { positionInput.value = position; }
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      var firstInput = document.getElementById('career-name');
      if (firstInput) {
        setTimeout(function () { firstInput.focus(); }, 320);
      }
    }

    function closeModal() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    function closeSuccess() {
      if (successOverlay) { successOverlay.classList.remove('active'); }
      document.body.style.overflow = '';
    }

    /* Apply button click handlers (work on every job card + hero + general) */
    var applyButtons = document.querySelectorAll('.careers-apply-btn');
    for (var i = 0; i < applyButtons.length; i++) {
      applyButtons[i].addEventListener('click', function () {
        var position = this.getAttribute('data-position') || 'Open Position';
        openModal(position);
      });
    }

    /* Close button + overlay background click */
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeModal();
      }
    });

    /* File upload label preview */
    if (fileInput) {
      fileInput.addEventListener('change', function () {
        if (this.files && this.files.length > 0) {
          var name = this.files[0].name;
          if (fileNameEl) { fileNameEl.textContent = 'Selected: ' + name; }
          if (fileLabel) { fileLabel.innerHTML = '<i class="fas fa-file-check"></i> <span>' + name + '</span>'; }
        } else {
          resetFileLabel();
        }
      });
    }

    /* Form submit -> success popup with confirmation UI */
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var nameInput = document.getElementById('career-name');
        var emailInput = document.getElementById('career-email');
        var name = (nameInput && nameInput.value) ? nameInput.value.trim() : '';
        var email = (emailInput && emailInput.value) ? emailInput.value.trim() : '';
        var position = (positionInput && positionInput.value) ? positionInput.value : 'the role';

        if (successPosition) { successPosition.textContent = position; }
        if (successEmail) {
          successEmail.textContent = email
            ? 'Confirmation sent to ' + email
            : 'A confirmation has been sent to your inbox';
        }
        if (whatsappBtn) {
          var msg = 'Hello Lahari Legal Associates, I have submitted my application for the ' +
            position + ' role' + (name ? ('. My name is ' + name) : '') + '.';
          whatsappBtn.href = 'https://wa.me/919398581752?text=' + encodeURIComponent(msg);
        }

        closeModal();
        if (successOverlay) {
          successOverlay.classList.add('active');
          document.body.style.overflow = 'hidden';
        } else {
          alert('Application submitted successfully! Our team will get back to you within 3-5 business days.');
        }

        form.reset();
        resetFileLabel();
      });
    }

    /* Success popup closers (Done button + X button) */
    for (var j = 0; j < successClosers.length; j++) {
      successClosers[j].addEventListener('click', function (e) {
        e.preventDefault();
        closeSuccess();
      });
    }
    if (successOverlay) {
      successOverlay.addEventListener('click', function (e) {
        if (e.target === successOverlay) {
          closeSuccess();
        }
      });
    }

    /* Escape key closes whichever overlay is open */
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') { return; }
      if (successOverlay && successOverlay.classList.contains('active')) {
        closeSuccess();
      } else if (overlay.classList.contains('active')) {
        closeModal();
      }
    });
  })();


  /* ==========================================================================
     15. FORM ENHANCEMENTS
     Generic form handling: prevents default submission and displays a
     success message with an icon.
     ========================================================================== */

  (function () {
    /* Select forms that are NOT already handled by a specific handler */
    var forms = document.querySelectorAll('form:not(#careersForm):not(#booking-form)');

    for (var i = 0; i < forms.length; i++) {
      (function (form) {
        form.addEventListener('submit', function (e) {
          e.preventDefault();

          var heading = form.getAttribute('data-success-heading') || 'Thank You!';
          var message = form.getAttribute('data-success-message') || 'Your message has been received. We will get back to you shortly.';

          form.innerHTML =
            '<div class="form-success">' +
              '<div class="form-success-icon"><i class="fas fa-check-circle"></i></div>' +
              '<h3>' + heading + '</h3>' +
              '<p>' + message + '</p>' +
            '</div>';
        });
      })(forms[i]);
    }
  })();


  /* ==========================================================================
     16. MICRO-INTERACTIONS INITIALIZATION
     Adds interactive classes to elements for enhanced user experience:
     - .card-lift on service cards (hover lift effect)
     - .btn-glow on primary buttons (subtle glow on hover)
     - .link-underline on nav links (animated underline on hover)
     ========================================================================== */

  (function () {
    /* Card lift effect for service cards */
    var serviceCards = document.querySelectorAll('.service-card, .feature-card, .insight-card, .position-card');
    for (var i = 0; i < serviceCards.length; i++) {
      serviceCards[i].classList.add('card-lift');
    }

    /* Button glow for primary buttons */
    var primaryButtons = document.querySelectorAll('.btn-primary');
    for (var j = 0; j < primaryButtons.length; j++) {
      primaryButtons[j].classList.add('btn-glow');
    }

    /* Link underline for nav links */
    var navLinks = document.querySelectorAll('.main-nav > a, .nav-dropdown-trigger');
    for (var k = 0; k < navLinks.length; k++) {
      navLinks[k].classList.add('link-underline');
    }

    /* Inject micro-interaction styles */
    if (!document.getElementById('micro-interaction-styles')) {
      var style = document.createElement('style');
      style.id = 'micro-interaction-styles';
      style.textContent =
        /* Card lift */
        '.card-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }' +
        '.card-lift:hover { transform: translateY(-4px); box-shadow: var(--shadow-gold); }' +
        /* Button glow */
        '.btn-glow { position: relative; overflow: hidden; }' +
        '.btn-glow::after {' +
          'content:"";position:absolute;inset:0;border-radius:inherit;' +
          'box-shadow:0 0 20px rgba(201,162,74,0.3);opacity:0;' +
          'transition:opacity 0.3s ease;' +
        '}' +
        '.btn-glow:hover::after { opacity:1; }' +
        /* Link underline */
        '.link-underline { position: relative; }' +
        '.link-underline::after {' +
          'content:"";position:absolute;bottom:0;left:50%;width:0;height:2px;' +
          'background:var(--gold);transition:width 0.3s ease,left 0.3s ease;' +
        '}' +
        '.link-underline:hover::after,' +
        '.link-underline.active::after { width:60%;left:20%; }' +
        /* Slide up small */
        '.slide-up-sm { opacity:0;transform:translateY(15px);transition:opacity 0.6s ease,transform 0.6s ease; }' +
        '.slide-up-sm.visible { opacity:1;transform:translateY(0); }' +
        /* Scale in */
        '.scale-in { opacity:0;transform:scale(0.95);transition:opacity 0.6s ease,transform 0.6s ease; }' +
        '.scale-in.visible { opacity:1;transform:scale(1); }';
      document.head.appendChild(style);
    }
  })();


  /* ==========================================================================
     17. ANIMATED COUNTER (Stats Section)
     Smooth number counter triggered by IntersectionObserver.
     Uses easeOutExpo easing for fast-start, slow-end animation.
     Runs only once per element.
     ========================================================================== */

  (function () {
    var counters = document.querySelectorAll('.counter');
    if (!counters.length) { return; }

    var hasAnimated = false;

    /* easeOutExpo: fast at start, slow at end */
    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function animateCounter(el) {
      var target = parseInt(el.getAttribute('data-target'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = parseInt(el.getAttribute('data-duration'), 10) || 2000;
      var startTime = null;

      el.classList.add('animated');

      function step(timestamp) {
        if (!startTime) { startTime = timestamp; }
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var easedProgress = easeOutExpo(progress);
        var current = Math.floor(easedProgress * target);
        el.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target + suffix;
        }
      }

      requestAnimationFrame(step);
    }

    if ('IntersectionObserver' in window) {
      var statsSection = document.querySelector('.stats-section');
      if (statsSection) {
        var counterObserver = new IntersectionObserver(function (entries) {
          for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting && !hasAnimated) {
              hasAnimated = true;
              counterObserver.unobserve(statsSection);

              var items = statsSection.querySelectorAll('.counter');
              for (var j = 0; j < items.length; j++) {
                (function (item, delay) {
                  setTimeout(function () {
                    animateCounter(item);
                  }, delay);
                })(items[j], j * 150);
              }
            }
          }
        }, { threshold: 0.2 });

        counterObserver.observe(statsSection);
      }
    } else {
      /* Fallback: show final values immediately */
      for (var k = 0; k < counters.length; k++) {
        var t = counters[k].getAttribute('data-target');
        var s = counters[k].getAttribute('data-suffix') || '';
        counters[k].textContent = t + s;
        counters[k].classList.add('animated');
      }
    }
  })();


  /* ==========================================================================
     18. DISCLAIMER POPUP
     Shows a disclaimer popup on first visit, stored in sessionStorage.
     ========================================================================== */

  (function () {
    var popup = document.querySelector('.disclaimer-overlay');
    if (!popup) {
      return;
    }

    var disclaimerKey = 'll-disclaimer-accepted';

    /* Check if already accepted this session */
    if (sessionStorage.getItem(disclaimerKey)) {
      return;
    }

    /* Show popup */
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    var acceptBtn = popup.querySelector('.disclaimer-accept');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        popup.style.display = 'none';
        document.body.style.overflow = '';
        sessionStorage.setItem(disclaimerKey, 'true');
      });
    }
  })();


})();

/* ==========================================================================
   THEME TOGGLE (light / dark)
   Injects a toggle button into .header-actions, persists choice in
   localStorage, and flips [data-theme] on <html>. Dark is the default.
   The no-flash <head> script applies the saved theme before paint; this
   block wires the button and keeps the icon in sync.
   ========================================================================== */
(function () {
  'use strict';
  var STORAGE_KEY = 'theme';
  var root = document.documentElement;
  var buttons = [];

  function currentTheme() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function syncIcons(theme) {
    for (var i = 0; i < buttons.length; i++) {
      var icon = buttons[i].querySelector('i');
      if (icon) icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
      buttons[i].setAttribute(
        'aria-label',
        theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
      );
      buttons[i].setAttribute('title', theme === 'light' ? 'Dark mode' : 'Light mode');
    }
  }

  function applyTheme(theme, save) {
    if (theme === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    if (save) {
      try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
    }
    syncIcons(theme);
  }

  function makeButton() {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'theme-toggle';
    btn.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
    btn.addEventListener('click', function () {
      applyTheme(currentTheme() === 'light' ? 'dark' : 'light', true);
    });
    return btn;
  }

  var actions = document.querySelector('.header-actions');
  if (actions) {
    var btn = makeButton();
    var cta = actions.querySelector('.header-cta');
    if (cta) actions.insertBefore(btn, cta);
    else actions.insertBefore(btn, actions.firstChild);
    buttons.push(btn);
  }

  // Sync icon to whatever theme the head script already applied.
  syncIcons(currentTheme());
})();
