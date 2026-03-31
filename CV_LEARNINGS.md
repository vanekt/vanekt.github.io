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
- **GymTeam Go endpoints**: More than a dozen (10+) API endpoints built on own initiative — not "several" (несколько).
- **Citeck clients**: Unilever, DHL, Raiffeisen Bank, JCB. Use these specific names. Do not use "government agencies" or generic "large corporations".
- **Leadership scope**: Only at Citeck (team of up to 5 frontend engineers). GymTeam = sole engineer (no team). iRecommend = senior IC, equal partner. Do not imply leadership elsewhere.
- **Bonusway browser extension**: Single extension (not multiple), supporting Chrome, Opera, and Firefox. Do not write "extensions" (plural).

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

---

## Ivan-specific Patterns

Distilled from multiple sessions. cv-hr and cv-copy should internalize these as defaults.

- **Metrics cv-hr should stop suggesting**: % performance improvements, MAU, conversion rates, revenue impact. Three sessions — never accepted. Ivan doesn't own these numbers and won't fabricate them.
- **Default when no metric exists**: Qualitative before/after ("раньше X, теперь Y", "X instead of Y", "from X to Y"). Do not insert `[?]` placeholders if the change can be described qualitatively — Ivan rarely fills them in.
- **Skills density**: Ivan prefers factual completeness over aggressive trimming. 20–25 items is normal for this profile. Do not push below 20 if the items are factually accurate.
- **First word of every bullet**: Always check — strong perfective verb (RU) or past-simple action verb (EN). This is the most frequently recurring error across sessions. cv-copy should validate every bullet's opening word before finalizing.
- **Precision over approximation on verifiable facts**: Ivan consistently corrects specific numbers (team size, browser names) rather than leaving approximations. cv-copy should use exact figures when known and "~" only when genuinely uncertain — never round up or smooth over details.
- **Summary = timeless quality layer**: Ivan removes version numbers, deliverable counts, and stack specifics from the summary. These belong in bullets and context. The summary should describe *who Ivan is as an engineer*, not *what he shipped last*.

---

## How to update

When `/cv-hr` or `/cv-copy` discovers a new fact correction or user preference:
- Append under **Verified Facts** if Ivan corrects a factual claim
- Append under **Rules & Preferences** if Ivan expresses a style/tone preference
- Keep entries concise and actionable — one rule per line
