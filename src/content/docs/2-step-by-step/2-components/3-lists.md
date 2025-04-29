---
title: Lists
description: Organize information in a structured manner
---

## Ordered and unordered lists

Lists are fundamental elements in web content, helping to organize information in a structured manner.
Properly implemented lists enhance readability and improve navigation for all users, especially those using assistive
technologies.

:::note[1.3.1 Info and Relationships - Level A]
Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
:::

Semantic lists will enrich the information within the accessibility tree by providing visual context through text.
For long, complex lists, it's a best practice to provide an accessible name on the list element itself, such as shown below:

A screen reader will announce: _"List, Product catalogue, # items"_ and when you navigate to the first item you get _"Product 1, 1 of #"_.
The underlying format is _"[semantic-role], [accessible-name], [contextual-info]"_.

```html
<ul aria-label="Product catalogue">
  <li>Product 1</li>
  <li>Product 2</li>
  <li>Product 3</li>
  ...
</ul>
```

## Definition lists

If you need to associate terms and definitions within a semantic list, you should use `<dl>`.
For example, you need to render specifications for a car on a car detail page (screenshot).

![A table-like 3-column grid showing specifications of a car, per specification you see title of specification followed
by the value](../../../../assets/images/definition-list.jpg)

This will ensure that both the term and the value are communicated together so that sufficient context is always provided.
Also for SEO, an association will then be made available that was not otherwise semantically there.
