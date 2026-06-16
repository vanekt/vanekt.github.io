---
title: "var, let, const: what's the real difference"
date: 2026-06-16
description: "Continuing the interview prep series. let and const are preferred over var — this is common knowledge. Let's look at why and how it all works."
tags: ["JavaScript"]
lang: en
urlSlug: var-let-const
cover: var-let-const.webp
draft: false
---

Continuing the interview prep series. `let` and `const` are preferred over `var` — this is common knowledge. Let's look at why and how it all works.

---

## Scope

The main difference between `var` and `let`/`const` is scope.

`var` is function-scoped: the variable is accessible throughout the function it was declared in, regardless of nested blocks.

`let` and `const` are block-scoped: the variable is only accessible inside the `{}` block it was declared in — whether that's an `if`, `for`, `while`, or just curly braces.

```js
if (true) {
  var a = 1;
  let b = 2;
}

console.log(a); // 1 — var is accessible outside the block
console.log(b); // ReferenceError — let is not accessible outside the block
```

`var` declared at the top level of a script (not a module) becomes a property of the global object `window` in the browser.

`let` and `const` do not become properties of the global object — they stay in script scope.

---

## `var` in a loop: the classic trap

The scope difference is easy to see with `setTimeout` in a loop.

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// 3 3 3
console.log(i); // 3 — var is accessible outside the loop
```

`var` does not create a new variable per iteration — there is one `i` for the entire loop. The loop finishes before the first callback fires, so by that point `i` is already `3`.

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// 0 1 2
console.log(i); // ReferenceError — let is not accessible outside the loop
```

With `let`, a separate binding is created for each iteration, so each callback sees its own `i`.

---

## Redeclaration

`var` allows you to declare a variable with the same name again in the same scope, without throwing an error.

```js
var x = 1;
var x = 2; // works, x = 2

let y = 1;
let y = 2; // SyntaxError: Identifier 'y' has already been declared
```

`var` can also silently overwrite a function with the same name:

```js
function calculate() {
  return 42;
}

var calculate = "oops";
calculate(); // TypeError: calculate is not a function
```

`let` and `const` throw a `SyntaxError` if you try to redeclare a variable or function in the same scope. This catches typos and accidental duplicates at parse time, before the code runs.

---

## `const` is not about immutability

`const` in JavaScript should not be treated as a classic constant. It prevents reassignment of the variable, but does not prevent mutating the contents of an object or array.

```js
const user = { name: "Vasya" };
user.name = "Petya"; // object contents can be mutated

user = {}; // TypeError: Assignment to constant variable
```

```js
const arr = [1, 2, 3];
arr.push(4); // array can be mutated

arr = []; // TypeError
```

`const` guarantees that the variable always points to the same object. What happens inside that object is not its concern. It protects the reference, not the object.

---

## `catch(e)`: the first block scope in history

Before `let` and `const` arrived in ES6, the only block scope in JavaScript was the `catch` block.

```js
try {
  throw new Error("oops");
} catch (e) {
  console.log(e.message); // 'oops'
}

console.log(e); // ReferenceError: e is not defined
```

The variable `e` is only accessible inside the `catch` block. Outside it, `e` does not exist — even before `let` was part of the language.

Looks like a bug that became a feature. Transpilers like Babel used this — they compiled `let` into `try/catch` to emulate block scope in ES5.

---

## What to use in modern code

`var` is best avoided in modern code — function scope and silent redeclaration easily produce bugs that are hard to track down.

Instead of `var`, use `const` in all cases where reassignment is not needed, otherwise, `let`.

```js
// when the value is constant and we don't plan to change it
const MAX_SIZE = 100;
// the object can be mutated, but the variable user cannot be reassigned
const user = { name: "Vasya" };

// when it's clear the variable will be reassigned, use let
let count = 0;
count++;
```

If you want to protect an object from mutation — `Object.freeze()`, but that's a separate topic.

---

## Why this comes up in interviews

`var`, `let`, `const` — this is not just a syntax choice. Each one has a different mechanism for scope and declarations.

- **function scope vs block scope.** `var` in a loop or `if` behaves differently than you might expect. Understanding this difference explains a whole class of bugs.
- **`var` redeclaration.** Silently redeclaring a variable with the same name is a source of hard-to-catch errors. `let` and `const` make this impossible.
- **`const` and objects.** A common misconception: `const` means immutability. In reality, `const` only makes sure the variable does not point to something else — the object inside can be mutated freely.
- **TDZ.** `let` and `const` are not initialized until the line of declaration — more on this in the [article on hoisting](/blog/hoisting-tdz/).

In an interview, this question checks whether you understand how JavaScript manages variables, not just whether you know that `var` is outdated.
