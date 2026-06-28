(function () {
  'use strict';

  var STORAGE_KEY = 'll-disclaimer-accepted';

  /* ========== Inject CSS ========== */
  var css = [
    '/* ---------- Disclaimer Popup Overlay ---------- */',
    '.disclaimer-overlay {',
    '  position: fixed;',
    '  inset: 0;',
    '  z-index: 999999;',
    '  display: flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  background: rgba(0, 0, 0, 0.92);',
    '  opacity: 0;',
    '  visibility: hidden;',
    '  transition: opacity 0.5s ease, visibility 0.5s ease;',
    '  padding: 20px;',
    '}',
    '',
    '.disclaimer-overlay.active {',
    '  opacity: 1;',
    '  visibility: visible;',
    '}',
    '',
    '/* ---------- Modal ---------- */',
    '.disclaimer-modal {',
    '  background: linear-gradient(145deg, #111111 0%, #0a0a0a 100%);',
    '  border: 1px solid rgba(201, 168, 76, 0.3);',
    '  border-radius: 16px;',
    '  max-width: 640px;',
    '  width: 100%;',
    '  padding: 48px 40px 40px;',
    '  position: relative;',
    '  transform: translateY(30px) scale(0.95);',
    '  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);',
    '  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(201, 168, 76, 0.08);',
    '  overflow: hidden;',
    '}',
    '',
    '.disclaimer-overlay.active .disclaimer-modal {',
    '  transform: translateY(0) scale(1);',
    '}',
    '',
    '/* Gold accent line at top */',
    '.disclaimer-modal::before {',
    '  content: "";',
    '  position: absolute;',
    '  top: 0;',
    '  left: 0;',
    '  right: 0;',
    '  height: 3px;',
    '  background: linear-gradient(90deg, transparent 0%, #c9a84c 50%, transparent 100%);',
    '}',
    '',
    '/* Corner accents */',
    '.disclaimer-modal::after {',
    '  content: "";',
    '  position: absolute;',
    '  top: 12px;',
    '  right: 12px;',
    '  width: 40px;',
    '  height: 40px;',
    '  border-top: 2px solid rgba(201, 168, 76, 0.25);',
    '  border-right: 2px solid rgba(201, 168, 76, 0.25);',
    '  border-radius: 0 8px 0 0;',
    '  pointer-events: none;',
    '}',
    '',
    '.disclaimer-corner-bl {',
    '  position: absolute;',
    '  bottom: 12px;',
    '  left: 12px;',
    '  width: 40px;',
    '  height: 40px;',
    '  border-bottom: 2px solid rgba(201, 168, 76, 0.25);',
    '  border-left: 2px solid rgba(201, 168, 76, 0.25);',
    '  border-radius: 0 0 0 8px;',
    '  pointer-events: none;',
    '}',
    '',
    '/* ---------- Icon ---------- */',
    '.disclaimer-icon {',
    '  text-align: center;',
    '  margin-bottom: 24px;',
    '}',
    '',
    '.disclaimer-icon i {',
    '  font-size: 42px;',
    '  background: linear-gradient(135deg, #c9a84c 0%, #e2c97e 50%, #c9a84c 100%);',
    '  -webkit-background-clip: text;',
    '  -webkit-text-fill-color: transparent;',
    '  background-clip: text;',
    '}',
    '',
    '/* ---------- Title ---------- */',
    '.disclaimer-title {',
    '  font-family: "Playfair Display", Georgia, serif;',
    '  font-size: clamp(1.5rem, 3.5vw, 1.85rem);',
    '  font-weight: 700;',
    '  text-align: center;',
    '  color: #ffffff;',
    '  margin-bottom: 8px;',
    '  line-height: 1.3;',
    '}',
    '',
    '/* ---------- Subtitle ---------- */',
    '.disclaimer-subtitle {',
    '  text-align: center;',
    '  color: #888888;',
    '  font-size: 0.95rem;',
    '  margin-bottom: 28px;',
    '  line-height: 1.6;',
    '}',
    '',
    '/* ---------- Gold divider ---------- */',
    '.disclaimer-divider {',
    '  width: 60px;',
    '  height: 2px;',
    '  background: linear-gradient(90deg, #c9a84c, #e2c97e, #c9a84c);',
    '  margin: 0 auto 24px;',
    '  border-radius: 2px;',
    '}',
    '',
    '/* ---------- Bullet list ---------- */',
    '.disclaimer-list {',
    '  list-style: none;',
    '  padding: 0;',
    '  margin: 0 0 32px;',
    '  display: flex;',
    '  flex-direction: column;',
    '  gap: 12px;',
    '}',
    '',
    '.disclaimer-list li {',
    '  display: flex;',
    '  align-items: flex-start;',
    '  gap: 12px;',
    '  color: #cccccc;',
    '  font-size: 0.95rem;',
    '  line-height: 1.6;',
    '}',
    '',
    '.disclaimer-list li i {',
    '  color: #c9a84c;',
    '  font-size: 0.75rem;',
    '  margin-top: 6px;',
    '  flex-shrink: 0;',
    '}',
    '',
    '/* ---------- Buttons ---------- */',
    '.disclaimer-buttons {',
    '  display: flex;',
    '  gap: 16px;',
    '  justify-content: center;',
    '  flex-wrap: wrap;',
    '}',
    '',
    '.disclaimer-btn {',
    '  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;',
    '  font-size: 0.95rem;',
    '  font-weight: 600;',
    '  padding: 14px 32px;',
    '  border-radius: 8px;',
    '  cursor: pointer;',
    '  transition: all 0.3s ease;',
    '  border: none;',
    '  letter-spacing: 0.3px;',
    '}',
    '',
    '.disclaimer-btn-accept {',
    '  background: linear-gradient(135deg, #c9a84c 0%, #e2c97e 50%, #c9a84c 100%);',
    '  color: #0a0a0a;',
    '  box-shadow: 0 4px 20px rgba(201, 168, 76, 0.3);',
    '}',
    '',
    '.disclaimer-btn-accept:hover {',
    '  box-shadow: 0 6px 30px rgba(201, 168, 76, 0.5);',
    '  transform: translateY(-2px);',
    '}',
    '',
    '.disclaimer-btn-decline {',
    '  background: transparent;',
    '  color: #888888;',
    '  border: 1px solid rgba(136, 136, 136, 0.3);',
    '}',
    '',
    '.disclaimer-btn-decline:hover {',
    '  border-color: rgba(136, 136, 136, 0.6);',
    '  color: #cccccc;',
    '}',
    '',
    '/* ---------- Decline message ---------- */',
    '.disclaimer-decline-msg {',
    '  text-align: center;',
    '  color: #e25555;',
    '  font-size: 0.9rem;',
    '  margin-top: 16px;',
    '  display: none;',
    '}',
    '',
    '.disclaimer-decline-msg.visible {',
    '  display: block;',
    '  animation: disclaimerShake 0.4s ease;',
    '}',
    '',
    '@keyframes disclaimerShake {',
    '  0%, 100% { transform: translateX(0); }',
    '  20% { transform: translateX(-6px); }',
    '  40% { transform: translateX(6px); }',
    '  60% { transform: translateX(-4px); }',
    '  80% { transform: translateX(4px); }',
    '}',
    '',
    '/* ---------- Body scroll lock ---------- */',
    'body.disclaimer-lock {',
    '  overflow: hidden !important;',
    '}',
    '',
    '/* ---------- Responsive ---------- */',
    '@media (max-width: 640px) {',
    '  .disclaimer-modal {',
    '    padding: 36px 24px 28px;',
    '    border-radius: 12px;',
    '  }',
    '',
    '  .disclaimer-icon i {',
    '    font-size: 34px;',
    '  }',
    '',
    '  .disclaimer-btn {',
    '    padding: 12px 24px;',
    '    font-size: 0.9rem;',
    '    width: 100%;',
    '    text-align: center;',
    '  }',
    '',
    '  .disclaimer-buttons {',
    '    flex-direction: column;',
    '    gap: 12px;',
    '  }',
    '}'
  ].join('\n');

  var style = document.createElement('style');
  style.setAttribute('data-disclaimer-popup', 'true');
  style.textContent = css;
  document.head.appendChild(style);

  /* ========== Inject HTML ========== */
  var html = [
    '<div class="disclaimer-overlay" id="disclaimerOverlay">',
    '  <div class="disclaimer-modal">',
    '    <div class="disclaimer-corner-bl"></div>',
    '    <div class="disclaimer-icon"><i class="fas fa-balance-scale"></i></div>',
    '    <h2 class="disclaimer-title">Legal Disclaimer &amp; Instructions</h2>',
    '    <p class="disclaimer-subtitle">Welcome to Lahari Legal Associates website.</p>',
    '    <div class="disclaimer-divider"></div>',
    '    <p class="disclaimer-subtitle" style="margin-bottom:20px;">This platform provides general legal information and professional legal services. By continuing, you acknowledge and agree to the following:</p>',
    '    <ul class="disclaimer-list">',
    '      <li><i class="fas fa-circle"></i> Information is for general guidance only</li>',
    '      <li><i class="fas fa-circle"></i> No legal advice is provided without consultation</li>',
    '      <li><i class="fas fa-circle"></i> All case details are confidential</li>',
    '      <li><i class="fas fa-circle"></i> Users must contact the firm for official legal support</li>',
    '    </ul>',
    '    <div class="disclaimer-buttons">',
    '      <button class="disclaimer-btn disclaimer-btn-accept" id="disclaimerAccept">Accept &amp; Continue</button>',
    '      <button class="disclaimer-btn disclaimer-btn-decline" id="disclaimerDecline">Decline</button>',
    '    </div>',
    '    <div class="disclaimer-decline-msg" id="disclaimerDeclineMsg">You must accept to continue.</div>',
    '  </div>',
    '</div>'
  ].join('\n');

  /* Insert immediately after <body> opening tag */
  document.body.insertAdjacentHTML('afterbegin', html);

  /* ========== Logic ========== */
  var overlay = document.getElementById('disclaimerOverlay');
  var acceptBtn = document.getElementById('disclaimerAccept');
  var declineBtn = document.getElementById('disclaimerDecline');
  var declineMsg = document.getElementById('disclaimerDeclineMsg');

  function showPopup() {
    document.body.classList.add('disclaimer-lock');
    /* Small delay so the CSS transition triggers */
    requestAnimationFrame(function () {
      overlay.classList.add('active');
    });
  }

  function hidePopup() {
    overlay.classList.remove('active');
    document.body.classList.remove('disclaimer-lock');
    /* Remove from DOM after transition */
    setTimeout(function () {
      var el = document.getElementById('disclaimerOverlay');
      if (el) el.remove();
      var st = document.querySelector('style[data-disclaimer-popup]');
      if (st) st.remove();
    }, 600);
  }

  /* Check if already accepted */
  if (localStorage.getItem(STORAGE_KEY)) {
    /* Already accepted — don't show */
    return;
  }

  /* Show popup */
  showPopup();

  /* Accept */
  acceptBtn.addEventListener('click', function () {
    localStorage.setItem(STORAGE_KEY, 'true');
    hidePopup();
  });

  /* Decline — show message, keep popup open */
  declineBtn.addEventListener('click', function () {
    declineMsg.classList.add('visible');
    declineBtn.style.opacity = '0.5';
    declineBtn.style.pointerEvents = 'none';
    setTimeout(function () {
      declineBtn.style.opacity = '1';
      declineBtn.style.pointerEvents = 'auto';
    }, 1500);
  });

})();
