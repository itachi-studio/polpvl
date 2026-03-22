'use strict';

/* ===== TRANSLATIONS v9 ===== */
const TRANSLATIONS = {
  ru: {
    nav_catalog: 'Каталог', nav_calculator: 'Калькулятор', nav_portfolio: 'Портфолио',
    nav_reviews: 'Отзывы', nav_faq: 'FAQ',

    hero_h1: 'Полы под ключ в\u00a0Павлодаре',
    hero_subtitle: 'Привезём образцы к\u00a0вам домой. Замерим, подберём, уложим\u00a0\u2014 с\u00a0гарантией.',
    hero_cta: 'Оставить заявку',
    hero_form_note: 'Перезвоним за\u00a030\u00a0минут',

    stat1_num: '7\u00a0лет', stat1_label: 'опыта в\u00a0укладке',
    stat2_num: '200+', stat2_label: 'выполненных объектов',
    stat3_num: '6\u00a0видов', stat3_label: 'покрытий в\u00a0наличии',
    stat4_num: 'до\u00a03\u00a0лет', stat4_label: 'гарантии на\u00a0работу',

    cat_title: 'Что мы\u00a0укладываем',
    cat1_name: 'Ламинат', cat1_desc: 'Для квартир и\u00a0домов. Прочный, простой в\u00a0уходе.', cat1_price: 'от\u00a03\u00a0500\u00a0тг/м\u00b2',
    cat2_name: 'Линолеум', cat2_desc: 'Самый доступный вариант. Подходит для любых помещений.', cat2_price: 'от\u00a02\u00a0000\u00a0тг/м\u00b2',
    cat3_name: 'Виниловый пол (LVT)', cat3_desc: 'Клеевой, тонкий, тихий. Для кухни, ванной, балкона.', cat3_price: 'от\u00a05\u00a0000\u00a0тг/м\u00b2',
    cat_spc_name: 'Кварцвинил SPC', cat_spc_desc: 'Замковый, водостойкий. Быстрый монтаж без клея.', cat_spc_price: 'от\u00a06\u00a0500\u00a0тг/м\u00b2',
    cat4_name: 'Паркетная доска', cat4_desc: 'Натуральное дерево для тех, кому важен интерьер.', cat4_price: 'от\u00a08\u00a0000\u00a0тг/м\u00b2',
    cat6_name: 'Настенные панели', cat6_desc: 'Быстрый способ обновить стены.', cat6_price: 'от\u00a04\u00a0000\u00a0тг/м\u00b2',
    cat_cta: 'Рассчитать',

    calc_title: 'Рассчитайте стоимость',
    calc_type_label: 'Тип покрытия',
    calc_opt_laminate: 'Ламинат', calc_opt_linoleum: 'Линолеум', calc_opt_vinyl: 'Винил LVT',
    calc_opt_spc: 'SPC', calc_opt_parquet: 'Паркет', calc_opt_panels: 'Панели',
    calc_area_label: 'Площадь помещения',
    calc_addons_label: 'Дополнительные услуги',
    calc_addon_install: 'Укладка',
    calc_addon_leveling: 'Выравнивание пола',
    calc_addon_demolition: 'Демонтаж старого покрытия',
    calc_addon_substrate: 'Подложка',
    calc_addon_plinth: 'Плинтус',
    calc_addon_leveling_price: 'от\u00a01\u00a0500\u00a0тг/м\u00b2',
    calc_addon_demolition_price: 'от\u00a0800\u00a0тг/м\u00b2',
    calc_addon_substrate_price: 'от\u00a0500\u00a0тг/м\u00b2',
    calc_addon_plinth_price: 'от\u00a01\u00a0200\u00a0тг/пог.м',
    calc_material: 'Материал:',
    calc_result_install: 'Укладка:',
    calc_result_leveling: 'Выравнивание:',
    calc_result_demolition: 'Демонтаж:',
    calc_result_substrate: 'Подложка:',
    calc_result_plinth: 'Плинтус:',
    calc_total: 'Итого:',
    calc_cta: 'Получить точный расчёт',
    calc_whatsapp: 'Написать в\u00a0WhatsApp',

    steps_title: 'Как заказать',
    step1_title: 'Заявка', step1_text: 'Напишите в\u00a0WhatsApp или оставьте заявку на\u00a0сайте.',
    step2_title: 'Замер', step2_text: 'Приедем, замерим помещение и\u00a0привезём образцы.',
    step3_title: 'Расчёт', step3_text: 'Посчитаем точную стоимость. Цена фиксируется.',
    step4_title: 'Доставка', step4_text: 'Привезём покрытие и\u00a0всё необходимое.',
    step5_title: 'Укладка', step5_text: 'Смонтируем, уберём за\u00a0собой, дадим гарантию.',

    port_title: 'Работы в\u00a0Павлодаре',
    port_subtitle: 'Больше фото и\u00a0видео\u00a0\u2014 в\u00a0Instagram @pol_pvl',
    port_jk1: 'ЖК\u00a0\u00abСарыарка\u00bb', port_jk1_meta: 'Ламинат, 45\u00a0м\u00b2',
    port_jk2: 'ЖК\u00a0\u00abДостык\u00bb', port_jk2_meta: 'Кварцвинил SPC, 38\u00a0м\u00b2',
    port_jk3: 'ЖК\u00a0\u00abН\u0201рлы\u00a0жер\u00bb', port_jk3_meta: 'Виниловый пол LVT, 52\u00a0м\u00b2',
    port_jk4: 'ЖК\u00a0\u00abЖас\u00a0Канат\u00bb', port_jk4_meta: 'Линолеум, 64\u00a0м\u00b2',
    port_jk5: 'ЖК\u00a0\u00abЖастар\u00bb', port_jk5_meta: 'Паркетная доска, 28\u00a0м\u00b2',
    port_jk6: 'ЖК\u00a0\u00abАстана\u00bb', port_jk6_meta: 'Ламинат, 73\u00a0м\u00b2',
    port_jk7: 'Дом в\u00a0пос.\u00a0Кенжеколь', port_jk7_meta: 'Кварцвинил SPC, 120\u00a0м\u00b2',
    port_jk8: 'ЖК\u00a0\u00abИртыш\u00bb', port_jk8_meta: 'Настенные панели, 32\u00a0м\u00b2',
    port_jk9: 'ЖК\u00a0\u00abАлтын\u00a0Орда\u00bb', port_jk9_meta: 'Ламинат, 56\u00a0м\u00b2',
    port_jk10: 'Дом в\u00a0пос.\u00a0Павлодарское', port_jk10_meta: 'Линолеум, 95\u00a0м\u00b2',
    port_jk11: 'ЖК\u00a0\u00abТ\u0201лпар\u00bb', port_jk11_meta: 'Виниловый пол LVT, 41\u00a0м\u00b2',
    port_jk12: 'ЖК\u00a0\u00abБайтерек\u00bb', port_jk12_meta: 'Кварцвинил SPC, 48\u00a0м\u00b2',
    port_cta: 'Все работы в\u00a0Instagram',

    rev_title: 'Отзывы клиентов',
    rev1_text: '\u00abПозвонила утром\u00a0\u2014 к\u00a0обеду приехали с\u00a0образцами. Через 2\u00a0дня всё готово. Чисто, аккуратно, дешевле чем в\u00a0магазине.\u00bb',
    rev1_name: 'Айгерим К.', rev1_work: 'Ламинат в\u00a0двушке',
    rev2_text: '\u00abПривезли образцы, объяснили разницу между ламинатом и\u00a0винилом. Уложили\u00a0\u2014 полгода, ни\u00a0одной претензии. Цена честная.\u00bb',
    rev2_name: 'Ерлан М.', rev2_work: 'SPC на\u00a0кухню и\u00a0коридор',
    rev3_text: '\u00abЗамерили, привезли, уложили. Быстро и\u00a0чисто. Спасибо!\u00bb',
    rev3_name: 'Наталья С.', rev3_work: 'Линолеум в\u00a0частном доме, 5\u00a0комнат',

    guarantee_title: 'Мы\u00a0отвечаем за\u00a0каждый проект',
    guarantee_text: '\u00abМеня зовут Павел Бусин. Я\u00a0основал PolPVL 7\u00a0лет назад и\u00a0с\u00a0тех пор наша команда уложила полы в\u00a0сотнях квартир и\u00a0домов Павлодара. Я\u00a0лично контролирую качество каждого объекта. Если что-то пойдёт не\u00a0так\u00a0\u2014 мы\u00a0приедем и\u00a0исправим. Моё имя\u00a0\u2014 наша репутация.\u00bb',
    guarantee_role: 'Основатель PolPVL',
    guarantee_cta: 'Оставить заявку',

    faq_title: 'Частые вопросы',
    faq1_q: 'Сколько стоит укладка ламината в\u00a0Павлодаре?',
    faq1_a: 'От\u00a01\u00a0500\u00a0тг/м\u00b2. Комната 20\u00a0м\u00b2\u00a0\u2014 от\u00a030\u00a0000\u00a0тг за\u00a0работу. Материал отдельно\u00a0\u2014 от\u00a03\u00a0500\u00a0тг/м\u00b2. Точную цену скажем после замера.',
    faq2_q: 'Какое покрытие выбрать для квартиры?',
    faq2_a: 'Ламинат\u00a0\u2014 универсальный вариант (от\u00a03\u00a0500\u00a0тг/м\u00b2). SPC-винил\u00a0\u2014 для кухни и\u00a0ванной, не\u00a0боится воды (от\u00a05\u00a0000\u00a0тг/м\u00b2). Линолеум\u00a0\u2014 самый бюджетный (от\u00a02\u00a0000\u00a0тг/м\u00b2). Приедем с\u00a0образцами\u00a0\u2014 выберем вместе.',
    faq3_q: 'Замер правда бесплатный?',
    faq3_a: 'Да. Приедем в\u00a0удобное время, замерим площадь, привезём образцы, посчитаем стоимость. Если не\u00a0подойдёт\u00a0\u2014 ничего не\u00a0должны.',
    faq4_q: 'Сколько времени занимает укладка?',
    faq4_a: 'Комната 15-20\u00a0м\u00b2\u00a0\u2014 один день. Квартира целиком\u00a0\u2014 2-3\u00a0дня. Зависит от\u00a0покрытия и\u00a0состояния основания.',
    faq5_q: 'Чем SPC-пол лучше ламината?',
    faq5_a: 'SPC полностью водостойкий\u00a0\u2014 можно ставить на\u00a0кухню, в\u00a0ванную, на\u00a0балкон. Тише, теплее на\u00a0ощупь. Дороже ламината (от\u00a05\u00a0000 vs 3\u00a0500\u00a0тг/м\u00b2), но\u00a0служит дольше.',
    faq6_q: 'Какая гарантия на\u00a0укладку?',
    faq6_a: 'Даём гарантию на\u00a0работу до\u00a03\u00a0лет. Если что-то случится из-за укладки\u00a0\u2014 приедем и\u00a0исправим бесплатно.',
    faq7_q: 'Можно заказать только материал?',
    faq7_a: 'Да, доставим по\u00a0Павлодару. Но\u00a0с\u00a0укладкой покрытие прослужит дольше и\u00a0сохранит гарантию производителя.',
    faq8_q: 'Работаете за\u00a0пределами Павлодара?',
    faq8_a: 'Да, по\u00a0всей области. Условия выезда обсудим по\u00a0телефону.',
    faq9_q: 'Нужно\u00a0ли готовить пол перед укладкой?',
    faq9_a: 'Зависит от\u00a0основания. Оценим при замере. Ровный пол\u00a0\u2014 кладём сразу. Неровный\u00a0\u2014 выровняем, это отдельная услуга (от\u00a01\u00a0500\u00a0тг/м\u00b2). Всё посчитаем заранее.',
    faq10_q: 'Как с\u00a0вами связаться?',
    faq10_a: 'WhatsApp или звонок: +7\u00a0(775)\u00a0162-81-27. Или заявка на\u00a0сайте\u00a0\u2014 перезвоним за\u00a030\u00a0минут. Instagram: @pol_pvl. Пн-Сб, 9:00-18:00.',

    form_title: 'Оставьте заявку\u00a0\u2014 перезвоним за\u00a030\u00a0минут',
    form_subtitle: 'Замер по\u00a0Павлодару и\u00a0области\u00a0\u2014 бесплатно.',
    form_name_label: 'Имя', form_phone_label: 'Телефон',
    form_interest_label: 'Что интересует?', form_interest_default: 'Не определился',
    form_comment_label: 'Комментарий',
    form_submit: 'Отправить заявку',
    form_note: 'Нажимая кнопку, вы\u00a0соглашаетесь на\u00a0обработку персональных данных.',
    form_sending: 'Отправка...', form_sent: 'Заявка отправлена!',

    footer_contacts_title: 'Контакты',
    footer_nav_title: 'Навигация',
    footer_about: 'О\u00a0нас',
    footer_address: 'г.\u00a0Павлодар, ул.\u00a0Естая,\u00a083',
    footer_hours: 'Пн-Сб 9:00-18:00',
    footer_zone: 'Павлодар и\u00a0Павлодарская область'
  },
  kk: {
    nav_catalog: 'Каталог', nav_calculator: 'Калькулятор', nav_portfolio: 'Портфолио',
    nav_reviews: 'Пікірлер', nav_faq: 'Сұрақтар',

    hero_h1: 'Павлодарда еден\u00a0\u201cбарлығы қосылған\u201d',
    hero_subtitle: 'Үлгілерді үйіңізге жеткіземіз. Өлшейміз, таңдаймыз, төсейміз\u00a0\u2014 кепілдікпен.',
    hero_cta: 'Өтінім қалдыру',
    hero_form_note: '30\u00a0минутта қайта хабарласамыз',

    stat1_num: '7\u00a0жыл', stat1_label: 'тәжірибе',
    stat2_num: '200+', stat2_label: 'орындалған объект',
    stat3_num: '6\u00a0түрі', stat3_label: 'жабындылар',
    stat4_num: '3\u00a0жылға\u00a0дейін', stat4_label: 'жұмысқа кепілдік',

    cat_title: 'Біз не\u00a0төсейміз',
    cat1_name: 'Ламинат', cat1_desc: 'Пәтерлер мен\u00a0үйлерге. Мықты, күтуге оңай.', cat1_price: '3\u00a0500\u00a0тг/м\u00b2-ден',
    cat2_name: 'Линолеум', cat2_desc: 'Ең\u00a0қол жетімді нұсқа. Кез\u00a0келген бөлмеге жарайды.', cat2_price: '2\u00a0000\u00a0тг/м\u00b2-ден',
    cat3_name: 'Винил еден (LVT)', cat3_desc: 'Жабысқақ, жұқа, тыныш. Ас\u00a0үй, ванна, балконға.', cat3_price: '5\u00a0000\u00a0тг/м\u00b2-ден',
    cat_spc_name: 'Кварцвинил SPC', cat_spc_desc: 'Құлыпты, суға төзімді. Желімсіз жылдам монтаж.', cat_spc_price: '6\u00a0500\u00a0тг/м\u00b2-ден',
    cat4_name: 'Паркет тақтасы', cat4_desc: 'Интерьер маңызды адамдарға табиғи ағаш.', cat4_price: '8\u00a0000\u00a0тг/м\u00b2-ден',
    cat6_name: 'Қабырға панельдері', cat6_desc: 'Қабырғаларды жаңартудың жылдам жолы.', cat6_price: '4\u00a0000\u00a0тг/м\u00b2-ден',
    cat_cta: 'Есептеу',

    calc_title: 'Құнын есептеңіз',
    calc_type_label: 'Жабын түрі',
    calc_opt_laminate: 'Ламинат', calc_opt_linoleum: 'Линолеум', calc_opt_vinyl: 'Винил LVT',
    calc_opt_spc: 'SPC', calc_opt_parquet: 'Паркет', calc_opt_panels: 'Панельдер',
    calc_area_label: 'Бөлме ауданы',
    calc_addons_label: 'Қосымша қызметтер',
    calc_addon_install: 'Төсеу',
    calc_addon_leveling: 'Еден теңестіру',
    calc_addon_demolition: 'Ескі жабынды бұзу',
    calc_addon_substrate: 'Төсеніш',
    calc_addon_plinth: 'Плинтус',
    calc_addon_leveling_price: '1\u00a0500\u00a0тг/м\u00b2-ден',
    calc_addon_demolition_price: '800\u00a0тг/м\u00b2-ден',
    calc_addon_substrate_price: '500\u00a0тг/м\u00b2-ден',
    calc_addon_plinth_price: '1\u00a0200\u00a0тг/ж.м-ден',
    calc_material: 'Материал:',
    calc_result_install: 'Төсеу:',
    calc_result_leveling: 'Теңестіру:',
    calc_result_demolition: 'Бұзу:',
    calc_result_substrate: 'Төсеніш:',
    calc_result_plinth: 'Плинтус:',
    calc_total: 'Барлығы:',
    calc_cta: 'Нақты есепті алу',
    calc_whatsapp: 'WhatsApp-қа жазу',

    steps_title: 'Қалай тапсырыс беруге болады',
    step1_title: 'Өтінім', step1_text: 'WhatsApp-қа жазыңыз немесе сайтта өтінім қалдырыңыз.',
    step2_title: 'Өлшеу', step2_text: 'Келеміз, бөлмені өлшейміз, үлгілерді әкелеміз.',
    step3_title: 'Есеп', step3_text: 'Нақты құнын есептейміз. Баға бекітіледі.',
    step4_title: 'Жеткізу', step4_text: 'Жабынды және қажеттінің бәрін жеткіземіз.',
    step5_title: 'Төсеу', step5_text: 'Монтаждаймыз, жинаймыз, кепілдік береміз.',

    port_title: 'Павлодардағы жұмыстар',
    port_subtitle: 'Көбірек фото мен\u00a0бейне\u00a0\u2014 Instagram @pol_pvl',
    port_jk1: 'ТК\u00a0\u00abСарыарқа\u00bb', port_jk1_meta: 'Ламинат, 45\u00a0м\u00b2',
    port_jk2: 'ТК\u00a0\u00abДостық\u00bb', port_jk2_meta: 'Кварцвинил SPC, 38\u00a0м\u00b2',
    port_jk3: 'ТК\u00a0\u00abН\u0201рлы\u00a0жер\u00bb', port_jk3_meta: 'Винил LVT, 52\u00a0м\u00b2',
    port_jk4: 'ТК\u00a0\u00abЖас\u00a0Қанат\u00bb', port_jk4_meta: 'Линолеум, 64\u00a0м\u00b2',
    port_jk5: 'ТК\u00a0\u00abЖастар\u00bb', port_jk5_meta: 'Паркет тақтасы, 28\u00a0м\u00b2',
    port_jk6: 'ТК\u00a0\u00abАстана\u00bb', port_jk6_meta: 'Ламинат, 73\u00a0м\u00b2',
    port_jk7: 'Кенжекөл ауылындағы\u00a0үй', port_jk7_meta: 'Кварцвинил SPC, 120\u00a0м\u00b2',
    port_jk8: 'ТК\u00a0\u00abЕртіс\u00bb', port_jk8_meta: 'Қабырға панельдері, 32\u00a0м\u00b2',
    port_jk9: 'ТК\u00a0\u00abАлтын\u00a0Орда\u00bb', port_jk9_meta: 'Ламинат, 56\u00a0м\u00b2',
    port_jk10: 'Павлодар ауылындағы\u00a0үй', port_jk10_meta: 'Линолеум, 95\u00a0м\u00b2',
    port_jk11: 'ТК\u00a0\u00abТ\u0201лпар\u00bb', port_jk11_meta: 'Винил LVT, 41\u00a0м\u00b2',
    port_jk12: 'ТК\u00a0\u00abБайтерек\u00bb', port_jk12_meta: 'Кварцвинил SPC, 48\u00a0м\u00b2',
    port_cta: 'Барлық жұмыстар Instagram-да',

    rev_title: 'Клиенттер пікірлері',
    rev1_text: '\u00abТаңертең хабарластым\u00a0\u2014 түске дейін үлгілермен келді. 2\u00a0күнде бәрі дайын. Таза, ұқыпты, дүкеннен арзан.\u00bb',
    rev1_name: 'Айгерім Қ.', rev1_work: 'Екі бөлмелі пәтерде ламинат',
    rev2_text: '\u00abҮлгілерді әкелді, ламинат пен\u00a0винилдың айырмашылығын түсіндірді. Төседі\u00a0\u2014 жарты жыл, бір\u00a0де шағым жоқ.\u00bb',
    rev2_name: 'Ерлан М.', rev2_work: 'Ас\u00a0үйге және дәлізге SPC',
    rev3_text: '\u00abӨлшеді, әкелді, төседі. Жылдам әрі\u00a0таза. Рахмет!\u00bb',
    rev3_name: 'Наталья С.', rev3_work: 'Жеке үйде линолеум, 5\u00a0бөлме',

    guarantee_title: 'Біз әр\u00a0жобаға жауап береміз',
    guarantee_text: '\u00abМенің атым Павел Бусин. Мен PolPVL-ді 7\u00a0жыл бұрын құрдым, содан бері біздің команда Павлодардың жүздеген пәтерлері мен\u00a0үйлеріне еден төседі. Мен әр\u00a0объектінің сапасын жеке бақылаймын. Бірдеңе дұрыс болмаса\u00a0\u2014 келіп түзетеміз. Менің атым\u00a0\u2014 біздің беделіміз.\u00bb',
    guarantee_role: 'PolPVL негізін қалаушы',
    guarantee_cta: 'Өтінім қалдыру',

    faq_title: 'Жиі қойылатын сұрақтар',
    faq1_q: 'Павлодарда ламинат төсеу қанша тұрады?',
    faq1_a: '1\u00a0500\u00a0тг/м\u00b2-ден. 20\u00a0м\u00b2 бөлме\u00a0\u2014 жұмыс үшін 30\u00a0000\u00a0тг-ден. Материал бөлек\u00a0\u2014 3\u00a0500\u00a0тг/м\u00b2-ден. Нақты бағаны өлшеуден кейін айтамыз.',
    faq2_q: 'Пәтерге қандай жабын таңдау керек?',
    faq2_a: 'Ламинат\u00a0\u2014 әмбебап нұсқа (3\u00a0500\u00a0тг/м\u00b2-ден). SPC-винил\u00a0\u2014 ас\u00a0үй мен ваннаға, суға төзімді (5\u00a0000\u00a0тг/м\u00b2-ден). Линолеум\u00a0\u2014 ең\u00a0бюджетті (2\u00a0000\u00a0тг/м\u00b2-ден). Үлгілермен келеміз\u00a0\u2014 бірге таңдаймыз.',
    faq3_q: 'Өлшеу шынымен тегін бе?',
    faq3_a: 'Иә. Ыңғайлы уақытта келеміз, ауданды өлшейміз, үлгілер әкелеміз, құнын есептейміз. Жарамаса\u00a0\u2014 ешнәрсеге міндетті емессіз.',
    faq4_q: 'Төсеуге қанша уақыт кетеді?',
    faq4_a: '15-20\u00a0м\u00b2 бөлме\u00a0\u2014 бір\u00a0күн. Толық пәтер\u00a0\u2014 2-3\u00a0күн. Жабынға және негізге байланысты.',
    faq5_q: 'SPC-еден ламинаттан нені жақсы?',
    faq5_a: 'SPC толығымен суға төзімді\u00a0\u2014 ас\u00a0үйге, ваннаға, балконға қоюға болады. Тынышырақ, жылырақ. Ламинаттан қымбатырақ (5\u00a0000 vs 3\u00a0500\u00a0тг/м\u00b2), бірақ ұзағырақ қызмет етеді.',
    faq6_q: 'Төсеуге қандай кепілдік?',
    faq6_a: 'Жұмысқа 3\u00a0жылға дейін кепілдік береміз. Төсеу себебінен бірдеңе болса\u00a0\u2014 келіп тегін түзетеміз.',
    faq7_q: 'Тек материал сатып алуға бола ма?',
    faq7_a: 'Иә, Павлодар бойынша жеткіземіз. Бірақ төсеумен жабын ұзағырақ қызмет етеді және өндіруші кепілдігін сақтайды.',
    faq8_q: 'Павлодардан тыс жерде жұмыс істейсіздер ме?',
    faq8_a: 'Иә, бүкіл облыс бойынша. Шығу шарттарын телефонмен талқылаймыз.',
    faq9_q: 'Төсеу алдында еденді дайындау керек пе?',
    faq9_a: 'Негізге байланысты. Өлшеу кезінде бағалаймыз. Тегіс еден\u00a0\u2014 бірден төсейміз. Тегіс емес\u00a0\u2014 теңестіреміз, бұл бөлек қызмет (1\u00a0500\u00a0тг/м\u00b2-ден). Бәрін алдын ала есептейміз.',
    faq10_q: 'Сіздермен қалай байланысуға болады?',
    faq10_a: 'WhatsApp немесе қоңырау: +7\u00a0(775)\u00a0162-81-27. Немесе сайттан өтінім\u00a0\u2014 30\u00a0минутта қайта хабарласамыз. Instagram: @pol_pvl. Дс-Сб, 9:00-18:00.',

    form_title: 'Өтінім қалдырыңыз\u00a0\u2014 30\u00a0минутта хабарласамыз',
    form_subtitle: 'Павлодар және\u00a0облыс бойынша өлшеу\u00a0\u2014 тегін.',
    form_name_label: 'Аты', form_phone_label: 'Телефон',
    form_interest_label: 'Не қызықтырады?', form_interest_default: 'Таңдамадым',
    form_comment_label: 'Пікір',
    form_submit: 'Өтінім жіберу',
    form_note: 'Батырманы басу арқылы сіз дербес деректерді өңдеуге келісесіз.',
    form_sending: 'Жіберілуде...', form_sent: 'Өтінім жіберілді!',

    footer_contacts_title: 'Байланыс',
    footer_nav_title: 'Навигация',
    footer_about: 'Біз туралы',
    footer_address: 'Павлодар қ., Естай к.,\u00a083',
    footer_hours: 'Дс-Сб 9:00-18:00',
    footer_zone: 'Павлодар және\u00a0Павлодар облысы'
  }
};

let currentLang = 'ru';

/* ===== i18n ===== */
function applyTranslations(lang) {
  currentLang = lang;
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (el.tagName === 'INPUT' && el.type !== 'submit') return;
      el.innerHTML = dict[key];
    }
  });

  document.documentElement.lang = lang === 'kk' ? 'kk' : 'ru';
}

/* ===== THEME ===== */
function initTheme() {
  const saved = localStorage.getItem('polpvl-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('polpvl-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('polpvl-theme', 'dark');
  }
}

/* ===== MOBILE MENU ===== */
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  burger.addEventListener('click', function() {
    const isOpen = menu.classList.toggle('active');
    burger.classList.toggle('active');
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      menu.classList.remove('active');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ===== FAQ ACCORDION ===== */
function initFAQ() {
  document.querySelectorAll('.faq__question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const answer = btn.nextElementSibling;
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      document.querySelectorAll('.faq__question').forEach(function(other) {
        other.setAttribute('aria-expanded', 'false');
        const otherAnswer = other.nextElementSibling;
        otherAnswer.style.maxHeight = null;
        otherAnswer.classList.remove('open');
        otherAnswer.setAttribute('aria-hidden', 'true');
      });

      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.setAttribute('aria-hidden', 'false');
      }
    });
  });
}

/* ===== SCROLL ANIMATIONS ===== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.scroll-appear');
  if (!elements.length) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, index) {
      if (entry.isIntersecting) {
        // Stagger siblings
        const parent = entry.target.parentElement;
        const siblings = parent.querySelectorAll('.scroll-appear');
        let delay = 0;
        siblings.forEach(function(sib, i) {
          if (sib === entry.target) delay = i * 150;
        });

        setTimeout(function() {
          entry.target.classList.add('visible');
        }, Math.min(delay, 600));

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(function(el) { observer.observe(el); });
}

/* ===== FORMS ===== */
function validatePhone(value) {
  const cleaned = value.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 12;
}

function sendToTelegram(data) {
  // Placeholder — needs real bot token and chat ID
  const BOT_TOKEN = 'YOUR_BOT_TOKEN';
  const CHAT_ID = 'YOUR_CHAT_ID';
  const text = Object.entries(data).map(function(pair) {
    return pair[0] + ': ' + pair[1];
  }).join('\n');

  return fetch('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text: text, parse_mode: 'HTML' })
  });
}

function initHeroForm() {
  const form = document.getElementById('heroForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const phone = document.getElementById('heroPhone');
    if (!validatePhone(phone.value)) {
      phone.classList.add('error');
      return;
    }
    phone.classList.remove('error');

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = TRANSLATIONS[currentLang].form_sending || 'Отправка...';
    btn.disabled = true;

    sendToTelegram({
      'Форма': 'Hero',
      'Телефон': phone.value
    }).finally(function() {
      btn.textContent = TRANSLATIONS[currentLang].form_sent || 'Заявка отправлена!';
      btn.style.background = 'var(--color-success)';
      setTimeout(function() {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        phone.value = '';
      }, 3000);
    });
  });
}

function initMainForm() {
  const form = document.getElementById('mainForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('formName');
    const phone = document.getElementById('formPhone');
    let valid = true;

    if (!name.value.trim()) { name.classList.add('error'); valid = false; }
    else { name.classList.remove('error'); }

    if (!validatePhone(phone.value)) { phone.classList.add('error'); valid = false; }
    else { phone.classList.remove('error'); }

    if (!valid) return;

    const interest = document.getElementById('formInterest');
    const comment = document.getElementById('formComment');

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = TRANSLATIONS[currentLang].form_sending || 'Отправка...';
    btn.disabled = true;

    sendToTelegram({
      'Форма': 'Основная',
      'Имя': name.value,
      'Телефон': phone.value,
      'Интересует': interest ? interest.options[interest.selectedIndex].text : '',
      'Комментарий': comment ? comment.value : ''
    }).finally(function() {
      btn.textContent = TRANSLATIONS[currentLang].form_sent || 'Заявка отправлена!';
      btn.style.background = 'var(--color-success)';
      setTimeout(function() {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  });
}

/* ===== CATALOG → CALCULATOR LINK ===== */
function initCatalogLinks() {
  document.querySelectorAll('[data-calc-type]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const type = link.getAttribute('data-calc-type');
      if (type && typeof selectCalcType === 'function') {
        selectCalcType(type);
      }
    });
  });
}

/* ===== LANG SWITCHER ===== */
function initLangSwitcher() {
  document.querySelectorAll('.lang-switcher__btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.lang-switcher__btn').forEach(function(b) {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');

      const lang = btn.getAttribute('data-lang');
      applyTranslations(lang);
      localStorage.setItem('polpvl-lang', lang);

      if (typeof calculate === 'function') calculate();
    });
  });

  // Restore saved lang
  const saved = localStorage.getItem('polpvl-lang');
  if (saved && TRANSLATIONS[saved]) {
    document.querySelectorAll('.lang-switcher__btn').forEach(function(b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === saved);
      b.setAttribute('aria-checked', String(b.getAttribute('data-lang') === saved));
    });
    applyTranslations(saved);
  }
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initMobileMenu();
  initFAQ();
  initScrollAnimations();
  initHeroForm();
  initMainForm();
  initCatalogLinks();
  initLangSwitcher();

  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});
