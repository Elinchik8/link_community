/**
 * Все пользовательские тексты лендинга — правьте здесь.
 * Разметка собирается в renderPage() из этого объекта.
 */
const TEXTS = {
  documentTitle: "Link — агентство ролевых мероприятий",

  brand: "Link",

  /** Боковая навигация: id секции, подпись, иконка (для title) */
  nav: [
    { id: "hero", label: "ГЛАВНАЯ", icon: "❖" },
    { id: "formats", label: "ФОРМАТЫ", icon: "✦" },
    { id: "how", label: "КАК ЭТО", icon: "◈" },
    { id: "cases", label: "ДЕЛА", icon: "⚿" },
    { id: "schedule", label: "РАСПИСАНИЕ", icon: "⊛" },
    { id: "order", label: "ПОД КЛЮЧ", icon: "✉" },
    { id: "reviews", label: "ОТЗЫВЫ", icon: "❝" },
    { id: "faq", label: "FAQ", icon: "?" },
  ],

  ticker: {
    urgent: "◈ СРОЧНО ◈",
    lines: [
      "ДЕТЕКТИВНЫЕ ИГРЫ",
      "МЕРОПРИЯТИЯ ПОД КЛЮЧ",
      "РАЗГАДАЙТЕ ТАЙНУ",
    ],
  },

  masthead: {
    left: "АГЕНТСТВО РОЛЕВЫХ МЕРОПРИЯТИЙ",
    center: " ",
    right: "МОСКВА",
    subtitle: "ДЕТЕКТИВНЫЕ ИГРЫ · РОЛЕВЫЕ ПРИКЛЮЧЕНИЯ · МЕРОПРИЯТИЯ ПОД КЛЮЧ",
    dateLine: "  ",
  },

  
  hero: {
    sectionLabel: "◈ ЭКСТРЕННЫЙ ВЫПУСК!",
    headlineLines: ["Без сложных правил. Только атмосфера, общение и живая история."],
    deck:
      "Агентство иммерсивных ролевых мероприятий. Два формата — детективная игра и D&D — на площадках с историческим духом: кофейнях, ресторанах и музеях.",
    lead:
      "Каждая игра — живая история. Вы не зритель, а участник. Сыщик, раскрывающий преступление. Герой, прокладывающий путь сквозь тёмные земли. ",
    ctaSchedule: "Выбрать дату",
    ctaFormats: "О форматах",
    featureTitleLines: ["«Разгадайте тайну.", "Вживайтесь в роль»"],
    featureSub: " ",
    nextEventTag: "◈ Ближайшее мероприятие",
    nextEventTitle: "Тайна шести карманов",
    nextEventWhen: "Сб, 26 апреля · 16:00 · Детективъ",
    nextEventSeats: "Осталось 3 места изъ 8",
    nextEventBtn: "Записаться →",
    pullQuote: "Не квест. Не театр. Не настолка. Что-то своё.",
  },

  formats: {
    sectionLabel: "◈ ФОРМАТЫ ИГР",
    ornament1: "Два пути — одна атмосфера",
    detective: {
      badge: "Детективные игры",
      title: "Ролевой детектив",
      body:
        "Каждый участник получает роль — персонажа с алиби, мотивом и тайной. Задача: вычислить преступника среди участников.",
      rows: [
        { key: "Участники", value: "до 12 человек" },
        { key: "Продолжительность", value: "2,5 часа" },
        { key: "Сложность", value: "для новичков и опытных следователей" },
        { key: "Сюжеты", value: "от простых краж до кровавых убийств" },
      ],
      cta: "Записаться на детектив",
    },
    dnd: {
      badge: "D&D · Ролевое приключеніе",
      title: "Dungeons & Dragons",
      body:
        "Вы — герой авторского мира. Мастер создаёт живую историю под ваши решения. Победы, поражения, неожиданные союзники — каждая сессия уникальна.",
      rows: [
        { key: "Участники", value: "до 6 человек" },
        { key: "Продолжительность", value: "миниум 3 часа" },
        { key: "Сложность", value: "Для новичков: мастер вводит в механику" },
        { key: "Сюжеты", value: "фэнтези, Российская Империя, Средневековье" },
      ],
      cta: "Записаться на D&D",
    },
  },

  how: {
    sectionLabel: "◈ ИНСТРУКЦИЯ ЗАПИСИ ДЛЯ УЧАСТНИКА",
    title: "Как это работает",
    steps: [
      { num: "1", title: "Выберите мероприятие", text: "Открытая игра из расписания: детективная или D&D." },
      { num: "2", title: "Бронируешь место на удобную дату", text: "Играем в основном по пятницам и выходным" },
      { num: "3", title: "Приходите и играйте", text: "Следователь или мастер даёт вам роль и плавно погружает вас в процесс" },
    ],
    fleuron: "✦ ❖ ✦",
    footnote: "Никакого опыта не нужно. Мастер адаптирует игру под запрос участников",
  },

  cases: {
    sectionLabel: "◈ ДЕЛА И ПРИКЛЮЧЕНИЯ",
    ornamentDet: "Детективные сценарии",
    ornamentDnd: "D&D · Ролевые приключенія",
    detective: [
      { title: "Тайна шести кармановъ", desc: "Франция 60х. Художник мёртв, шедевр исчез. Кто убийца — жена, ученик или тихий сосед?", diff: "Уровень: средний", seats: "10 чел." },
      { title: "Призракъ поместья", desc: "1924 годъ, особняк, дверь заперта изнутри. Самоубийство — или месть призрака?", diff: "Уровень : средний", seats: "8 чел." },
      { title: "Диагноз: неизвестный", desc: "Больница, загадочные смерти, тела кремировны. Кто следующий и кому это нужно?", diff: "Уровень: простой", seats: "10 чел." },
    ],
    dnd: [
      { title: "Окхейвен. Тень Изумрудного Сердца", desc: "Деревня, проклятый лес, древний артефакт. Отряд, который должен спасти земли.", diff: "Уровень: простой", seats: "6 чел." },
      { title: "Наследие Драконьей Бухты", desc: "Корабли, пираты, древнее проклятие — и каждое решение меняет исход.", diff: "Среднее", seats: "6 чел." },
    ],
    btnBook: "Записаться",
  },

   schedule: {
    sectionLabel: "◈ РАСПИСАНИЕ · БЛИЖАЙШИЕ МЕРОПРИЯТИЯ",
    title: "Выберите дату",
    thDate: "Дата",
    thScenario: "Сценарий",
    thFormat: "Формат",
    thPrice: "Цена", 
    thAction: "",
    rows: [
      { date: "26 апр, сб · 16:00", scenario: "Тайна шести карманов", format: "Детектив", price: "2 600 ₽"},
      { date: "4 мая, вс · 15:00", scenario: "Призрак поместья", format: "Детектив", price: "2 600 ₽" },
      { date: "27 апр, вс · 14:00", scenario: "Окхейвен", format: "D&D", price: "2 600 ₽" },
      { date: "11 мая, вс · 14:00", scenario: "Окхейвен", format: "D&D", price: "2 600 ₽" },
      { date: "18 мая, вс · 13:00", scenario: "Диагноз: неизвестный", format: "Детектив", price: "2 600 ₽" },
    ],
    book: "Записаться",
    footnote: "* В цену включён депозит 700 ₽ на еду и напитки на площадке.",
  },

    order: {
    sectionLabel: "◈ ЗАКАЗАТЬ МЕРОПРИЯТИЕ ПОД КЛЮЧ",
    title: "Игра для вашей компании",
    intro:
      "День рождения, корпоратив, камерный вечер — под ваш запрос. Выбираете сценарий, дату и число участников. Остальное берём на себя.",
    pullText: "От 6 участников. Кастомный сценарий. Любая площадка.",
    pullCite: "Ответим вам в течение 3 часов",
    bullets: [
      { head: "◈ День рождения", text: "Персональный сценарий со скрытыми посланиями имениннику" },
      { head: "◈ Корпоратив", text: "Тимбилдинг, который запоминают — не банкет, а приключение" },
      { head: "◈ Камерный вечер", text: "Компания 6–12 человек, частная площадка, атмосфера" },
    ],
    formTag: "◈ Форма заявки",
    formName: "Имя / Контактное лицо",
    formNamePh: "Ваше имя",
    formContact: "Telegram или телефон",
    formContactPh: "@username или +7...",
    formType: "Тип мероприятия",
    formTypeOptions: ["День рождения", "Корпоратив / тимбилдинг", "Камерный вечер", "Другое"],
    formGuests: "Участников",
    formGuestsPh: "от 6",
    formDate: "Желаемая дата",
    formComment: "Комментарий",
    formCommentPh: "Пожелания, идеи, вопросы...",
    formSubmit: "Отправить заявку →",
  },

  reviews: {
    sectionLabel: "◈ ГОЛОСА УЧАСТНИКОВ",
    title: "Что говорят игроки",
    items: [
       { author: "Анна, 29 лет · Детектив", text: "Я была уверена, что убийца — муж. Оказалось — лучшая подруга. Два часа живого театра, где ты сам — актёр." },
      { author: "Дмитрий, 27 лет · D&D", text: "Мы пришли компанией — половина первый раз. Никто не потерялся, никто не заскучал. Сессия закончилась — все хотели продолжения." },
      { author: "Кирилл и Аня · Корпоратив", text: "Заказывали для команды 14 человек. Организаторы взяли на себя всё. Детективный сценарий — идеально для тимбилдинга: все вовлечены, победитель — команда." },
      { author: "Настя, 24 года · Детектив", text: "Пришла одна — познакомилась со всей компанией за 20 минут. Игра структурирована так, что одиночки встраиваются органично." },
    ],
  },

 faq: {
    sectionLabel: "◈ ЧАСТЫЕ ВОПРОСЫ",
    title: "Всё, что нужно знать",
    items: [
      { q: "Можно прийти, не зная никого?", a: "Да. На открытые сессии часто приходят поодиночке — мы собираем группу, и в процессе игры всё складывается само." },
      { q: "Нужно ли что-то готовить заранее?", a: "Нет. Роль или персонаж придут за 24 часа до игры — нужно только прочитать карточку." },
      { q: "Что, если не умею блефовать?", a: "В детективе можно быть сыщиком, а не подозреваемым. Мастер адаптирует формат." },
      { q: "Сколько стоит?", a: "2 600 ₽ за место на открытой сессии (включён депозит 700 ₽ на еду и напитки). Цена заказного мероприятия — по запросу." },
      { q: "Как оплатить?", a: "Онлайн картой или СБП при бронировании." },
      { q: "От скольки человек заказ игры под ключ?", a: "От 6 человек. Максимум зависит от сценария." },
      { q: "Проводите ли игры в музеях?", a: "Да, это направление в активном развитии. Следите за расписанием или свяжитесь напрямую." },
    ],
  },



  footer: {
    tagline: "АГЕНТСТВО РОЛЕВЫХ МЕРОПРИЯТИЙ · МОСКВА",
    links: [
      { href: "#formats", label: "Детективы" },
      { href: "#formats", label: "D&D" },
      { href: "#schedule", label: "Расписаніе" },
      { href: "#order", label: "Заказать" },
      { href: "#faq", label: "FAQ" },
      { href: "#", label: "Telegram" },
    ],
    copy: "© 2025 Агентство ролевых игр Link · Все права защищены",
  },
};

/**
 * Функция экранирования (безопасного кодирования) текста для HTML
 * Защищает от XSS-атак (внедрения вредоносного кода)
 * 
 * Что делает: заменяет опасные символы на их HTML-сущности
 * & → &amp;  (амперсанд)
 * < → &lt;   (меньше, открывающий тег)
 * > → &gt;   (больше, закрывающий тег)
 * " → &quot; (кавычка)
 */
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Функция генерации блока мета-информации
 * (характеристик формата игры: количество участников, время, сложность)
 * 
 * На вход: массив строк с ключами и значениями
 * На выход: HTML-код из склеенных div-блоков с парой "ключ: значение"
 * 
 * Пример: { key: "Участников", value: "до 8 человек" }
 * Превращается в: <div class="row-meta"><span>Участников</span><span>до 8 человек</span></div>
 */
function metaBlock(rows) {
  return rows
    .map(
      (row) =>
        `<div class="row-meta"><span class="row-meta-k">${esc(row.key)}</span><span class="row-meta-v">${esc(row.value)}</span></div>`,
    )
    .join("");
}

/**
 * ГЛАВНАЯ ФУНКЦИЯ ГЕНЕРАЦИИ HTML-РАЗМЕТКИ
 * 
 * На вход: объект TEXTS со всеми текстами
 * На выход: строка с HTML-кодом всех секций лендинга
 * 
 * Что делает по блокам:
 */
function renderPage(t) {
  // Вспомогательные переменные для краткого доступа к часто используемым частям
  const h = t.hero;      // Секция "Главная/Герой"
  const fm = t.formats;  // Секция "Форматы игр"
  
  // Специальная обработка для заголовка героя: объединяем строки через перенос строки,
  // экранируем, потом заменяем \n на <br/> для переносов в HTML
  const dRows = esc(h.headlineLines.join("\n"))
    .split("\n")
    .join("<br/>");
  
  // Для цитаты: экранируем каждую строку и склеиваем через <br/>
  const featLines = h.featureTitleLines.map((l) => esc(l)).join("<br/>");

  // ВОЗВРАЩАЕМ HTML-СТРОКУ (составляется из всех секций)
  return `
    <!-- ШАПКА/Masthead: информация о компании, дате выпуска -->
    <div class="masthead">
      <div class="masthead-eyebrow">
        <span>${esc(t.masthead.left)}</span>    <!-- "АГЕНТСТВО РОЛЕВЫХ МЕРОПРИЯТИЙ" -->
        <span>${esc(t.masthead.center)}</span>   <!-- "☙ Основано в 2024 ❧" -->
        <span>${esc(t.masthead.right)}</span>    <!-- "МОСКВА · РОССИЙСКАЯ ФЕДЕРАЦИЯ" -->
      </div>
      <div class="masthead-title">${esc(t.brand)}</div>  <!-- "Link" -->
      <div class="masthead-sub">${esc(t.masthead.subtitle)}</div>  <!-- подзаголовок -->
      <div class="masthead-date">${esc(t.masthead.dateLine)}</div> <!-- дата выпуска -->
    </div>

    <!-- СЕКЦИЯ 1: ГЕРОЙ/HERO - главный блок с призывом к действию -->
    <section id="hero">
      <div class="section-head">${esc(h.sectionLabel)}</div>  <!-- "◈ ЭКСТРЕННЫЙ ВЫПУСК!" -->
      <div class="col-2">  <!-- 2 колонки: левая (текст/кнопки) и правая (цитаты/виджет) -->
        <div>
          <div class="hero-headline">${dRows}</div>     <!-- заголовок из нескольких строк -->
          <p class="hero-deck">${esc(h.deck)}</p>       <!-- описание -->
          <p class="dropcap">${esc(h.lead)}</p>         <!-- вступление с большой буквой -->
          <div class="hero-cta">
            <!-- Кнопки-якоря с data-scroll атрибутом (для скролла к секциям) -->
            <button type="button" class="cta-btn" data-scroll="schedule">${esc(h.ctaSchedule)}</button>
            <button type="button" class="cta-btn outline" data-scroll="formats">${esc(h.ctaFormats)}</button>
          </div>
        </div>
        <div class="hero-side">
          <!-- Блок с цитатой-девизом компании -->
          <div class="hero-feature">
            <div class="hero-feature-title">${featLines}</div>
            <div class="hero-feature-sub">${esc(h.featureSub)}</div>
          </div>
          <!-- Карточка с ближайшим событием -->
          <div class="card">
            <span class="card-tag">${esc(h.nextEventTag)}</span>
            <div class="section-h2 card-title-sm">${esc(h.nextEventTitle)}</div>
            <p class="p-sm">${esc(h.nextEventWhen)}</p>
            <p class="p-sm" ...>${esc(h.nextEventSeats)}</p>
            <button ... data-scroll="schedule">${esc(h.nextEventBtn)}</button>
          </div>
          <!-- Вытянутая цитата -->
          <div class="pull-quote">
            <p>${esc(h.pullQuote)}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- СЕКЦИЯ 2: ФОРМАТЫ - детектив и D&D -->
        <section id="formats">
      <div class="section-head">${esc(fm.sectionLabel)}</div>
      <div class="ornament">${esc(fm.ornament1)}</div>
      <div class="col-2">
        <div>
          <div class="badge">${esc(fm.detective.badge)}</div>
          <div class="section-h2">${esc(fm.detective.title)}</div>
          <p>${esc(fm.detective.body)}</p>
          <div class="meta-block">${metaBlock(fm.detective.rows)}</div>
          <button type="button" class="cta-btn btn-tiny" data-scroll="schedule">${esc(fm.detective.cta)}</button>
        </div>
        <div>
          <div class="badge ink">${esc(fm.dnd.badge)}</div>
          <div class="section-h2">${esc(fm.dnd.title)}</div>
          <p>${esc(fm.dnd.body)}</p>
          <div class="meta-block">${metaBlock(fm.dnd.rows)}</div>
          <button type="button" class="cta-btn btn-tiny" data-scroll="schedule">${esc(fm.dnd.cta)}</button>
        </div>
      </div>
    </section>

    <!-- СЕКЦИЯ 3: КАК ЭТО РАБОТАЕТ - пошаговая инструкция -->
    <section id="how">
      <div class="section-head">${esc(t.how.sectionLabel)}</div>
      <div class="section-h1 how-center">${esc(t.how.title)}</div>
      <div class="col-3">  <!-- 3 колонки для трёх шагов -->
        ${t.how.steps
          .map(
            (s) => `
        <div>
          <div class="step-num">${esc(s.num)}</div>  <!-- I, II, III -->
          <div class="section-h2">${esc(s.title)}</div>
          <p class="p-xs">${esc(s.text)}</p>
        </div>`,
          )
          .join("")}  <!-- склеиваем три карточки -->
      </div>
      <div class="fleuron">${esc(t.how.fleuron)}</div>  <!-- декоративный разделитель -->
      <div class="how-foot">${esc(t.how.footnote)}</div>
    </section>

    //<!-- СЕКЦИЯ 4: КЕЙСЫ/СЦЕНАРИИ - списки готовых игр -->
    <section id="cases">
      <div class="section-head">${esc(t.cases.sectionLabel)}</div>
      <div class="ornament">${esc(t.cases.ornamentDet)}</div>
      <div class="col-3" style="margin-bottom:32px">  <!-- 3 карточки детективов -->
        ${t.cases.detective   .map(
            (c) => `
        <div class="card" style="position:relative">
          <span class="card-tag">Детектив · ${esc(c.diff)} · ${esc(c.seats)}</span>
          <div class="section-h2 card-title-xs">${esc(c.title)}</div>
          <p class="p-sm">${esc(c.desc)}</p>
          <button type="button" class="cta-btn btn-tinier" data-scroll="schedule">${esc(t.cases.btnBook)}</button>
        </div>`,
          )
          .join("")}
      </div>
      <div class="ornament">${esc(t.cases.ornamentDnd)}</div>
      <div class="col-2">  <!-- 2 карточки D&D -->
          ${t.cases.dnd
          .map(
            (c) => `
        <div class="card" style="position:relative">
          <span class="card-tag">D&D · ${esc(c.diff)} · ${esc(c.seats)}</span>
          <div class="section-h2 card-title-xs">${esc(c.title)}</div>
          <p class="p-sm">${esc(c.desc)}</p>
          <button type="button" class="cta-btn btn-tinier" style="background:var(--ink);border-color:var(--ink)" data-scroll="schedule">${esc(t.cases.btnBook)}</button>
        </div>`,
          )
          .join("")}
      </div>
    </section>
      

    <!-- СЕКЦИЯ 5: РАСПИСАНИЕ - таблица с мероприятиями -->
      <section id="schedule">
      <div class="section-head">${esc(t.schedule.sectionLabel)}</div>
      <div class="section-h1" style="margin-bottom:20px">${esc(t.schedule.title)}</div>
      <table>
        <thead>
          <tr>
            <th>${esc(t.schedule.thDate)}</th>
            <th>${esc(t.schedule.thScenario)}</th>
            <th>${esc(t.schedule.thFormat)}</th>
    
            <th>${esc(t.schedule.thPrice)}</th>
            <th>${esc(t.schedule.thAction)}</th>
          </tr>
        </thead>
        <tbody>
          ${t.schedule.rows
            .map(
              (r) => `
         <tr>
              <td>${esc(r.date)}</td>      <!-- дата и время -->
              <td><strong>${esc(r.scenario)}</strong></td>  <!-- название -->
              <td><span class="tag">${esc(r.format)}</span></td>  <!-- формат с тегом -->
              <td class="price">${esc(r.price)}</td>  <!-- цена -->
              <td><button class="cta-btn btn-table">${esc(t.schedule.book)}</button></td>  <!-- кнопка -->
            </tr>`,
            )
            .join("")}
        </tbody>
      </table>
      <p class="schedule-note">${esc(t.schedule.footnote)}</p>
    </section>

    <!-- СЕКЦИЯ 6: ЗАКАЗ ПОД КЛЮЧ - информация и форма -->
  <section id="order">
      <div class="section-head">${esc(t.order.sectionLabel)}</div>
      <div class="col-2">
        <div>
          <div class="section-h1">${esc(t.order.title)}</div>
          <p class="hero-deck" style="font-size:15px">${esc(t.order.intro)}</p>
          <div class="pull-quote" style="margin-top:24px">
            <p>${esc(t.order.pullText)}</p>
            <cite>${esc(t.order.pullCite)}</cite>
          </div>
          ${t.order.bullets
            .map(
              (b) => `
          <div class="order-bullets">
            <strong>${esc(b.head)}</strong>
            <p>${esc(b.text)}</p>
          </div>`,
            )
            .join("")}
        </div>
        <div>
          <div class="card">
            <span class="card-tag">${esc(t.order.formTag)}</span>
            <div class="form-row">
              <label for="f-name">${esc(t.order.formName)}</label>
              <input id="f-name" type="text" name="name" placeholder="${esc(t.order.formNamePh)}" autocomplete="name" />
            </div>
            <div class="form-row">
              <label for="f-contact">${esc(t.order.formContact)}</label>
              <input id="f-contact" type="text" name="contact" placeholder="${esc(t.order.formContactPh)}" />
            </div>
            <div class="form-row">
              <label for="f-type">${esc(t.order.formType)}</label>
              <select id="f-type" name="type">
                ${t.order.formTypeOptions.map((o) => `<option>${esc(o)}</option>`).join("")}
              </select>
            </div>
            <div class="form-grid-2">
              <div class="form-row">
                <label for="f-guests">${esc(t.order.formGuests)}</label>
                <input id="f-guests" type="number" name="guests" placeholder="${esc(t.order.formGuestsPh)}" min="6" />
              </div>
              <div class="form-row">
                <label for="f-date">${esc(t.order.formDate)}</label>
                <input id="f-date" type="date" name="date" />
              </div>
            </div>
            <div class="form-row">
              <label for="f-comment">${esc(t.order.formComment)}</label>
              <textarea id="f-comment" name="comment" placeholder="${esc(t.order.formCommentPh)}"></textarea>
            </div>
            <button type="button" class="cta-btn btn-block">${esc(t.order.formSubmit)}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- СЕКЦИЯ 7: ОТЗЫВЫ -->
   <section id="reviews">
      <div class="section-head">${esc(t.reviews.sectionLabel)}</div>
      <div class="section-h1" style="margin-bottom:24px">${esc(t.reviews.title)}</div>
      <div class="col-2">
        <div>
          ${[t.reviews.items[0], t.reviews.items[1]]
            .map(
              (r) => `
          <div class="review">
            <p class="review-text">${esc(r.text)}</p>
            <div class="review-author">— ${esc(r.author)}</div>
          </div>`,
            )
            .join("")}
        </div>
        <div>
          ${[t.reviews.items[2], t.reviews.items[3]]
            .map(
              (r) => `
          <div class="review">
            <p class="review-text">${esc(r.text)}</p>
            <div class="review-author">— ${esc(r.author)}</div>
          </div>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- СЕКЦИЯ 8: FAQ (частые вопросы) -->
      <section id="faq">
      <div class="section-head">${esc(t.faq.sectionLabel)}</div>
      <div class="section-h1" style="margin-bottom:24px">${esc(t.faq.title)}</div>
      ${t.faq.items
        .map(
          (item) => `
      <details class="faq-item">
        <summary class="faq-q"><span>${esc(item.q)}</span><span class="faq-toggle" aria-hidden="true"><span class="faq-icon-closed">+</span><span class="faq-icon-open">−</span></span></summary>
        <div class="faq-a">${esc(item.a)}</div>
      </details>`,
        )
        .join("")}
    </section>
  `;
}


/**
 * Функция генерации подвала сайта (footer)
 * Содержит логотип, слоган, навигационные ссылки, копирайт
 */
function renderFooter(t) {
  // Генерируем HTML для ссылок
  const links = t.footer.links
    .map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`)
    .join("\n        ");
  
  return `
    <div class="footer-title">${esc(t.brand)}</div>
    <div class="footer-tagline">${esc(t.footer.tagline)}</div>
    <div class="footer-links">${links}</div>
    <div class="footer-rule">
      <p class="footer-copy">${esc(t.footer.copy)}</p>
    </div>
  `;
}

/**
 * Функция плавной прокрутки к элементу по ID
 * Используется для навигации по якорям (#hero, #formats и т.д.)
 */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

/**
 * Функция анимации бегущей строки (тикер/тicker)
 * 
 * Параметры:
 * - tickerEl: DOM-элемент, куда вставлять текст
 * - lines: массив строк для циклического переключения
 * - urgent: текст, который будет обрамлять основное сообщение (например "◈ СРОЧНО ◈")
 * 
 * Каждые 4 секунды текст меняется со сбросом анимации fadeTick
 */
function setTicker(tickerEl, lines, urgent) {
  let i = 0;
  function tick() {
    // Сброс анимации (перезапуск fade-эффекта)
    tickerEl.style.animation = "none";
    void tickerEl.offsetHeight;  // принудительный reflow для корректного перезапуска
    tickerEl.style.animation = "fadeTick 0.5s ease";
    // Устанавливаем текст: "◈ СРОЧНО ◈   строка из массива   ◈ СРОЧНО ◈"
    tickerEl.textContent = `${urgent}   ${lines[i]}   ${urgent}`;
    i = (i + 1) % lines.length;  // циклический переход к следующей строке
  }
  tick();  // запускаем сразу
  setInterval(tick, 4000);  // запускаем таймер на повтор каждые 4 сек
}

/**
 * Функция построения боковой навигации ("thread nav" - нить пин-кодов)
 * Создаёт вертикальную панель с иконками-кнопками для быстрой навигации по секциям
 * 
 * Параметры:
 * - navEl: DOM-элемент-контейнер для навигации
 * - pinNodes: массив для сохранения созданных элементов (нужен для отрисовки соединительных линий)
 * - t: объект TEXTS с данными навигации
 * 
 * Каждый элемент: div.nav-pin с data-target="id_секции"
 * При клике или нажатии Enter/пробел скроллит к секции
 */
function buildThreadNav(navEl, pinNodes, t) {
  t.nav.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "nav-pin" + (i === 0 ? " active" : "");  // первый элемент активный по умолчанию
    div.dataset.target = item.id;  // id целевой секции
    div.setAttribute("title", item.label);  // всплывающая подсказка
    div.setAttribute("role", "button");  // доступность
    div.setAttribute("tabindex", "0");   // доступность (фокус с клавиатуры)
    
    const head = document.createElement("div");
    head.className = "pin-head";
    
    const label = document.createElement("div");
    label.className = "pin-label";
    label.textContent = item.label;
    
    div.appendChild(head);
    div.appendChild(label);
    
    // Обработчик клика
    div.addEventListener("click", () => scrollToId(item.id));
    // Обработчик клавиатуры (для доступности)
    div.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToId(item.id);
      }
    });
    
    navEl.appendChild(div);
    pinNodes.push(div);  // сохраняем для последующей отрисовки соединительных линий
  });
}

/**
 * Функция отрисовки соединительных линий между пинами навигации
 * 
 * Параметры:
 * - svgEl: SVG-элемент, в который рисуются линии
 * - pins: массив DOM-элементов-пинов
 * 
 * Как работает: 
 * 1. Берёт позиции каждого пина на странице (getBoundingClientRect)
 * 2. Вычисляет центр по Y (top + height/2)
 * 3. Рисует кривые Безье между центрами соседних пинов
 * 4. Линии перерисовываются при скролле и изменении размера окна для корректной позиции
 */
function updateThreadLines(svgEl, pins) {
  const list = pins.filter(Boolean);  // убираем пустые значения
  if (list.length < 2) {
    svgEl.innerHTML = "";
    return;
  }
  
  const parts = [];
  for (let i = 0; i < list.length - 1; i++) {
    const a = list[i].getBoundingClientRect();      // координаты первого пина
    const b = list[i + 1].getBoundingClientRect();  // координаты второго пина
    
    const y1 = a.top + a.height / 2;  // центр Y первого
    const y2 = b.top + b.height / 2;  // центр Y второго
    
    const cx = 28;   // X-координата начальной и конечной точки
    const mx = cx + 12;  // X-координата контрольной точки (для изгиба)
    
    // Рисуем кривую Безье: начальная точка → контрольная точка → конечная
    parts.push(
      `<path d="M ${cx} ${y1} Q ${mx} ${(y1 + y2) / 2} ${cx} ${y2}" 
             stroke="#8B1A1A" stroke-width="1.5" fill="none" 
             stroke-dasharray="4 3" opacity="0.7" />`
    );
  }
  svgEl.innerHTML = parts.join("");
}

/**
 * ГЛАВНАЯ ФУНКЦИЯ (точка входа)
 * Инициализирует всё приложение: рендерит разметку, навешивает обработчики, настраивает анимации
 * 
 * Порядок действий:
 * 1. Получает ссылки на корневые DOM-элементы (#pageRoot, #footerRoot, #tickerEl, etc.)
 * 2. Заполняет их сгенерированным HTML через renderPage() и renderFooter()
 * 3. Запускает бегущую строку (setTicker)
 * 4. Навешивает обработчики скролла на все кнопки с data-scroll атрибутом
 * 5. Строит боковую навигацию (buildThreadNav)
 * 6. Настраивает IntersectionObserver: подсвечивает активный пин при прокрутке в видимую секцию
 * 7. Запускает отрисовку соединительных линий и вешает слушатели на resize/scroll для их обновления
 */
function main() {
  const t = TEXTS;
  document.title = t.documentTitle;  // устанавливаем заголовок страницы

  // Получаем DOM-элементы
  const pageRoot = document.getElementById("pageRoot");      // контейнер для основного контента
  const footerRoot = document.getElementById("footerRoot");  // контейнер для подвала
  const tickerEl = document.getElementById("tickerEl");      // бегущая строка
  const threadNav = document.getElementById("threadNav");    // контейнер навигации
  const threadSvg = document.getElementById("threadSvg");    // SVG для линий

  // Рендерим HTML в контейнеры
  pageRoot.innerHTML = renderPage(t);
  footerRoot.innerHTML = renderFooter(t);

  // Запускаем анимацию тикера
  setTicker(tickerEl, t.ticker.lines, t.ticker.urgent);

  // Навешиваем обработчики на все кнопки с data-scroll атрибутом
  // (кнопки "Выбрать дату", "О форматах", "Записаться →" и т.д.)
  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-scroll");
      if (id) scrollToId(id);
    });
  });

  // Строим боковую навигацию
  const pinNodes = [];
  buildThreadNav(threadNav, pinNodes, t);

  // Настройка IntersectionObserver для подсветки активного пина
  // Когда секция становится видимой на 40%, соответствующий пин получает класс .active
  const sections = t.nav.map((n) => document.getElementById(n.id)).filter(Boolean);
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.id;
          document.querySelectorAll(".nav-pin").forEach((pin) => {
            pin.classList.toggle("active", pin.dataset.target === id);
          });
        }
      });
    },
    { threshold: 0.4 },  // срабатывает когда 40% секции видно
  );
  sections.forEach((el) => obs.observe(el));  // начинаем отслеживать все секции

  // Отрисовка соединительных линий между пинами
  function redrawThread() {
    updateThreadLines(threadSvg, pinNodes);
  }
  redrawThread();  // рисуем сразу после загрузки
  
  // Перерисовываем линии при изменении размера окна или скролле
  window.addEventListener("resize", redrawThread);
  window.addEventListener("scroll", redrawThread, { passive: true });
}

// ========== ФУНКЦИЯ ДЛЯ ЛОГО (можно загрузить фото или оставить плейсхолдер) ==========
function setupHeaderLogo() {
  const logoImg = document.getElementById('headerLogo');
  if (!logoImg) return;
  
  // Если нужно заменить src на другую картинку
  // logoImg.src = 'path/to/your/logo.jpg';
  
  // Обработчик клика по лого (скролл наверх)
  logoImg.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== ФУНКЦИЯ ДЛЯ БУРГЕР-МЕНЮ ==========
function setupBurgerMenu() {
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileDropdown = document.getElementById('mobileDropdown');
  
  if (!burgerBtn || !mobileDropdown) return;
  
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    mobileDropdown.classList.toggle('show');
  });
  
  // Закрываем меню при клике на ссылку
  const dropdownLinks = document.querySelectorAll('.dropdown-link');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerBtn.classList.remove('active');
      mobileDropdown.classList.remove('show');
    });
  });
}

// ========== ФУНКЦИЯ ДЛЯ АКТИВНОЙ ССЫЛКИ ПРИ СКРОЛЛЕ ==========
function setupActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');
  
  if (!sections.length || !navLinks.length) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    { threshold: 0.4, rootMargin: '-50px 0px -50px 0px' }
  );
  
  sections.forEach(section => observer.observe(section));
}

// ========== ФУНКЦИЯ ДЛЯ ДОБАВЛЕНИЯ ВИДЕО-ОТЗЫВОВ ==========
function addVideoReviews() {
  const reviewsSection = document.getElementById('reviews');
  if (!reviewsSection) return;
  
  // Создаём блок с видео
  const videoBlock = document.createElement('div');
  videoBlock.className = 'video-section';
  videoBlock.innerHTML = `
    <div class="video-title">
      <span>ВИДЕО-ОТЗЫВЫ</span>
    </div>
    <div class="video-grid">
      <div class="video-card">
        <div class="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Видеоотзыв о детективной игре"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div class="video-caption">Детектив «Тайна шести карманов» — впечатления участницы</div>
      </div>
      <div class="video-card">
        <div class="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Видеоотзыв о D&D игре"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div class="video-caption">D&D сессия «Окхейвен» — как прошла игра</div>
      </div>
    </div>
  `;
  
  // Вставляем видео после текстовых отзывов
  reviewsSection.appendChild(videoBlock);
}

// ========== ФУНКЦИЯ ДЛЯ ЗАМЕНЫ СТАРОЙ НАВИГАЦИИ НА НОВУЮ ==========
// Эту функцию нужно вызвать после рендеринга страницы

// Обновляем существующую функцию main, добавляя в неё вызовы новых функций
// Или создаём отдельную функцию инициализации

function initNewFeatures() {
  setupHeaderLogo();      // Лого с фото
  setupBurgerMenu();      // Бургер-меню
  setupActiveNavLink();   // Активная ссылка при скролле
  addVideoReviews();      // Видео в отзывах
}

// Если вы хотите добавить это в существующий main, просто добавьте вызов:
// initNewFeatures();

// ========== ОБНОВЛЁННАЯ ФУНКЦИЯ main() ==========
// Замените существующую функцию main на эту или добавьте в неё строки

// Если функция main уже существует, просто добавьте в её конец:
// initNewFeatures();

// Полная обновлённая main (если хотите заменить):

function main() {
  const t = TEXTS;
  document.title = t.documentTitle;

  const pageRoot = document.getElementById("pageRoot");
  const footerRoot = document.getElementById("footerRoot");
  const tickerEl = document.getElementById("tickerEl");
  const threadNav = document.getElementById("threadNav");
  const threadSvg = document.getElementById("threadSvg");

  pageRoot.innerHTML = renderPage(t);
  footerRoot.innerHTML = renderFooter(t);

  setTicker(tickerEl, t.ticker.lines, t.ticker.urgent);

  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-scroll");
      if (id) scrollToId(id);
    });
  });

  const pinNodes = [];
  buildThreadNav(threadNav, pinNodes, t);

  const sections = t.nav.map((n) => document.getElementById(n.id)).filter(Boolean);
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.id;
          document.querySelectorAll(".nav-pin").forEach((pin) => {
            pin.classList.toggle("active", pin.dataset.target === id);
          });
        }
      });
    },
    { threshold: 0.4 },
  );
  sections.forEach((el) => obs.observe(el));

  function redrawThread() {
    updateThreadLines(threadSvg, pinNodes);
  }
  redrawThread();
  window.addEventListener("resize", redrawThread);
  window.addEventListener("scroll", redrawThread, { passive: true });

  // НОВЫЕ ФУНКЦИИ:
  initNewFeatures();
}

document.addEventListener("DOMContentLoaded", main);