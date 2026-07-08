---
title: "Event bubbling: how it works under the hood"
date: 2026-07-08
description: "Continuing the series on interview prep fundamentals. Today let's talk about event bubbling, why events bubble, and what that means."
tags: ["JavaScript"]
lang: en
urlSlug: event-bubbling
cover: event-bubbling.webp
draft: false
---

Continuing the series on interview prep fundamentals. Today let's talk about event bubbling, why events bubble, and what that means.

---

## How bubbling works

Bubbling works on almost all events (there are exceptions, we'll cover them below). For clarity, we'll look at the most obvious type, a click.

When a user clicks an element, the event goes through three phases:

**Capture:** the event travels top-down, from `window` through all ancestors down to the element where the action happened (the target element).

**Target:** the event reaches the target element.

**Bubble:** the event travels back bottom-up, from the target element to `window`.

```html
<div class="card">
  <button class="btn">Click me</button>
</div>
```

```js
document.querySelector(".card").addEventListener("click", () => {
  console.log("card");
});

document.querySelector(".btn").addEventListener("click", () => {
  console.log("btn");
});
```

Clicking the button logs this to the console:

```
btn
card
```

First the handler on `btn` fires, then the event bubbles up to `card` and the second handler fires.

By default, `addEventListener` listens on the bubble phase. To catch the event during the capture phase, you can pass `true` as the third argument to `addEventListener`.

But not all events follow this rule.

**Exceptions:** `focus`, `blur`, `mouseenter`, `mouseleave`, `load`, `unload`. The event reaches the target and stops there, it doesn't travel up the tree. The capture phase still works normally for them, so you can catch `focus` and `blur` on a parent via `addEventListener('focus', handler, true)`, they just don't have a bubble phase.

---

## event.target and event.currentTarget

An event has two properties, event.target and event.currentTarget. They look very similar, but it's important to understand the difference between them.

**`event.target`** - the element where the event actually happened (what the user clicked)

**`event.currentTarget`** - the element the handler is attached to

```js
document.querySelector(".card").addEventListener("click", (e) => {
  console.log(e.target); // <button class="btn">
  console.log(e.currentTarget); // <div class="card">
});
```

---

## Event delegation

Thanks to bubbling, you can attach a single handler on the parent that catches all events, instead of a handler on every child element.

This solves a performance problem. You don't need to attach a handler to every item in a list, which saves memory, especially for a large list.

```js
// Instead of this:
document.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", handleItem);
});

// You can do this:
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    handleItem(e.target);
  }
});
```

This even works for elements added to the DOM dynamically, after the handler is already set up. You don't need to track every new element and manually attach a handler to it, which means less risk of forgetting to do so.

---

## stopPropagation, stopImmediatePropagation, preventDefault

An event has three methods that are used very often in practice and let you control what happens next:

**`stopPropagation()`** - stops bubbling. Other handlers on the same element will still run.

**`stopImmediatePropagation()`** - stops bubbling and prevents other handlers on the same element from running.

**`preventDefault()`** - cancels the browser's default action for this event: following a link, submitting a form. It doesn't affect bubbling and doesn't stop it.

```js
link.addEventListener("click", (e) => {
  e.preventDefault(); // the link won't open
  // but the event will keep bubbling
});
```

---

## Example: modal bug

Let's look at an example where a click on a button inside a modal closes it in a non-obvious way.

```js
overlay.addEventListener("click", closeModal);

button.addEventListener("click", (e) => {
  saveData();
  // if you forget to call e.stopPropagation()
  // the click bubbles up to overlay and the modal closes
});
```

The fix is simple, add `e.stopPropagation()` on the button. But it's important to understand why this happens: the event went through the bubble phase and reached the handler on `overlay`.

---

## Why this comes up in interviews

Event bubbling is one of those mechanisms that gets used constantly, without always understanding how it works.

- **Bugs with unexpected triggers.** A handler on the parent seems to fire on its own, when actually it's triggered by a click on a child element, the event just bubbled up. This kind of bug is hard to find because it's not immediately obvious that some element further down the tree also reacts to this click.
- **Event delegation.** A popular optimization pattern, but without understanding bubbling it's not obvious why `event.target` points to a child element instead of the one the handler is attached to.
- **The difference between `stopPropagation` and `preventDefault`.** A common mistake is thinking that `preventDefault()` also stops bubbling, or that `stopPropagation()` cancels the browser's default action, following a link, submitting a form. In reality each method only handles one axis, bubbling or the browser's default behavior, and doesn't touch the other.

In interviews, questions about event bubbling are often asked not directly, but through some practical example. Usually it's a bug task, and the answer immediately shows whether the candidate has run into this in production, or only knows the theory.
