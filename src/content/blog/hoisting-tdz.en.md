---
title: "Hoisting and the Temporal Dead Zone in JavaScript"
date: 2026-06-12
description: 'Continuing the interview prep series. After the event loop and closures, the next topic is hoisting. It comes up less often, but "variables get hoisted" is too weak an answer. Let''s see how it works under the hood.'
tags: ["JavaScript"]
lang: en
urlSlug: hoisting-tdz
cover: hoisting-tdz.webp
draft: false
---

Continuing the interview prep series. After the event loop and closures, the next topic is hoisting. It comes up less often, but "variables get hoisted" is too weak an answer. Let's see how it works under the hood.

---

## What is hoisting

JavaScript executes code in two phases. First it goes through all the code in the file and registers all declarations: variables, functions, classes. Then it executes code line by line.

Hoisting is a consequence of this two-phase process. It's the behavior where declarations are stored in memory before execution reaches them.

Seems straightforward, but there's a catch: not all declarations are stored in memory the same way.

---

## function declaration

A function declaration is stored in memory entirely, along with its body. You can call it before its declaration in the code.

```js
greet("Bob"); // 'Hello, Bob' — works

function greet(name) {
  console.log(`Hello, ${name}`);
}
```

During the creation phase, the engine found `function greet` and stored it in memory right away. By the time `greet('Bob')` is called, the function was already available, even though it was declared lower in the code.

The same applies to async functions `async function` and generators `function*`: if a declaration starts with the `function` keyword, it's hoisted entirely.

---

## var

With `var` the behavior is slightly different: only the variable declaration goes into memory, with the value `undefined`. The assignment happens later, when execution reaches that line.

```js
console.log(name); // undefined — not an error
var name = "Bob";
console.log(name); // 'Bob'
```

During the creation phase, the engine saw `var name` and reserved a spot in memory with the value `undefined`. The assignment `'Bob'` happens when execution reaches that line.

---

## let and const: TDZ

`let` and `const` are also registered during the creation phase, but not initialized — they don't even get the value `undefined`. They exist in memory, but can't be accessed — any attempt before the declaration line will throw a `ReferenceError`.

That window is called the Temporal Dead Zone, TDZ.

```js
console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;
```

```js
console.log(typeof age); // ReferenceError — typeof doesn't help inside TDZ
let age = 25;
```

Unlike `var`, which silently returns `undefined`, accessing `let`/`const` before the declaration throws a `ReferenceError` — stricter and more predictable behavior, less chance of missing a bug.

---

## function expression and arrow functions

If a function is assigned to a variable, hoisting follows the rules of that variable, not the rules of the function.

```js
greet(); // TypeError: greet is not a function

var greet = function () {
  console.log("Hello");
};
```

During the creation phase, only `var greet` with the value `undefined` went into memory. Before the assignment line, `greet` is just `undefined`, not a function. Calling `undefined()` gives a `TypeError`.

```js
greet(); // ReferenceError: Cannot access 'greet' before initialization

const greet = () => {
  console.log("Hello");
};
```

In this example the arrow function is declared with `const`, so it falls into the TDZ — trying to call it before the declaration throws a `ReferenceError`.

---

## class

The engine handles a class declaration like `let`/`const`: it registers it during the creation phase but doesn't initialize it — the class also falls into the TDZ.

```js
const user = new User("Bob"); // ReferenceError

class User {
  constructor(name) {
    this.name = name;
  }
}
```

Unlike `function declaration`, you can't use a class before its declaration.

---

## Classic interview question

What does this code output?

```js
console.log(typeof foo);
console.log(typeof bar);

var foo = 1;
function bar() {}
```

Without knowing how hoisting works, expectations can vary: an error or `undefined` for both. Actually:

- `typeof foo` — `'undefined'`: `var foo` was registered during the creation phase with the value `undefined`, `typeof undefined` returns the string `'undefined'`
- `typeof bar` — `'function'`: `function bar` was stored in memory as a function declaration — along with its body

Now a harder version:

```js
var foo = 1;

function foo() {
  return 2;
}

console.log(typeof foo); // 'number'
```

During the creation phase, `function foo` is stored in memory first. Then execution reaches `var foo = 1` and overwrites the value with a number. The `var foo` declaration is ignored — the name is already reserved by the function, but the assignment runs.

---

## Why it comes up in interviews

Hoisting is not a standalone language feature — it's more of a side effect of how the engine reads code.

A few situations where not knowing hoisting causes problems:

- **Using `var` before the declaration.** The variable already exists in memory with the value `undefined`, even though the assignment hasn't happened yet. The code doesn't throw an error, it just silently returns `undefined` instead of the actual value.
- **The temporal dead zone with `let` and `const`.** The variables are already registered, but can't be accessed — accessing them before the declaration line throws a `ReferenceError`.
- **The difference between `function declaration` and `function expression`.** The first is hoisted entirely and available before the declaration. The second is not. They look similar, behave differently.
- **Mixing `function declaration` and `var` with the same name.** The execution order doesn't match the order in the code, and the result depends on what exactly went into memory and when.

In an interview, this topic shows whether you understand how the engine executes code — and how not to shoot yourself in the foot with its traps.
