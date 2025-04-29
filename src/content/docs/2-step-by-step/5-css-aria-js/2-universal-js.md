---
title: Universal JavaScript
description: Universal JavaScript focuses on the gap between initial page load and full interactivity
---

Universal JavaScript addresses one of the most significant accessibility challenges of modern web development: the gap between initial page load and full interactivity. Traditional client-side rendering creates a problematic delay where users of assistive technologies encounter incomplete or non-functional content while JavaScript executes.

## Tooltips

A tooltip provides extra information about a form field, a link, a button, or other focusable element.

### Markup

Provide an interactive element and an element containing the tooltip content.

```html
<button>I'm a button</button>

<div style="display: none;">
  <span>This is a non-functional demo link with a tooltip</span>
</div>
```

### Semantics

Make sure the tooltip element has the right semantic role and provide a visually-hidden fallback for improved support.

```html
<button>I'm a button</button>

<div role="tooltip" style="display: none;">
  <span class="visually-hidden">Tooltip:</span>
  <span>This is a non-functional demo link with a tooltip</span>
</div>
```

### Association

Provide an alternative experience for the visual experience when showing the tooltip by making a semantic association between button and tooltip.
Use `aria-describedby` to make that association.

```html
<button aria-describedby="tooltip-id">I'm a button</button>

<div id="tooltip-id" role="tooltip" style="display: none;">
  <span class="visually-hidden">Tooltip:</span>
  <span>This is a non-functional demo link with a tooltip</span>
</div>
```

### Thought pattern

The tooltip must be triggered by both focus and hover events and remains on the screen as long as the trigger has the focus
The focus is not moved to the tooltip, so it is not allowed to place interactive content in the tooltip.
