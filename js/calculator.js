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
  install:    { perSqm: true,  price: 0 },
  leveling:   { perSqm: true,  price: 1500 },
  demolition: { perSqm: true,  price: 800 },
  substrate:  { perSqm: true,  price: 500 },
  plinth:     { perSqm: false, price: 1200 }
};

let selectedType = 'laminate';
let currentArea = 20;
let lastCalcTotal = 0;

function formatPrice(num) {
  return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
}

function updateWhatsAppLink() {
  const link = document.getElementById('calcWhatsApp');
  if (!link) return;

  const typeNames = {
    laminate: 'ламинат', linoleum: 'линолеум', vinyl: 'винил LVT',
    spc: 'кварцвинил SPC', parquet: 'паркетная доска', panels: 'настенные панели'
  };
  const name = typeNames[selectedType] || selectedType;
  const msg = 'Здравствуйте! Рассчитал на сайте: ' + name + ', ' + currentArea + ' м², итого от ' + formatPrice(lastCalcTotal) + ' тг. Хочу уточнить.';
  link.href = 'https://wa.me/77751628127?text=' + encodeURIComponent(msg);
}

function calculate() {
  const price = PRICES[selectedType];
  if (!price) return;

  const area = currentArea;
  const materialCost = area * price.material;
  let total = materialCost;

  const matEl = document.getElementById('calcMaterialPrice');
  if (matEl) matEl.textContent = 'от\u00a0' + formatPrice(materialCost) + '\u00a0тг';

  const addons = document.querySelectorAll('.calc__checkbox[data-addon]');
  addons.forEach(function(cb) {
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
      if (priceEl) priceEl.textContent = formatPrice(cost) + '\u00a0тг';
    } else {
      if (row) row.style.display = 'none';
    }
  });

  // Update install unit price display
  const installUnitEl = document.querySelector('[data-addon-price="install"]');
  if (installUnitEl) {
    installUnitEl.textContent = formatPrice(price.install) + '\u00a0тг/м\u00b2';
  }

  const totalEl = document.getElementById('calcTotal');
  if (totalEl) totalEl.textContent = 'от\u00a0' + formatPrice(total) + '\u00a0тг';

  lastCalcTotal = total;
  updateWhatsAppLink();

  // Update area display
  const areaDisplay = document.getElementById('calcAreaDisplay');
  if (areaDisplay) areaDisplay.textContent = area + '\u00a0м\u00b2';
}

/* ===== Select type (called from catalog links too) ===== */
function selectCalcType(type) {
  if (!PRICES[type]) return;
  selectedType = type;

  document.querySelectorAll('.calc__chip').forEach(function(chip) {
    const isActive = chip.getAttribute('data-value') === type;
    chip.classList.toggle('active', isActive);
    chip.setAttribute('aria-pressed', String(isActive));
  });

  calculate();
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', function() {
  // Chips
  const chipsContainer = document.getElementById('calcChips');
  if (chipsContainer) {
    chipsContainer.addEventListener('click', function(e) {
      const chip = e.target.closest('.calc__chip');
      if (!chip) return;
      selectCalcType(chip.getAttribute('data-value'));
    });
  }

  // Presets
  const presetsContainer = document.getElementById('calcPresets');
  if (presetsContainer) {
    presetsContainer.addEventListener('click', function(e) {
      const btn = e.target.closest('.calc__preset');
      if (!btn) return;
      const area = parseInt(btn.getAttribute('data-area'), 10);
      currentArea = area;

      document.querySelectorAll('.calc__preset').forEach(function(p) {
        p.classList.toggle('active', p === btn);
      });

      // Sync slider
      const slider = document.getElementById('calcSlider');
      if (slider) slider.value = area;

      calculate();
    });
  }

  // Slider
  const slider = document.getElementById('calcSlider');
  if (slider) {
    slider.addEventListener('input', function() {
      currentArea = parseInt(slider.value, 10);

      // Deselect presets if not matching
      document.querySelectorAll('.calc__preset').forEach(function(p) {
        p.classList.toggle('active', parseInt(p.getAttribute('data-area'), 10) === currentArea);
      });

      calculate();
    });
  }

  // Addons
  document.querySelectorAll('.calc__checkbox').forEach(function(cb) {
    cb.addEventListener('change', calculate);
  });

  // Calculator mini-form
  const calcForm = document.getElementById('calcForm');
  if (calcForm) {
    calcForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const phone = document.getElementById('calcPhone');
      const cleaned = phone.value.replace(/\D/g, '');

      if (cleaned.length < 10 || cleaned.length > 12) {
        phone.classList.add('error');
        return;
      }
      phone.classList.remove('error');

      const typeNames = {
        laminate: 'Ламинат', linoleum: 'Линолеум', vinyl: 'Винил LVT',
        spc: 'Кварцвинил SPC', parquet: 'Паркетная доска', panels: 'Настенные панели'
      };

      // Collect checked addons
      const checkedAddons = [];
      document.querySelectorAll('.calc__checkbox[data-addon]:checked').forEach(function(cb) {
        const textEl = cb.closest('.calc__addon-row').querySelector('.calc__addon-text');
        if (textEl) checkedAddons.push(textEl.textContent);
      });

      const btn = calcForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Отправка...';
      btn.disabled = true;

      // Send to Telegram (placeholder)
      const BOT_TOKEN = 'YOUR_BOT_TOKEN';
      const CHAT_ID = 'YOUR_CHAT_ID';
      const text = [
        '<b>Заявка из калькулятора</b>',
        'Тип: ' + (typeNames[selectedType] || selectedType),
        'Площадь: ' + currentArea + ' м²',
        'Допуслуги: ' + (checkedAddons.length ? checkedAddons.join(', ') : 'нет'),
        'Итого: от ' + formatPrice(lastCalcTotal) + ' тг',
        'Телефон: ' + phone.value
      ].join('\n');

      fetch('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: text, parse_mode: 'HTML' })
      }).finally(function() {
        btn.textContent = 'Заявка отправлена!';
        btn.style.background = 'var(--color-success)';
        setTimeout(function() {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
          phone.value = '';
        }, 3000);

        // Also prefill main form
        prefillMainForm();
      });
    });
  }

  // Initial calculation
  calculate();
});

/* ===== Prefill main form from calculator data ===== */
function prefillMainForm() {
  const interest = document.getElementById('formInterest');
  const comment = document.getElementById('formComment');

  if (interest) {
    const options = interest.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === selectedType) {
        interest.selectedIndex = i;
        break;
      }
    }
  }

  const typeNames = {
    laminate: 'ламинат', linoleum: 'линолеум', vinyl: 'винил LVT',
    spc: 'кварцвинил SPC', parquet: 'паркетная доска', panels: 'настенные панели'
  };

  if (comment) {
    comment.value = 'Расчёт с сайта: ' + (typeNames[selectedType] || selectedType) + ', ' + currentArea + ' м², от ' + formatPrice(lastCalcTotal) + ' тг';
  }
}
