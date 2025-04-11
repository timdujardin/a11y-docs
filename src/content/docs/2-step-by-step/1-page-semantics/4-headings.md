---
title: Headings
description: Organising web pages by headings is an essential part of navigation and orientation within a page.
---

Organising web pages by headings is an essential part of navigation and orientation within a page, as it allows users get a sense of the page's structure.

Visually, headings are presented as larger and more distinct than surrounding text. Making texts larger helps guide the eye around the page.
Using headings and making them visually apparent is especially helpful for users with cognitive disabilities.

If the underlying code (semantics) for page headings is correct, screen reader users can also benefit from headings.
Screen reader users can navigate a page according to its headings, listen to a list of all headings, and skip to a desired heading to begin reading at that point.
Screen reader users can use headings to skip the repeated blocks of content like headers, menus, and sidebars, for
example.

See [VoiceOver](/a11y-docs/4-assistive-technology/voiceover/) page for more information.

The most important checkpoints are:

- Correct heading sequence: h1 - h2 - h3 - h4 - h5 - h6
- Limit a web page to 1 single `<h1>`
- Make sure the `<h1>` accessible name matches the `<title>` accessible name

## Heading markup

Always use the proper HTML heading elements (`<h1>` through `<h6>`), rather than styling text to look like headings.

```html
<h1>Main Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

## Heading sequence

Headings should follow a logical hierarchical structure. Don't skip levels (e.g., don't go from `<h1>` to `<h3>` without an `<h2>` in between).

```html
<h1>Main Title</h1>
<h2>Section 1</h2>
<h3>Subsection 1.1</h3>
<h3>Subsection 1.2</h3>
<h2>Section 2</h2>
```

## Heading name

Ensure each heading clearly describes the content it introduces. Avoid vague headings containing little informative content, usually intended as a visual element or marketing content.

```html
<h2>7 tips</h2>
<!-- Shouldn't be a semantic heading -->
<h3>7 recommendations for better investments</h3>
<!-- Should be the <h2> instead -->
```

## Related criteria

There are 3 criteria to take into account here, which is:

- 1.3.1 Info and Relationships (Level A)
  - This criterion requires that information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. Headings are a key part of this structure.
- 2.4.1 Bypass Blocks (Level A)
  - While not directly about headings, this criterion can be satisfied by providing a proper heading structure, allowing users to navigate directly to main content areas.
- 2.4.6 Headings and Labels (Level AA) - New in WCAG 2.2
  - This criterion specifically addresses headings, requiring that headings and labels describe topic or purpose.
