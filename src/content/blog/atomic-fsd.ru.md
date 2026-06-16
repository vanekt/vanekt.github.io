---
title: "Atomic Design + FSD: можно ли использовать вместе"
date: 2026-05-21
description: "Дизайнер делает всё в Figma по Atomic Design. Команда хочет FSD. Что говорит официальная документация, где возникают трения и что реально работает."
tags: ["Architecture"]
lang: ru
urlSlug: atomic-fsd
cover: atomic-fsd.webp
draft: false
---

Представьте ситуацию: дизайнер сдаёт макет в Figma, и в нём всё по правилам Atomic Design: atoms, molecules, organisms, шаблоны страниц. Команда разработчиков смотрит на это, одобрительно кивает, но хочет строить проект по FSD и разложить код по слоям в зависимости от бизнес-контекста: shared, entities, features, widgets, pages. Можно ли одно совместить с другим?

Согласно официальной документации FSD, это вполне реально. Методология прямо говорит, что не требует и не запрещает использовать Atomic Design вместе с FSD, потому что они отвечают за разное. Atomic Design описывает как компонент устроен изнутри: как простые элементы собираются в более сложные блоки. FSD описывает где компонент живёт в проекте, в зависимости от того, знает ли он о бизнесе: о конкретной сущности (Product, Order, User), о конкретном действии пользователя, или не знает вовсе. Документация FSD предлагает применять Atomic Design для слоя shared/ui.

**atoms и molecules.** Для атомов и молекул это работает без вопросов: Button, Input, FormField не знают ни о каком бизнесе, им в shared/ui самое место.

**organisms.** Сложности могут возникнуть на уровне organisms, потому что они часто содержат бизнес-логику. Возьмём карточку товара: заголовок, цена, кнопка в корзину, статус наличия. В дизайне это organism. В коде это компонент, который знает про Product и Cart. В shared/ui ему нет места.

В этом случае логичнее разделить его на два компонента: абстрактный Card принимает пропсы - title, price, badge, onAction - и ничего не знает о бизнесе, живёт в shared/ui. ProductCard в entities/product берёт реальные данные из Product и собирает тот Card. Organism из Figma превращается в два компонента в коде.

Organism остаётся в shared/ui пока он generic. Как только начинает знать про конкретную сущность или действие, это уже entities, features или widgets по FSD.

```
Atomic Design       FSD

atoms/          →   shared/ui/atoms/
  Button.tsx          Button.tsx
  Input.tsx           Input.tsx

molecules/      →   shared/ui/molecules/
  NavItem.tsx         NavItem.tsx
  FormField.tsx       FormField.tsx

organisms:
  Card, Modal   →   shared/ui/organisms/   (generic, без бизнеса)
  ProductCard   →   entities/product/      (знает про Product)
  OrderHistory  →   widgets/order-history/ (знает про User + Order)

template        →   shared/ui/layouts/MainLayout.tsx
page            →   pages/catalog/CatalogPage.tsx
```

**templates и pages.** С templates и pages проще: pages из Atomic Design и pages из FSD - это фактически одно и то же: страница с реальным контентом на роуте. Templates из Atomic Design в FSD могут быть представлены в виде layout-компонентов, обычно на уровне app или shared/ui.

```tsx
// template → layout
export const MainLayout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

// page → роут-компонент
export const CatalogPage = () => (
  <MainLayout>
    <ProductList />
  </MainLayout>
);
```

Atomic Design хорошо работает там, где нет бизнес-контекста: дизайн-системы, компонентные библиотеки, shared/ui внутри FSD-проекта. Совместить оба подхода можно, но это требует дисциплины в команде - держать organisms чистыми, не тащить бизнес-логику в shared. Скорее всего это оправдано только в крупных долгосрочных проектах, где дизайн-система живёт отдельно от приложения. В остальных случаях проще не смешивать: Atomic Design для библиотеки компонентов, FSD для приложения.
