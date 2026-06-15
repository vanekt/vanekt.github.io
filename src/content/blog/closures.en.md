---
title: "Closures in JavaScript: another interview classic"
date: 2026-06-09
description: "Continuing the interview prep series. After the event loop, the next must-know topic is closures. They come up constantly."
tags: ["JavaScript"]
lang: en
urlSlug: closures
draft: false
---

Continuing the interview prep series. After the event loop, the next must-know topic is closures. They come up constantly.

---

## What is a closure

A closure is a function that remembers the variables from the scope where it was created, even after that scope has finished executing.

Imagine a musician who learned a melody at rehearsal. The rehearsal is over, but the musician remembers the melody and keeps playing it at concerts, improvising, changing it a little. The rehearsal context is long gone, but the melody lives on.

A function in JavaScript works the same way. When it's created inside another function, it remembers the variables from the outer scope and can use and even modify them after the outer function has finished.

---

## Simple example

```js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

Let's trace what happens:

1. `createCounter` creates the variable `count` and returns a new function
2. `createCounter` finishes, but the returned function keeps access to `count`
3. Each time `counter()` is called, the function reads the same `count` variable and increments it
4. `count` stays in memory as long as there's a reference to `counter`

`count` is not destroyed after `createCounter` finishes because the inner function holds a reference to it.

---

## How it works under the hood

When JavaScript executes a function, it creates a lexical environment for it: an object that stores all the variables of that function. Normally this environment is destroyed when the function finishes.

But if another function is created inside it, the inner function holds a reference to the outer function's lexical environment. As long as the inner function exists, the garbage collector leaves that environment alone.

The inner function keeps the outer environment alive for as long as needed.

A function sees not just its immediate outer scope, but the entire chain up to the global scope. Each nested environment holds a reference to its parent.

---

## Private variables through closures

Closures let you hide variables from outside code. It's one way to implement encapsulation in JavaScript.

```js
function createUser(name) {
  let loginCount = 0;

  return {
    login() {
      loginCount++;
      console.log(`${name} logged in. Total logins: ${loginCount}`);
    },
    getCount() {
      return loginCount;
    },
  };
}

const user = createUser("Bob");
user.login(); // Bob logged in. Total logins: 1
user.login(); // Bob logged in. Total logins: 2
console.log(user.getCount()); // 2
console.log(user.loginCount); // undefined — not accessible from outside
```

`loginCount` is only accessible inside the closure. You can't reach it directly from outside, only through the `login` and `getCount` methods.

---

## Memoization

Closures are handy for caching results of heavy computations.

```js
function createMemoize(fn) {
  const cache = {};

  return function (n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    cache[n] = fn(n);
    return cache[n];
  };
}

function slowSquare(n) {
  return n * n; // let's say this is an expensive calculation
}

const memoSquare = createMemoize(slowSquare);

console.log(memoSquare(4)); // computes: 16
console.log(memoSquare(4)); // from cache: 16
console.log(memoSquare(5)); // computes: 25
```

The `cache` object lives in the closure, is inaccessible from outside, and persists across calls: new results are added to it and available on the next lookup.

---

## Problem cases

### Classic interview question

Here's a task that comes up on almost every technical interview. What does this code output?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

At first glance this looks like it should print `0 1 2`. It actually prints `3 3 3`.

Let's break it down:

1. `var` doesn't create block scope: there's one variable `i` for the whole loop
2. `setTimeout` defers callback execution
3. By the time the callbacks run, the loop has finished and `i` is `3`
4. All three callbacks closed over the same variable `i`, not its value at the time of iteration

There are two ways to fix this.

With `let` instead of `var`, a separate variable is created for each iteration:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// 0 1 2
```

Or with an immediately invoked function (IIFE): each step of the loop creates its own variable `j` with the value of `i` at that step:

```js
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 0);
  })(i);
}
// 0 1 2
```

---

### Memory leak

Closures keep the outer environment in memory. If a reference to the function lives for a long time and the environment holds heavy data, that can become a problem.

```js
function processData() {
  const bigArray = new Array(1000000).fill("data");

  return function () {
    // this function doesn't use bigArray,
    // but bigArray still stays in memory
    return "done";
  };
}

const fn = processData();
// bigArray stays in memory as long as fn exists
```

The function closed over the entire lexical environment of `processData`, including `bigArray`, even though it doesn't use it. As long as `fn` exists, `bigArray` won't be garbage collected.

To free the memory, set the variable to `null`: `fn = null`. The garbage collector will see that there are no more references to the function and remove it along with `bigArray`. In practice this matters when a function is stored long-term: in a global variable, in a module, or in a store. If `fn` is a local variable, memory will be freed automatically once the outer function finishes.

---

## Why it comes up on every interview

Understanding closures means understanding how JavaScript manages scope and memory. Without it, it's hard to explain why code behaves in unexpected ways.

A few situations where not knowing closures causes problems:

- The classic `var` trap in loops with async callbacks: all handlers read the same variable instead of its value at the time of iteration
- Unexpected memory leaks: a function holds an object in memory that it no longer needs
- Unexpected state, when a function reads a variable that other code has already changed by the time it runs

That said, closures are everywhere in real code. Callbacks, event handlers, React hooks — all of it works because of closures.
