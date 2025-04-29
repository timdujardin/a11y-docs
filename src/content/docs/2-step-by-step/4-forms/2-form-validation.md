---
title: Form validation
description: Accessible form validation is essential to enable people to successfully complete and submit forms
---

Accessible form validation ensures that all users, regardless of ability or inability, can:

- Understand what information is required
- Recognize when they've made errors
- Understand how to correct those errors
- Successfully complete and submit forms

## Error message

For the error message itself, provide sufficient information for the end user to provide the correct input.
So don't display a message that says: "This value is incorrect", but provide information on how to do it correctly.

## Inline errors

Inline error suggestions should be close to the corresponding field, such as for the instructions of a form field.
This will provide an accessible experience for people with Low Vision for example, because they rely on larger text (+200% zoom).

```html
<label for="firstname">Firstname</label>
<input
  type="text"
  id="firstname"
  name="firstname"
  aria-describedby="firstname-error"
  aria-invalid="true"
/>
<p id="firstname-error">The firstname should at least contain 2 characters</p>
```

## Inline error and instructions

If you provide form fields with instructions by default and the end user still fills in an incorrect value, you should always mention the error first.
This will make sure a screen reader will announce the error message first, followed by the instruction on how to fix the error.

:::note[Screen reader communication]
A screen reader will announce the firstname field as "Firstname, Invalid data, Edit text, The firstname should at least
contain 2 characters, This is the instruction below the firstname field".
:::

```html
<label for="firstname">Firstname</label>
<input
  type="text"
  id="firstname"
  name="firstname"
  aria-describedby="firstname-error firstname-instruction"
  aria-invalid="true"
/>
<p id="firstname-error">The firstname should at least contain 2 characters</p>
<p id="firstname-instruction">
  This is the instruction below the firstname field
</p>
```

## Error summary

Ideally, there should also be an error summary on top of the form that contains a number of errors and links that bring the (keyboard) user to the relevant field.
This will provide a cognitive overview of all form related (error) messages.

```html
<div aria-label="Error message" role="alert">
  <div>
    <h2 class="sr-only">Error message</h2>
    2 errors found:
    <ul class="item-list__comma-list">
      <li><a href="#firstname">Firstname</a></li>
      <li><a href="#lastname">Lastname</a></li>
    </ul>
  </div>
</div>
<form>
  <div>
    <label for="firstname">Firstname</label>
    <input type="text" id="firstname" name="firstname" aria-invalid="true" />
  </div>
  <div>
    <label for="lastname">Lastname</label>
    <input type="text" id="lastname" name="lastname" aria-invalid="true" />
  </div>
</form>
```
