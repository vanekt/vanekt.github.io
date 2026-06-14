---
title: "Atomic Design: структура для библиотеки компонентов"
date: 2026-05-19
description: "Сотни компонентов в одной папке, Button рядом с ConfirmModal, Input рядом с Header. Что такое Atomic Design, как работают его пять уровней и когда хватает трёх."
tags: ["Architecture"]
lang: ru
urlSlug: atomic-design
draft: false
---

Представьте ситуацию, когда в проекте сотни компонентов, и все они лежат в одной папке components. В начале разработки это может показаться вполне удобным, но по мере роста проекта папка разрастается, и ориентироваться в ней становится всё сложнее. Button рядом с ConfirmModal, Input рядом с Header: простые компоненты и сложные блоки смешаны в одну кучу и лежат на одном уровне.

## Проблема

```
components/
  Button.tsx
  Input.tsx
  SearchForm.tsx
  ProductCard.tsx
  Header.tsx
  Modal.tsx
  ConfirmModal.tsx
  ...ещё 40+
```

## Пять уровней

Atomic Design предлагает разделить компоненты на пять уровней: от базовых кирпичей до готовых страниц.

```
atoms        базовые UI-элементы
molecules    комбинации атомов
organisms    сложные блоки
templates    макет без реальных данных
pages        макет с реальным контентом
```

## atoms

Базовые элементы интерфейса, которые нельзя разбить на что-то более простое. Atom не привязан к конкретному месту: Button одинаково работает в форме, модалке или шапке страницы.

```
atoms/
  Button.tsx
  Input.tsx
  Icon.tsx
  Label.tsx
```

## molecules

Если компонент объединяет несколько атомов под одну задачу, это molecule. Например, SearchForm - это микс атомов Input и Button, которые вместе образуют что-то большее. Молекула решает одну конкретную задачу.

```
molecules/
  SearchForm.tsx   // Input + Button
  FormField.tsx    // Label + Input
```

```tsx
// SearchForm.tsx
import { Input, Button } from "../atoms";

export const SearchForm = () => (
  <form>
    <Input placeholder="Search..." />
    <Button>Search</Button>
  </form>
);
```

## organisms

Самостоятельные разделы интерфейса, которые могут состоять из нескольких молекул и атомов или даже других организмов. Например, шапка сайта Header объединяет молекулы навигации Nav и поиска SearchForm и атом логотипа Logo. Organism в отличие от молекулы - более сложный блок, который может выполнять сразу несколько задач и функционировать независимо на странице.

```
organisms/
  Header.tsx    // Logo + Nav + SearchForm
  Footer.tsx    // Links + Copyright
  Modal.tsx     // Overlay + Content + Button
```

```tsx
// Header.tsx
import { SearchForm, Nav } from "../molecules";
import { Logo } from "../atoms";

export const Header = () => (
  <header>
    <Logo />
    <Nav />
    <SearchForm />
  </header>
);
```

## templates и pages

В дизайне различие чёткое: template это скелет страницы, который показывает расположение блоков без реального контента. Page это тот же скелет, но уже с реальными данными.
В коде template это layout-компонент, page это компонент, который использует этот layout и наполняет его реальными данными. На практике слой templates часто пропускают, а pages соответствуют роутам в фреймворке.

```
ДИЗАЙН          КОД

template     →  layout-компонент
page         →  route-компонент
```

## Не обязательно использовать все пять

atoms, molecules, organisms: самые используемые уровни. Слой templates на практике часто пропускают, а pages соответствуют роутам приложения.

```
atoms/
  Button.tsx
  Input.tsx
molecules/
  SearchForm.tsx
  FormField.tsx
organisms/
  Header.tsx
  Modal.tsx
```

## Куда положить компонент

```
Это самый базовый элемент, который нельзя разбить?
  → atoms

Это комбинация нескольких атомов под одну задачу?
  → molecules

Это готовый раздел страницы из нескольких молекул?
  → organisms
```
