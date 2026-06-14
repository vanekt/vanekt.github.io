---
title: "First Vue production project after years of React"
date: 2026-04-15
description: "First Vue project in production after years of React. What surprised me, what felt familiar, and why the switch took a week, not a month."
tags: ["Vue", "React"]
lang: en
urlSlug: vue-vs-react
draft: false
---

First Vue project in production after years of React. Expected to relearn everything. Most of it was already familiar.

The core ideas are nearly identical: components, props, state, lifecycle, slots (same as children in React). Under different terms and syntax, you find the same answers to the same problems. At a deeper level, both are implementations of the same idea: a reactive UI runtime. React pushes updates by re-rendering the whole component. Vue pulls them by tracking reactive dependencies. Different "how", same "what".

A few things genuinely surprised me though.

**Reactivity felt cleaner.** In React, derived values need `useMemo`, and you have to explicitly list dependencies in `useEffect`. Forget one: the request doesn't update. Add an extra one: infinite re-render loop.

In Vue, you just declare `computed()`. It figures out its own dependencies. That removes an entire class of bugs you simply stop thinking about.

```jsx
// React
const total = useMemo(
  () => items.reduce(sum, 0),
  [items], // must explicitly list dependencies
);

// Vue
// all changes are tracked automatically
const total = computed(() => items.value.reduce(sum, 0));
```

**Single File Components weren't the red flag I expected.** Before Vue, `.vue` files felt wrong: template, script, and styles in one file, I wanted them separated.

Then I realized I was doing the same thing in React. JSX is markup and logic together. CSS-in-JS adds styles on top. I was just used to it and didn't notice. The difference is in syntax and how explicit it is.

```jsx
// React
<input value={name} onChange={(e) => setName(e.target.value)} />
```

```html
<!-- Vue -->
<input v-model="name" />
```

```jsx
// React
{
  isLoading ? <Spinner /> : <Content />;
}
```

```html
<!-- Vue -->
<Spinner v-if="isLoading" />
<content v-else />
```

**`onMounted` surprised me.** In React, any setup logic goes into `useEffect(() => {}, [])`, it's a reflex. In Vue with `<script setup>`, you can write code at the top level and it runs during setup, before the render. `onMounted` is only needed when you actually need the DOM. At first it felt like I was doing something wrong.

```jsx
// React
useEffect(() => {
  fetchUser();
}, []); // don't forget []
// or it loops forever
```

```js
// Vue (script setup)
fetchUser();
// just write it here
// runs on setup
// no hook needed
```

One more thing: reactive state (ref, reactive, computed) in Vue can be called conditionally. React hooks depend on call order, so `if (condition) { useState(...) }` simply doesn't work. Vue lifts that constraint.

The honest takeaway: at some point I caught myself writing as if I was on React, just with some adjustments. If you know React well, switching to Vue is a week of adjustment, not a month of learning. You think about code the same way, the tools just have different names and behave differently in places.
