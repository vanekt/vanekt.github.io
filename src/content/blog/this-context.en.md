---
title: "`this` in JS: context and how it's lost"
date: 2026-06-27
description: "Continuing the interview prep series. The value of this depends on how the function is called — not where it's defined. Call, apply, bind, and how to avoid losing context."
tags: ["JavaScript"]
lang: en
urlSlug: this-context
cover: this-context.webp
draft: false
---

Continuing the series on interview prep fundamentals. Next topic: `this`.

In many popular languages, `this` typically refers to the object whose method was called. In JavaScript it works a bit differently: the value of `this` depends on how exactly the function is called.

Consider this code:

```js
const user = {
  name: 'Bob',
  greet() {
    console.log('Hello,', this.name);
  }
};

user.greet();          // Hello, Bob

const greet = user.greet;
greet();               // Hello, undefined
```

It seems like the same function on the same object, and you'd expect the same result — but it's not that simple.

---

## How `this` works

### Object method

When a function is called as an object method, `this` refers to that object:

```js
user.greet(); // this === user
```

### Regular call

When a function is called without an object before the dot, `this` is lost. In strict mode it will be `undefined`, in non-strict mode it will refer to the global object `globalThis` (in the browser, that's `window`):

```js
const greet = user.greet;
greet(); // this === undefined
```

Strict mode is on by default in ES modules and class bodies, and TypeScript adds it to the compiled output. In a modern project it's almost always there.

### Arrow function

An arrow function has no `this` of its own. It takes `this` from the scope where it was created, and overriding it via `call`, `apply`, or `bind` is not possible.

Arrow functions are handy in callbacks when you need to preserve `this` from the surrounding code:

```js
const user = {
  name: 'Bob',
  greet() {
    setTimeout(() => {
      console.log(this.name); // Bob
    }, 1000);
  }
};
```

`this` inside `setTimeout` here is taken from `greet`, where `this` refers to `user`. If a regular function (function expression) were used inside `setTimeout`, it would have its own `this` — and in strict mode it would be `undefined`.

You can't use an arrow function as an object method if you need `this` inside it.

```js
const user = {
  name: 'Bob',
  greet: () => {
    console.log(this.name); // undefined
  }
};
```

The arrow function here is created in the global context, so `this` will be `undefined`, not a reference to `user`. In that case, use a regular method — shorthand or function expression:

```js
const user = {
  name: 'Bob',
  greet() {
    console.log(this.name); // Bob
  },
  // or
  greet: function() {
    console.log(this.name); // Bob
  }
};
```

---

## `call`, `apply`, `bind`

These three methods let you explicitly set `this` for a function.

`call` invokes the function immediately, arguments are passed one by one:

```js
function introduce(greeting, planet) {
  console.log(greeting + ", I'm " + this.name + ' from planet ' + planet);
}

const user = { name: 'Bob' };
introduce.call(user, 'Hello', 'Earth'); // Hello, I'm Bob from planet Earth
```

`apply` does the same thing as `call`, but arguments are passed as an array:

```js
introduce.apply(user, ['Hello', 'Earth']); // Hello, I'm Bob from planet Earth
```

`bind` doesn't invoke the function right away — it returns a new function with a fixed `this`:

```js
const boundIntroduce = introduce.bind(user);
boundIntroduce('Hello', 'Earth'); // Hello, I'm Bob from planet Earth
```

---

## How to preserve `this`

Context is lost every time a function is called without an object before the dot. Here are the most common scenarios.

When a method is passed as a callback, it loses its connection to the object:

```js
const user = {
  name: 'Bob',
  greet() {
    console.log('Hello,', this.name);
  }
};

setTimeout(user.greet, 1000);              // ❌ this is lost: Hello, undefined
setTimeout(user.greet.bind(user), 1000);   // ✅ bind fixes this: Hello, Bob
setTimeout(() => user.greet(), 1000);      // ✅ method is called on the object: Hello, Bob
```

`bind` returns a new function with a fixed `this`. The arrow wrapper works differently: the method is not extracted from the object — it's called directly on it.

When `this` is needed inside a callback within a method, the difference between a function declared with `function` and an arrow function matters:

```js
greet() {
  setTimeout(function() {
    console.log(this.name); // ❌ undefined — function has its own this
  }, 1000);

  setTimeout(() => {
    console.log(this.name); // ✅ Bob — this is taken from greet
  }, 1000);
}
```

In old code, the same problem was solved with `self = this`:

```js
greet() {
  const self = this;
  setTimeout(function() {
    console.log(self.name); // ✅ Bob
  }, 1000);
}
```

Arrow functions in ES6 made this pattern unnecessary. In old code you'll find `self`, `that`, or `me` — same idea.

If a method is frequently passed as a callback, it's more convenient to declare it as a class field with an arrow function:

```js
class User {
  name = 'Bob';
  greet = () => {
    console.log('Hello,', this.name); // always Bob
  };
}

const user = new User();
setTimeout(user.greet, 1000); // ✅ Hello, Bob
```

Each instance gets its own copy of `greet` with a fixed `this` — the method can be passed anywhere without `bind`.

---

## Why this comes up in interviews

The `this` question checks whether you understand how JavaScript determines the function's call context.

What you need to know:

- `this` is determined at the moment the function is called, not when it's declared.
- An arrow function has no `this` of its own — it takes it from the outer context, and overriding it via `call`, `apply`, or `bind` is not possible.
- `call` and `apply` invoke the function immediately with an explicit `this`; `bind` returns a new function with a fixed `this`.
- Losing context when passing a method as a callback is a classic source of bugs.

Understanding how `this` works explains a whole class of bugs that otherwise look like magic. More often than not, that understanding comes from a specific bug in production.
