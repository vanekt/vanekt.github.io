---
title: "FSD: when the components folder becomes a dump"
date: 2026-05-12
description: "Five developers, a year of work, 300+ files in the components folder. What Feature-Sliced Design is, how its six layers work, and when you actually need all of them."
tags: ["Architecture"]
lang: en
urlSlug: fsd
cover: fsd.webp
draft: false
---

Five developers, a year of work, 300+ files in the components folder. Every new task means remembering where things live and which component does what. Nobody knows where to put the new file, imports go in every direction, and code from one feature keeps leaking into another.

## The problem

This is what a project can look like after a year without a clear structure:

```
components/
  Button.tsx
  Header.tsx
  HeaderNew.tsx
  Modal.tsx
  ModalConfirm.tsx
  OrderCard.tsx
  OrderList.tsx
  UserCard.tsx
  UserCardAdmin.tsx
  ...and 300+ more files

store/
  orderStore.ts
  ...30+ files

utils/
  orderUtils.ts
  ...100+ files
```

## What is FSD

One way to improve this: group files by feature instead of type.

Before:

```
components/
  OrderCard.tsx
  OrderList.tsx
  UserCard.tsx
  UserAvatar.tsx

store/
  orderStore.ts

utils/
  orderUtils.ts
```

After:

```
orders/
  OrdersPage.tsx
  OrderCard.tsx
  orderStore.ts
  orderUtils.ts

users/
  UserCard.tsx
  UserAvatar.tsx
```

## Six layers

Feature-Sliced Design is the same idea, but with clear rules: six layers, each with its own responsibility, and a strict order for who can import from whom.

```
app       providers, routing, global styles
pages     full page: catalog, orders, profile
widgets   ready-made blocks: header, product-card, sidebar
features  user actions: auth-by-email, add-to-cart
entities  business entities: user, product, order
shared    utils, UI kit, API client
```

## shared

Everything that knows nothing about the business goes here: Button, Input, formatDate, the API client. If a component knows about User or Order, it belongs in a different layer.

```
shared/
  ui/
    Button.tsx
    Input.tsx
  lib/
    formatDate.ts
    debounce.ts
  api/
    client.ts
```

## entities

Business entities with no action logic. Order is just described here, place-order belongs in features.

```
entities/
  order/
    model/
      types.ts
      store.ts
    ui/
      OrderCard.tsx
```

## features

User actions. If there's no verb in the name, it's probably an entity, not a feature.

```
features/
  place-order/
    ui/
      PlaceOrderButton.tsx
    model/
      placeOrder.ts
  cancel-order/
    ui/
      CancelOrderButton.tsx
    model/
      cancelOrder.ts
```

## widgets

Ready-made page blocks that combine entities and features. OrderList knows about the order card and the cancel button.

```
widgets/
  order-list/
    ui/
      OrderList.tsx
```

```js
// OrderList.tsx
import { OrderCard } from "@/entities/order";
import { CancelOrderButton } from "@/features/cancel-order";
```

## pages and app

pages assemble widgets for a specific route and nothing else. app knows about everything, so it sits at the top.

```
pages/
  orders/
    ui/
      OrdersPage.tsx

app/
  providers/  // Redux, Theme, QueryClient
  router/
  styles/
```

## The import rule

Imports only go downward. Lower layers don't know about upper ones. When migrating an existing project, rule violations are exactly what show you where the problems are. If an import goes up, the code is in the wrong layer.

```
app
 ↓
pages
 ↓
widgets
 ↓
features
 ↓
entities
 ↓
shared
```

## Where to put a new file

Start from shared and go up until something fits. If no layer works, the file is probably doing several things at once.

```
Is this about the business at all?
  No → shared

Is this an entity with no actions?
  → entities

Is this a user action?
  → features

Is this a block made of several parts?
  → widgets

Is this for a specific route?
  → pages
```

## You don't have to use all six layers

You can start with just two: app and shared. Add pages next, put everything else in widgets, and gradually split into entities and features when widgets start accumulating business logic and getting unwieldy.

```
app/
  providers/
  router/

shared/
  ui/
  api/

widgets/
  order-list/
  header/

pages/
  orders/
  home/
```

Already better than one components folder with 300+ files.
