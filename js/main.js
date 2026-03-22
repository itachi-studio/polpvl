'use strict';

/* ===== TRANSLATIONS v7 ===== */
const TRANSLATIONS = {
  ru: {
    nav_catalog: 'Каталог', nav_calculator: 'Калькулятор', nav_portfolio: 'Портфолио',
    nav_faq: 'FAQ', nav_contacts: 'Контакты', nav_cta: 'Заявка',

    hero_h1: 'Полы под ключ в Павлодаре',
    hero_subtitle: 'Замер бесплатно. Укладка за 1-2 дня.',
    hero_cta: 'Оставить заявку',
    hero_form_note: 'Перезвоним за\u00a030\u00a0минут',

    stat1_num: '7 лет', stat1_label: 'опыта',
    stat2_num: '500+ м²', stat2_label: 'уложено',
    stat3_num: '1-2 дня', stat3_label: 'монтаж',
    stat4_num: 'Гарантия', stat4_label: 'на работу',

    cat_title: 'Что мы\u00a0укладываем',
    cat1_name: 'Ламинат', cat1_desc: 'Для квартир и домов. Прочный, простой в уходе.', cat1_price: 'от 3 500 тг/м²',
    cat2_name: 'Линолеум', cat2_desc: 'Самый доступный вариант. Подходит для любых помещений.', cat2_price: 'от 2 000 тг/м²',
    cat3_name: 'Виниловый пол (LVT)', cat3_desc: 'Клеевой, тонкий, тихий. Для кухни, ванной, балкона.', cat3_price: 'от 5 000 тг/м²',
    cat_spc_name: 'Кварцвинил SPC', cat_spc_desc: 'Замковый, водостойкий. Быстрый монтаж без клея.', cat_spc_price: 'от 6 500 тг/м²',
    cat4_name: 'Паркетная доска', cat4_desc: 'Натуральное дерево для тех, кому важен интерьер.', cat4_price: 'от 8 000 тг/м²',
    cat6_name: 'Настенные панели', cat6_desc: 'Быстрый способ обновить стены.', cat6_price: 'от 4 000 тг/м²',
    cat_cta: 'Рассчитать',

    calc_title: 'Рассчитайте стоимость',
    calc_type_label: 'Тип покрытия',
    calc_opt_laminate: 'Ламинат', calc_opt_linoleum: 'Линолеум', calc_opt_vinyl: 'Винил LVT',
    calc_opt_spc: 'SPC', calc_opt_parquet: 'Паркет', calc_opt_panels: 'Панели',
    calc_area_label: 'Площадь помещения',
    calc_custom_area: 'Другая площадь',
    calc_addons_label: 'Дополнительные услуги',
    calc_addon_install: 'Укладка',
    calc_addon_leveling: 'Выравнивание пола',
    calc_addon_demolition: 'Демонтаж старого покрытия',
    calc_addon_substrate: 'Подложка',
    calc_addon_plinth: 'Плинтус',
    calc_addon_leveling_price: 'от 1 500 тг/м²',
    calc_addon_demolition_price: 'от 800 тг/м²',
    calc_addon_substrate_price: 'от 500 тг/м²',
    calc_addon_plinth_price: 'от 1 200 тг/пог.м',
    calc_material: 'Материал:',
    calc_result_install: 'Укладка:',
    calc_result_leveling: 'Выравнивание:',
    calc_result_demolition: 'Демонтаж:',
    calc_result_substrate: 'Подложка:',
    calc_result_plinth: 'Плинтус:',
    calc_total: 'Итого:',
    calc_cta: 'Получить точный расчёт',
    calc_whatsapp: 'Или напишите в\u00a0WhatsApp',

    steps_title: 'Как заказать',
    step1_title: 'Заявка', step1_text: 'Пишете в WhatsApp, звоните или оставляете заявку на сайте. Отвечу в течение 30 минут.',
    step2_title: 'Замер', step2_text: 'Приезжаю к вам, замеряю помещение, привожу образцы. Вы выбираете на месте.',
    step3_title: 'Расчёт', step3_text: 'Считаю точную стоимость, фиксирую цену. Скрытых доплат нет.',
    step4_title: 'Доставка', step4_text: 'Привожу покрытие и всё необходимое к вам домой.',
    step5_title: 'Укладка', step5_text: 'Монтаж за 1-2 дня. Убираю за собой. Принимаете работу — даю гарантию.',

    port_title: 'Работы в Павлодаре',
    port_subtitle: 'Больше фото и видео — в Instagram @pol_pvl',
    port_item1: 'Ламинат, 45 м²', port_item2: 'SPC-пол, кухня 12 м²',
    port_item3: 'Линолеум, 60 м²', port_item4: 'Паркетная доска, 35 м²',
    port_cta: 'Все работы в Instagram',

    rev_title: 'Отзывы клиентов',
    rev1_text: '«Позвонила утром — к обеду приехал с образцами. Через 2 дня всё готово. Чисто, аккуратно, дешевле чем в магазине.»',
    rev1_name: 'Айгерим К.', rev1_work: 'Ламинат в двушке',
    rev2_text: '«Привезли образцы, объяснили разницу между ламинатом и винилом. Уложили — полгода, ни одной претензии. Цена честная.»',
    rev2_name: 'Ерлан М.', rev2_work: 'SPC на кухню и коридор',
    rev3_text: '«Замерили, привезли, уложили. Быстро и чисто. Спасибо!»',
    rev3_name: 'Наталья С.', rev3_work: 'Линолеум в частном доме, 5 комнат',

    guarantee_title: 'Я отвечаю за каждый проект',
    guarantee_text: '«Меня зовут Павел Бусин. Каждый замер и каждую укладку я контролирую сам. Если что-то пойдёт не так — приеду и исправлю. Моё имя — моя репутация.»',
    guarantee_role: 'Основатель PolPVL',
    guarantee_cta: 'Оставить заявку',

    faq_title: 'Частые вопросы',
    faq1_q: 'Сколько стоит укладка ламината в Павлодаре?',
    faq1_a: 'От 1 500 тг/м². Комната 20 м² — от 30 000 тг за работу. Материал отдельно — от 3 500 тг/м². Точную цену скажу после замера.',
    faq2_q: 'Какое покрытие выбрать для квартиры?',
    faq2_a: 'Ламинат — универсальный вариант (от 3 500 тг/м²). SPC-винил — для кухни и ванной, не боится воды (от 5 000 тг/м²). Линолеум — самый бюджетный (от 2 000 тг/м²). Приеду с образцами — выберем вместе.',
    faq3_q: 'Замер правда бесплатный?',
    faq3_a: 'Да. Приеду в удобное время, замерю площадь, привезу образцы, посчитаю стоимость. Без обязательств — если не подойдёт, ничего не должны.',
    faq4_q: 'Сколько времени занимает укладка?',
    faq4_a: 'Комната 15-20 м² — один день. Квартира целиком — 2-3 дня. Зависит от покрытия и состояния основания.',
    faq5_q: 'Чем SPC-пол лучше ламината?',
    faq5_a: 'SPC полностью водостойкий — можно ставить на кухню, в ванную, на балкон. Тише, теплее на ощупь. Дороже ламината (от 5 000 vs 3 500 тг/м²), но служит дольше.',
    faq6_q: 'Какая гарантия на укладку?',
    faq6_a: 'Даю гарантию на работу. Если что-то случится из-за укладки — приеду и исправлю бесплатно.',
    faq7_q: 'Можно заказать только материал?',
    faq7_a: 'Да, доставлю по Павлодару. Но с укладкой покрытие прослужит дольше и сохранит гарантию производителя.',
    faq8_q: 'Работаете за пределами Павлодара?',
    faq8_a: 'Да, по всей области. Условия выезда обсудим по телефону.',
    faq9_q: 'Нужно ли готовить пол перед укладкой?',
    faq9_a: 'Зависит от основания. Оценю при замере. Ровный пол — кладём сразу. Неровный — выровняю, это отдельная услуга (от 1 500 тг/м²). Всё посчитаю заранее.',
    faq10_q: 'Как с вами связаться?',
    faq10_a: 'WhatsApp или звонок: +7 (775) 162-81-27. Или заявка на сайте — перезвоню за 30 минут. Instagram: @pol_pvl. Пн-Сб, 9:00-18:00.',

    form_title: 'Напишите мне — перезвоню за 30 минут',
    form_subtitle: 'Замер по Павлодару и области — бесплатно. — Павел Бусин',
    form_author_role: 'Основатель PolPVL',
    form_name_label: 'Имя', form_phone_label: 'Телефон',
    form_interest_label: 'Что интересует?', form_interest_default: 'Не выбрано', form_interest_undecided: 'Не определился',
    form_comment_label: 'Комментарий',
    form_submit: 'Отправить заявку', form_sending: 'Отправка...', form_success: 'Заявка отправлена!',
    form_note: 'Нажимая кнопку, вы соглашаетесь на обработку персональных данных.',
    form_name_error: 'Введите ваше имя', form_phone_error: 'Введите номер телефона',

    contacts_title: 'Контакты',
    contacts_hours: 'Пн-Сб 9:00-18:00',
    contacts_address: 'г.\u00a0Павлодар, ул.\u00a0Естая,\u00a083',
    contacts_area: 'Павлодар и Павлодарская область',

    footer_desc: 'Полы под ключ в Павлодаре. Материал + укладка с гарантией.',
    footer_rights: 'Все права защищены.'
  },

  kk: {
    nav_catalog: 'Каталог', nav_calculator: 'Калькулятор', nav_portfolio: 'Жұмыстар',
    nav_faq: 'Сұрақтар', nav_contacts: 'Байланыс', nav_cta: 'Өтінім',

    hero_h1: 'Павлодарда кілтке дейін еден',
    hero_subtitle: 'Өлшеу тегін. Төсеу 1-2 күнде.',
    hero_cta: 'Өтінім қалдыру',
    hero_form_note: '30\u00a0минутта қайта қоңырау шаламыз',

    stat1_num: '7 жыл', stat1_label: 'тәжірибе',
    stat2_num: '500+ м²', stat2_label: 'төселді',
    stat3_num: '1-2 күн', stat3_label: 'монтаж',
    stat4_num: 'Кепілдік', stat4_label: 'жұмысқа',

    cat_title: 'Не\u00a0төсейміз',
    cat1_name: 'Ламинат', cat1_desc: 'Пәтер мен үйлер үшін. Берік, күтімі оңай.', cat1_price: '3 500 тг/м²-ден',
    cat2_name: 'Линолеум', cat2_desc: 'Ең қолжетімді нұсқа. Кез келген бөлмеге.', cat2_price: '2 000 тг/м²-ден',
    cat3_name: 'Винилді еден (LVT)', cat3_desc: 'Желімді, жұқа, тыныш. Ас үй, ванна, балкон үшін.', cat3_price: '5 000 тг/м²-ден',
    cat_spc_name: 'Кварцвинил SPC', cat_spc_desc: 'Құлыпты, суға төзімді. Желімсіз жылдам монтаж.', cat_spc_price: '6 500 тг/м²-ден',
    cat4_name: 'Паркет тақтасы', cat4_desc: 'Интерьерді бағалайтындар үшін табиғи ағаш.', cat4_price: '8 000 тг/м²-ден',
    cat6_name: 'Қабырға панельдері', cat6_desc: 'Қабырғаларды жаңартудың жылдам жолы.', cat6_price: '4 000 тг/м²-ден',
    cat_cta: 'Есептеу',

    calc_title: 'Құнын есептеңіз',
    calc_type_label: 'Жабынды түрі',
    calc_opt_laminate: 'Ламинат', calc_opt_linoleum: 'Линолеум', calc_opt_vinyl: 'Винил LVT',
    calc_opt_spc: 'SPC', calc_opt_parquet: 'Паркет', calc_opt_panels: 'Панельдер',
    calc_area_label: 'Бөлме ауданы',
    calc_custom_area: 'Басқа аудан',
    calc_addons_label: 'Қосымша қызметтер',
    calc_addon_install: 'Төсеу',
    calc_addon_leveling: 'Еденді теңестіру',
    calc_addon_demolition: 'Ескі жабынды демонтажы',
    calc_addon_substrate: 'Төсеніш',
    calc_addon_plinth: 'Плинтус',
    calc_addon_leveling_price: '1 500 тг/м²-ден',
    calc_addon_demolition_price: '800 тг/м²-ден',
    calc_addon_substrate_price: '500 тг/м²-ден',
    calc_addon_plinth_price: '1 200 тг/жүг.м-ден',
    calc_material: 'Материал:',
    calc_result_install: 'Төсеу:',
    calc_result_leveling: 'Теңестіру:',
    calc_result_demolition: 'Демонтаж:',
    calc_result_substrate: 'Төсеніш:',
    calc_result_plinth: 'Плинтус:',
    calc_total: 'Барлығы:',
    calc_cta: 'Нақты есепті алу',
    calc_whatsapp: 'Немесе WhatsApp-қа жазыңыз',

    steps_title: 'Қалай тапсырыс беру',
    step1_title: 'Өтінім', step1_text: 'WhatsApp-қа жазасыз, қоңырау шаласыз немесе сайтта өтінім қалдырасыз. 30 минутта жауап беремін.',
    step2_title: 'Өлшеу', step2_text: 'Сізге келемін, бөлмені өлшеймін, үлгілерді әкелемін. Орнында таңдайсыз.',
    step3_title: 'Есептеу', step3_text: 'Нақты құнын есептеймін, бағаны бекітемін. Жасырын қосымша ақы жоқ.',
    step4_title: 'Жеткізу', step4_text: 'Жабынды мен барлық қажетті нәрсені үйіңізге жеткіземін.',
    step5_title: 'Төсеу', step5_text: '1-2 күнде монтаж. Артымнан жинаймын. Жұмысты қабылдайсыз — кепілдік беремін.',

    port_title: 'Павлодардағы жұмыстар',
    port_subtitle: 'Көбірек фото мен видео — Instagram @pol_pvl',
    port_item1: 'Ламинат, 45 м²', port_item2: 'SPC-еден, ас үй 12 м²',
    port_item3: 'Линолеум, 60 м²', port_item4: 'Паркет, 35 м²',
    port_cta: 'Барлық жұмыстар Instagram-да',

    rev_title: 'Клиенттер пікірлері',
    rev1_text: '«Таңертең қоңырау шалдым — түске үлгілермен келді. 2 күнде бәрі дайын. Таза, ұқыпты, дүкенге қарағанда арзан.»',
    rev1_name: 'Айгерім Қ.', rev1_work: 'Екі бөлмелі пәтерде ламинат',
    rev2_text: '«Үлгілер әкеліп, ламинат пен винил арасындағы айырмашылықты түсіндірді. Төседі — жарты жыл, шағым жоқ. Баға адал.»',
    rev2_name: 'Ерлан М.', rev2_work: 'Ас үй мен дәлізге SPC',
    rev3_text: '«Өлшеді, жеткізді, төседі. Жылдам әрі таза. Рахмет!»',
    rev3_name: 'Наталья С.', rev3_work: 'Жеке үйде линолеум, 5 бөлме',

    guarantee_title: 'Әр жобаға өзім жауап беремін',
    guarantee_text: '«Менің атым Павел Бусин. Әр өлшеуді, әр төсеуді өзім бақылаймын. Бірдеңе дұрыс болмаса — келіп түзетемін. Менің атым — менің беделім.»',
    guarantee_role: 'PolPVL негізін қалаушы',
    guarantee_cta: 'Өтінім қалдыру',

    faq_title: 'Жиі қойылатын сұрақтар',
    faq1_q: 'Павлодарда ламинат төсеу қанша?', faq1_a: 'М² үшін 1 500 тг-ден. 20 м² бөлме — жұмыс үшін 30 000 тг-ден. Материал бөлек — 3 500 тг/м²-ден. Нақты бағаны өлшеуден кейін айтамын.',
    faq2_q: 'Пәтер үшін қай жабынды таңдау керек?', faq2_a: 'Ламинат — әмбебап (3 500 тг/м²-ден). SPC-винил — ас үй мен ваннаға (5 000 тг/м²-ден). Линолеум — ең қолжетімді (2 000 тг/м²-ден). Үлгілермен келемін — бірге таңдаймыз.',
    faq3_q: 'Өлшеу шынымен тегін бе?', faq3_a: 'Иә. Ыңғайлы уақытта келемін, ауданды өлшеймін, үлгілер әкелемін, бағаны есептеймін. Міндеттемесіз.',
    faq4_q: 'Төсеу қанша уақыт алады?', faq4_a: '15-20 м² бөлме — бір күн. Бүкіл пәтер — 2-3 күн. Жабынды мен негізге байланысты.',
    faq5_q: 'SPC-еден ламинаттан немен жақсы?', faq5_a: 'SPC суға толық төзімді — ас үй, ванна, балкон. Тынышырақ, жылырақ. Ламинаттан қымбатырақ (5 000 vs 3 500 тг/м²), бірақ ұзағырақ қызмет етеді.',
    faq6_q: 'Төсеуге қандай кепілдік?', faq6_a: 'Жұмысқа кепілдік беремін. Төсеуге байланысты бірдеңе болса — келіп, тегін түзетемін.',
    faq7_q: 'Тек материал тапсырыс беруге бола ма?', faq7_a: 'Иә, Павлодар бойынша жеткіземін. Бірақ төсеумен жабынды ұзағырақ қызмет етеді.',
    faq8_q: 'Павлодардан тыс жұмыс істейсіздер ме?', faq8_a: 'Иә, бүкіл облыс бойынша. Шақыру шарттарын телефонмен талқылаймыз.',
    faq9_q: 'Төсер алдында еденді дайындау керек пе?', faq9_a: 'Негізге байланысты. Өлшеу кезінде бағалаймын. Тегіс — бірден төсейміз. Тегіс емес — теңестіремін (1 500 тг/м²-ден). Бәрін алдын ала есептеймін.',
    faq10_q: 'Қалай байланысуға болады?', faq10_a: 'WhatsApp немесе қоңырау: +7 (775) 162-81-27. Немесе сайтта өтінім — 30 минутта қайта қоңырау шаламын. Instagram: @pol_pvl. Дс-Сб, 9:00-18:00.',

    form_title: 'Маған жазыңыз — 30 минутта қайта қоңырау шаламын',
    form_subtitle: 'Павлодар және облыс бойынша өлшеу — тегін. — Павел Бусин',
    form_author_role: 'PolPVL негізін қалаушы',
    form_name_label: 'Аты', form_phone_label: 'Телефон',
    form_interest_label: 'Не қызықтырады?', form_interest_default: 'Таңдалмаған', form_interest_undecided: 'Анықтамадым',
    form_comment_label: 'Пікір',
    form_submit: 'Өтінім жіберу', form_sending: 'Жіберілуде...', form_success: 'Өтінім жіберілді!',
    form_note: 'Батырманы басу арқылы сіз жеке деректерді өңдеуге келісесіз.',
    form_name_error: 'Атыңызды енгізіңіз', form_phone_error: 'Телефон нөмірін енгізіңіз',

    contacts_title: 'Байланыс',
    contacts_hours: 'Дс-Сб 9:00-18:00',
    contacts_address: 'Павлодар қ., Естай к-сі,\u00a083',
    contacts_area: 'Павлодар және Павлодар облысы',

    footer_desc: 'Павлодарда кілтке дейін еден. Кепілдікпен материал + төсеу.',
    footer_rights: 'Барлық құқықтар қорғалған.'
  }
};

/* ===== LANGUAGE SWITCHER ===== */
let currentLang = localStorage.getItem('polpvl_lang') || 'ru';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('polpvl_lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'kk' ? 'kk' : 'ru');

  const t = TRANSLATIONS[lang];
  if (!t) return;

  const elements = document.querySelectorAll('[data-i18n]');
  for (let i = 0; i < elements.length; i++) {
    const key = elements[i].getAttribute('data-i18n');
    if (t[key] !== undefined) elements[i].textContent = t[key];
  }

  const btns = document.querySelectorAll('.lang-switcher__btn');
  for (let j = 0; j < btns.length; j++) {
    const isActive = btns[j].getAttribute('data-lang') === lang;
    btns[j].classList.toggle('active', isActive);
    btns[j].setAttribute('aria-checked', isActive);
  }

  if (typeof calculate === 'function') calculate();
}

/* ===== THEME ===== */
function getPreferredTheme() {
  const saved = localStorage.getItem('polpvl_theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  localStorage.setItem('polpvl_theme', theme);
}

/* ===== MOBILE MENU ===== */
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', function() {
    const isOpen = burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    burger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  const links = mobileMenu.querySelectorAll('a');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  }
}

/* ===== FAQ ===== */
function initFAQ() {
  const questions = document.querySelectorAll('.faq__question');
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const answer = this.nextElementSibling;

      const allQ = document.querySelectorAll('.faq__question');
      for (let j = 0; j < allQ.length; j++) {
        allQ[j].setAttribute('aria-expanded', 'false');
        allQ[j].nextElementSibling.style.maxHeight = null;
        allQ[j].nextElementSibling.setAttribute('aria-hidden', 'true');
      }

      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.setAttribute('aria-hidden', 'false');
      }
    });
  }
}

/* ===== SCROLL ANIMATIONS ===== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver(function(entries) {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        const el = entries[i].target;
        const parent = el.parentElement;
        const siblings = parent.querySelectorAll('.animate-on-scroll');
        let index = 0;
        for (let j = 0; j < siblings.length; j++) {
          if (siblings[j] === el) { index = j; break; }
        }
        el.style.transitionDelay = (index * 100) + 'ms';
        el.classList.add('visible');
        observer.unobserve(el);
      }
    }
  }, { threshold: 0.1 });

  for (let i = 0; i < elements.length; i++) observer.observe(elements[i]);
}

/* ===== SMOOTH SCROLL ===== */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = document.getElementById('header').offsetHeight;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  }
}

/* ===== FORM ===== */
function initForm() {
  const form = document.getElementById('leadForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nameField = document.getElementById('formName');
    const phoneField = document.getElementById('formPhone');
    let valid = true;

    if (!nameField.value.trim()) { nameField.parentElement.classList.add('error'); valid = false; }
    else { nameField.parentElement.classList.remove('error'); }

    const phoneVal = phoneField.value.trim().replace(/\D/g, '');
    if (phoneVal.length < 10) { phoneField.parentElement.classList.add('error'); valid = false; }
    else { phoneField.parentElement.classList.remove('error'); }

    if (!valid) return;

    const submitBtn = form.querySelector('.form__submit');
    const t = TRANSLATIONS[currentLang];
    submitBtn.textContent = t.form_sending;
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    setTimeout(function() {
      submitBtn.textContent = t.form_success;
      submitBtn.classList.remove('loading');
      submitBtn.classList.add('success');
      form.reset();

      setTimeout(function() {
        submitBtn.textContent = t.form_submit;
        submitBtn.classList.remove('success');
        submitBtn.disabled = false;
      }, 3000);
    }, 1000);
  });

  const inputs = form.querySelectorAll('input, select, textarea');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
      this.parentElement.classList.remove('error');
    });
  }
}

/* ===== HERO FORM ===== */
function initHeroForm() {
  var form = document.getElementById('heroForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var phoneInput = document.getElementById('heroPhone');
    if (!phoneInput) return;

    var phoneVal = phoneInput.value.trim().replace(/\D/g, '');
    if (phoneVal.length < 10) {
      phoneInput.style.boxShadow = '0 0 0 1px var(--color-error, #ba1a1a)';
      return;
    }
    phoneInput.style.boxShadow = '';

    var submitBtn = form.querySelector('.hero__form-btn');
    var originalText = submitBtn.textContent;
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
          ? (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang].hero_cta || originalText)
          : originalText;
      }, 3000);
    }, 1000);
  });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', function() {
  setTheme(getPreferredTheme());

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  setLanguage(currentLang);

  const langBtns = document.querySelectorAll('.lang-switcher__btn');
  for (let i = 0; i < langBtns.length; i++) {
    langBtns[i].addEventListener('click', function() {
      setLanguage(this.getAttribute('data-lang'));
    });
  }

  initMobileMenu();
  initFAQ();
  initScrollAnimations();
  initSmoothScroll();
  initForm();
  initHeroForm();
});
