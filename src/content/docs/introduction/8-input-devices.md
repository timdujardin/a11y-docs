---
title: Input devices
description: Take into account the various input devices, such as mouse, keyboard and touch.
---

Take into account the various input devices, such as mouse, keyboard and touch.

## Mouse

Mouse input is the most common method for many users, but it's important to remember that not everyone can use a mouse effectively.
Here are key considerations:

- Clickable areas: Ensure buttons, links, and other clickable elements are large enough and well-spaced to be easily targeted.
- Hover effects: Use hover effects to indicate interactivity, but don't rely solely on them for important information or functionality.
- Scroll-based interactions: Be cautious with scroll-jacking or complex scroll-based interactions, as they can be difficult for some users.

## Keyboard

Keyboard accessibility is crucial for users who can't use a mouse and for power users who prefer keyboard navigation. Key points include:

- Focus indicators: Ensure all interactive elements have a clear visual focus indicator.
- Logical tab order: Interactive elements should be navigable in a logical order using the Tab key.
- Keyboard traps: Avoid situations where keyboard users can get trapped in a component.
- Shortcuts: Implement keyboard shortcuts for important functions, but allow them to be remapped to avoid conflicts with assistive technologies.
- Skip links: Provide a skip link at the top of the page to jump to the main content.

## Touch

With the prevalence of mobile devices, touch input is increasingly important. Consider:

- Touch target size: Make touch targets large enough (recommended at least 44x44 pixels, but in WCAG referenced to 24x24px).
- Spacing: Ensure adequate spacing between touch targets to prevent accidental taps ([circle of 24px radius](<https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html#:~:text=Undersized%20targets%20(those%20less%20than%2024%20by%2024%20CSS%20pixels)%20are%20positioned%20so%20that%20if%20a%2024%20CSS%20pixel%20diameter%20circle%20is%20centered%20on%20the%20bounding%20box%20of%20each%2C%20the%20circles%20do%20not%20intersect%20another%20target%20or%20the%20circle%20for%20another%20undersized%20target%3B>)).
- Gestures: If using complex gestures, provide alternative methods to perform the same actions.
- Touch feedback: Provide visual or auditory feedback for touch interactions.
- Orientation: Design for both portrait and landscape orientations.
