/**
 * LAHARI LEGAL ASSOCIATES — Legal Feed Module
 * ===========================================
 * Self-contained IIFE that renders an auto-scrolling legal updates ticker.
 * Features: infinite CSS-animated scroll, pause on hover, click-to-expand modal.
 *
 * Requires:
 *   - CSS classes defined in style.css (.legal-feed-section, .legal-feed-track, etc.)
 *   - Font Awesome 6 (loaded via CDN)
 */
(function () {
  'use strict';

  /* ==========================================================================
     Legal Updates Dataset
     8+ realistic Indian legal news items with categories, timestamps,
     excerpts, and full article bodies.
     ========================================================================== */

  var legalUpdates = [
    {
      id: 1,
      category: 'telangana',
      title: 'Telangana Passes New Digital Evidence Admissibility Act 2026',
      excerpt: 'The Telangana Legislative Assembly has unanimously passed the Digital Evidence Admissibility Act, 2026, establishing comprehensive guidelines for electronic evidence in civil and criminal proceedings across all district courts in the state.',
      body: '<p>The Telangana Legislative Assembly has unanimously passed the Digital Evidence Admissibility Act, 2026, establishing comprehensive guidelines for electronic evidence in civil and criminal proceedings across all district courts in the state. The landmark legislation comes in response to the growing volume of digital evidence in modern litigation.</p><p>Under the new Act, courts will now follow a standardized framework for admitting electronic records, including social media posts, CCTV footage, digital communications, and blockchain-verified documents. The law mandates that all digital evidence must be accompanied by a certificate of authenticity from a qualified forensic examiner.</p><p>Chief Minister A. Revanth Reddy stated that the legislation positions Telangana as a pioneer in judicial modernization. "This Act ensures that our courts are equipped to handle the complexities of digital-age litigation while safeguarding the rights of all parties involved," he said during the assembly session.</p><p>Legal experts have welcomed the move, noting that the Act provides much-needed clarity on issues such as metadata preservation, chain of custody for digital files, and the admissibility of AI-generated content as evidence. The law is expected to take effect from September 1, 2026.</p><p>The Telangana State Judicial Academy has already announced training programs for judges and legal practitioners to familiarize them with the new procedures and technical requirements under the Act.</p>',
      timestamp: 'Jun 27, 2026'
    },
    {
      id: 2,
      category: 'judgment',
      title: 'Supreme Court Landmark Ruling on Tenant Eviction Protections',
      excerpt: 'In a landmark judgment, the Supreme Court of India has ruled that landlords must provide a minimum 90-day written notice before initiating eviction proceedings, significantly strengthening tenant rights across the country.',
      body: '<p>In a landmark judgment delivered by a five-judge bench headed by Chief Justice Sanjiv Khanna, the Supreme Court of India has ruled that all landlords must provide a minimum 90-day written notice before initiating any eviction proceedings. The ruling applies across all states and union territories, overriding any conflicting provisions in state-specific rent control acts.</p><p>The court held that the right to shelter under Article 21 of the Constitution extends to lawful tenants, and any eviction without adequate notice violates fundamental rights. The bench further directed that the notice must clearly state the grounds for eviction and provide the tenant an opportunity to rectify any alleged breaches of the lease agreement.</p><p>Justice Bela M. Trivedi, writing for the majority, observed that "the balance between property rights and the right to shelter must lean in favor of protecting vulnerable tenants from arbitrary displacement, especially in urban areas facing housing shortages."</p><p>The judgment also established a mandatory mediation period of 30 days after the notice period, during which both parties must attempt to resolve disputes through alternative dispute resolution before approaching civil courts. Legal practitioners expect this ruling to significantly impact ongoing eviction cases across India.</p><p>Real estate industry bodies have expressed concerns about the potential impact on rental market liquidity, while tenant rights organizations have hailed the decision as a historic victory for housing security.</p>',
      timestamp: 'Jun 25, 2026'
    },
    {
      id: 3,
      category: 'amendment',
      title: 'IT Act Amendments: Strengthened Cybercrime Provisions Take Effect',
      excerpt: 'The Information Technology (Amendment) Act, 2026 has officially come into force, introducing stricter penalties for cybercrime offenses including online fraud, identity theft, and data breaches affecting individuals and businesses.',
      body: '<p>The Information Technology (Amendment) Act, 2026 has officially come into force, introducing significantly stricter penalties for cybercrime offenses. The amendments were passed by Parliament in March 2026 and received Presidential assent last month.</p><p>Key provisions include enhanced punishment for online financial fraud (up to 10 years imprisonment), mandatory data breach notification within 72 hours for organizations handling personal data of more than 10,000 individuals, and the creation of a dedicated Cybercrime Investigation Authority at the national level.</p><p>The amended Act also introduces specific provisions for deepfake-related offenses, making the creation and distribution of non-consensual deepfake content a cognizable offense punishable with imprisonment of up to 5 years and fines up to ₹25 lakhs. Social media intermediaries are now required to deploy AI-based detection systems for such content.</p><p>Minister of Electronics and Information Technology Ashwini Vaishnaw stated that the amendments represent India\'s commitment to creating a safe and trustworthy digital ecosystem. "These changes reflect the evolving nature of cyber threats and provide law enforcement agencies with the tools needed to combat them effectively," he said.</p><p>Technology companies and legal experts are currently analyzing the full implications of the amendments, particularly regarding compliance requirements for businesses operating in India\'s digital economy.</p>',
      timestamp: 'Jun 24, 2026'
    },
    {
      id: 4,
      category: 'new-law',
      title: 'New Property Registration Rules Simplify Transfer Process in Telangana',
      excerpt: 'The Telangana government has introduced simplified property registration rules that reduce documentation requirements by 40% and enable online registration for properties valued up to ₹50 lakhs, effective July 2026.',
      body: '<p>The Telangana Revenue Department has announced sweeping reforms to the property registration process, aimed at reducing bureaucratic hurdles and improving transparency in real estate transactions. The new rules, effective from July 1, 2026, represent the most significant overhaul of the registration system in the state in over two decades.</p><p>Under the simplified framework, property registrations for values up to ₹50 lakhs can be completed entirely online through the Dharani portal, with digital signatures and video verification replacing the need for physical presence at sub-registrar offices. Documentation requirements have been reduced by approximately 40%, with the government accepting self-certified copies instead of notarized documents for most transactions.</p><p>The new rules also introduce a standardized registration fee structure that eliminates discretionary charges and introduces a 10% rebate for first-time property buyers. Processing time for registrations has been capped at 7 working days, compared to the previous average of 21 days.</p><p>Revenue Minister Ponguleti Srinivas Reddy stated that the reforms are expected to boost property transactions and improve Telangana\'s ranking in the Ease of Doing Business index. Legal practitioners specializing in property law have welcomed the changes while noting that the transition period may require careful navigation for pending cases.</p>',
      timestamp: 'Jun 22, 2026'
    },
    {
      id: 5,
      category: 'alert',
      title: 'Telangana High Court Issues Advisory on Fast-Track Court Procedures',
      excerpt: 'The Telangana High Court has issued an advisory to all district courts regarding revised procedures for fast-track courts, including mandatory case disposal timelines and video conferencing provisions for witness testimony.',
      body: '<p>The Telangana High Court has issued a comprehensive advisory to all district courts detailing revised operational procedures for fast-track courts. The advisory comes as part of the court\'s ongoing efforts to reduce the mounting backlog of pending cases across the state\'s judicial system.</p><p>Key directives include mandatory case disposal timelines of 6 months for civil disputes and 9 months for criminal cases in fast-track courts. The advisory also mandates that all fast-track courts must offer video conferencing facilities for witness testimony, reducing the need for physical court appearances and accelerating proceedings.</p><p>The High Court has further directed that fast-track courts prioritize cases involving senior citizens, women, children, and matters related to domestic violence, land disputes, and cheque bounce cases. Each district has been allocated additional judicial officers to manage the expanded fast-track court network.</p><p>Acting Chief Justice Sujoy Paul noted that the Telangana judiciary currently has over 15 lakh pending cases and these reforms are critical to ensuring timely justice. "The fast-track court system must serve as an effective mechanism for case resolution, not merely a parallel track," he emphasized in the advisory order.</p><p>Bar associations across Telangana have been asked to cooperate with the implementation and provide feedback on the operational challenges faced during the initial rollout phase.</p>',
      timestamp: 'Jun 20, 2026'
    },
    {
      id: 6,
      category: 'judgment',
      title: 'High Court Upholds Arbitration Clause Enforcement in Commercial Disputes',
      excerpt: 'The Andhra Pradesh High Court, in a significant ruling, has upheld the enforceability of arbitration clauses in commercial contracts, mandating that parties honor pre-dispute arbitration agreements even when one party seeks litigation.',
      body: '<p>In a ruling with far-reaching implications for commercial dispute resolution, a division bench of the Telangana High Court has reinforced the primacy of arbitration clauses in commercial agreements. The court held that parties who have voluntarily agreed to arbitration as the dispute resolution mechanism cannot unilaterally approach civil courts, except in narrowly defined circumstances.</p><p>The case, Ramesh Enterprises v. GTech Solutions, involved a software development contract where the respondent sought to approach civil courts despite a binding arbitration clause. The court directed the parties to proceed with arbitration as per the agreement, noting that the Arbitration and Conciliation Act, 1996 must be interpreted in favor of upholding party autonomy.</p><p>Justice P. Naveen Rao, writing the judgment, observed that "the judicial trend of referring parties to arbitration at the earliest stage must be encouraged to reduce the burden on civil courts and provide faster resolution to commercial disputes." The court also imposed costs of ₹2 lakhs on the party that attempted to bypass the arbitration agreement.</p><p>Legal experts predict this ruling will strengthen confidence in arbitration as a preferred dispute resolution mechanism for businesses operating in Telangana and Andhra Pradesh. The judgment is expected to be cited in similar cases across other High Courts.</p>',
      timestamp: 'Jun 18, 2026'
    },
    {
      id: 7,
      category: 'new-law',
      title: 'Consumer Protection (Amendment) Act Enhances E-Commerce Buyer Rights',
      excerpt: 'The Consumer Protection (Amendment) Act, 2026 introduces enhanced protections for online shoppers, including mandatory 30-day return policies, automatic refund processing within 7 days, and stricter liability for e-commerce platforms.',
      body: '<p>The Consumer Protection (Amendment) Act, 2026 has introduced a comprehensive set of protections for consumers shopping on e-commerce platforms. The amendments represent the most significant update to India\'s consumer protection framework since the 2019 Act and specifically target the growing e-commerce sector.</p><p>Key provisions include mandatory 30-day return policies for all products sold online (extended from the current 7-15 day norm), automatic processing of refunds within 7 business days of return pickup, and the establishment of a National E-Commerce Consumer Grievance Redressal Authority. The amendments also impose strict liability on e-commerce platforms for defective products sold by third-party sellers on their marketplaces.</p><p>E-commerce platforms are now required to display complete product information including country of origin, manufacturing date, and total price breakdown (including taxes and shipping) prominently on product pages. Misleading reviews and manipulated ratings are now punishable offenses under the Act.</p><p>Consumer Affairs Minister Pralhad Joshi stated that the amendments empower Indian consumers with world-class protections. Major e-commerce platforms including Amazon, Flipkart, and Meesho have expressed their commitment to complying with the new regulations ahead of the implementation deadline of October 1, 2026.</p>',
      timestamp: 'Jun 15, 2026'
    },
    {
      id: 8,
      category: 'amendment',
      title: 'Companies Act Amendments: Enhanced Corporate Governance Standards',
      excerpt: 'The Ministry of Corporate Affairs has notified significant amendments to the Companies Act, 2013, introducing mandatory ESG reporting, stricter related-party transaction disclosures, and enhanced duties for independent directors.',
      body: '<p>The Ministry of Corporate Affairs has notified the Companies (Amendment) Act, 2026, introducing a series of measures designed to strengthen corporate governance standards across Indian businesses. The amendments apply to all companies registered under the Companies Act, 2013, with enhanced provisions for listed companies and large unlisted entities.</p><p>Among the most significant changes is the introduction of mandatory Environmental, Social, and Governance (ESG) reporting for companies with a turnover exceeding ₹250 crores. These companies must now submit annual sustainability reports following the framework prescribed by the Securities and Exchange Board of India (SEBI).</p><p>The amendments also strengthen disclosure requirements for related-party transactions, requiring shareholder approval for transactions exceeding 5% of the company\'s net worth (reduced from the previous 10% threshold). Independent directors now face enhanced accountability standards, including mandatory annual performance evaluations and mandatory participation in at least 75% of board meetings.</p><p>Corporate law practitioners have noted that the amendments align Indian corporate governance standards with global best practices. Companies have been given a transition period of 6 months to comply with the new requirements, with the provisions taking full effect from January 1, 2027.</p>',
      timestamp: 'Jun 12, 2026'
    },
    {
      id: 9,
      category: 'telangana',
      title: 'Hyderabad Launches Dedicated Commercial Disputes Tribunal',
      excerpt: 'The Telangana government has inaugurated a specialized Commercial Disputes Tribunal in Hyderabad, designed to resolve business-to-business disputes within 180 days, making it the first such dedicated tribunal in South India.',
      body: '<p>The Telangana government has inaugurated a specialized Commercial Disputes Tribunal in Hyderabad, becoming the first state in South India to establish a dedicated forum for business-to-business dispute resolution. The tribunal, located at the Telangana State Judicial Academy complex, will handle commercial disputes with a claim value between ₹10 lakhs and ₹5 crores.</p><p>The tribunal is mandated to resolve disputes within 180 days from the date of filing, with strict procedural timelines at each stage of the proceeding. The proceedings will follow a simplified procedure code that eliminates many of the formalities associated with traditional civil litigation, while maintaining due process requirements.</p><p>Presiding over the tribunal will be a panel of three retired High Court judges and five senior advocates with expertise in commercial law. The tribunal will accept filings through both physical and electronic means, with a dedicated case management system providing real-time status updates to litigants.</p><p>Industries and IT Minister D. Sridhar Babu stated that the tribunal is expected to significantly improve the ease of doing business in Telangana. "Quick and efficient resolution of commercial disputes is essential for attracting investment and fostering a healthy business environment," he said at the inauguration ceremony.</p>',
      timestamp: 'Jun 10, 2026'
    }
  ];

  /* ==========================================================================
     Category Configuration
     Maps category keys to display labels and CSS class names.
     ========================================================================== */

  var categoryConfig = {
    'new-law':    { label: 'New Law',    cssClass: 'new-law' },
    'judgment':   { label: 'Judgment',   cssClass: 'judgment' },
    'amendment':  { label: 'Amendment',  cssClass: 'amendment' },
    'alert':      { label: 'Legal Alert', cssClass: 'alert' },
    'telangana':  { label: 'Telangana',  cssClass: 'new-law' }
  };

  /* ==========================================================================
     DOM References
     ========================================================================== */

  var feedSection = document.querySelector('.legal-feed-section');
  var feedTrack = document.querySelector('.legal-feed-track');

  /* ==========================================================================
     Render Feed Cards
     Builds the HTML for each card and duplicates for infinite scroll effect.
     ========================================================================== */

  function renderCards() {
    if (!feedTrack) {
      return;
    }

    var html = '';
    var i, update, config, cardHtml;

    for (i = 0; i < legalUpdates.length; i++) {
      update = legalUpdates[i];
      config = categoryConfig[update.category] || { label: 'Update', cssClass: 'new-law' };

      cardHtml =
        '<div class="legal-feed-card" data-feed-id="' + update.id + '">' +
          '<span class="feed-category-tag ' + config.cssClass + '">' + config.label + '</span>' +
          '<span class="feed-timestamp"><i class="far fa-clock"></i> ' + update.timestamp + '</span>' +
          '<h4 class="feed-card-title">' + update.title + '</h4>' +
          '<p class="feed-card-excerpt">' + update.excerpt + '</p>' +
          '<a class="feed-read-more" href="javascript:void(0)">Read More &rarr;</a>' +
        '</div>';

      html += cardHtml;
    }

    /* Render the set twice for seamless infinite scroll */
    feedTrack.innerHTML = html + html;
  }

  /* ==========================================================================
     Auto-Scroll Animation
     Uses CSS animation on the track element for smooth infinite scroll.
     Animation duration is calculated based on the number of items.
     ========================================================================== */

  function startAutoScroll() {
    if (!feedTrack) {
      return;
    }

    var itemWidth = 340; /* Approximate card width + gap in pixels */
    var duration = legalUpdates.length * itemWidth / 50; /* px per second = 50 */

    feedTrack.style.display = 'flex';
    feedTrack.style.gap = '24px';
    feedTrack.style.animation = 'feedScroll ' + duration + 's linear infinite';
  }

  /* Inject the keyframes dynamically */
  function injectScrollKeyframes() {
    if (!feedTrack) {
      return;
    }

    var style = document.createElement('style');
    style.id = 'legal-feed-keyframes';
    style.textContent =
      '@keyframes feedScroll {' +
        '0%   { transform: translateX(0); }' +
        '100% { transform: translateX(-50%); }' +
      '}' +
      '.legal-feed-track {' +
        'will-change: transform;' +
      '}' +
      '.legal-feed-section {' +
        'overflow: hidden;' +
        'padding: 20px 0;' +
      '}';
    document.head.appendChild(style);
  }

  /* ==========================================================================
     Pause on Hover
     Pauses the CSS animation when the user hovers over the feed section.
     ========================================================================== */

  function initPauseOnHover() {
    if (!feedSection || !feedTrack) {
      return;
    }

    feedSection.addEventListener('mouseenter', function () {
      feedTrack.style.animationPlayState = 'paused';
    });

    feedSection.addEventListener('mouseleave', function () {
      feedTrack.style.animationPlayState = 'running';
    });
  }

  /* ==========================================================================
     Feed Modal
     Opens a modal with the full article content when a card is clicked.
     Supports: close button, click-outside-to-close, Escape key, body scroll lock.
     ========================================================================== */

  /* Create the modal overlay dynamically */
  function createModal() {
    var overlay = document.createElement('div');
    overlay.className = 'feed-modal-overlay';
    overlay.style.cssText =
      'position:fixed;inset:0;z-index:3000;' +
      'background:var(--bg-overlay);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);' +
      'display:flex;align-items:center;justify-content:center;' +
      'opacity:0;visibility:hidden;transition:opacity 0.3s ease,visibility 0.3s ease;padding:24px;';

    overlay.innerHTML =
      '<div class="feed-modal" style="' +
        'background:var(--bg-card-solid);border:1px solid var(--border-light);border-radius:12px;' +
        'max-width:720px;width:100%;max-height:80vh;overflow-y:auto;padding:40px;' +
        'position:relative;transform:translateY(20px) scale(0.97);' +
        'transition:transform 0.3s ease;box-shadow:var(--shadow-lg);">' +
        '<button class="feed-modal-close" style="' +
          'position:absolute;top:16px;right:16px;width:36px;height:36px;' +
          'border:1px solid var(--border-light);border-radius:50%;background:transparent;' +
          'cursor:pointer;display:flex;align-items:center;justify-content:center;' +
          'color:var(--text-muted);font-size:0.9rem;transition:all 0.25s ease;' +
          'font-family:var(--font-body);">' +
          '<i class="fas fa-times"></i>' +
        '</button>' +
        '<div class="feed-modal-body"></div>' +
      '</div>';

    document.body.appendChild(overlay);
    return overlay;
  }

  var modalOverlay = null;

  function openModal(updateId) {
    var update, config, bodyHtml, categoryTag, i;

    /* Find the update by ID */
    for (i = 0; i < legalUpdates.length; i++) {
      if (legalUpdates[i].id === updateId) {
        update = legalUpdates[i];
        break;
      }
    }

    if (!update) {
      return;
    }

    if (!modalOverlay) {
      modalOverlay = createModal();
    }

    config = categoryConfig[update.category] || { label: 'Update', cssClass: 'new-law' };
    categoryTag = '<span class="feed-category-tag ' + config.cssClass + '" style="margin-right:12px;">' + config.label + '</span>';
    bodyHtml = modalOverlay.querySelector('.feed-modal-body');
    bodyHtml.innerHTML =
      '<div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">' +
        categoryTag +
        '<span class="feed-timestamp"><i class="far fa-clock"></i> ' + update.timestamp + '</span>' +
      '</div>' +
      '<h2 style="margin-bottom:20px;font-size:1.5rem;line-height:1.3;">' + update.title + '</h2>' +
      '<div style="border-top:1px solid var(--border-subtle);padding-top:20px;">' +
        update.body +
      '</div>';

    /* Show modal */
    modalOverlay.style.opacity = '1';
    modalOverlay.style.visibility = 'visible';
    var modalContent = modalOverlay.querySelector('.feed-modal');
    if (modalContent) {
      modalContent.style.transform = 'translateY(0) scale(1)';
    }

    /* Lock body scroll */
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) {
      return;
    }

    var modalContent = modalOverlay.querySelector('.feed-modal');
    if (modalContent) {
      modalContent.style.transform = 'translateY(20px) scale(0.97)';
    }
    modalOverlay.style.opacity = '0';
    modalOverlay.style.visibility = 'hidden';

    /* Restore body scroll */
    document.body.style.overflow = '';
  }

  /* ==========================================================================
     Event Delegation for Card Clicks
     ========================================================================== */

  function initCardClicks() {
    if (!feedTrack) {
      return;
    }

    feedTrack.addEventListener('click', function (e) {
      /* Find the closest card ancestor */
      var card = e.target.closest('.legal-feed-card');
      if (!card) {
        return;
      }

      var feedId = parseInt(card.getAttribute('data-feed-id'), 10);
      if (!feedId) {
        return;
      }

      /* Pause scroll while modal is open */
      if (feedTrack) {
        feedTrack.style.animationPlayState = 'paused';
      }

      openModal(feedId);
    });
  }

  /* ==========================================================================
     Modal Close Handlers
     Close button, click outside, and Escape key.
     ========================================================================== */

  function initModalCloseHandlers() {
    if (!modalOverlay) {
      return;
    }

    /* Close button */
    var closeBtn = modalOverlay.querySelector('.feed-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        closeModal();
        /* Resume scroll after closing */
        if (feedTrack && feedSection) {
          feedTrack.style.animationPlayState = 'running';
        }
      });
    }

    /* Click outside modal content */
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        closeModal();
        if (feedTrack && feedSection) {
          feedTrack.style.animationPlayState = 'running';
        }
      }
    });

    /* Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalOverlay && modalOverlay.style.visibility === 'visible') {
        closeModal();
        if (feedTrack && feedSection) {
          feedTrack.style.animationPlayState = 'running';
        }
      }
    });
  }

  /* ==========================================================================
     Close button hover style (injected dynamically)
     ========================================================================== */

  function injectModalStyles() {
    var style = document.createElement('style');
    style.id = 'legal-feed-modal-styles';
    style.textContent =
      '.feed-modal-close:hover {' +
        'color:var(--gold);border-color:var(--gold);background:var(--gold-bg-soft);' +
      '}' +
      '.feed-modal-body p {' +
        'font-size:1rem;line-height:1.8;color:var(--text-secondary);margin-bottom:16px;' +
      '}';
    document.head.appendChild(style);
  }

  /* ==========================================================================
     Initialize
     ========================================================================== */

  function init() {
    renderCards();
    injectScrollKeyframes();
    startAutoScroll();
    initPauseOnHover();
    initCardClicks();

    /* Pre-create modal for event handlers */
    modalOverlay = createModal();
    initModalCloseHandlers();
    injectModalStyles();
  }

  /* Run when DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
