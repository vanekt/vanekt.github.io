---
title: "Accessibility basics"
date: 2026-04-20
description: "A few years ago I quietly stopped using a mouse. Then I opened one of my old projects and found the login form didn't work with the keyboard. The same form I once shipped as a finished feature."
tags: ["Frontend"]
lang: en
urlSlug: accessibility
draft: false
---

A few years ago I quietly stopped using a mouse. Trackpad, keyboard shortcuts, that was enough. Then I opened one of my old projects, tried to log in, and the login form didn't work with the keyboard. The same form I once shipped as a finished feature.

At first it feels like an edge case: who logs in without a mouse. But after a few years without one, you start noticing keyboard navigation issues everywhere. Open a form with Tab and you immediately see: the focus indicator is gone, Tab jumped to the wrong element, the Submit button is completely unreachable without a mouse.

Accessibility is often thought of as "for people with disabilities", but it's really about comfort. For everyone. The baseline isn't actually that much:

**Visible focus indicator.** When an element has focus, it should be noticeable. Browsers draw a default outline that many developers reset with `outline: none` and add nothing back.

```css
/* ❌ */
:focus {
  outline: none;
}

/* ✅ */
:focus-visible {
  outline: 2px solid #0066cc;
}
```

**Logical Tab order.** Tab should follow the visual order on the page. If the layout uses absolute positioning or flex with `order`, the DOM order and visual order can diverge. Tab through a form — if focus jumps unpredictably, the navigation order is broken.

**Labels for icon buttons.** An icon without text needs an aria-label. Without it, a screen reader announces "button" and goes silent. The user has no idea what it does.

```html
<!-- ❌ -->
<button><svg>...</svg></button>

<!-- ✅ -->
<button aria-label="Close"><svg>...</svg></button>
```

**Color contrast.** Gray text on a light background is hard to read — not just for people with vision impairments: sunlight, fatigue, a small screen. WCAG minimum: 4.5:1 for regular text, 3:1 for large. Lighthouse will catch these automatically.

**Semantics.** A button should be `<button>`, not a `<div>` with onclick. A field should be linked to `<label>` via `for`/`id`: clicking the label text focuses the field, and the screen reader announces it on Tab.

```html
<!-- ❌ -->
<div onclick="submit()">Submit</div>

<!-- ✅ -->
<button type="submit">Submit</button>
<label for="email">Email</label>
<input id="email" />
```

**alt for images.** If the image carries meaning, it needs a descriptive alt. If it's decorative, use `alt=""` so the screen reader skips it instead of reading out the filename.

```html
<!-- ❌ -->
<img src="chart.png" />

<!-- ✅ meaningful -->
<img src="chart.png" alt="Sales grew 40% in Q3" />

<!-- ✅ decorative -->
<img src="divider.svg" alt="" />
```

**Don't convey meaning through color alone.** An error highlighted only in red will go unnoticed by people with color vision deficiency. Add an icon or text alongside.

**Form errors.** Linking the error message to the field with `aria-describedby` makes the screen reader announce what's wrong, not just that something is wrong.

```html
<!-- ❌ -->
<input id="email" aria-invalid="true" />
<p>Enter a valid email</p>

<!-- ✅ -->
<input id="email" aria-invalid="true" aria-describedby="email-error" />
<p id="email-error">Enter a valid email</p>
```

**Skip link.** The first link on the page, visually hidden, that jumps straight to the main content. Without it, keyboard users Tab through the entire navigation on every page load.

```html
<a href="#main" class="skip-link">Skip to main content</a>
```

```css
.skip-link {
  position: absolute;
  top: -100%;
}
.skip-link:focus {
  top: 0;
}
```

**Animations.** Some users get physically ill from motion. One media query handles it.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

**Modal dialogs.** On open, focus should move to the first form element or the close button. On close, it should return to the element that triggered the modal. Without this, keyboard users get lost. Sounds obvious, but it requires a deliberate decision, and nobody does it by default.

Most of these issues go unnoticed simply because nobody thinks about them during development and nobody tests for them. Most of it takes an hour to fix, but it stays broken for years.

One more thing: in the US, inaccessible websites have led to thousands of ADA lawsuits. In the EU, the European Accessibility Act came into full effect in 2025. In many markets, it's a legal requirement, not a recommendation.
