---
title: "Event Loop: how JavaScript does multiple things while being single-threaded"
date: 2026-06-05
description: "Event loop almost always makes it onto my interview prep list. I cover call stack, browser APIs, task queues, rendering, and the classic pitfalls."
tags: ["JavaScript"]
lang: en
urlSlug: event-loop
draft: false
---

Every time I'm job hunting, I refresh my knowledge on the basics, because the theory tends to fade over time. Event loop almost always makes it onto my review list, since it's one of the most likely topics on a technical interview. This time I decided not just to review it, but to write an article. Maybe it'll be useful for someone else too.

---

## JavaScript is single-threaded

JavaScript runs on a single thread and does exactly one thing at a time.

Imagine a cook with one pair of hands, making soup. He does everything himself, strictly one thing at a time: first he puts the broth on to boil, then chops the vegetables, adds them to the broth, salts it, stirs.

JavaScript works the same way, executing tasks one after another.

But what if you need asynchronous work? If JavaScript is single-threaded, how does it send a request to an API without freezing the page?

---

## Call Stack

Everything JavaScript is executing right now is in the Call Stack.

It works like a stack of pancakes the cook made before the soup: the top pancake gets taken first.

```js
function greet(name) {
  return `Hi, ${name}`;
}

function sayHello() {
  const message = greet("Bob");
  console.log(message);
}

sayHello();
```

Let's trace the execution:

1. The call to `sayHello()` enters the stack
2. Inside `sayHello`, the function `greet('Bob')` is called, its call sits on top of the first call in the stack
3. The function `greet` computes the string `'Hi, Bob'`, returns it, and exits the stack
4. The call to `console.log(message)` prints the string to the console and also exits the stack
5. `sayHello` has nothing left to do, it finishes and exits the stack. All calls are done, the stack is now empty.

This is regular synchronous code: each function runs to completion before the next one starts.

---

## Browser APIs: who does the async work?

Let's go back to the cook analogy. Once the broth is on the stove, he doesn't stand next to it waiting for it to boil, but goes straight to chopping vegetables. As soon as the broth boils, he can step away from chopping and go turn down the heat, then comes back to the vegetables. When the broth is ready and the vegetables are chopped, he adds them to the pot. The cook delegated part of the work to the stove.

JavaScript works the same way. When you write `setTimeout(callback, 1000)`, JavaScript doesn't wait a second. It passes the task to the browser and keeps executing the next code, while the browser counts down the time on its own threads.

The same with `fetch`: JavaScript doesn't hang waiting for a server response, but tells the browser to make the request and notify it when the result arrives.

JavaScript is not asynchronous on its own. It delegates asynchronous work to the browser, which can run things in parallel. While the browser handles a network request or a timer, JavaScript keeps executing other code.

---

## Queues: where results go

When the browser finishes its work (a timer fired, an API response arrived), it puts a callback into one of the queues.

The **macrotask queue** receives callbacks from `setTimeout` and `setInterval`, as well as DOM event handlers: clicks, scroll, keyboard input.

The **microtask queue** receives callbacks from `.then()` and `.catch()` on a Promise, as well as tasks added via `queueMicrotask()`.

Microtasks have higher priority, and this is important to understand in order to predict execution order.

---

## Event Loop: how it all connects

Event Loop watches the Call Stack and the queues and runs tasks in a strict order:

1. Executes all synchronous code top to bottom: each function enters the Call Stack, runs to completion, and exits, until the stack is empty
2. Takes microtasks from the microtask queue one by one, places each one in the Call Stack and executes it to completion, then takes the next one, and so on until the queue is empty, including new tasks that were added in the process
3. If approximately 16ms have passed and something changed in the DOM, the browser draws a new frame and updates what the user sees on screen
4. Takes exactly one macrotask from the macrotask queue, places it in the Call Stack and executes it to completion. Unlike microtasks, after one macrotask Event Loop doesn't take the next one immediately, but returns to step 2
5. Returns to step 2: checks the queues again and continues the cycle

Synchronous code always runs first, microtasks are all executed before the next step, and only one task is taken from the macrotask queue per cycle.

---

## Classic interview question

Here's a task that comes up on almost every technical interview. Look at the code and say what the console will output, and in what order.

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

Let's break it down step by step:

1. `console.log('A')`: synchronous call. Output: **A**
2. `setTimeout`: passed to the browser. The callback with 'B' goes to the macrotask queue
3. `Promise.resolve().then(...)`: Promise is already resolved, the callback with 'C' goes directly to the microtask queue
4. `console.log('D')`: synchronous call. Output: **D**
5. Stack is empty. Event Loop takes from the microtask queue, callback with 'C'. Output: **C**
6. Microtask queue is empty. Takes one macrotask, callback with 'B'. Output: **B**

**Result: A → D → C → B**

`setTimeout` with a delay of `0` runs last, because it's a macrotask and the microtask queue is flushed first.

---

## Microtask inside a macrotask

What happens if a Promise is created inside `setTimeout`?

```js
setTimeout(() => {
  console.log("macro 1");
  Promise.resolve().then(() => console.log("micro after macro 1"));
}, 0);

setTimeout(() => console.log("macro 2"), 0);
// macro 1 → micro after macro 1 → macro 2
```

After the first macrotask, Event Loop checks the microtask queue and finds a new Promise callback there, then executes it before moving to the next `setTimeout`.

This means that promises created inside one `setTimeout` will always run before the next `setTimeout`.

---

## Problem cases

### Infinite microtask chain = page freeze

```js
function loop() {
  Promise.resolve().then(loop);
}
loop(); // page freezes
```

Event Loop will never exit step 2, because the microtask queue keeps refilling. The browser doesn't draw frames, the interface doesn't respond to clicks.

An infinite `setTimeout`, unlike this, is safe:

```js
function loop() {
  setTimeout(loop, 0);
}
loop(); // page works fine
```

Each call to `setTimeout` puts the next iteration into the macrotask queue, not the microtask queue. Event Loop doesn't get stuck at step 2: between each iteration it has time to draw a frame and handle user events.

---

### Long synchronous code blocks everything

```js
button.addEventListener("click", () => {
  const start = Date.now();
  while (Date.now() - start < 3000) {} // loop runs for 3 seconds
});
```

While the `while` loop is running, the Call Stack is occupied, and Event Loop can't take a single task from the queues: for that, the stack needs to empty first. The page stops responding to clicks, the browser doesn't draw frames, the user sees a frozen page.

For heavy computations there are two options: break the task into parts using `setTimeout`, or move it to a Web Worker, a separate thread for JS code without access to the DOM.

---

## Rendering: where it fits in

The browser draws the screen about 60 times per second, one frame every 16ms. Rendering happens between macrotasks, after all microtasks have been executed.

For visual updates, like animations, there is the `requestAnimationFrame` function: it takes a callback and runs it right before the next render, not at an arbitrary moment like `setTimeout`. If synchronous code or a chain of microtasks takes more than 16ms, the browser skips drawing a frame and stutters may appear in the interface, for example in animations.

---

## Why it comes up on every interview

Understanding the event loop means understanding how JavaScript works in the browser. Without knowing this, you can write code for years and run into behavior that looks like magic.

Here are a few situations where not understanding how the event loop works can lead to problems:

- You call `setState` and immediately read the updated value, but it's not there yet, because the update happens asynchronously
- A heavy synchronous loop blocks the Call Stack, and until it finishes, Event Loop can't take a single task from the queues, and the interface stops responding to clicks
- Code with `setTimeout(..., 0)` is expected to run very soon, but in reality several Promise chains may complete before it runs and change the state

That said, you can memorize this theory in an evening without writing a single line of asynchronous code. But that's a conversation about the quality of technical interviews, not about the event loop.
