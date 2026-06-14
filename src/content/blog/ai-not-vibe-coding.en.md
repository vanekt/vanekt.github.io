---
title: "AI in real development"
date: 2026-05-06
description: "Vibe coding gets all the attention, but I found the real value of AI somewhere completely different — in the boring work that used to take forever."
tags: ["AI"]
lang: en
urlSlug: ai-not-vibe-coding
draft: false
---

Vibe coding is getting discussed as if it's the main value of AI in development. It does look exciting: describe a task, get working code in a few minutes, tweak a couple of things, ship it.

On simple tasks it really does speed things up and lets you get results without much digging into code. On complex tasks there's also a speedup, but the slowdown shows up somewhere else.

To get a quality result, you need to lay everything out before you generate: requirements, architecture, code conventions, dependencies, edge cases. The larger the project, the more you need to make explicit upfront.

After generation comes the review: making sure the style is consistent, context isn't lost between files, there's no code that looks like it was written by three different people. So the claim of x-times faster development is debatable. Time just moves from writing to preparation and review.

I found the real value of AI somewhere completely different: where you don't need to think much, but doing it by hand takes forever.

On one project we were moving a frontend out of a monolith into a separate repository. Each section brought along translation strings: YAML to JSON, changed structure, different key naming conventions. On top of that, instead of two locales we needed four more at migration time. I wrote a custom Claude command for it, and each of those tasks started taking a couple of minutes.

On the same project we needed to migrate a lot of components from Options API to Composition API without changing the business logic. AI took over the routine there too. You still had to review carefully, but the work moved significantly faster.

There are plenty of tasks like this in practice: writing tests and mocks, generating TypeScript types from data structures, boilerplate for new components, checking import order and code style compliance.

For me, the value of AI isn't that you write less code. It's that the most boring parts can now be handed off.
