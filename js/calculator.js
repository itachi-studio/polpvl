'use strict';

const PRICES = {
  laminate:  { material: 3500, install: 1500 },
  linoleum:  { material: 2000, install: 800  },
  vinyl:     { material: 5000, install: 1500 },
  spc:       { material: 6500, install: 1500 },
  parquet:   { material: 8000, install: 2500 },
  panels:    { material: 4000, install: 2000 }
};

const ADDONS = {
  install:    { perSqm: true,  price: 0 },  // price from PRICES[type].install
  leveling:   { perSqm: true,  price: 1500 },
  demolition: { perSqm: true,  price: 800 },
  substrate:  { perSqm: true,  price: 500 },
  plinth:     { perSqm: false, price: 1200 } // per running meter, perimeter = sqrt(area)*4
};

let selectedType = 'laminate';
let currentArea = 20;

function updateWhatsAppLink(type, area, total) {
  var link = document.getElementById('calcWhatsApp');
  if (!link) return;
  var typeNames = {
    laminate: 'ламинат', linoleum: 'линолеум', vinyl: 'винил LVT',
    spc: 'кварцвинил SPC', parquet: 'паркетная доска', panels: 'настенные панели'
  };
  var name = typeNames[type] || type;
  var msg = 'Здравствуйте! Рассчитал на сайте: ' + name + ', ' + area + ' м², итого от ' + formatPrice(total) + ' тг. Хочу уточнить.';
  link.href = 'https://wa.me/77751628127?text=' + encodeURIComponent(msg);
}

function formatPrice(num) {
  return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function getArea() {
  const input = document.getElementById('calcArea');
  if (!input) return 20;
  const val = parseInt(input.value, 10);
  if (isNaN(val) || val < 1) return 1;
  if (val > 200) return 200;
  return val;
}

function calculate() {
  const area = getArea();
  currentArea = area;
  const price = PRICES[selectedType];
  if (!price) return;

  const materialCost = area * price.material;
  let total = materialCost;

  // Material line
  const matEl = document.getElementById('calcMaterialPrice');
  if (matEl) matEl.textContent = 'от ' + formatPrice(materialCost) + ' тг';

  // Addon lines
  const addons = document.querySelectorAll('.calc__checkbox[data-addon]');
  for (let i = 0; i < addons.length; i++) {
    const cb = addons[i];
    const key = cb.getAttribute('data-addon');
    const row = document.getElementById('calcAddonRow_' + key);
    const priceEl = document.getElementById('calcAddonCost_' + key);

    if (cb.checked) {
      let cost = 0;
      if (key === 'install') {
        cost = area * price.install;
      } else if (key === 'plinth') {
        const perimeter = Math.sqrt(area) * 4;
        cost = perimeter * ADDONS[key].price;
      } else {
        cost = area * ADDONS[key].price;
      }
      total += cost;
      if (row) row.style.display = 'flex';
      if (priceEl) priceEl.textContent = formatPrice(cost) + ' тг';
    } else {
      if (row) row.style.display = 'none';
    }
  }

  // Update install unit price display
  const installUnitEl = document.querySelector('[data-addon-price="install"]');
  if (installUnitEl) {
    installUnitEl.textContent = formatPrice(price.install) + ' тг/м²';
  }

  // Total
  const totalEl = document.getElementById('calcTotal');
  if (totalEl) totalEl.textContent = 'от ' + formatPrice(total) + ' тг';

  // Update WhatsApp link
  updateWhatsAppLink(selectedType, area, total);
}

function initChips() {
  const chips = document.querySelectorAll('.calc__chip');
  for (let i = 0; i < chips.length; i++) {
    chips[i].addEventListener('click', function() {
      for (let j = 0; j < chips.length; j++) {
        chips[j].classList.remove('active');
        chips[j].setAttribute('aria-pressed', 'false');
      }
      this.classList.add('active');
      this.setAttribute('aria-pressed', 'true');
      selectedType = this.getAttribute('data-value');
      calculate();
    });
  }
}

function initPresets() {
  const presets = document.querySelectorAll('.calc__preset');
  const areaInput = document.getElementById('calcArea');

  for (let i = 0; i < presets.length; i++) {
    presets[i].addEventListener('click', function() {
      const val = parseInt(this.getAttribute('data-area'), 10);
      // Update active state
      for (let j = 0; j < presets.length; j++) {
        presets[j].classList.remove('active');
      }
      this.classList.add('active');
      // Update input
      if (areaInput) areaInput.value = val;
      calculate();
    });
  }

  // When manual input changes, deselect presets
  if (areaInput) {
    areaInput.addEventListener('input', function() {
      const val = parseInt(this.value, 10);
      let matched = false;
      for (let j = 0; j < presets.length; j++) {
        if (parseInt(presets[j].getAttribute('data-area'), 10) === val) {
          presets[j].classList.add('active');
          matched = true;
        } else {
          presets[j].classList.remove('active');
        }
      }
    });
  }
}

function initAddons() {
  const checkboxes = document.querySelectorAll('.calc__checkbox[data-addon]');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', calculate);
  }
}

function initMiniForm() {
  const submitBtn = document.getElementById('calcMiniSubmit');
  const phoneInput = document.getElementById('calcPhone');
  if (!submitBtn || !phoneInput) return;

  submitBtn.addEventListener('click', function() {
    const phoneVal = phoneInput.value.trim().replace(/\D/g, '');
    if (phoneVal.length < 10) {
      phoneInput.style.borderColor = 'var(--color-error, #ba1a1a)';
      return;
    }
    phoneInput.style.borderColor = '';

    // Collect calculator data
    const data = {
      type: selectedType,
      area: currentArea,
      phone: phoneInput.value.trim(),
      addons: []
    };
    const addons = document.querySelectorAll('.calc__checkbox[data-addon]:checked');
    for (let i = 0; i < addons.length; i++) {
      data.addons.push(addons[i].getAttribute('data-addon'));
    }

    // Show success state
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    submitBtn.textContent = typeof TRANSLATIONS !== 'undefined' && typeof currentLang !== 'undefined'
      ? (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang].form_sending || 'Отправка...')
      : 'Отправка...';

    setTimeout(function() {
      submitBtn.classList.remove('loading');
      submitBtn.classList.add('success');
      submitBtn.textContent = typeof TRANSLATIONS !== 'undefined' && typeof currentLang !== 'undefined'
        ? (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang].form_success || 'Заявка отправлена!')
        : 'Заявка отправлена!';
      phoneInput.value = '';

      setTimeout(function() {
        submitBtn.classList.remove('success');
        submitBtn.disabled = false;
        submitBtn.textContent = typeof TRANSLATIONS !== 'undefined' && typeof currentLang !== 'undefined'
          ? (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang].calc_cta || originalText)
          : originalText;
      }, 3000);
    }, 1000);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const areaEl = document.getElementById('calcArea');
  if (areaEl) areaEl.addEventListener('input', calculate);

  initChips();
  initPresets();
  initAddons();
  initMiniForm();
  calculate();
});
