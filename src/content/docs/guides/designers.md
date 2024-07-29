---
title: Designers
description: A guide for accessible design.
---

## Page structure

An essential part of taking accessibility into account when designing is providing structure and meaning.

As most of the designers use a component-based system, it is often neglected that each of these components need to
fit in the correct page structure. A component could contain one or multiple headings or other semantic information that
has impact on the overall page structure.

### Headings outline

For each page-level design is it advised to discuss structural semantics with a developer. As a designer you could
definitely make an initial proposal on how you see the heading structure.

Example outline:

```html
<h1>About us</h1>
<h2>Contact information</h2>
<h3>Send us a message</h3>
<h3>Our location</h3>
<h2>FAQ</h2>
```

The most important thing to keep in mind is to limit a page to one `h1` element and make sure the `h1` accessible name
matches the `title` element's accessible name.

The decision is up to you if you set the `title` element's content to `[page-title] - [website-name]` or `[website-name] - [page-title]`, but I prefer the `[page-title] - [website-name]` format because in that case the most
relevant information is always available first.

Especially for screen reader users it is better to put the repetitive content at the end of the accessible naming.

```html
<head>
  <title>About us - A11Y docs</title>
</head>
<main>
  <h1>About us</h1>
</main>
```

### Visual order vs DOM order

Visual and semantic matching order

### Visual hierarchy

Visual and semantic distinction between headings vs default text

## Text alternatives

### Images

#### Informative images

Informative images provide information on their own. Meaning if an end user can't rely on the visual information that
the image provides, there is a textual alternative that describes the content of the image within its context.

In this case, you should add an alt description that describes the visual information with a maximum character length of
150 characters. All content should be written in sentences, so no list of keywords or buzzwords.

```html
<img
  alt="Text that describes the visual content of the banner image."
  src="./images/banner.jpg"
/>
```

#### Decorative images

Decorative images don't provide information on their own, they are solely used for decorative purposes.
This means that if you leave the decorative image out of their context, no information is lost.

In this case, you should add an empty alt description, thus `alt=""`.

```html
<img alt="" src="./images/banner.jpg" />
```

#### Functional images

Functional images differ at a certain level from the two previous types, they are used as (only) content of interactive
elements such as `<a>`, `<button>`, etc.

In this case, you should add an alt description that describes the purpose of the interactive element.

##### Anchors

For `<a>` elements, you describe where the end user will navigate to, such as:

```html
<a href="https://www.facebook.com/company">
  <img alt="Company facebook page" src="./images/facebook-icon.png" />
</a>
```

##### Buttons

For `<button>` elements, you describe the action it will perform, such as:

```html
<button>
  <img alt="Open modal" src="./images/open-modal-icon.png" />
</button>
```

### Videos

#### Video transcript

Textual alternative for visual information, beneficial for SEO.

#### Audio description

Description of visual information that is provided through audio instead of text.

#### (Closed) captions

Captions provide conversational text when audio is not available.
For example: Loud or silent environment (busy train vs library).

#### Video reference

Mention checklist by Deque.

### Audio

#### Audio transcripts

Textual alternative for auditive information.

#### Audio reference

Mention checklist by Deque.

## Contrast ratios

### Text contrast

- Ratio is 4.5 : 1 against its background if the text is small/regular.
- Ratio is 3 : 1 against its background if the text is large or bold.

### Non-text contrast

Ratio is 3 : 1 against its background.

## Keyboard navigation

### Focus states

### Focus order

### Mouse interaction alternatives

- Slider with swiping gestures.
- Drag and drop with dragging gestures.

## Forms

### Labels

Labels provide the accessible name for the field to which it is programmaticaly associated.
If, for some reason, you don't want to show the label of a form field it should mention that the `<label>` element
should be rendered but visually hidden to make sure that the semantic information is available.

### Form validation

- Inline validation close to the corresponding field.
- Error summary on top of the form contains a number of errors and links that bring the (keyboard) user to the relevant field.

### Error suggestion

- If an error is shown, provide sufficient information for the end user to provide the correct input.

## Text

### Line height

See WCAG.

### Paragraph spacing

See WCAG.

### Letter spacing

See WCAG.

### Text alignment

Justified text is bad for cognitive disabilities.

## Links

- Underline to make a visual distinction between default text and links, not by color alone.
- Use links for navigation, by id or by url
- Don't use links for functional purpose, such as: `<a href="#">`. Use a `<button>` instead.

## Fonts

### Dyslexia fonts
