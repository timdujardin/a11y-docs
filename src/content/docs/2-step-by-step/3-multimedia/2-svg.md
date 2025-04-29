---
title: SVG
description: Provide meaningful alternative text for SVGs, describing their content or function.
---

Same rules apply as for the images, because it's about visual information that needs text alternatives.
Consult [accessible images](/a11y-docs/2-step-by-step/3-multimedia/1-images/) for more information.

## Informative or functional

### Inline SVGs

Inline SVGs offer more semantics than images, so providing an accessible name here is somewhat different. If your SVG
has an informative or functional function (see informative and functional sections within [accessible images](/a11y-docs/2-step-by-step/3-multimedia/1-images/)), the information or
function should be described using the title element within an SVG.

Correspondingly, the `role="img"` must be added on the svg element to pass the correct semantics. Finally, provide association between svg element and the nested title element using aria-labelledby, this ensures maximum support for different screen reader scenarios (more info in [the article Accessible SVGs: Perfect Patterns For Screen Reader Users](https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/)).

```html
<svg role="img" aria-labelledby="fox-title">
  <title id="fox-title">What does the fox say?</title>
  [design code]
</svg>
```

### Image SVGs

In this case, the same rules apply as for the informative and functional images.

```html
<img src="ico-arrow-right.svg" alt="Submit preferences" />
```

## Decorative

### Inline SVGs

In many cases, SVG icons are used as redundant information next to a text value. For example, such as a search button with a magnifier icon and the text "search".

In this case, we need to distinguish between the visual and non-visual experience by omitting the icon. You do this using `aria-hidden="true"`, which ensures that assistive technology ignores this element.

Last but not least, add `focusable="false"` to prevent the SVG element from belonging in the tab sequence in Microsoft Edge. By default, within Edge, the `focusable="true"` mechanism applies to SVG elements.

```html
<svg aria-hidden="true" focusable="false">[design code]</svg>
```

### Image SVGs

In this case, the same rules apply as for the decorative images.

```html
<img src="ico-search.svg" alt="" />
```
