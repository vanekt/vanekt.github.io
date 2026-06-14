---
title: "Atomic Design: structure for a component library"
date: 2026-05-19
description: "Hundreds of components in one folder, Button next to ConfirmModal, Input next to Header. What Atomic Design is, how its five levels work, and when three of them are enough."
tags: ["Architecture"]
lang: en
urlSlug: atomic-design
draft: false
---

Picture a project with hundreds of components, all sitting in one components folder. At the start it feels manageable, but as the project grows the folder expands and getting around it gets harder. Button next to ConfirmModal, Input next to Header: simple components and complex blocks mixed together at the same level.

## The problem

```
components/
  Button.tsx
  Input.tsx
  SearchForm.tsx
  ProductCard.tsx
  Header.tsx
  Modal.tsx
  ConfirmModal.tsx
  ...300+ more
```

## Five levels

Atomic Design proposes splitting components into five levels: from basic building blocks to full pages.

```
atoms        basic UI elements
molecules    combinations of atoms
organisms    complex blocks
templates    page structure without real content
pages        same structure with real content
```

## atoms

The most basic UI elements: ones you can't break down any further. An atom isn't tied to a specific place. Button works the same in a form, a modal, or a page header.

```
atoms/
  Button.tsx
  Input.tsx
  Icon.tsx
  Label.tsx
```

## molecules

When a component combines several atoms for one job, that's a molecule. SearchForm combines Input and Button atoms into something more. A molecule solves one specific task.

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

Organisms are independent sections of the interface, built from molecules, atoms, or even other organisms. The site header combines the Nav and SearchForm molecules with the Logo atom. Unlike a molecule, an organism is a more complex block that can handle several tasks and stand on its own on the page.

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

## templates and pages

In design the distinction is clear: a template is a page skeleton that shows where blocks go, without real content. A page is the same skeleton with real data in place.

In code, a template is a layout component, a page is a component that uses that layout and fills it with real data. In practice the templates layer is often skipped, and pages correspond to routes in the framework.

```
DESIGN          CODE

template     →  layout component
page         →  route component
```

## You don't need all five

atoms, molecules, organisms: the most commonly used levels. The templates layer is often skipped in practice, and pages correspond to application routes.

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

## Where to put a component

```
Is it the most basic element, one that can't be broken down?
  → atoms

Is it a combination of several atoms for one task?
  → molecules

Is it a complete page section made of several molecules?
  → organisms
```
