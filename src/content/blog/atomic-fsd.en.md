---
title: "Atomic Design + FSD: can they work together?"
date: 2026-05-21
description: "The designer uses Atomic Design in Figma. The dev team wants FSD. Can you use both? What the official FSD docs say, where the friction is, and what actually works."
tags: ["Architecture"]
lang: en
urlSlug: atomic-fsd
draft: false
---

Imagine a situation: a designer hands over a Figma file built on Atomic Design: atoms, molecules, organisms, templates and pages. The dev team looks at it, nods in approval, but wants to build the project with FSD and organize code by business context: shared, entities, features, widgets, pages. Can you use both?

According to the official FSD docs, yes. The methodology explicitly says it neither requires nor forbids using Atomic Design alongside FSD, because they answer different questions. Atomic Design describes how a component is built internally: how simple elements compose into more complex blocks. FSD describes where a component lives in the project, based on what it knows about the business: a specific entity (Product, Order, User), a specific user action, or nothing at all. The FSD docs suggest applying Atomic Design to the shared/ui layer.

**atoms and molecules.** For atoms and molecules this is straightforward: Button, Input, FormField know nothing about business logic, shared/ui is exactly where they belong.

**organisms.** Things get more interesting at the organism level, because organisms often carry business logic. Take a product card: title, price, add to cart button, stock status. In the design it's an organism. In code it's a component that knows about Product and Cart. It doesn't belong in shared/ui.

The cleaner approach is to split it into two components. An abstract Card takes props - title, price, badge, onAction - and knows nothing about the business, it lives in shared/ui. ProductCard in entities/product takes real Product data and assembles that Card. One organism from Figma becomes two components in code.

```
Atomic Design       FSD

atoms/          →   shared/ui/atoms/
  Button.tsx          Button.tsx
  Input.tsx           Input.tsx

molecules/      →   shared/ui/molecules/
  NavItem.tsx         NavItem.tsx
  FormField.tsx       FormField.tsx

organisms:
  Card, Modal   →   shared/ui/organisms/  (generic, no business context)
  ProductCard   →   entities/product/     (knows about Product)
  OrderHistory  →   widgets/order-history/ (knows about User + Order)

template        →   shared/ui/layouts/MainLayout.tsx
page            →   pages/catalog/CatalogPage.tsx
```

An organism stays in shared/ui as long as it's generic. Once it needs to know about a specific entity or action, it belongs in entities, features, or widgets by FSD.

**templates and pages.** Templates and pages are simpler. Pages in Atomic Design and pages in FSD are essentially the same thing: a page with real content on a route. Templates from Atomic Design map to layout components in code, usually at the app or shared/ui level.

Atomic Design works well where there's no business context: design systems, component libraries, shared/ui inside an FSD project. Combining both approaches is possible, but it takes team discipline - keeping organisms clean and not letting business logic bleed into shared. It's probably only worth it in large, long-running projects where the design system lives separately from the application. Otherwise it's simpler not to mix: Atomic Design for the component library, FSD for the app.
