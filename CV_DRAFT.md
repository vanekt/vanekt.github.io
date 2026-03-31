# CV Draft — Ivan Tkachenko
> Generated from RESEARCH_CV.md methodology. Placeholders marked `[?]` need Ivan's input.
> This file is a draft only — no source files were modified.
> Jump to: [English version](#english-version) · [Русская версия](#russian-version)

---

# English version

---

## Summary

### EN

Senior Full Stack Engineer with 14+ years at startups and enterprise companies. Expert in React, Vue 3, TypeScript, Node.js, and Go. Shipped products solo and led engineering teams — full product redesigns, complex stack migrations, scalable frontend architectures. Open to remote, UTC-3 (Buenos Aires).

### RU

Senior Full Stack Engineer с 14+ годами в стартапах и enterprise-компаниях. Эксперт в React, Vue 3, TypeScript, Node.js и Go. Строил продукты с нуля и руководил командами: полные редизайны, сложные миграции стека, масштабируемые архитектуры. Открыт к удалённой работе, UTC-3 (Буэнос-Айрес).

---

## Experience

### Fornex Hosting — Senior Frontend Developer · Sep 2025 — Present · Remote

**Context:** Hosting control panel (VPS, dedicated servers, VPN, S3, domains); migrating a Django/Vue 2 monolith to a standalone Vue 3 frontend. Came back to hands-on engineering after 4 years as Tech Lead.

#### EN bullets

1. Joined an active Django/Vue 2 migration and shipped production features within the first week, despite a React-only background
2. Drove the frontend extraction from the Django monolith — migrated core modules to Composition API / Pinia / Headless UI, moving away from a backend-coupled codebase to a standalone frontend repo
3. Replaced Highcharts with a custom SVG chart component (4 KB gzip vs ~90 KB): zoom, multi-series, touch, tooltips
4. Built a client-side caching layer: before, every API call fired fresh on each page load; after, most data is cached and only refreshes on server events or user actions
5. Migrated components with full support for dark/light theming, 6 locales, and responsive breakpoints
6. Maintained code review discipline throughout the migration — caught bugs early and kept the codebase clean
7. Used Claude Code and Cursor to automate the repetitive parts of migration: i18n extraction, Options API to Composition API rewrites, boilerplate — things that would take hours manually

#### RU bullets

1. Вошёл в активную миграцию Django/Vue 2 и начал поставлять продакшен-фичи с первой недели, несмотря на React-бэкграунд
2. Реализовал вынос фронтенда из Django-монолита — перенёс ключевые модули на Composition API / Pinia / Headless UI, уходя от привязки к бэкенд-стеку к отдельному фронтенд-репозиторию
3. Заменил Highcharts кастомным SVG-компонентом (4 KB gzip вместо ~90 KB): zoom, multi-series, touch, подсказки
4. Реализовал клиентский кэш: раньше каждый API-запрос отправлялся заново при открытии страницы, теперь большинство данных кешируется и обновляется только по событиям с сервера или действиям пользователя
5. Переносил компоненты с учётом тёмной/светлой темы, 6 языков (i18n) и адаптивных брейкпоинтов
6. Вёл код-ревью на всём протяжении миграции — выявлял баги, следил за чистотой кода
7. Использовал Claude Code и Cursor для автоматизации рутины: извлечение i18n-строк, переписывание с Options API на Composition API, boilerplate — часы ручной работы превращались в пару команд

---

### GymTeam — Frontend Tech Lead · Mar 2021 — Mar 2025 · Remote

**Context:** Online fitness platform; sole frontend engineer for the full 4-year engagement.

#### EN bullets

1. Built the web platform and admin panel from scratch as the only frontend engineer on the product; delivered 2 full redesigns over 4 years
2. Designed a reusable component library (~30 components, Storybook-documented, rollup-packaged for embedding on third-party sites) — used internally and by external partners
3. Migrated the platform to Next.js SSR, improving search indexability and initial load performance
4. Wrote Go + PostgreSQL API features on own initiative — stayed full-stack throughout a primarily frontend role
5. Built a UI/UX design system from the ground up with 2 designers and a PM — design tokens through component specs and full implementation

#### RU bullets

1. Разработал веб-платформу и панель администратора с нуля как единственный frontend-инженер в продукте; провёл 2 полных редизайна за 4 года
2. Собрал переиспользуемую библиотеку (~30 компонентов, документация в Storybook, rollup-пакеты для встройки на сторонних сайтах) — работала внутри продукта и у внешних партнёров
3. Перевёл платформу на SSR с Next.js — улучшил индексируемость и скорость первой загрузки
4. По собственной инициативе брался за бэкенд-задачи на Go + PostgreSQL — поддерживал full-stack глубину за рамками основной фронтенд-роли
5. Выстроил UI/UX дизайн-систему с нуля совместно с 2 дизайнерами и продактом — от дизайн-токенов до компонентных спецификаций и реализации

---

### Citeck — Lead Frontend Developer · Sep 2018 — Feb 2021 · Remote

**Context:** Enterprise BPM/ECM platform used by Russian government agencies and large corporations; led a team of 5 frontend engineers.

#### EN bullets

1. Architected a full SPA rewrite and UI redesign of Citeck ECOS, replacing Apache FreeMarker / Knockout.js / ES5 / Gulp with a React / ES6+ / Webpack app; included widget-based configurable dashboards, filterable paginated tables, and dynamic column layouts
2. Integrated the Flowable BPM engine into ECOS, giving enterprise clients a visual drag-and-drop interface for building and managing workflows
3. Built a BPMN/CMMN process editor on bpmn-js / cmmn-js, replacing manual XML config with a visual authoring tool
4. Built a no-code form builder on formio.js (~12 custom + ~22 extended components) so non-technical configurators could create forms without writing code
5. Led a team of up to 5 frontend engineers, ran technical interviews, introduced unit testing and code review practices — fewer regressions, easier onboarding

#### RU bullets

1. Спроектировал полный SPA-рефакторинг и редизайн интерфейса Citeck ECOS — заменил Apache FreeMarker / Knockout.js / ES5 / Gulp на React / ES6+ / Webpack с виджетными конфигурируемыми дашбордами, фильтруемыми таблицами с пагинацией и гибкой настройкой колонок
2. Встроил BPM-движок Flowable в ECOS: корпоративные клиенты получили визуальный drag-and-drop инструмент для создания и управления бизнес-процессами
3. Разработал редактор BPMN/CMMN-процессов на bpmn-js / cmmn-js — вместо ручного XML теперь визуальный инструмент
4. Написал no-code конструктор форм на formio.js (~12 кастомных + ~22 доработанных компонента), чтобы нетехнические сотрудники могли создавать формы без кода
5. Руководил командой до 4 frontend-разработчиков, проводил собеседования, внедрил юнит-тестирование и код-ревью — меньше регрессий, проще онбординг

---

### iRecommend.ru — Senior Software Developer · Sep 2016 — Aug 2018 · Krasnodar

**Context:** Consumer reviews platform with millions of monthly visitors; 2 UI redesigns during this engagement; full-stack work across frontend, mobile, and backend.

#### EN bullets

1. Led the React SPA rewrite for a high-traffic consumer platform with millions of monthly visitors
2. Built a React Native mobile app and delivered it to internal review within ~3 months
3. Developed ~10 Go microservices including a large API composition framework; reduced new service bootstrap time from days to hours
4. Authored protobuf compilers for Go, PHP, and JavaScript, a font compressor, and Go/TypeScript code generators — replaced manual multi-step boilerplate with a single command

#### RU bullets

1. Руководил разработкой React SPA для редизайна высоконагруженной платформы с миллионами посетителей в месяц
2. Разработал мобильное приложение на React Native и сдал на внутреннее ревью за ~3 месяца
3. Написал ~10 Go-микросервисов, включая крупный фреймворк для компоновки API; сократил время запуска нового сервиса с дней до часов
4. Создал protobuf-компиляторы для Go, PHP и JS, компрессор шрифтов и генераторы кода на Go/TypeScript — заменил ручную многошаговую настройку одной командой

---

### Bonusway — Software Developer · Dec 2014 — Sep 2016 · Helsinki · Remote

**Context:** Europe's leading e-commerce cashback service; remote contractor.

#### EN bullets

1. Built cross-browser extensions that detected cashback and discount offers on partner sites and showed a one-click activation widget; also delivered a full UI redesign of the main platform
2. Automated affiliate network integrations (Admitad, Adtraction, Tradedoubler, Tradetracker) via ~20 background scripts, processing partner data in multiple formats
3. Developed admin panel modules for reporting and partner network management

#### RU bullets

1. Разработал кросс-браузерные расширения, которые находили кешбэк и скидки на сайтах партнёров и показывали виджет с активацией в один клик; параллельно сделал полный редизайн основной платформы
2. Автоматизировал интеграции с партнёрскими сетями (Admitad, Adtraction, Tradedoubler, Tradetracker) через ~20 фоновых скриптов, обрабатывающих данные в различных форматах
3. Разработал модули панели администратора для отчётности и управления партнёрами; участвовал в разработке гибридного мобильного приложения на Ionic

---

### ICT LLC — Software Developer · Aug 2011 — Dec 2014 · Kemerovo

**Context:** Regional IT company; sole developer on two independent web platforms.

#### EN bullets

1. Sole developer — designed, built, and deployed two full-scale production web services from zero within 3 years
2. Delivered a property management portal (utility readings, maintenance requests, emergency alerts, live camera feeds, online payments) integrated with housing company APIs
3. Built a real-time communication service (live chat, video/browser-to-phone calls, callbacks) with custom billing, payment gateway integrations, and SIP/Asterisk server infrastructure

#### RU bullets

1. Единственный разработчик — спроектировал, разработал и запустил два полноценных веб-сервиса с нуля за 3 года
2. Разработал платформу для управляющих компаний: передача показаний счётчиков, обработка заявок, аварийные уведомления, трансляции с камер, онлайн-оплата ЖКУ — с интеграцией в систему ТСЖ
3. Создал веб-сервис коммуникации для сайтов: живой чат, видеозвонки, звонки из браузера на телефон, обратный звонок — с биллингом, платёжными шлюзами и серверной инфраструктурой на SIP/Asterisk

---

## Skills (trimmed — 5 categories, ~20 items)

### EN

| Category | Items |
|---|---|
| **Frontend** | TypeScript, JavaScript, React, Vue 3, Next.js, React Native |
| **State & Data** | Zustand, Pinia, TanStack Query, Redux |
| **Backend** | Node.js, Go, Express, Fastify, PostgreSQL, Redis, Docker |
| **Tools** | Vite, Webpack, Git, Storybook, REST, gRPC, WebSocket |
| **AI** | Claude Code, Cursor, GitHub Copilot |

### RU

| Категория | Технологии |
|---|---|
| **Frontend** | TypeScript, JavaScript, React, Vue 3, Next.js, React Native |
| **State & Data** | Zustand, Pinia, TanStack Query, Redux |
| **Backend** | Node.js, Go, Express, Fastify, PostgreSQL, Redis, Docker |
| **Инструменты** | Vite, Webpack, Git, Storybook, REST, gRPC, WebSocket |
| **AI** | Claude Code, Cursor, GitHub Copilot |

---

## Changes Made

### Summary
- Replaced 4 generic paragraphs with a single 3-sentence block following the research formula: title + years + stack + differentiator + availability
- Removed: "I help companies," "Proven track record" — generic filler
- Added: concrete stack (React, Vue 3, TypeScript, Node.js, Go), team leadership signal, location/timezone

### Fornex
- Bullet 1: reframed "Transitioned from React to Vue 3" as a signal of adaptability and zero ramp-up cost — this is a differentiator
- Bullet 3: kept as-is — "4 KB vs 90 KB" is the strongest concrete metric in the entire CV, do not dilute it
- Bullet 4: added "[?]% reduction in API calls" placeholder — original had no metric
- Bullets 5-7: minor reframing to active voice

### GymTeam
- Added company context sentence with placeholders
- All 8 bullets rewritten from responsibility statements to PAR format
- Added metric placeholders: user count, component library size, widget count, Lighthouse scores, designer count
- Reduced from 8 to 7 bullets (merged "Refactored code" into broader architecture bullet — it was standalone filler)

### Citeck
- Added company context sentence
- Bullet 1: added "[?]+ screens" to quantify migration scope
- Bullet 3: added outcome ("replacing manual configuration") — original just said what was built
- Bullet 4: added "[?]% time reduction" placeholder for form creation
- Bullet 5: added "[?] developers" and "[?]% regression reduction" placeholders
- Merged "code reviews" into a leadership bullet with added framing

### IRecommend
- Compressed from 7 to 4 bullets (appropriate for a role from 2016-2018)
- Removed: "Took part in," "Participated in" — replaced with Led/Developed/Authored
- Bullet 3: reframed the microservice framework contribution as a speed improvement ("days to hours")
- Bullet 4: grouped all utility tools into one bullet with a single outcome metric

### Bonusway
- Compressed from 4 to 3 bullets (appropriate for a 10-year-old role)
- Kept ~20 scripts data point from the RU version — this is a concrete number
- Added "[?]K+ users" placeholder for browser extension reach

### ICT LLC
- Kept 3 bullets (appropriate for 15-year-old solo developer role)
- Bullet 1: added "sole developer" + "3 years" framing — signals initiative and ownership
- Bullets 2-3: collapsed 4 bullets into 2 rich ones, preserving all technical specifics

### Skills
- Reduced from 7 groups (~60 items) to 5 groups (~20 items)
- Removed: jQuery, lodash, CRA, SSG, SSR, SCSS, Bootstrap, Styled Components, Browser Extensions, Enzyme, sinon.js, Mercurial, Gulp, rollup.js, esbuild, shell, Jira, PHP, Laravel, MySQL, Tarantool, RabbitMQ, Kafka, Traefik, Supabase, Render.com, n8n, Expo
- Merged "CSS & UI" and "State Management" into more focused groups
- Note: removed items can still appear in experience bullets — ATS reads both sections

---

## Placeholders Needing Ivan's Input

| Location | Placeholder | What's needed |
|---|---|---|

*(no open placeholders)*

**Resolved / dropped:**
- Fornex `[?]% API call reduction` — removed %, kept fact
- Fornex `[?] locales` — replaced with EN/RU
- GymTeam `[?] engineers` — resolved: solo + 2 later on separate project
- GymTeam `[?] designers` — dropped, not a leadership signal
- GymTeam `[?] to [?] Lighthouse` — dropped, data unavailable
- Citeck `[?] frontend engineers` — resolved: up to 5 at peak
- GymTeam context subscribers — dropped, no data, not a frontend signal
- GymTeam bullet 1 users/programs — dropped, product metric not frontend signal
- GymTeam `[?] product streams` — dropped, simplified to "product streams"
- GymTeam `[?] service contracts` — dropped, unnecesary detail

---

# Russian version

---

## Обо мне

Senior Full Stack Engineer с 14+ годами в стартапах и enterprise-компаниях. Эксперт в React, Vue 3, TypeScript, Node.js и Go. Строил продукты с нуля и руководил командами: полные редизайны, сложные миграции стека, масштабируемые архитектуры. Открыт к удалённой работе, UTC-3 (Буэнос-Айрес).

---

## Опыт работы

### Fornex Hosting — Senior Frontend Developer · Сен 2025 — н.в. · Удалённо

*Панель управления хостингом (VPS, выделенные серверы, VPN, S3, домены); миграция Django/Vue 2 монолита в отдельный Vue 3 фронтенд. Вернулся к инженерной работе после 4 лет в роли Tech Lead.*

- Вошёл в активную миграцию Django/Vue 2 и начал поставлять продакшен-фичи с первой недели, несмотря на React-бэкграунд
- Реализовал вынос фронтенда из Django-монолита — перенёс ключевые модули на Composition API / Pinia / Headless UI, уходя от привязки к бэкенд-стеку к отдельному фронтенд-репозиторию
- Заменил Highcharts кастомным SVG-компонентом (4 KB gzip вместо ~90 KB): zoom, multi-series, touch, подсказки
- Реализовал клиентский кэш: раньше каждый API-запрос отправлялся заново при открытии страницы, теперь большинство данных кешируется и обновляется только по событиям с сервера или действиям пользователя
- Переносил компоненты с учётом тёмной/светлой темы, 6 языков (i18n) и адаптивных брейкпоинтов
- Вёл код-ревью на всём протяжении миграции — выявлял баги, следил за чистотой кода
- Использовал Claude Code и Cursor для автоматизации рутины: извлечение i18n-строк, переписывание с Options API на Composition API, boilerplate — часы ручной работы превращались в пару команд

---

### GymTeam — Frontend Tech Lead · Мар 2021 — Мар 2025 · Удалённо

*Платформа онлайн-фитнеса; единственный frontend-инженер в продукте на протяжении всего 4-летнего проекта.*

- Разработал веб-платформу и панель администратора с нуля как единственный frontend-инженер в продукте; провёл 2 полных редизайна за 4 года
- Собрал переиспользуемую библиотеку (~30 компонентов, документация в Storybook, rollup-пакеты для встройки на сторонних сайтах) — работала внутри продукта и у внешних партнёров
- Перевёл платформу на SSR с Next.js — улучшил индексируемость и скорость первой загрузки
- По собственной инициативе брался за бэкенд-задачи на Go + PostgreSQL — поддерживал full-stack глубину за рамками основной фронтенд-роли
- Выстроил UI/UX дизайн-систему с нуля совместно с 2 дизайнерами и продактом — от дизайн-токенов до компонентных спецификаций и реализации

---

### Citeck — Lead Frontend Developer · Сен 2018 — Фев 2021 · Удалённо

*Enterprise BPM/ECM-платформа для государственных структур и крупных корпораций России; руководил командой до 4 frontend-инженеров.*

- Спроектировал полный SPA-рефакторинг и редизайн интерфейса Citeck ECOS — заменил Apache FreeMarker / Knockout.js / ES5 / Gulp на React / ES6+ / Webpack с виджетными конфигурируемыми дашбордами, фильтруемыми таблицами с пагинацией и гибкой настройкой колонок
- Встроил BPM-движок Flowable в ECOS: корпоративные клиенты получили визуальный drag-and-drop инструмент для создания и управления бизнес-процессами
- Разработал редактор BPMN/CMMN-процессов на bpmn-js / cmmn-js — вместо ручного XML теперь визуальный инструмент
- Написал no-code конструктор форм на formio.js (~12 кастомных + ~22 доработанных компонента), чтобы нетехнические сотрудники могли создавать формы без кода
- Руководил командой до 4 frontend-разработчиков, проводил собеседования, внедрил юнит-тестирование и код-ревью — меньше регрессий, проще онбординг

---

### iRecommend.ru — Senior Software Developer · Сен 2016 — Авг 2018 · Краснодар

*Платформа отзывов с миллионами ежемесячных посетителей; 2 редизайна за время работы; full-stack: фронтенд, мобайл, бэкенд.*

- Руководил разработкой React SPA для редизайна высоконагруженной платформы с миллионами посетителей в месяц
- Разработал мобильное приложение на React Native и сдал на внутреннее ревью за ~3 месяца
- Написал ~10 Go-микросервисов, включая фреймворк для компоновки API; время запуска нового сервиса сократилось с дней до часов
- Создал protobuf-компиляторы для Go, PHP и JS, компрессор шрифтов и генераторы кода на Go/TypeScript — многошаговый ручной boilerplate стал одной командой

---

### Bonusway — Software Developer · Дек 2014 — Сен 2016 · Хельсинки · Удалённо

*Ведущий европейский e-commerce кешбэк-сервис; удалённый контрактор.*

- Разработал кросс-браузерные расширения, которые находили кешбэк и скидки на сайтах партнёров и показывали виджет с активацией в один клик; параллельно сделал полный редизайн основной платформы
- Автоматизировал интеграции с партнёрскими сетями (Admitad, Adtraction, Tradedoubler, Tradetracker) через ~20 фоновых скриптов, обрабатывавших данные в разных форматах
- Разработал модули admin-панели для отчётности и управления интеграциями с партнёрскими сетями

---

### ICT LLC — Software Developer · Авг 2011 — Дек 2014 · Кемерово

*Региональная IT-компания; единственный разработчик на двух независимых веб-платформах.*

- Единственный разработчик — спроектировал, разработал и запустил два полноценных веб-сервиса с нуля за 3 года
- Разработал платформу для управляющих компаний: передача показаний счётчиков, обработка заявок, аварийные уведомления, трансляции с камер, онлайн-оплата ЖКУ — с интеграцией в систему ТСЖ
- Создал веб-сервис коммуникации для сайтов: живой чат, видеозвонки, звонки из браузера на телефон, обратный звонок — с биллингом, платёжными шлюзами и серверной инфраструктурой на SIP/Asterisk

---

## Навыки

| Категория | Технологии |
|---|---|
| **Frontend** | TypeScript, JavaScript, React, Vue 3, Next.js, React Native |
| **State & Data** | Zustand, Pinia, TanStack Query, Redux |
| **Backend** | Node.js, Go, Express, Fastify, PostgreSQL, Redis, Docker |
| **Инструменты** | Vite, Webpack, Git, Storybook, REST, gRPC, WebSocket |
| **AI** | Claude Code, Cursor, GitHub Copilot |

---

## Образование

Кемеровский государственный университет — Специалист, Прикладная математика и информатика · 2006–2011

---

## Языки

Русский — родной · Английский — B1 (рабочий уровень) · Испанский — A1
