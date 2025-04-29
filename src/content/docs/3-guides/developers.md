---
title: Developers
description: A guide for accessible development.
---

## Semantics

Proper semantic markup ensures that assistive technologies, like screen readers, can accurately interpret and present
content to users with disabilities. For instance, a screen reader can announce a `<nav>` element as a navigation
section, helping users understand the layout and navigate efficiently.

The WCAG criterion most consistent with general semantics is 4.1.2 Name, Role, Value. It relies on meaningful context for each component.

:::tip[WCAG Reference]
Success Criterion [4.1.2 Name, Role, Value (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
:::

### Buttons vs links

<!-- FIXME: todo -->

- Use links for (in-)page navigation, by id or by url
- Don't use links for functional purpose, such as: `<a href="#">`. Use a `<button>` instead.

## Accessible name

Accessible naming involves assigning clear, descriptive labels to web elements, such as links, buttons, form fields, and images. These labels are essential for screen readers and other assistive technologies, helping users comprehend the purpose and function of various elements on a webpage.

### General

Use meaningful text for links and buttons: avoid generic labels like "click here" or "read more". Instead, use
descriptive text that conveys the purpose of the link or button.

#### Contents

```html
<!-- Bad Example -->
<a href="/about-us">Click here</a>
<a href="/services">Read more</a>
<button>Submit</button>

<!-- Good Example -->
<a href="/about-us">About us</a>
<a href="/services">Our services</a>
<button>Submit your application</button>
```

Provide labels for form fields: ensure all form fields have associated labels. Use the <label> element to explicitly connect labels with their corresponding input fields.

:::caution[Placeholder text as accessible name]
Placeholder text is not sufficiently supported as provider for accessible naming, for example: [JAWS does not announce placeholder text in input field #745](https://github.com/FreedomScientific/standards-support/issues/745)
:::

```html
<!-- Bad Example -->
<input type="text" placeholder="Firstname" />

<!-- Good Example -->
<label for="firstname">Firstname</label>
<input type="text" id="firstname" name="firstname" />
```

#### ARIA attributes

ARIA stands for Accessible Rich Internet Applications.

[The first rule of ARIA](https://www.w3.org/TR/using-aria/#rule1) use is "_If you can use a native HTML element or
attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an
ARIA role, state or property to make it accessible, then do so._". These attributes should always be your last resort.

You can use `aria-label`, `aria-labelledby`, `aria-description` and `aria-describedby`.

:::note[Use of aria-description]
The `aria-description` attribute is still in W3C Editor's Draft for ARIA 1.3. For the time being,
continue to use `aria-describedby`, which has been supported since ARIA 1.1.
:::
