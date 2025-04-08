---
title: Accessible naming
description: Accessible names convey the purpose or intent of the element.
---

Accessible names convey the purpose or intent of the element. This helps users understand what the element is for and how they can interact with it. In general, accessible names for elements should be unique to a page.

## Introduction

The accessible name is the name of a user interface element as determined by the accessibility API.
It's used by assistive technologies, like screen readers, to identify and describe elements to users.

The process of determining an accessible name follows a specific order, often referred to as the "accessible name
computation algorithm". You can refer to the following 5 items as a priority scale, item 1 will always win out over item
2, and so on.

Here's a simplified version of how it works:

1. `aria-labelledby`: If present, the accessible name is the concatenated text content of all elements referenced by this attribute.
2. `aria-label`: If present, this attribute's value becomes the accessible name.
3. Native naming mechanisms: For example, the `<label>` element for form controls, the `<legend>` element within a fieldset or the `alt` attribute for images.
4. Text content: The element's own text content. _Note! This refers to all textual content, so alternative text for an
   image e.g. is also included._
5. `title` attribute: If none of the above are present, the title attribute is used. _Be aware that support for the
   `title` attribute is not considered sufficient: <https://a11ysupport.io/tech/html/title_attribute>._

   Conclusion: The
   `title` attribute should only be used in case of an `<iframe>` implementation, since there no other naming mechanism
   available for iframes.

## Best practices

### Consider context

The accessible name should make sense out of context. Ambiguous names such as "Click here", "More info" and "Learn more" don't provide any contextual information, they mostly rely on the visual context that is perceived by the end user.

But what if the end user cannot appeal to that visual context because of a visual impairment? In that case the visual
context should be provided through text.

```html
# Bad: Too ambiguous
<a href="/our-services">Click here</a>
# Good: Sufficient context
<a href="/our-services">Learn more about our services</a>
```

or in case of an overview page with 6 teasers rendered this way:

```html
<!-- Bad, a screen reader will announce "Link, Learn more" -->
<div class="product-teaser">
  <h3 class="product-teaser-title">Product one</h3>
  <a href="/product-one">Learn more</a>
</div>

<!-- Good, a screen reader will announce "Link, Product one" -->
<div class="product-teaser">
  <h3 class="product-teaser-title" id="product-one-title">Product one</h3>
  <a href="/product-one" aria-labelledby="product-one-title">Learn more</a>
</div>

<!-- Good, a screen reader will announce "Link, Buy Now, Product one" -->
<div class="product-teaser">
  <h3 class="product-teaser-title" id="product-one-title">Product one</h3>
  <a href="/product-one" aria-describedby="product-one-title">Buy now</a>
</div>
```

So depending on the context you can apply `aria-labelledby` or `aria-describedby`, if the link text itself also provides
specific information (e.g. "Buy now") but insufficient context then it is recommended to use `aria-describedby`. Go to [the
"Accessible description" page](/a11y-docs/introduction/6-accessible-description/) for more information about `aria-describedby`.

### Use ARIA only if necessary

:::note[[The first rule of ARIA](https://www.w3.org/TR/using-aria/#rule1)]
_"If you can use a native HTML element or attribute with the semantics and behaviour you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so."_
:::

If you wish to determine the accessible name of a particular element, always prioritise native naming mechanisms. To the
extent possible, work with visually-hidden information and not with an additional `aria-label`, for example.

```html
# Case: Button without accessible name
<button type="submit">
  <img alt="" src="/images/magnifier-icon.png" />
</button>

# Advisory: Button with native accessible name
<button type="submit">
  # Image as provider of the accessible name through alt text
  <img alt="Search" src="/images/magnifier-icon.png" />
</button>

# Advisory: Button with native accessible name
<button type="submit">
  # Decorative image
  <img alt="" src="/images/magnifier-icon.png" />
  # Visually-hidden text as accessible name provider
  <span class="visually-hidden">Search</span>
</button>

# Not advisory: Button with ARIA-enriched accessible name
<button type="submit" aria-label="Search">
  <img alt="" src="/images/magnifier-icon.png" />
</button>

# Not advisory: Priority scale misuse, aria-label will overwrite the image alt
and the visually-hidden text anyway
<button type="submit" aria-label="Search">
  <img alt="Search" src="/images/magnifier-icon.png" />
  <span class="visually-hidden">Search</span>
</button>
```

### Prefer aria-labelledby over aria-label

When possible, use aria-labelledby as it allows for more flexible, translatable text.
It also allows to reuse content that is already rendered, instead of providing separate content through `aria-label`.

```html
<h2 id="section-head">Product Details</h2>
<div role="region" aria-labelledby="section-head">
  <!-- Content here -->
</div>
```

If you can't make a reference to the text or the text is not yet rendered, you can make use of `aria-label`.

```html
<button aria-label="Search">
  <div class="search-icon" aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48" />
    </svg>
  </div>
</button>
```

### Advisory ARIA naming thinking pattern

As a general thinking pattern, you should ask yourself the following questions:

1. Do you need to use ARIA?
2. If yes, does the text already exist elsewhere in the document? Use `aria-labelledby`.
3. If no, use `aria-label`.
