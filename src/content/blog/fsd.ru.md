---
title: "FSD: когда папка components превращается в свалку"
date: 2026-05-12
description: "Пять разработчиков, год работы, 300+ файлов в папке components. Что такое Feature-Sliced Design, как работают его шесть слоёв и когда нужны все из них."
tags: ["Architecture"]
lang: ru
urlSlug: fsd
draft: false
---

Представьте ситуацию: пять разработчиков, год работы, 300+ файлов в папке components. При каждой новой задаче приходится заново вспоминать что где лежит и какой компонент за что отвечает. Часто становится непонятно, куда класть новый файл, возникает путаница с импортами, и часть кода одной фичи перетекает в другую.

## Проблема

Так может выглядеть проект через год без продуманной структуры:

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
  ...и ещё 300+ файлов

store/
  orderStore.ts
  ...30+ файлов

utils/
  orderUtils.ts
  ...100+ файлов
```

## Что такое FSD

Один из вариантов улучшить ситуацию — разложить компоненты по папкам-фичам.

До:

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

После:

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

## Шесть слоёв

Feature-Sliced Design — та же идея с папками-фичами, но с чёткими правилами: шесть слоёв, у каждого своя зона ответственности, и строгий порядок кто у кого может импортировать.

```
app       провайдеры, роутинг, глобальные стили
pages     страница целиком: catalog, orders, profile
widgets   готовые блоки: header, product-card, sidebar
features  действия пользователя: auth-by-email, add-to-cart
entities  бизнес-сущности: user, product, order
shared    утилиты, UI-kit, api-клиент
```

## shared

Сюда кладётся всё, что не знает про бизнес: Button, Input, formatDate, api-клиент. Если компонент знает про User или Order, это уже другой слой.

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

Бизнес-сущности без логики действий. Order тут просто описан, place-order уже в features.

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

Действия пользователя. Если в названии нет глагола, скорее всего это не feature, а entity.

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

Готовые блоки страницы, которые комбинируют entities и features. OrderList знает про карточку заказа и кнопку отмены.

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

## pages и app

pages собирают виджеты под конкретный маршрут и больше ничего не делают. app знает про всё, поэтому он сверху.

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

## Правило импортов

Импорт идёт только сверху вниз. Нижние слои не знают о верхних. При расслоении существующего проекта именно нарушения этого правила подсвечивают проблемные места. Если импорт полез вверх, значит код лежит не в том слое.

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

## Куда положить новый файл

Начинаем с shared и идём вверх до первого совпадения. Если не подходит ни один слой, скорее всего файл делает сразу несколько вещей.

```
Это вообще про бизнес?
  Нет → shared

Это сущность без действий?
  → entities

Это действие пользователя?
  → features

Это блок из нескольких частей?
  → widgets

Это под конкретный маршрут?
  → pages
```

## Не обязательно использовать все шесть слоёв

Можно начать с двух: app и shared. Постепенно подключить pages, остальное переложить в widgets и распиливать на entities и features, когда в widgets накапливается бизнес-логика и они разрастаются.

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

Уже лучше, чем одна папка components на 300+ файлов.
