---
title: Accessible description
description: Accessible descriptions provide secondary information regarding the purpose or intent of the element.
---

## Introduction

Accessible descriptions provide secondary information regarding the purpose or intent of the element.
The process of determining an accessible description follows a specific order, often referred to as the "accessible
description computation algorithm".

Here's a simplified version of how it works:

1. `aria-describedby`: This attribute has the highest priority. It references other elements by their IDs.
   1. The algorithm checks if the element has an `aria-describedby` attribute with valid ID references.
   2. For each referenced element, it computes the full text alternative recursively.
   3. The text from all referenced elements is concatenated, separated by spaces.
   4. If this produces a non-empty result, it becomes the accessible description.
2. `aria-description`: This is a direct text attribute for providing a description. Process:
   1. If `aria-describedby` didn't produce a result, the algorithm checks for an `aria-description` attribute.
   2. If present, its value is used directly as the accessible description.
3. Host language features: These are language-specific attributes or elements used for descriptions. Process:
   1. If neither `aria-describedby` nor `aria-description` provided a result, the algorithm looks for host language features.
   2. In HTML, this might be the title attribute.
   3. In SVG, it could be the `<desc>` element.
   4. The content of these features is used as the accessible description if found.
4. `title` attribute: This is a fallback option, typically using a standard attribute that would trigger a visual tooltip. Process:
   1. If all above methods fail to produce a description, the algorithm checks for a tooltip attribute.
   2. In most cases, this would be the title attribute (if not already used as a host language feature).
   3. The content of this attribute becomes the accessible description.

Note: Throughout this process, the algorithm handles special cases such as hidden content, embedded controls, and CSS-generated content.
The final result is always a flat string of space-separated tokens, regardless of which method provided the description.

## Best practices

In most of the cases, you will only need `aria-describedby` since the information that is provided is for all types of
users and not only for people with assistive technology. A great example is instructions when filling in a certain form
field, this will benefit both a visual and non-visual user.

### Use ARIA

In this case, it is recommended to mainly use ARIA because the host language features and tooltip attributes are insufficiently supported and efficient association runs more easily via `aria-describedby`.

### Prefer aria-describedby over aria-description

The reason why you should use `aria-describedby` over `aria-description` is because `aria-description` is not well
supported at this moment. You can consult [aria-description attribute - A11Y Support](https://a11ysupport.io/tech/aria/aria-description_attribute) for more information.

#### Example

The following example illustrates a Belgian VAT number field with a description below the field how to fill in a correct value, this is perfect scenario for usage of `aria-describedby`.

A screen reader will announce: _"Edit text field, Belgian VAT Number, VAT number should be in the format of two letters
followed by ten digits, for example BE0123456789."_.

```html
<label for="vat">Belgian VAT Number:</label>
<input type="text" id="vat" name="vat" aria-describedby="vatFormat" />
<p id="vatFormat">
  VAT number should be in the format of two letters followed by ten digits, for
  example BE0123456789.
</p>
```

As described in 1.2 and 1.3 of the accessible description computation algorithm, the following code results in a screen reader announcing: _"Edit text field, Belgian VAT Number, VAT number is formatted incorrectly, VAT number should be in the format of two letters followed by ten digits, for example BE0123456789."_.

```html
<label for="vat">Belgian VAT Number</label>
<input type="text" id="vat" name="vat" aria-describedby="vatError vatFormat" />
<p id="vatError">VAT number is formatted incorrectly.</p>
<p id="vatFormat">
  VAT number should be in the format of two letters followed by ten digits, for
  example BE0123456789.
</p>
```
