---
title: Images
description: Provide meaningful alt text for images, describing their content or function.
---

Provide meaningful alt text for images, describing their content or function.
Depending on their context, a different approach should be used:

- Informative
- Decorative
- Functional

:::note[1.1.1 Non-Text Content - Level A]
The goal of this criterion is that non-text information is available to more people.
You must create a text alternative for visual and auditory content, so people who can't fully see or hear content
can perceive the same information as visual users.
:::

A nice advantage here is that the textual content is then also made available for search indexing, which improves SEO.

## Categories

### Informative

If an image contains information in the form of text or visual features, the image is considered informative.

In that case, you must make all visual information available as alternative text so that people who cannot rely on the visual characteristics can also perceive that same information.

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

### Decorative

If an image is purely decorative, use an empty alt attribute.

Don't remove the alt attribute entirely because this will cause in some scenarios that the decorative image will not be ignored by assistive technology. The image could be communicated as "Unlabelled image" or assistive technology will try to find some information through the content of the src attribute, which is in this case "image.jpg".

Applying `alt=""` basically says: "Ignore this image" to assistive technology.

```html
<!-- Bad Example -->
<img src="image.jpg" />

<!-- Good Example -->
<img src="image.jpg" alt="" />
```

### Functional

If the image is in an actionable context and there is no other native way to describe the action, then the image is functional.

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

## Complex images

- Describe the overall structure first
- Mention key sections or data points in a logical order
- Consider providing a separate accessible version (e.g., a data table for a complex chart or a full section in text).
