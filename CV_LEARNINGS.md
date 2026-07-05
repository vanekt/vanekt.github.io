# CV Learnings

> Auto-updated by `/cv-hr` and `/cv-copy`. Read before any CV work.
> Facts and rules accumulated across sessions — these OVERRIDE general methodology where they conflict.

---

## Verified Facts

Facts about Ivan's work history confirmed or corrected during sessions. Do not contradict these.

- **iRecommend React SPA**: Built but never released to prod — company feared losing SEO/organic traffic. Final deliverable was a visual redesign on the existing stack. Do not describe this as a "rewrite" that shipped.
- **iRecommend team**: Co-developed the SPA with an equal partner. No leadership role. Do not use "Led" or "Руководил" for this bullet.
- **Fornex product type**: "Личный кабинет хостинг-провайдера" (client portal), NOT "панель управления хостингом" — that implies cPanel-style server tools, which is a different product category.
- **Fornex migration stack**: Mix of Django-templated pages + Vue 2 Options API → full migration to Vue 3 Composition API in a standalone frontend repo. Not just "Vue 2 to Vue 3".
- **Fornex migration scale**: Hundreds of components migrated over ~6 months.
- **Fornex noVNC console**: Not built "from scratch" — built on top of existing code plus the noVNC library (which handles the actual server connection protocol). Do not use "from scratch" for this bullet.
- **Fornex 2FA / permissions**: Ivan only built the frontend (forms, UI flow, calling existing APIs) — backend logic (code generation/verification, permission enforcement) was not his work. Always scope this bullet as "frontend for 2FA...", never claim the full system.
- **GymTeam Go endpoints**: More than a dozen (10+) API endpoints built on own initiative — not "several" (несколько).
- **Citeck clients**: Unilever, DHL, Raiffeisen Bank, JCB. Use these specific names. Do not use "government agencies" or generic "large corporations".
- **Leadership scope**: Only at Citeck (team of up to 5 frontend engineers). GymTeam = sole engineer (no team). iRecommend = senior IC, equal partner. Do not imply leadership elsewhere.
- **Bonusway browser extension**: Single extension (not multiple), supporting Chrome, Opera, and Firefox. Do not write "extensions" (plural).
- **RabbitMQ vs Kafka depth**: RabbitMQ is hands-on production experience; Kafka is theoretical knowledge only. Both can appear in a Skills list (ATS keyword coverage), but never write an experience bullet implying hands-on Kafka production work.
- **GymTeam backend scope**: Ivan is "sole frontend engineer" for this role; the wider Go backend (500+ files, RabbitMQ/Pub-Sub event architecture, jennifer codegen, segments/scenario engine, multi-provider billing, admin panel) was built by a separate backend team, NOT Ivan, and must never be claimed as his design/architecture. His own confirmed git-blame contribution: 40 JSON-RPC methods created from scratch + 24 more extended/modified (admin/web panels), YooKassa v2 payments + multi-item orders, CMS page templates, user segmentation/announcements (148 commits, 2022-01 to 2024-01). Also confirmed (Ivan's own testimony, no repo to count): PL/pgSQL backend logic in PostgreSQL as an alternative to Go for some endpoints, and n8n workflows for webhooks/business processes (an attempt to write a whole simple backend in n8n was tried and abandoned — do not mention that failed attempt in the CV). Additionally, cron jobs (gocron) are Ivan's own solo work — write with a confident solo verb ("Built cron-driven background jobs"), not "collaborated". **Correction (2026-07-05)**: RabbitMQ event processing is uncertain — Ivan confirms he paired with backend engineers on *something* but does not remember exactly what. Do not claim RabbitMQ specifically in a bullet unless he can recall enough detail to defend it in an interview.
- **Methodology lesson (2026-07-05)**: a raw `git log --name-only` file-mention count overcounts badly — it includes repeat edits across commits, merge commits, and unrelated file types (models/utils mixed in with actual endpoint files). For "how many X did I build" questions, always use `git log --name-status` and split by status (A = created from scratch by this author, M/R = only modified/renamed an existing one). The GymTeam JSON-RPC count went from a wrong "~150" to a verified "40 created + 24 modified" this way.
- **Citeck additional confirmed work**: SSO authentication integration via Keycloak (including a local dev proxy bridging frontend to the auth server); embedding the React SPA into the legacy Java enterprise portal via a custom webpack "export" build (micro-frontend approach, incremental migration without a full-platform rewrite).
- **GRAM CRM** (PHP/Yii2 CRM for a door/window manufacturer, Dec 2014 - Jan 2016, 252 commits, 100% Ivan) — real project, confirmed via git blame, but deliberately excluded from the CV: overlapping dates with ICT LLC/Bonusway look like a red flag, and the stack is 10+ years outdated. Don't resurface unless Ivan explicitly asks.
- **Rendero** (personal OSS server-driven-UI library, `@vanekt/rendero-core`/`-react`/`-screen`, ~2 years maintained, published to npm, framework-agnostic architecture) — real, strong, verified via its own repo history. Deliberately excluded from the fullstack CV variant (already enough frontend/OSS material there); a good candidate for a frontend-leaning variant or a future "Projects" section.

---

## Rules & Preferences

Style and tone preferences expressed by Ivan. Apply without asking.

- **No em-dashes (—) anywhere in CV copy** — bullets, summary, context sentences, education lines, language strings, any structured "X — Y" data. Use a comma or semicolon instead. Em-dash reads as an AI-template marker. This rule has no exceptions for field type.
- **Language proficiency: level only, no parenthetical gloss** — write "English — B1", not "English — B1 (working proficiency)". The CEFR level is self-explanatory; parentheticals add noise.
- **No fake or inflated metrics** — prefer honest approximations ("~30 components", "4 KB vs ~90 KB", "days to hours") over invented percentages or round numbers. If a metric doesn't exist, drop it or reframe qualitatively.
- **No product-level KPIs** Ivan doesn't own: MAU, revenue, subscriber counts, conversion rates. These don't characterize his engineering work.
- **Summary: no checklist of deliverables** — phrases like "2 full redesigns and a 30-component library" sound like a school project list. Use qualitative differentiators or drop.
- **RU verb aspect**: Always perfective ("Разработал", "Написал", "Построил") — imperfective ("Разрабатывал") reads as unfinished action. **Exception**: "Строил" in the summary is acceptable — Ivan approved it consciously (describes a career-spanning pattern, not a single action).
- **RU tone**: Natural professional Russian — not a translation from EN. Adapt idioms. Do not copy EN sentence structure literally.
- **Summary structure (both EN/RU)**: title + years → deep expertise (React/Vue 3/TypeScript) + strong experience (Node.js/Go/PHP/React Native) → built products end-to-end → led frontend team up to 5 → availability/location.
- **"Sole frontend engineer for 4 years"** as a summary metric feels forced — Ivan has longer solo stints elsewhere. Keep this fact in experience context sentences, not the summary.
- **Weak verbs to avoid in RU**: "применял", "использовал" — these are imperfective and passive-feeling. Replace with action verbs: "автоматизировал", "внедрил", "реализовал".
- **"продакт" → "продукт-менеджер"**: Always use the full form. "Продакт" is slang; "продукт-менеджер" reads as professional.
- **No meta-summary bullets**: If a bullet just restates what the context sentence already says (e.g., "Sole developer, built two services from scratch"), remove it. Context sentences carry that signal; bullets should add specifics.
- **Result-first framing in before/after bullets**: Put the positive outcome before the problem. "Визуальный инструмент вместо ручной правки XML", not "вместо XML — теперь инструмент". Same in EN: "visual tool instead of manual XML editing".
- **No narrowing qualifiers when the tool implies its own audience**: "сотрудники получили возможность..." not "нетехнические сотрудники...". If the tool is no-code, the qualifier adds nothing.
- **Two achievements in one bullet → semicolon, not "and"**: Split compound achievements with a semicolon. Approved pattern: "Разработал React SPA; провёл полный редизайн".
- **Duplicate-to-context bullet → delete, not reformulate**: If a bullet restates what the context sentence already says, remove it entirely. Reformulation is not worth it.
- **Summary: no version numbers for frameworks** — use "Vue", not "Vue 3"; "React", not "React 18". Versions belong in the Skills section and experience bullets, not the summary headline — they date the CV.
- **CV variants can diverge in skill grouping/ordering and role-title framing** for positioning purposes (e.g., a "fullstack" variant merges CSS into Frontend and promotes Backend/Infra groups; may use an expanded/dual role title like "Fullstack Engineer / Frontend Tech Lead") as long as every underlying fact stays independently true. This does not change the base `/cv/` — treat each variant's presentation choices as separately negotiated with Ivan.
- **Treat external ATS-checker / AI CV-reviewer tool output as unverified raw material**: cross-check every suggestion against this file before applying. These tools reliably produce some good, cheap wins (missing keyword-legit skills) alongside confident-sounding but factually risky rewrites (invented client relationships, reversed honest hedged framing, list-flattening that drops verified skills).

---

## Ivan-specific Patterns

Distilled from multiple sessions. cv-hr and cv-copy should internalize these as defaults.

- **Metrics cv-hr should stop suggesting**: % performance improvements, MAU, conversion rates, revenue impact. Three sessions — never accepted. Ivan doesn't own these numbers and won't fabricate them.
- **Default when no metric exists**: Qualitative before/after ("раньше X, теперь Y", "X instead of Y", "from X to Y"). Do not insert `[?]` placeholders if the change can be described qualitatively — Ivan rarely fills them in.
- **Skills density**: Ivan prefers factual completeness over aggressive trimming. 20–25 items is normal for this profile. Do not push below 20 if the items are factually accurate.
- **First word of every bullet**: Always check — strong perfective verb (RU) or past-simple action verb (EN). This is the most frequently recurring error across sessions. cv-copy should validate every bullet's opening word before finalizing.
- **Precision over approximation on verifiable facts**: Ivan consistently corrects specific numbers (team size, browser names) rather than leaving approximations. cv-copy should use exact figures when known and "~" only when genuinely uncertain — never round up or smooth over details.
- **Summary = timeless quality layer**: Ivan removes version numbers, deliverable counts, and stack specifics from the summary. These belong in bullets and context. The summary should describe *who Ivan is as an engineer*, not *what he shipped last*.
- **Skills density pattern confirmed**: ~15 skills added in one session, all accepted. cv-hr should not suggest trimming the skills list — factual completeness is a deliberate choice.
- **Semantic categorization matters**: Ivan catches misplaced skills (e.g., Accessibility in CSS → moved to Practices). Before adding a skill, verify the group makes semantic sense, not just "nearest category".
- **Practices group is established**: FSD, Atomic Design, Micro Frontends, Accessibility, Web Vitals live in a dedicated "Practices" section in CV and on the main site. This is a settled architectural decision — do not merge back into Frontend or CSS.
- **Thunk/Saga confirmed for CV**: Ivan explicitly approved including them despite being Redux middleware. Do not suggest dropping as "legacy".
- **Question ≠ approval**: When Ivan asks "стоит ли добавить X?" or "можно Y?" — discuss, do not implement. Wait for explicit "да" before making changes.
- **"Web Accessibility" > "WCAG" for skill labels**: WCAG is a standard; "Web Accessibility" is the skill. Use the broader practice name in skills lists. **Exception (fullstack CV variant only, 2026-07-04)**: Ivan approved "Web Accessibility (a11y)" — the short "a11y" parenthetical is fine for ATS keyword matching; still do not spell out "WCAG 2.2" or similar standard/version numbers.
- **"Semantic Web" ≠ "Semantic HTML"**: Semantic Web = RDF/linked data (W3C). Semantic HTML = correct use of HTML5 elements (article, nav, section). Never conflate.
- **HTML5 belongs in experience bullets, not skills list**: Ivan confirmed — demonstrate through specific work context, not by listing.
- **Verification-over-inflation is Ivan's default instinct, not just an imposed rule.** When any number/claim's accuracy is in doubt, he consistently chooses to re-verify from source (even re-running git-log analysis with corrected methodology) rather than keep the more impressive but shakier version. Default to suggesting re-verification over quietly keeping an estimate.
- **Narrow, specific clarifying questions work far better than generic "are you sure?" ones.** Asking "what exactly did you do, in detail — X or Y?" reliably gets Ivan to re-investigate and produce more precise, usable facts, rather than getting defensive or doubling down on an embellishment.

---

## How to update

When `/cv-hr` or `/cv-copy` discovers a new fact correction or user preference:
- Append under **Verified Facts** if Ivan corrects a factual claim
- Append under **Rules & Preferences** if Ivan expresses a style/tone preference
- Keep entries concise and actionable — one rule per line
