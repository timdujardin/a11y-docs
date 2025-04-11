---
title: Links
description: Semantic meaningful links
---

## Links vs buttons

A link is frequently abused for scenarios such as toggle buttons, where href is set as `href="#"`.
In this case, you should use a button element since buttons provide interaction with other elements on a page without a
navigational pattern under the hood.

```html
<!-- Bad -->
<a href="#">Toggle modal</a>

<!-- Good (except for the missing ARIA attributes) -->
<button>Toggle modal</a>
```

Links, on the other hand, only provide a navigation function, either to another page or to an element with a certain id
on the same page.

```html
<!-- Navigation on the same page -->
<a href="#element">Go to element</a>

<!-- Navigation to another page -->
<a href="/about-us">About us</a>
```

## Link purpose

For normal links, use clear and concise text that describes the destination or purpose of the link.
Don't use ambiguous text such as "Read more", "More info" or "Click here".

This refers to 2.4.4 Link Purpose (In Context) - Level A.

```html
<!-- Bad -->
<a href="/about-us">More info</a>

<!-- Good -->
<a href="/about-us">About us</a>
```

## Consistent identification

Also keep in mind that you provide consistent identification for links that have the same destination and purpose.
This refers to 3.2.4 Consistent Identification - Level AA.

```html
<!-- Bad -->
<header>
  <a href="/about-us">About us</a>
</header>
<footer>
  <a href="/about-us">Our offices</a>
</footer>

<!-- Good -->
<header>
  <a href="/about-us">About us</a>
</header>
<footer>
  <a href="/about-us">About us</a>
</footer>
```

## External links

For links that open in a new window or tab, it's a best practice to inform users in a textual way through the addition of "(opens in a new window)". The implementation of the text is up to you, there are different options:

- External icon with an alternative text set to "(opens in a new window)"
- A screen reader only text set to "(opens in a new window)"
- A full embedded text such as the example below

:::note[Noopener and noreferrer]
Setting `target="_blank"` on `<a>` elements implicitly provides the same `rel` behavior as setting `rel="noopener"` which
does not set window.opener. So only using `rel="noreferrer"` is sufficient these days. Go to MDN for more information: [rel=noopener](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noopener#:~:text=Note%3A%20Setting%20target%3D%22_blank%22%20on%20%3Ca%3E%2C%20%3Carea%3E%20and%20%3Cform%3E%20elements%20implicitly%20provides%20the%20same%20rel%20behavior%20as%20setting%20rel%3D%22noopener%22%20which%20does%20not%20set%20window.opener.).
:::

```html
<a href="https://example.com" target="_blank" rel="noreferrer">
  Visit Example Website (opens in a new window)
</a>
```

## Skip links

A well-known feature within accessibility is providing skip links to skip complex parts of the page, the most famous one is "Skip to main content".
This allows user to skip the repetitive header content such as main navigation and hero to go straight to the main
content of the page. It is a functionality mainly used by keyboard-only users.

:::note[2.4.1 Bypass Blocks - Level A]
A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.
:::

The goal is to initially hide the skip link visually until the end user focuses on the link element through tab
navigation, which is why you see the `visually-hidden-focusable` class applied.

```html
<a href="#main-content" class="visually-hidden-focusable">
  Skip to main content
</a>
```
