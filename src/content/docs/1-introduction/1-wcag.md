---
title: WCAG
description: The Web Content Accessibility Guidelines (WCAG) form the foundation of digital accessibility standards.
---

## What is WCAG?

It is a set of guidelines developed by the World Wide Web Consortium (W3C) to ensure that web content is accessible to people with disabilities. WCAG provides a framework for making web content more accessible by defining requirements and techniques for various aspects of web accessibility, including visual, auditory, and cognitive disabilities.

The guidelines are organized into four principles: Perceivable, Operable, Understandable, and Robust (POUR), each with specific success criteria that must be met to achieve accessibility.

1. Perceivable: Information and user interface components must be presentable to users in ways they can perceive
2. Operable: User interface components and navigation must be operable by all users
3. Understandable: Information and the operation of the user interface must be understandable to all users
4. Robust: Content must be robust enough to be reliably interpreted by a wide variety of user agents, including
   assistive technologies

Each of these principles is further divided into specific guidelines and success criteria, which provide measurable ways to ensure accessibility.

## Tangible Examples of Accessibility

To illustrate the POUR principles in practice, here are some concrete examples:

1. Perceivable: Non-text content, such as images, should be accompanied by text alternatives.
2. Operable: All content and functionality should be accessible and operable through a keyboard.
3. Understandable: The language of the page must be correctly set to allow proper interpretation by assistive technologies.
4. Robust: Semantic information, including name, role, and value, should be programmatically available to ensure compatibility with various user agents and assistive technologies.

## WCAG Conformance Levels

WCAG defines three levels of conformance:

1. Level A: This is the minimum level of accessibility, addressing the most basic accessibility features.
2. Level AA: This is considered the legal requirement for most regulations and is the target for most organizations.
3. Level AAA: This is the highest level of accessibility, going beyond the standard requirements to provide advanced accessibility features.

## WCAG Techniques

The following content originates from [Understanding Techniques for WCAG 2.1 Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques).

### Techniques are Informative

Techniques are informative - that means they are not required. The basis for determining conformance to WCAG 2.1 are the
success criteria from the WCAG 2.1 standard - not the techniques.

1. Note 1: W3C cautions against requiring W3C's sufficient techniques. The only thing that should be required is meeting the WCAG 2.1 success criteria. To learn more, see:
   1. What would be the negative consequences of allowing only W3C's published techniques to be used for conformance to WCAG 2? in the WCAG 2 FAQ
2. Note 2: Techniques for WCAG 2.1 uses the words "must" and "should" only to clarify guidance within the techniques, not to convey requirements for WCAG 2.1.

### Sufficient Techniques

Sufficient techniques are reliable ways to meet the success criteria.

- From an author's perspective: If you use the sufficient techniques for a given criterion correctly and it is accessibility-supported for your users, you can be confident that you met the success criterion.
- From an evaluator's perspective: If web content implements the sufficient techniques for a given criterion correctly and it is accessibility-supported for the content's users, it conforms to that success criterion. (The converse is not true; if content does not implement these sufficient techniques, it does not necessarily fail the success criteria, as explained in Testing Techniques below.)

There may be other ways to meet success criteria besides the sufficient techniques in W3C's Techniques for WCAG 2.1 document, as explained in Other Techniques below. (See also Techniques are Informative above.)

#### Numbered Lists, "AND"

The W3C-documented sufficient techniques are provided in a numbered list where each list item provides a technique or combination of techniques that can be used to meet the success criterion. Where there are multiple techniques on a numbered list item connected by "AND" then all of the techniques must be used to be sufficient. For example, Sufficient Techniques for 1.3.1 has: "G115: Using semantic elements to mark up structure AND H49: Using semantic markup to mark emphasized or special text (HTML)".

### Advisory Techniques

Advisory techniques are suggested ways to improve accessibility. They are often very helpful to some users, and may be the only way that some users can access some types of content.

Advisory techniques are not designated as sufficient techniques for various reasons such as:

- they may not be sufficient to meet the full requirements of the success criteria;
- they may be based on technology that is not yet stable;
- they may not be accessibility supported in many cases (for example, assistive technologies do not work with them yet);
- they may not be testable;
- in some circumstances they may not be applicable or practical, and may even decrease accessibility for some users while increasing it for others;
- they may not address the success criterion itself, and instead provide related accessibility benefits.

Authors are encouraged to apply all of the techniques where appropriate to best address the widest range of users' needs.
