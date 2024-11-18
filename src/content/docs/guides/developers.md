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

### Images

Provide meaningful alt text for images, describing their content or function.

:::tip[WCAG Reference]
Success Criterion [1.1.1 Non-Text Content (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
:::

Depending on their context, a different approach should be used:

1. Informative
2. Decorative
3. Functional

#### Informative

If an image contains information in the form of text or visual features, the image is considered informative.

In that case, you must make all visual information available as alternative text so that people who cannot rely on the
visual characteristics can also perceive that same information.

The best practices for alt text are:

- Use maximum 125 characters (if the image is too complex, use `aria-describedby`)
- Use full sentences, not a list of keywords

```html
<!-- Bad Example -->
<img src="image.jpg" alt="tree hand red apple" />

<!-- Good Example -->
<img
  src="image.jpg"
  alt="Hand reaching for the red apple hanging from the tree"
/>
```

#### Decorative

If an image is purely decorative, use an empty `alt` attribute.

Don't remove the alt attribute entirely because this will cause in some scenarios that the decorative image will not be
ignored by assistive technology. The image could be communicated as "Unlabelled image" or assistive technology will try to find some information through
the content of the `src` attribute, which is in this case "image.jpg".

Applying `alt=""` basically says: "Ignore this image" to assistive technology.

```html
<!-- Bad Example -->
<img src="image.jpg" />

<!-- Good Example -->
<img src="image.jpg" alt="" />
```

#### Functional

If the image is in an actionable context and there is no other native way to describe the action, then the image is
functional.

In this case, the accessible name of the image should describe the action.

```html
<!-- Bad Example -->
<a href="/our-services">
  <img src="services-icon.png" alt="" />
</a>
<button>
  <img src="full-screen-icon.png" alt="Full-screen icon" />
</button>

<!-- Good Example -->
<a href="/our-services">
  <img src="services-icon.png" alt="Our services" />
</a>
<button>
  <img src="full-screen-icon.png" alt="Activate full-screen mode" />
</button>
```

### Iframes

Since there is no other native way to give an accessible name to an iframe, the title attribute is used for this
purpose.

:::note[Deque reference]
Checkout their accessibility tip: "[Be Sure to Provide Titles for Iframes](https://dequeuniversity.com/tips/provide-iframe-titles)"
:::

```html
<!-- Bad Example -->
<iframe src="campustourvideo.html"></iframe>

<!-- Good Example -->
<iframe title="Campus Tour" src="campustourvideo.html"></iframe>
```

### SVGs

#### Informative or functional

##### Inline SVGs

Inline SVGs offer more semantics than images, so providing an accessible name here is somewhat different.
If your SVG has an informative or functional function (see informative and functional sections within [images](#images)), the information or function should be described using the `title` element within an SVG.

Correspondingly, the `role="img"` must be added on the `svg` element to pass the correct semantics. Finally, provide
association between `svg` element and the nested `title` element using aria-labelledby, this ensures maximum support for
different screen reader scenarios (more info in the article [Accessible SVGs: Perfect Patterns For Screen Reader Users](https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison)).

```html
<svg role="img" aria-labelledby="fox8">
  <title id="fox8">What does the fox say?</title>
  [design code]
</svg>
```

##### Image SVGs

In this case, the same rules apply as for the [informative](#informative) and [functional](#functional) images.

```html
<img src="ico-arrow-right.svg" alt="Submit preferences" />
```

#### Decorative

##### Inline SVGs

In many cases, SVG icons are used as redundant information next to a text value. For example, such as a search button
with a magnifier icon and the text "search".

In this case, we need to distinguish between the visual and non-visual experience by omitting the icon. You do this using `aria-hidden="true"`, which ensures that assistive technology ignores this element.

Last but not least, add `focusable="false"` to prevent the SVG element from belonging in the tab sequence in Microsoft Edge. By default, within Edge, the `focusable="true"` mechanism applies to SVG elements.

```html
<svg aria-hidden="true" focusable="false">
  <title>What does the fox say?</title>
  [design code]
</svg>
```

##### Image SVGs

In this case, the same rules apply as for the [decorative](#decorative) images.

```html
<img src="ico-search.svg" alt="" />
```
