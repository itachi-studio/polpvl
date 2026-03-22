'use strict';

/* ===== TRANSLATIONS v10 — Kazakh on Latin ===== */
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
    calc_addon_demolition: 'Демонтаж',
    calc_addon_plinth: 'Плинтус',
    calc_material: 'Материал:',
    calc_result_install: 'Укладка:',
    calc_result_leveling: 'Выравнивание:',
    calc_result_demolition: 'Демонтаж:',
    calc_result_plinth: 'Плинтус:',
    calc_total: 'Итого:',
    calc_cta: 'Получить точный расчёт',
    calc_whatsapp: 'Написать в\u00a0WhatsApp',

    steps_title: 'Как заказать',
    step1_title: 'Звоните', step1_text: 'Оставьте заявку\u00a0\u2014 перезвоним за\u00a030\u00a0минут',
    step2_title: 'Замеряем', step2_text: 'Бесплатный выезд с\u00a0образцами покрытий',
    step3_title: 'Считаем', step3_text: 'Точная цена, фиксированная в\u00a0договоре',
    step4_title: 'Делаем', step4_text: 'Доставка, укладка, гарантия до\u00a03\u00a0лет',

    port_title: 'Работы в\u00a0Павлодаре',
    port_subtitle: 'Больше фото и\u00a0видео\u00a0\u2014 в\u00a0Instagram @pol_pvl',
    port_jk1: 'ЖК\u00a0\u00abСарыарка\u00bb', port_jk1_meta: 'Ламинат, 45\u00a0м\u00b2',
    port_jk2: 'ЖК\u00a0\u00abДостык\u00bb', port_jk2_meta: 'Кварцвинил SPC, 38\u00a0м\u00b2',
    port_jk3: 'ЖК\u00a0\u00abНұрлы\u00a0жер\u00bb', port_jk3_meta: 'Виниловый пол LVT, 52\u00a0м\u00b2',
    port_jk4: 'ЖК\u00a0\u00abЖас\u00a0Канат\u00bb', port_jk4_meta: 'Линолеум, 64\u00a0м\u00b2',
    port_jk5: 'ЖК\u00a0\u00abЖастар\u00bb', port_jk5_meta: 'Паркетная доска, 28\u00a0м\u00b2',
    port_jk6: 'ЖК\u00a0\u00abАстана\u00bb', port_jk6_meta: 'Ламинат, 73\u00a0м\u00b2',
    port_jk7: 'Дом в\u00a0пос.\u00a0Кенжеколь', port_jk7_meta: 'Кварцвинил SPC, 120\u00a0м\u00b2',
    port_jk8: 'ЖК\u00a0\u00abИртыш\u00bb', port_jk8_meta: 'Настенные панели, 32\u00a0м\u00b2',
    port_jk9: 'ЖК\u00a0\u00abАлтын\u00a0Орда\u00bb', port_jk9_meta: 'Ламинат, 56\u00a0м\u00b2',
    port_jk10: 'Дом в\u00a0пос.\u00a0Павлодарское', port_jk10_meta: 'Линолеум, 95\u00a0м\u00b2',
    port_jk11: 'ЖК\u00a0\u00abТұлпар\u00bb', port_jk11_meta: 'Виниловый пол LVT, 41\u00a0м\u00b2',
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
    nav_catalog: 'Katalog', nav_calculator: 'Kalkuliator', nav_portfolio: 'Portfolio',
    nav_reviews: 'Pikirler', nav_faq: 'Suraqtar',

    hero_h1: 'Pavlodarda \u00abkilt\u00bb edeni',
    hero_subtitle: 'Ulgilерdi uiiñizge jetkizemiz. Olsheimiz, tañdaimyz, toseimiz\u00a0\u2014 kepildikpen.',
    hero_cta: 'Otinish qaldyru',
    hero_form_note: '30 minutta qaita sonamyz',

    stat1_num: '7\u00a0jyl', stat1_label: 'tajiribie',
    stat2_num: '200+', stat2_label: 'oryndalgan obiekt',
    stat3_num: '6\u00a0turi', stat3_label: 'jabyndylar',
    stat4_num: '3\u00a0jylgha\u00a0deiin', stat4_label: 'jumysqa kepildik',

    cat_title: 'Biz ne\u00a0toseimiz',
    cat1_name: 'Laminat', cat1_desc: 'Paterler men\u00a0uilerge. Myqty, kutuge oñai.', cat1_price: '3\u00a0500\u00a0tg/m\u00b2-den',
    cat2_name: 'Linoleum', cat2_desc: 'Eñ\u00a0qol jetimdi nusqa. Kez\u00a0kelgen bolmege jaraidy.', cat2_price: '2\u00a0000\u00a0tg/m\u00b2-den',
    cat3_name: 'Vinil edeni (LVT)', cat3_desc: 'Jabysqaq, juqa, tynysh. Asui, vanna, balqonga.', cat3_price: '5\u00a0000\u00a0tg/m\u00b2-den',
    cat_spc_name: 'Kvartsvinil SPC', cat_spc_desc: 'Qulypty, sugha tozimdi. Jelimsiz jyldam montaj.', cat_spc_price: '6\u00a0500\u00a0tg/m\u00b2-den',
    cat4_name: 'Parket taqtasy', cat4_desc: 'Interer mañyzdy adamdargha tabighi aghash.', cat4_price: '8\u00a0000\u00a0tg/m\u00b2-den',
    cat6_name: 'Qabyrgа panelderi', cat6_desc: 'Qabyrghalardy jañartudyñ jyldam joly.', cat6_price: '4\u00a0000\u00a0tg/m\u00b2-den',
    cat_cta: 'Esepteu',

    calc_title: 'Qunyn esepteñiz',
    calc_type_label: 'Jabyn turi',
    calc_opt_laminate: 'Laminat', calc_opt_linoleum: 'Linoleum', calc_opt_vinyl: 'Vinil LVT',
    calc_opt_spc: 'SPC', calc_opt_parquet: 'Parket', calc_opt_panels: 'Paneldi',
    calc_area_label: 'Bolme audany',
    calc_addons_label: 'Qosymsha qyzmetter',
    calc_addon_install: 'Toseu',
    calc_addon_leveling: 'Edendi teñestiru',
    calc_addon_demolition: 'Demontaj',
    calc_addon_plinth: 'Plintus',
    calc_material: 'Material:',
    calc_result_install: 'Toseu:',
    calc_result_leveling: 'Teñestiru:',
    calc_result_demolition: 'Demontaj:',
    calc_result_plinth: 'Plintus:',
    calc_total: 'Barlygy:',
    calc_cta: 'Naqty esepti alu',
    calc_whatsapp: 'WhatsApp-qa jazu',

    steps_title: 'Qalai tapsyrys beruge bolady',
    step1_title: 'Soñyz', step1_text: 'Otinish qaldyryñyz\u00a0\u2014 30 minutta qaita sonamyz',
    step2_title: 'Olsheimiz', step2_text: 'Ulgilermen tegin shyghy',
    step3_title: 'Esepteimiz', step3_text: 'Naqty baga, kelisimde bektelgen',
    step4_title: 'Isteimiz', step4_text: 'Jetkizu, toseu, 3 jylgha deiingi kepildik',

    port_title: 'Pavlodardagy jumystar',
    port_subtitle: 'Kobirek foto men\u00a0beine\u00a0\u2014 Instagram @pol_pvl',
    port_jk1: 'TK\u00a0\u00abSaryarqa\u00bb', port_jk1_meta: 'Laminat, 45\u00a0m\u00b2',
    port_jk2: 'TK\u00a0\u00abDostyq\u00bb', port_jk2_meta: 'Kvartsvinil SPC, 38\u00a0m\u00b2',
    port_jk3: 'TK\u00a0\u00abNurly\u00a0jer\u00bb', port_jk3_meta: 'Vinil LVT, 52\u00a0m\u00b2',
    port_jk4: 'TK\u00a0\u00abJas\u00a0Qanat\u00bb', port_jk4_meta: 'Linoleum, 64\u00a0m\u00b2',
    port_jk5: 'TK\u00a0\u00abJastar\u00bb', port_jk5_meta: 'Parket taqtasy, 28\u00a0m\u00b2',
    port_jk6: 'TK\u00a0\u00abAstana\u00bb', port_jk6_meta: 'Laminat, 73\u00a0m\u00b2',
    port_jk7: 'Kenjekol aulyndaghy\u00a0ui', port_jk7_meta: 'Kvartsvinil SPC, 120\u00a0m\u00b2',
    port_jk8: 'TK\u00a0\u00abErtis\u00bb', port_jk8_meta: 'Qabyrga panelderi, 32\u00a0m\u00b2',
    port_jk9: 'TK\u00a0\u00abAltyn\u00a0Orda\u00bb', port_jk9_meta: 'Laminat, 56\u00a0m\u00b2',
    port_jk10: 'Pavlodar aulyndaghy\u00a0ui', port_jk10_meta: 'Linoleum, 95\u00a0m\u00b2',
    port_jk11: 'TK\u00a0\u00abTulpar\u00bb', port_jk11_meta: 'Vinil LVT, 41\u00a0m\u00b2',
    port_jk12: 'TK\u00a0\u00abBaiterek\u00bb', port_jk12_meta: 'Kvartsvinil SPC, 48\u00a0m\u00b2',
    port_cta: 'Barlyq jumystar Instagram-da',

    rev_title: 'Klientter pikiri',
    rev1_text: '\u00abTañerten habarLastym\u00a0\u2014 tuske deiin ulgilermen keldi. 2\u00a0kunde bari daiyn. Taza, uqypty, dukennen arzan.\u00bb',
    rev1_name: 'Aigerim Q.', rev1_work: 'Eki bolmeli paterde laminat',
    rev2_text: '\u00abUlgilерdi akeldi, laminat pen\u00a0vinildiñ aiyrmasyn tusindirdi. Tosedi\u00a0\u2014 jarty jyl, bir\u00a0de shaghym joq.\u00bb',
    rev2_name: 'Erlan M.', rev2_work: 'Asuige jane dalizge SPC',
    rev3_text: '\u00abOlshedi, akeldi, tosedi. Jyldam ari\u00a0taza. Rakhmet!\u00bb',
    rev3_name: 'Natalja S.', rev3_work: 'Jeke uide linoleum, 5\u00a0bolme',

    guarantee_title: 'Biz arber joba ushin jauap beremiz',
    guarantee_text: '\u00abMeniñ atym Pavel Busin. Men PolPVL-di 7\u00a0jyl buryn qurdym, sodan beri bizdiñ komanda Pavlodardyñ juzdegen paterleri men\u00a0uilerine eden tosedi. Men ar\u00a0obiektiniñ sapasyn jeke baqylaimyn. Birdeñe durys bolmasa\u00a0\u2014 kelip tuzeteemiz. Meniñ atym\u00a0\u2014 bizdiñ bedelimiz.\u00bb',
    guarantee_role: 'PolPVL negiziñ qalaushysy',
    guarantee_cta: 'Otinish qaldyru',

    faq_title: 'Jii qoilatyln suraqtar',
    faq1_q: 'Pavlodarda laminat toseu qansha turady?',
    faq1_a: '1\u00a0500\u00a0tg/m\u00b2-den. 20\u00a0m\u00b2 bolme\u00a0\u2014 jumys ushin 30\u00a0000\u00a0tg-den. Material bolek\u00a0\u2014 3\u00a0500\u00a0tg/m\u00b2-den. Naqty bagany olshemnen keiin aitamyz.',
    faq2_q: 'Paterge qandai jabyndy tañdau kerek?',
    faq2_a: 'Laminat\u00a0\u2014 universalal variant (3\u00a0500\u00a0tg/m\u00b2-den). SPC-vinil\u00a0\u2014 asuihanaga jane vannaga, sudan qorqpaidy (5\u00a0000\u00a0tg/m\u00b2-den). Linoleum\u00a0\u2014 eñ\u00a0arzany (2\u00a0000\u00a0tg/m\u00b2-den). Ulgilerdi akelip\u00a0\u2014 birge tañdaimyz.',
    faq3_q: 'Olshem shynyman tegin be?',
    faq3_a: 'Ia. Qolaily uaqytta kelemiz, audandy olsheimiz, ulgilerdi akelemiz, qunyn esepteimiz. Jaramasa\u00a0\u2014 eshteñe tolemeisiz.',
    faq4_q: 'Toseu qansha uaqyt alady?',
    faq4_a: '15-20\u00a0m\u00b2 bolme\u00a0\u2014 bir kun. Butin pater\u00a0\u2014 2-3\u00a0kun. Jabyndy men negizdiñ jaghdaiyna bailanysty.',
    faq5_q: 'SPC-edeni laminattan nemen jaqsy?',
    faq5_a: 'SPC tolygymen suqa tozimdi\u00a0\u2014 asuihanaga, vannaga, balqonqa qoiugha bolady. Tynyshyraq, jyly. Laminattan qymbatyraq (5\u00a0000 vs 3\u00a0500\u00a0tg/m\u00b2), biraq uzaghyraq qyzmet etedi.',
    faq6_q: 'Toseuge qandai kepildik?',
    faq6_a: 'Jumysqa 3\u00a0jylgha deiingi kepildik beremiz. Toseu sebepti bir narse bolsa\u00a0\u2014 tegin kelip tuzeteemiz.',
    faq7_q: 'Tek qana material tapsyrys beruge bola ma?',
    faq7_a: 'Ia, Pavlodar boiynsha jetkizemiz. Biraq toseumen jabyndy uzaghyraq qyzmet etedi jane ondirushiniñ kepildigin saqtaidy.',
    faq8_q: 'Pavlodardan tys jumys isteisizder me?',
    faq8_a: 'Ia, bukin oblysta. Shyghy sharttaryn telefonmen talqylaimyz.',
    faq9_q: 'Toseu aldynda edendi daiyndau kerek pe?',
    faq9_a: 'Negizge bailanysty. Olshemde baghalaymyz. Tegis\u00a0\u2014 birden toseimiz. Tegis emes\u00a0\u2014 teñestiremiz, bolek qyzmet (1\u00a0500\u00a0tg/m\u00b2-den). Barin aldyn ala esepteimiz.',
    faq10_q: 'Sizderge qalai bailanysugha bolady?',
    faq10_a: 'WhatsApp nemese qoñyrau: +7\u00a0(775)\u00a0162-81-27. Nemese saitta otinish\u00a0\u2014 30 minutta qaita sonamyz. Instagram: @pol_pvl. Ds-Sb, 9:00-18:00.',

    form_title: 'Otinish qaldyryñyz\u00a0\u2014 30\u00a0minutta qaita sonamyz',
    form_subtitle: 'Pavlodar jane\u00a0oblys boiynsha olshem\u00a0\u2014 tegin.',
    form_name_label: 'Aty', form_phone_label: 'Telefon',
    form_interest_label: 'Ne qyzyqtyrady?', form_interest_default: 'Tañdamadym',
    form_comment_label: 'Tusinikteme',
    form_submit: 'Otinishti jiberu',
    form_note: 'Batyrmany basu arqyly siz derbis derekterdi oñdeuge kelisesiz.',
    form_sending: 'Jiberilude...', form_sent: 'Otinish jiberildi!',

    footer_contacts_title: 'Bailanys',
    footer_nav_title: 'Navigatsia',
    footer_about: 'Biz turaly',
    footer_address: 'Pavlodar q., Estai k.,\u00a083',
    footer_hours: 'Ds-Sb 9:00-18:00',
    footer_zone: 'Pavlodar jane\u00a0Pavlodar oblysy'
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

/* ===== MOBILE MENU — v10: slide-in with backdrop, Escape, focus trap ===== */
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (!burger || !menu || !backdrop) return;

  function openMenu() {
    menu.classList.add('active');
    backdrop.classList.add('active');
    burger.classList.add('active');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Focus first link
    const firstLink = menu.querySelector('.mobile-menu__link');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    menu.classList.remove('active');
    backdrop.classList.remove('active');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', function() {
    const isOpen = menu.classList.contains('active');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Backdrop click closes menu
  backdrop.addEventListener('click', closeMenu);

  // Links close menu + smooth scroll
  menu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  // Escape closes menu
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      closeMenu();
      burger.focus();
    }
  });

  // Focus trap
  menu.addEventListener('keydown', function(e) {
    if (e.key !== 'Tab') return;
    const focusable = menu.querySelectorAll('a, button');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

/* ===== FAQ ACCORDION ===== */
function initFAQ() {
  document.querySelectorAll('.faq__question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const answer = btn.nextElementSibling;
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

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
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
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

/* Hero form removed in v11 — CTA button scrolls to main form */

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
    link.addEventListener('click', function() {
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
  initMainForm();
  initCatalogLinks();
  initLangSwitcher();

  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});
