---
title: Landmarks
description: Structural elements should be represented by the right HTML element to create a semantic meaningful layout.
---

Most of the pages we create have a common structure: a header, a main navigation, a main content region, maybe also a sidebar region with additional information and a footer.
All these structural elements should be represented by the right HTML element to create a semantic meaningful layout.

Using div's as wrapper elements for a main content region or perhaps a footer doesn't provide (assistive) technology with the right semantic information.
Instead, use a `<main>` or a `<footer>` element, simply because they implicitly contain semantic information such as their landmark role (respectively role "main" and role "footer").

Just by applying meaningful structure to your page, you improve:

- User experience
- Navigation and orientation
- SEO

## Types

### Navigation

Use the `<nav>` element or `role="navigation"` for main navigation menus, as long as you prioritise implicit semantics.
Implicit semantics means that the semantic role of an element can be derived from the element itself, e.g. `<nav>` with
implicit role "navigation" or `<button>` with implicit role "button".

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

You can have multiple navigation landmarks if needed, the most important thing is that you provide an accessible name
for each navigation landmark. Landmarks is a way of navigating through a page for screen reader users, they use a
functionality called the rotor within their screen reader software. This rotor provides different navigation mechanisms
based on the semantic information within the page.

See [VoiceOver](/a11y-docs/4-assistive-technology/voiceover/) page for more information.

```html
# Screen reader announces: "Primary navigation", so no need to add "navigation"
within the aria-label. The semantic role is communicated implicitly.
<nav aria-label="Primary">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

### Search

Use the `<search>` element or `role="search"` to identify the search functionality.

```html
<search>
  <form>
    <input type="search" name="q" />
    <button type="submit">Search</button>
  </form>
</search>
```

### Main

Every page should have one `<main>` element or a `role="main"` attribute.
This contains the primary content of the page.

```html
<main>
  <!-- Main content here -->
</main>
```

### Banner

Use the `<header>` element or `role="banner"` for the main header of the page.
There should typically be only one header landmark per page.

```html
<header>
  <h1>Site Title</h1>
  <!-- Other header content -->
</header>
```

### Complementary

Use the `<aside>` element or `role="complementary"` for content that is tangentially related to the main content.

```html
<aside>
  <h2>Related Articles</h2>
  <!-- List of related articles -->
</aside>
```

### Contentinfo

Use the `<footer>` element or `role="contentinfo"` for the main footer.
Like the header, there should typically be only one footer landmark per page.

```html
<footer>
  <p>© 2025 Your Company</p>
</footer>
```

### Form

Use `<form>` element or `role="form"` for significant forms that are not search forms.

<form>
  <!-- Form fields -->
</form>
```

### Region

The use of regions is allowed, but is bitterly underused as a navigation or structural pattern within web accessibility.
So it is up to the developer to make use of them, but from an accessibility point of view it is discouraged.

The use of regions quickly creates redundant navigation mechanisms such as the landmarks menu within VoiceOver's rotor.
The list of landmarks becomes padded with numerous `region` landmarks that don't offer extra efficient navigation.

For example:

- Banner
- Primary navigation
- Main
- Region
- Region
- Region
- Region
- Region
- Footer

Instead of:

- Banner
- Primary navigation
- Main
- Footer

```html
<section>
  <!-- Section content -->
</section>
```

## Best practices

1. Use native HTML5 semantic elements where possible (`<nav>`, `<main>`, `<header>`, `<footer>`, `<aside>`). Only use ARIA roles when HTML5 elements are not supported or applicable.
2. Ensure that all main content is contained within a landmark region.
3. Use landmarks consistently across your website or application.
4. Avoid overusing landmarks. Too many can be as problematic as too few.
5. Consider using `aria-label` or `aria-labelledby` to provide unique labels for landmarks when you have multiple of the same type (e.g. multiple navigation regions).

```html
<nav aria-label="Main">
  <!-- Main navigation menu -->
</nav>
<nav aria-label="Footer">
  <!-- Footer navigation menu -->
</nav>
```
