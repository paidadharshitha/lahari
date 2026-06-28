(function () {
  'use strict';

  var WHATSAPP_NUMBER = '919876543210'; // Replace with actual number

  /* ===========================
     State
     =========================== */
  var state = {
    selectedDate: null,
    selectedTime: null,
    selectedTimeLabel: null,
    selectedService: null,
    confidentialMode: false,
    calendarMonth: new Date().getMonth(),
    calendarYear: new Date().getFullYear()
  };

  /* ===========================
     DOM References
     =========================== */
  var calendarDays = document.querySelector('.calendar-days');
  var calendarMonthLabel = document.querySelector('.calendar-month-label');
  var prevMonthBtn = document.querySelector('.calendar-prev-month');
  var nextMonthBtn = document.querySelector('.calendar-next-month');
  var timeslotGrid = document.querySelector('.timeslot-grid');
  var serviceOptions = document.querySelectorAll('.service-type-option');
  var confidentialToggle = document.querySelector('.confidential-toggle');
  var privacyBadge = document.querySelector('.privacy-badge');
  var formPanel = document.querySelector('.booking-form-panel');
  var nameGroup = document.getElementById('name-group');
  var bookingForm = document.getElementById('booking-form');
  var confirmationOverlay = document.querySelector('.booking-confirmation-overlay');
  var confirmClose = document.getElementById('confirm-close');
  var confirmWhatsApp = document.getElementById('confirm-whatsapp');
  var confirmEmail = document.getElementById('confirm-email');

  /* ===========================
     Step Indicator
     Visual progress indicator for the booking flow:
     Step 1: Select service
     Step 2: Pick date & time
     Step 3: Fill form & submit
     =========================== */

  function initStepIndicator() {
    var bookingContainer = document.querySelector('.booking-form-panel');
    if (!bookingContainer) {
      return;
    }

    /* Create step indicator if it doesn't exist */
    if (!bookingContainer.querySelector('.booking-step-indicator')) {
      var indicator = document.createElement('div');
      indicator.className = 'booking-step-indicator';
      indicator.innerHTML =
        '<div class="booking-step active" data-step="1">' +
          '<div class="step-number">1</div>' +
          '<div class="step-label">Service</div>' +
        '</div>' +
        '<div class="step-connector"></div>' +
        '<div class="booking-step" data-step="2">' +
          '<div class="step-number">2</div>' +
          '<div class="step-label">Date & Time</div>' +
        '</div>' +
        '<div class="step-connector"></div>' +
        '<div class="booking-step" data-step="3">' +
          '<div class="step-number">3</div>' +
          '<div class="step-label">Details</div>' +
        '</div>';

      /* Insert at the top of the form panel */
      bookingContainer.insertBefore(indicator, bookingContainer.firstChild);
    }

    /* Inject step indicator styles */
    injectStepStyles();
  }

  function updateStepIndicator() {
    var currentStep = 1;

    if (state.selectedService) {
      currentStep = 2;
    }
    if (state.selectedDate && state.selectedTime && state.selectedService) {
      currentStep = 3;
    }

    var steps = document.querySelectorAll('.booking-step');
    for (var i = 0; i < steps.length; i++) {
      var stepNum = parseInt(steps[i].getAttribute('data-step'), 10);
      if (stepNum <= currentStep) {
        steps[i].classList.add('active');
        if (stepNum < currentStep) {
          steps[i].classList.add('completed');
        } else {
          steps[i].classList.remove('completed');
        }
      } else {
        steps[i].classList.remove('active');
        steps[i].classList.remove('completed');
      }
    }
  }

  function injectStepStyles() {
    if (document.getElementById('booking-step-styles')) {
      return;
    }
    var style = document.createElement('style');
    style.id = 'booking-step-styles';
    style.textContent =
      '.booking-step-indicator {' +
        'display:flex;align-items:center;justify-content:center;' +
        'gap:0;margin-bottom:24px;padding:0 8px;' +
      '}' +
      '.booking-step {' +
        'display:flex;align-items:center;gap:8px;padding:8px 12px;' +
        'border-radius:6px;transition:all 0.3s ease;flex-shrink:0;' +
      '}' +
      '.step-number {' +
        'width:28px;height:28px;border-radius:50%;' +
        'display:flex;align-items:center;justify-content:center;' +
        'font-size:0.75rem;font-weight:700;' +
        'border:2px solid var(--border-medium);color:var(--text-muted);' +
        'transition:all 0.3s ease;font-family:var(--font-body);' +
      '}' +
      '.step-label {' +
        'font-size:0.75rem;font-weight:600;color:var(--text-muted);' +
        'transition:color 0.3s ease;white-space:nowrap;' +
      '}' +
      '.booking-step.active .step-number {' +
        'background:var(--gold-gradient);border-color:transparent;color:#1a1a1a;' +
      '}' +
      '.booking-step.active .step-label {' +
        'color:var(--gold);' +
      '}' +
      '.booking-step.completed .step-number {' +
        'background:var(--gold);border-color:transparent;color:#1a1a1a;' +
      '}' +
      '.step-connector {' +
        'flex:1;height:2px;min-width:16px;max-width:40px;' +
        'background:var(--border-subtle);transition:background 0.3s ease;' +
      '}' +
      '@media(max-width:480px) {' +
        '.step-label { display:none; }' +
        '.booking-step { padding:6px; }' +
      '}';
    document.head.appendChild(style);
  }

  /* ===========================
     Inline Validation
     Shows error messages below fields instead of using alert().
     Supports .form-error class for styling.
     =========================== */

  /**
   * Clear all validation errors in the booking form.
   */
  function clearValidationErrors() {
    var errorEls = bookingForm ? bookingForm.querySelectorAll('.form-error') : [];
    for (var i = 0; i < errorEls.length; i++) {
      errorEls[i].parentNode.removeChild(errorEls[i]);
    }
    /* Remove error border class from all inputs */
    var inputs = bookingForm ? bookingForm.querySelectorAll('.form-input.error') : [];
    for (var j = 0; j < inputs.length; j++) {
      inputs[j].classList.remove('error');
    }
    /* Remove error highlight from section containers */
    var errorGroups = document.querySelectorAll('.booking-error-highlight');
    for (var k = 0; k < errorGroups.length; k++) {
      errorGroups[k].classList.remove('booking-error-highlight');
    }
  }

  /**
   * Show an inline error message below a specific field or section.
   * @param {HTMLElement} targetEl - The field or container to show error for.
   * @param {string} message - The error message to display.
   */
  function showFieldError(targetEl, message) {
    /* Remove any existing error for this element */
    var existing = targetEl.parentNode.querySelector('.form-error');
    if (existing) {
      targetEl.parentNode.removeChild(existing);
    }

    /* Add error class to the target */
    targetEl.classList.add('error');

    /* Create error message element */
    var errorEl = document.createElement('div');
    errorEl.className = 'form-error';
    errorEl.textContent = message;

    /* Insert after the target element */
    if (targetEl.nextSibling) {
      targetEl.parentNode.insertBefore(errorEl, targetEl.nextSibling);
    } else {
      targetEl.parentNode.appendChild(errorEl);
    }
  }

  /**
   * Validate the entire booking form with inline error messages.
   * Returns true if valid, false otherwise.
   */
  function validateBookingForm() {
    clearValidationErrors();
    var isValid = true;

    /* Validate service selection */
    if (!state.selectedService) {
      var serviceSection = formPanel ? formPanel.querySelector('.booking-service-types') : null;
      if (serviceSection) {
        showFieldError(serviceSection, 'Please select a service type.');
        serviceSection.classList.add('booking-error-highlight');
      }
      isValid = false;
    }

    /* Validate date selection */
    if (!state.selectedDate) {
      var calendarSection = formPanel ? formPanel.querySelector('.booking-calendar') : null;
      if (calendarSection) {
        showFieldError(calendarSection, 'Please select a date for your appointment.');
        calendarSection.classList.add('booking-error-highlight');
      }
      isValid = false;
    }

    /* Validate time selection */
    if (!state.selectedTime) {
      var timeslotSection = formPanel ? formPanel.querySelector('.booking-timeslots') : null;
      if (timeslotSection) {
        showFieldError(timeslotSection, 'Please select a time slot.');
        timeslotSection.classList.add('booking-error-highlight');
      }
      isValid = false;
    }

    /* Validate name (if not confidential mode) */
    if (!state.confidentialMode) {
      var nameInput = document.getElementById('booking-name');
      var nameVal = nameInput ? nameInput.value.trim() : '';
      if (!nameVal) {
        if (nameInput) {
          showFieldError(nameInput, 'Please enter your name.');
        }
        isValid = false;
      }
    }

    /* Validate phone */
    var phoneInput = document.getElementById('booking-phone');
    var phoneVal = phoneInput ? phoneInput.value.trim() : '';
    if (!phoneVal || phoneVal.length < 10) {
      if (phoneInput) {
        showFieldError(phoneInput, 'Please enter a valid phone number (minimum 10 digits).');
      }
      isValid = false;
    }

    /* Validate email (optional but if filled, must be valid format) */
    var emailInput = document.getElementById('booking-email');
    var emailVal = emailInput ? emailInput.value.trim() : '';
    if (emailVal && !isValidEmail(emailVal)) {
      if (emailInput) {
        showFieldError(emailInput, 'Please enter a valid email address.');
      }
      isValid = false;
    }

    return isValid;
  }

  /**
   * Simple email format validation.
   */
  function isValidEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  /**
   * Clear error on an input when the user starts typing.
   */
  function initRealtimeValidation() {
    var inputs = bookingForm ? bookingForm.querySelectorAll('.form-input') : [];
    for (var i = 0; i < inputs.length; i++) {
      (function (input) {
        input.addEventListener('input', function () {
          if (input.classList.contains('error')) {
            input.classList.remove('error');
            var err = input.parentNode.querySelector('.form-error');
            if (err) {
              input.parentNode.removeChild(err);
            }
          }
        });
      })(inputs[i]);
    }
  }

  /* Inject validation error styles */
  function injectValidationStyles() {
    if (document.getElementById('booking-validation-styles')) {
      return;
    }
    var style = document.createElement('style');
    style.id = 'booking-validation-styles';
    style.textContent =
      '.form-input.error {' +
        'border-color:#ef4444 !important;' +
        'box-shadow:0 0 0 3px rgba(239,68,68,0.1) !important;' +
      '}' +
      '.form-error {' +
        'color:#ef4444;font-size:0.78rem;font-weight:500;' +
        'margin-top:4px;display:flex;align-items:center;gap:4px;' +
        'font-family:var(--font-body);' +
      '}' +
      '.form-error::before {' +
        'content:"\\f06a";font-family:"Font Awesome 6 Free";' +
        'font-weight:900;font-size:0.7rem;' +
      '}' +
      '.booking-error-highlight {' +
        'outline:2px solid #ef4444;outline-offset:2px;border-radius:6px;' +
      '}';
    document.head.appendChild(style);
  }

  /* ===========================
     Confirmation Success Animation
     SVG checkmark draw animation on booking confirmation.
     =========================== */

  function showConfirmationWithAnimation() {
    if (!confirmationOverlay) {
      return;
    }

    /* Replace static icon with animated SVG checkmark */
    var iconContainer = confirmationOverlay.querySelector('.confirmation-icon');
    if (iconContainer) {
      iconContainer.innerHTML =
        '<svg class="success-checkmark" viewBox="0 0 52 52" width="52" height="52">' +
          '<circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none" stroke="#C9A24A" stroke-width="2"/>' +
          '<path class="checkmark-check" fill="none" stroke="#C9A24A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>' +
        '</svg>';
    }

    /* Show overlay */
    confirmationOverlay.classList.add('visible');

    /* Inject animation keyframes */
    injectConfirmationAnimationStyles();
  }

  function injectConfirmationAnimationStyles() {
    if (document.getElementById('confirmation-animation-styles')) {
      return;
    }
    var style = document.createElement('style');
    style.id = 'confirmation-animation-styles';
    style.textContent =
      '.success-checkmark {' +
        'display:block;margin:0 auto;' +
      '}' +
      '.checkmark-circle {' +
        'stroke-dasharray:166;' +
        'stroke-dashoffset:166;' +
        'animation:checkStroke 0.6s cubic-bezier(0.65,0,0.45,1) forwards;' +
      '}' +
      '.checkmark-check {' +
        'stroke-dasharray:48;' +
        'stroke-dashoffset:48;' +
        'animation:checkStroke 0.3s cubic-bezier(0.65,0,0.45,1) 0.4s forwards;' +
      '}' +
      '@keyframes checkStroke {' +
        '100% { stroke-dashoffset:0; }' +
      '}';
    document.head.appendChild(style);
  }

  /* ===========================
     Confidential Mode
     =========================== */
  if (confidentialToggle) {
    confidentialToggle.addEventListener('click', function () {
      state.confidentialMode = !state.confidentialMode;
      this.classList.toggle('active', state.confidentialMode);
      formPanel.classList.toggle('confidential-mode', state.confidentialMode);
      privacyBadge.classList.toggle('visible', state.confidentialMode);
      if (nameGroup) {
        nameGroup.classList.toggle('hidden', state.confidentialMode);
      }
    });
  }

  /* ===========================
     Service Type Selection
     =========================== */
  for (var i = 0; i < serviceOptions.length; i++) {
    serviceOptions[i].addEventListener('click', function () {
      for (var j = 0; j < serviceOptions.length; j++) {
        serviceOptions[j].classList.remove('active');
      }
      this.classList.add('active');
      state.selectedService = this.textContent.trim();

      /* Clear any service error */
      var serviceSection = formPanel ? formPanel.querySelector('.booking-service-types') : null;
      if (serviceSection) {
        serviceSection.classList.remove('booking-error-highlight');
        var err = serviceSection.parentNode.querySelector('.form-error');
        if (err) {
          err.parentNode.removeChild(err);
        }
      }

      /* Update step indicator */
      updateStepIndicator();
    });
  }

  /* ===========================
     Calendar
     =========================== */
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  function renderCalendar() {
    if (!calendarDays) return;

    var year = state.calendarYear;
    var month = state.calendarMonth;

    if (calendarMonthLabel) {
      calendarMonthLabel.textContent = monthNames[month] + ' ' + year;
    }

    calendarDays.innerHTML = '';

    // Weekday headers
    var weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    var weekdaysContainer = document.querySelector('.calendar-weekdays');
    if (weekdaysContainer) {
      weekdaysContainer.innerHTML = '';
      for (var w = 0; w < weekdays.length; w++) {
        var wd = document.createElement('div');
        wd.className = 'calendar-weekday';
        wd.textContent = weekdays[w];
        weekdaysContainer.appendChild(wd);
      }
    }

    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    // Empty cells before first day
    for (var e = 0; e < firstDay; e++) {
      var empty = document.createElement('div');
      empty.className = 'calendar-day empty';
      calendarDays.appendChild(empty);
    }

    // Day cells
    for (var d = 1; d <= daysInMonth; d++) {
      var dayEl = document.createElement('div');
      dayEl.className = 'calendar-day';
      dayEl.textContent = d;

      var thisDate = new Date(year, month, d);
      thisDate.setHours(0, 0, 0, 0);

      // Disable past dates and Sundays
      if (thisDate < today || thisDate.getDay() === 0) {
        dayEl.classList.add('disabled');
      } else if (thisDate.getTime() === today.getTime()) {
        dayEl.classList.add('today');
      }

      // Check if selected
      if (state.selectedDate &&
        state.selectedDate.getDate() === d &&
        state.selectedDate.getMonth() === month &&
        state.selectedDate.getFullYear() === year) {
        dayEl.classList.add('selected');
      }

      (function (day, dateObj) {
        dayEl.addEventListener('click', function () {
          if (this.classList.contains('disabled')) return;
          state.selectedDate = dateObj;
          renderCalendar();
          renderTimeSlots();
          updateStepIndicator();

          /* Clear calendar error */
          var calendarSection = formPanel ? formPanel.querySelector('.booking-calendar') : null;
          if (calendarSection) {
            calendarSection.classList.remove('booking-error-highlight');
            var err = calendarSection.parentNode.querySelector('.form-error');
            if (err) {
              err.parentNode.removeChild(err);
            }
          }
        });
      })(d, thisDate);

      calendarDays.appendChild(dayEl);
    }
  }

  if (prevMonthBtn) {
    prevMonthBtn.addEventListener('click', function () {
      state.calendarMonth--;
      if (state.calendarMonth < 0) { state.calendarMonth = 11; state.calendarYear--; }
      renderCalendar();
    });
  }

  if (nextMonthBtn) {
    nextMonthBtn.addEventListener('click', function () {
      state.calendarMonth++;
      if (state.calendarMonth > 11) { state.calendarMonth = 0; state.calendarYear++; }
      renderCalendar();
    });
  }

  /* ===========================
     Time Slots
     =========================== */
  function renderTimeSlots() {
    if (!timeslotGrid) return;

    timeslotGrid.innerHTML = '';

    if (!state.selectedDate) {
      var msg = document.createElement('div');
      msg.style.cssText = 'grid-column: 1/-1; text-align: center; padding: 20px; color: var(--text-muted); font-size: 0.88rem;';
      msg.textContent = 'Please select a date first';
      timeslotGrid.appendChild(msg);
      return;
    }

    var slots = [];
    for (var h = 9; h <= 18; h++) {
      for (var m = 0; m < 60; m += 30) {
        if (h === 18 && m > 0) break;
        var hour12 = h > 12 ? h - 12 : h;
        var ampm = h >= 12 ? 'PM' : 'AM';
        var label = hour12 + ':' + (m === 0 ? '00' : '30') + ' ' + ampm;
        slots.push({ time: h + ':' + (m === 0 ? '00' : '30'), label: label });
      }
    }

    // Simulate some random unavailable slots
    var unavailable = new Set();
    var seed = state.selectedDate.getDate() * 7;
    unavailable.add(seed % slots.length);
    unavailable.add((seed * 3 + 5) % slots.length);

    for (var i = 0; i < slots.length; i++) {
      var slotEl = document.createElement('button');
      slotEl.className = 'timeslot';
      slotEl.textContent = slots[i].label;
      slotEl.dataset.time = slots[i].time;
      slotEl.dataset.label = slots[i].label;

      if (unavailable.has(i)) {
        slotEl.classList.add('disabled');
      }

      if (state.selectedTime === slots[i].time) {
        slotEl.classList.add('selected');
      }

      (function (time, label) {
        slotEl.addEventListener('click', function () {
          if (this.classList.contains('disabled')) return;
          state.selectedTime = time;
          state.selectedTimeLabel = label;
          renderTimeSlots();
          updateStepIndicator();

          /* Clear timeslot error */
          var timeslotSection = formPanel ? formPanel.querySelector('.booking-timeslots') : null;
          if (timeslotSection) {
            timeslotSection.classList.remove('booking-error-highlight');
            var err = timeslotSection.parentNode.querySelector('.form-error');
            if (err) {
              err.parentNode.removeChild(err);
            }
          }
        });
      })(slots[i].time, slots[i].label);

      timeslotGrid.appendChild(slotEl);
    }
  }

  /* ===========================
     Form Submission
     =========================== */
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      /* Clear previous errors */
      clearValidationErrors();

      /* Run inline validation */
      if (!validateBookingForm()) {
        /* Scroll to first error */
        var firstError = bookingForm.querySelector('.form-error');
        if (firstError) {
          var target = firstError.previousElementSibling || firstError.parentElement;
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
        return;
      }

      var name = state.confidentialMode ? 'Anonymous Client' : (document.getElementById('booking-name').value.trim());
      var phone = document.getElementById('booking-phone').value.trim();
      var email = document.getElementById('booking-email').value.trim();
      var descriptionInput = document.getElementById('booking-description');
      var description = descriptionInput ? descriptionInput.value.trim() : '';

      var dateStr = state.selectedDate.getDate() + ' ' + monthNames[state.selectedDate.getMonth()] + ' ' + state.selectedDate.getFullYear();

      // Update confirmation modal
      var detailsContainer = document.querySelector('.confirmation-details');
      if (detailsContainer) {
        detailsContainer.innerHTML =
          '<div class="detail-row"><span class="detail-label">Name</span><span class="detail-value">' + escapeHtml(name) + '</span></div>' +
          '<div class="detail-row"><span class="detail-label">Phone</span><span class="detail-value">' + escapeHtml(phone) + '</span></div>' +
          (email ? '<div class="detail-row"><span class="detail-label">Email</span><span class="detail-value">' + escapeHtml(email) + '</span></div>' : '') +
          '<div class="detail-row"><span class="detail-label">Service</span><span class="detail-value">' + escapeHtml(state.selectedService) + '</span></div>' +
          '<div class="detail-row"><span class="detail-label">Date</span><span class="detail-value">' + dateStr + '</span></div>' +
          '<div class="detail-row"><span class="detail-label">Time</span><span class="detail-value">' + (state.selectedTimeLabel || state.selectedTime) + '</span></div>' +
          (description ? '<div class="detail-row"><span class="detail-label">Case Details</span><span class="detail-value">' + escapeHtml(description.substring(0, 80)) + (description.length > 80 ? '...' : '') + '</span></div>' : '');
      }

      // Setup WhatsApp link
      if (confirmWhatsApp) {
        var waMsg = 'Hello, I would like to book a consultation.\n\n' +
          'Service: ' + state.selectedService + '\n' +
          'Date: ' + dateStr + '\n' +
          'Time: ' + (state.selectedTimeLabel || state.selectedTime) + '\n' +
          'Name: ' + name + '\n' +
          'Phone: ' + phone +
          (description ? '\nCase: ' + description : '');
        confirmWhatsApp.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(waMsg);
      }

      // Setup Email link
      if (confirmEmail) {
        var subject = 'Consultation Booking — ' + state.selectedService;
        var body = 'Service: ' + state.selectedService + '\nDate: ' + dateStr + '\nTime: ' + (state.selectedTimeLabel || state.selectedTime) + '\nName: ' + name + '\nPhone: ' + phone + (description ? '\nCase Details:\n' + description : '');
        confirmEmail.href = 'mailto:info@laharilegal.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      }

      // Show confirmation with animation
      showConfirmationWithAnimation();
    });
  }

  /* ===========================
     Confirmation Modal
     =========================== */
  if (confirmClose) {
    confirmClose.addEventListener('click', function () {
      if (confirmationOverlay) { confirmationOverlay.classList.remove('visible'); }
      // Reset form
      if (bookingForm) { bookingForm.reset(); }
      clearValidationErrors();
      state.selectedDate = null;
      state.selectedTime = null;
      state.selectedTimeLabel = null;
      state.selectedService = null;
      for (var i = 0; i < serviceOptions.length; i++) { serviceOptions[i].classList.remove('active'); }
      renderCalendar();
      renderTimeSlots();
      updateStepIndicator();
    });
  }

  if (confirmationOverlay) {
    confirmationOverlay.addEventListener('click', function (e) {
      if (e.target === this) { this.classList.remove('visible'); }
    });
  }

  /* ===========================
     Helpers
     =========================== */
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  /* ===========================
     Init
     =========================== */
  initStepIndicator();
  initRealtimeValidation();
  injectValidationStyles();
  renderCalendar();
  renderTimeSlots();

})();
