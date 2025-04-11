---
title: Language
description: Setting the correct language of your page and parts of the page.
---

First things first, the language choice of a website or web application affects all further communication and semantics.
Therefore, consider the following 2 aspects in both UX, UI and Development:

1. Language of page
2. Language of parts

## Language of page

The intent of this Success Criterion is to ensure that content developers provide information in the Web page that user
agents need to present text and other linguistic content correctly.

Both assistive technologies and conventional user agents can interpret text more accurately when the language of the Web
page is identified. Screen readers can load the correct pronunciation rules. Visual browsers can display characters and
scripts correctly. Media players can show captions correctly.

As a result, users with disabilities will be better able to understand the content.

```HTML
<html lang="en"></html>
```

### WCAG Reference

- The [3.1.1 Language of Page (Level A) Success Criterion](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page)
  is part of the Understandable principle. Which is principle number 3 in the list of POUR principles, thus prefixed
  with "3.x.x".

## Language of parts

This criterion requires that the human language of each passage or phrase in the content can be programmatically
determined, except for proper names, technical terms, words of indeterminate language, and words or phrases that have
become part of the vernacular of the immediately surrounding text.

```html
<p>
  The French phrase <span lang="fr">c'est la vie</span> is often used in
  English.
</p>
```

### WCAG Reference

- [SC 3.1.2 Language of Parts (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts)
