---
name: prd
description: Generate a PRD (Product Requirements Document) based on a research file
argument-hint: [path-to-research-file]
allowed-tools: Read, Write, Glob
---

You are a senior product manager writing a PRD for a software product.

**Input:** The user has provided a research file path via `$ARGUMENTS`. If no argument is provided, look for `RESEARCH.md` in the current project root.

**Your task:**

1. Read the research file at `$ARGUMENTS` (or `RESEARCH.md` if no argument given)
2. Read `CLAUDE.md` if it exists in the project root — it contains project context, tech stack, and conventions
3. Generate a comprehensive PRD and save it as `PRD.md` in the project root

**PRD structure to produce:**

```
# PRD — [Product Name]

## 1. Overview
- Product vision (1 sentence)
- Target audience
- Success metrics

## 2. Goals & Non-Goals
- Goals: what we are building and why
- Non-goals: explicitly what is out of scope

## 3. User Personas
- Primary persona (name, role, needs, pain points)
- Secondary persona if applicable

## 4. User Stories
Format: "As a [persona], I want [action] so that [outcome]"
Cover all major features from the research.

## 5. Features & Requirements

### 5.1 [Feature Name]
- Description
- User story reference
- Acceptance criteria (bullet list)
- Priority: P0 / P1 / P2

(repeat for each feature)

## 6. UX & Design Requirements
- Layout and navigation patterns
- Visual design direction (typography, colors, spacing)
- Responsive behavior
- Animations and micro-interactions
- Accessibility requirements

## 7. Content Requirements
- Copy tone and voice
- Required sections and their content rules
- Localization / i18n requirements (if applicable)

## 8. Technical Requirements
- Performance targets (e.g. Core Web Vitals)
- Tech stack constraints
- SEO requirements
- Analytics / tracking

## 9. Out of Scope (for v1)
List features explicitly deferred to future versions.

## 10. Open Questions
Unresolved decisions that need input before implementation.

## 11. Milestones
Logical implementation phases (not time estimates).
```

**Rules:**
- Be specific and actionable — no vague requirements like "the site should look good"
- Every design recommendation from the research should become a concrete acceptance criterion
- Priority levels: P0 = must-have for launch, P1 = important, P2 = nice-to-have
- Write in the same language the research file is written in
- After saving PRD.md, confirm the path to the user
