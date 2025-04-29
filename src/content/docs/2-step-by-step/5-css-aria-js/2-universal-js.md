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

## Non-modal dialogs

### Markup

Using the native dialog element allows a developer to just fire `dialog.show()` on click of the button element to open the dialog in a non-modal state.
A non-modal state represents a dialog that is not obscuring the whole page because it doesn't contain a backdrop.

```html
<button>Open dialog</button>

<dialog>
  <button>Close</button>
  <p>This non-modal dialog has no backdrop!</p>
</dialog>
```

### Association

Correct association between the button that triggers the non-modal and the non-modal itself requires a couple of ARIA attributes.

- `aria-haspopup`: Indicate the availability and type of interactive popup (menu, listbox, tree, grid, dialog, or true) element that can be triggered by the element on which the attribute is set
- `aria-controls`: Associate the button element with the dialog element via the dialog id
- `aria-expanded`: Communicate semantically if the triggered content is currently expanded or not

```html
<button aria-haspopup="dialog" aria-controls="dialog-id" aria-expanded="false">
  Open dialog
</button>

<dialog id="dialog-id">
  <button>Close</button>
  <p>This non-modal dialog has no backdrop!</p>
</dialog>
```

### Naming

Screen reader users are not able to discern the purpose of elements with `role="dialog"` or `role="alertdialog"` that do not have an accessible name.
So make sure to provide an accessible name for the dialog element that describes its purpose in a meaningful and concise way.

```html
<button aria-haspopup="dialog" aria-controls="dialog-id" aria-expanded="false">
  Open dialog
</button>

<dialog id="dialog-id" aria-labelledby="dialog-title">
  <button>Close</button>
  <h2 id="dialog-title">Dialog title</h2>
  <p>This non-modal dialog has no backdrop!</p>
</dialog>
```

### Thought pattern

- When opened, move focus to first actionable element within the dialog
  - This happens for you if you use a native dialog element and `dialog.show()`
  - Unless there is a good UX reason to move it to a different element, f.e.: a confirmation dialog with a cancel and ok button, then you can use the autofocus attribute in a native dialog element
- Don't provide a keyboard trap, since other content is not obscured (no backdrop)
- Provide closing the dialog via ESC, which is provided natively if you use a `dialog` element
- Move focus back to the element that triggered the dialog when closing the dialog

## Modal dialogs

### Markup

Using the native dialog element allows a developer to just fire `dialog.showModal()` on click of the button element to open the dialog in a modal state.
A modal state represents a dialog that is obscuring the whole page because it contains a backdrop.

```html
<button>Open dialog</button>

<dialog>
  <button>Close</button>
  <p>This modal dialog has a backdrop!</p>
</dialog>
```

### Association

Correct association between the button that triggers the modal and the modal itself requires a couple of ARIA attributes.

- `aria-haspopup`: Indicate the availability and type of interactive popup (menu, listbox, tree, grid, dialog, or true) element that can be triggered by the element on which the attribute is set
- `aria-controls`: Associate the button element with the dialog element via the dialog id
- `aria-expanded`: Communicate semantically if the triggered content is currently expanded or not

```html
<button aria-haspopup="dialog" aria-controls="dialog-id" aria-expanded="false">
  Open dialog
</button>

<dialog id="dialog-id">
  <button>Close</button>
  <p>This modal dialog has a backdrop!</p>
</dialog>
```

### Naming

Screen reader users are not able to discern the purpose of elements with role="dialog" or role="alertdialog" that do not have an accessible name.
So make sure to provide an accessible name for the dialog element that describes its purpose in a meaningful and concise way.

```html
<button aria-haspopup="dialog" aria-controls="dialog-id" aria-expanded="false">
  Open dialog
</button>

<dialog id="dialog-id" aria-labelledby="dialog-title">
  <button>Close</button>
  <h2 id="dialog-title">Dialog title</h2>
  <p>This modal dialog has a backdrop!</p>
</dialog>
```

### Thought pattern

- When opened, move focus to first actionable element within the dialog
  - This happens for you if you use a native dialog element and `dialog.showModal()`
  - Unless there is a good UX reason to move it to a different element, f.e.: a confirmation dialog with a cancel and ok button, then you can use the autofocus attribute in a native dialog element
- You must provide a keyboard trap, since all other content is obscured (backdrop)
- Provide closing the dialog via ESC, which is provided natively if you use a `dialog` element
- Move focus back to the element that triggered the dialog when closing the dialog

## Keyboard trap

A keyboard trap occurs when a user who relies on keyboard navigation gets stuck on a particular element of a web page and cannot move away from it unless by pressing ESC.
You can provide a keyboard trap by making other content [inert](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert) or by implementing keyboard trap logic in JavaScript:

- `Inert` prevents click interaction
- `Inert` prevents focus interaction
- `Inert` prevents lookup through the find-in-page feature
- `Inert` prevents editing or selecting content
- `Inert` excludes the element from the accessibility tree

Input device-independent event listeners
Don't use input device specific listeners, unless you really know what you're doing.

```js
// Pointer
element.addEventListener("mouseover", callback);
element.addEventListener("mouseout", callback);
element.addEventListener("dblclick", callback);

// Keyboard
element.addEventListener("keydown", callback);
element.addEventListener("keyup", callback);

// Touch
element.addEventListener("touchstart", callback);
element.addEventListener("touchend", callback);

/* In general, make use of these event listeners that are shared among
different input devices: pointer, keyboard and touch */
element.addEventListener("click", callback);
element.addEventListener("focus", callback);
element.addEventListener("blur", callback);
element.addEventListener("select", callback);
element.addEventListener("change", callback);
```
