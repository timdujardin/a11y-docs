---
title: Dynamic content, AJAX, and Single-Page Apps
description: Assistive technology must be notified when important updates take place
---

Assistive technology must be notified when important updates take place within the element and its children,
independently from the user's current focus. Live region notifications are transient, once an announcement is made it
disappears forever. Similar to toast messages, they're auto-expiring by nature.

:::note[4.1.3 Status Messages (Level AA)]
Live regions are currently the primary way to conform with Success Criterion 4.1.3 Status Messages (Level AA).
The goal of this criterion is to make users aware of important changes in content, because people who do not see
messages need to be informed about them through alternative notifications.
:::

## Aria-live

`Aria-live` is the primary attribute used to designate an element as a live region. When used on an element, it indicates that this element may be updated, and those updates should be communicated to screen readers.
The value of `aria-live` describes the types of updates that can be expected from the region. It accepts three values: `assertive`, `polite`, and `off` (which is equivalent to removing the property altogether).

:::note[Live region render position]
At this point it is important to note that you should place the live region container in the DOM as early as possible and then populate it with the contents of the message using JavaScript when the notification needs to be announced.
This ensures that the live region is monitored for updates before they happen. Otherwise, the update may not be communicated to screen readers.
:::

```html
<!-- this div is now a live region! It's as simple as that. -->
<div aria-live="[ polite | assertive ]">...</div>
```

### Type of communication

The value of `aria-live` you choose will depend on the **type**, **urgency** and **priority** of the update.

If the update is important enough that it requires the user's immediate attention, assertive will tell the screen reader to immediately notify the user, interrupting whatever the user's currently doing.

- Assertive notifications are good for when users need to immediately know something and act on it, like when there's an
  error in submitting information in a form, or something more serious like a session timeout or a security alert.
- Assertive notifications are very disruptive and should be limited to a few use cases where the messages are critical to the user and require their immediate attention. Otherwise, they may disorient users or cause them not to complete their current task.

Using `polite` on the other hand, is more… polite. It indicates that the screen reader should wait until the user is idle (such as when the screen reader has finished reading the current sentence, or when the user pauses typing) before presenting updates to them.

- Polite regions do not interrupt the user's current task.
- They are more suitable for things like success messages, feeds, chat logs, and loading indicators, for example.

The value `off` is the assumed default value for all elements. It indicates that updates to the element should not be presented to the user unless the user is currently focused on that region.

**A last important note to make here is that a live region does not need to be initially empty.**

## Live region roles

When you use `aria-live` to create a live region, the element's implicit semantics (if it has any) are retained.
This means that you can use the appropriate element to represent the component you're creating, and if the component is getting updated you can then designate it as a live region with the aria-live attribute.

```html
<!-- this list will be treated like any list on the page would be; since it is also designated as being live, any changes that happen to it should be communicated to screen readers and announced to the user -->
<ul aria-live="polite">
  <li>My list semantics are important.</li>
  <li>But I want you to know when new list items are added.</li>
</ul>
```

The 2 most important roles are status and alert, which resemble some implicit semantics equal to setting `aria-live` and `aria-atomic` manually.
You also have the roles `log`, `marquee` and `timer` which have poor or no support, so I won't mention them here.

- The `alert` role: represents a live region with important, and usually time-sensitive information, such as error notifications
- The `status` role: represents a live region whose content is advisory information for the user but is not important enough to justify an alert, often but not necessarily presented as a status bar (such as a status or success message)

### Implicit semantics

Live region roles are pre-configured. They come with implicit `aria-live` and `aria-atomic` values.

| Role   | Aria-live   | Aria-atomic |
| :----- | :---------- | :---------- |
| alert  | `assertive` | `true`      |
| status | `polite`    | `true`      |

## Difference between aria-live and live region roles

### Explicit semantics

The primary difference between using live region roles and using aria-live on its own is that live region roles have semantic meaning.
They add explicit semantics to an element (This is an alert, This is a status message, etc.), so some screen readers may
announce "alert" before announcing the content of the message.

### Accessible naming

Another advantage to using a live region role over `aria-live` is that live region roles accept an accessible name.

If you use `aria-live` to create a live region, the implicit semantics of the element you're using it on will determine whether or not it can have an accessible name.
ARIA live region roles provide meaningful roles to the elements they are used on and can therefore accept an accessible name.

Because for instance, a `<div>` will not consistently expose an accessible name unless you give it a meaningful role.

Accessible naming is very important when you use multiple live regions on the same page, since it will provide a distinction between them.

## Live region configuration options (limited support)

:::caution[Limited support]
Be aware, support for the `aria-relevant`, `aria-atomic`, and `aria-busy` attributes is currently inconsistent across browsers and screen reader pairings.
So, unfortunately, you can't rely on these properties in your projects just yet. If you do, many of your content updates
may be announced in ways that you did not intend them to be announced, which could result in a sub-optimal user
experience.

Support info: [aria-atomic & aria-relevant on aria-live regions](https://pauljadam.com/demos/aria-atomic-relevant.html)
:::

### When should a notification be fired?

The `aria-relevant` attribute is used to specify what type of changes in the live region should trigger an announcement.
For example, should the screen reader make an announcement when a node is added to the region? or when a node is removed? or when the text within an element changes? or maybe when any of these updates happen?

There are 4 configuration options: `additions`, `removals`, `text` or `all`.

- `additions` will trigger a notification when a DOM node is added to the region
- `removals` will trigger a notification when a DOM node is removed from the region
- `text` will trigger when text changes happen inside the region, such as changing a text node inside the region or changing a text alternative for an image inside the region
- `all` is a shorthand for all three options

The default value is `additions text`, which means that a live region will trigger an announcement when content is added or text is changed within the region.
As you had probably noticed, you can **combine multiple options as a space-separated list**.

### What is contained in an announcement?

The `aria-atomic` attribute determines what is contained in the announcement.
It indicates whether the screen reader should present all or only parts of the changed element based on the change notifications defined by the `aria-relevant` attribute.

For example, if a piece of text changes inside an element, should the screen reader announce only the changed text? or the entire contents of the live region?
If text is added to a live region, should only the newly added text be announced? or should the entire region's content be announced every time?
`Aria-atomic` accepts two values:

- `False`, a screen reader should only announce the parts of the element that have changed. **This is the default value**.
- `True`, the screen reader should announce the entire contents of the live region when a change happens inside of it. It doesn't matter what has changed. It's going to read everything — the entire content of the live region, plus the region's accessible name, if it has one.

### Should the screen reader wait to announce?

:::caution[ARIA busy on its own isn't sufficient]
Unfortunately, because `aria-busy` is currently not well-supported across screen reader and browser pairings, most
screen readers (except JAWS) will read the contents of the busy region even before it's done loading, which would result
in a sub-optimal experience.

You currently need to **work your way around that by hiding the busy region using `aria-hidden`, and un-hiding it when its contents are done loading**.
:::

The `aria-busy` attribute is used to indicate that an element (typically an entire section on the page) is undergoing changes (such as a section loading new content), and that screen readers should therefore wait until the changes are complete before exposing the content to the user.
By default, all elements have an `aria-busy` value of `false`. Meaning that they are not undergoing changes and screen readers can, therefore, expose their content when the user navigates to them.

To use `aria-busy`, you would set it to `true` on an element while the element is undergoing changes, and then flip its value to `false` when the changes are complete and ready to be exposed or announced to the user.
`aria-busy` can be used on any element that is undergoing changes, even if that element is not a live region.

If you use `aria-busy` on a live region, the contents of the live region will be announced after `aria-busy` is set to `false`. If multiple changes have been made to the element while it was busy, they are announced as a single unit of speech when `aria-busy` is turned off.

### Example

:::note[Skeleton screens]
'Skeleton screens' in Single Page Applications (SPA) are a practical use case for the `aria-busy` attribute.
:::

A skeleton screen is a specific type of loading indicator that is shown in lieu of the content of a section being loaded until the content of that section loads.
They often provide a wireframe-like visual that mimics the layout of the page and helps users build a mental model of what will be on the page when the content loads.

Since the busy section is effectively hidden from screen reader users, you will want to communicate the state of the loading content to screen reader users.
You can do that by using a separate, visually-hidden live region. Using this region, you can communicate to the user that a screen has started loading, and then let them know when the loading is complete.
So, when the content is loading, your markup would at a certain moment look like this:

```html
<div aria-live="polite" class="visually-hidden">Loading content...</div>

<section aria-busy="true">
  <h2>..</h2>
  <p>..</p>
  <article>..</article>
  ..
  <!-- more content is loading -->
</section>
```

and then when the content is loaded, flip the value of `aria-busy` to `false`, and update the content of the live region:

:::note[Visual vs non-visual notifications]
This is an example of when a live region can be used exclusively for notifying screen reader users, but doesn't need to be rendered visually because there is an alternative visual indicator for sighted users (the skeleton screen, in our case).
So you can think of the live region like a text alternative for the skeleton screen in this case.
:::

```html
<div aria-live="polite" class="visually-hidden">Content loaded.</div>
<section aria-busy="false">
  <h2>..</h2>
  <p>..</p>
  <article>..</article>
  ..
  <!-- more content is loading -->
</section>
```

## The `<output>` element

The `<output>` element has implicit live region semantics. It maps to the ARIA status role, which means that it represents a polite live region.
`<output>` is also a labelable element, which means that you can give it an accessible name using the `<label>` element.

A practical use case for the `<output>` element is using it to represent the total price of products in a cart on an e-commerce website.
When the user updates the number of items in their cart, the total price is updated to reflect the new total price. Wrapping the price in an `<output>` element allows it to be announced by the screen reader when it is updated.

```html
<label for="result">Your total is:</label>
<output id="result">...</output>

<!-- or -->

<label for="result">
  Your total is:
  <output id="result">...</output>
</label>
```

### Screen reader support

You have probably also noticed that VO with Safari announces the initial total value before it announces the updated total value every time it makes an announcement.

The `<output>` element is currently not consistently announced across browser and screen reader pairings
Not all screen readers announce the accessible name of the `<output>` when its content is updated.

- VoiceOver with Safari announces the content of the `<output>` element in the example above but it does not announce its accessible name
- NVDA with Firefox does not announce the accessible name either
- With Chrome, VoiceOver announces the contents of `<output>` with its accessible name as it is intended

## Live regions don't support rich text

All semantics within a live region are not communicated, only the text content. For example, if you render a button within a live region it won't be announced as role button.
The only semantics that are communicated are those of the live region itself.

```html
<div aria-live="polite">
  <!-- The semantics of this button are not conveyed in the live region announcement -->
  <button>You'll have to guess what I represent!</button>
</div>
```

## Live regions shouldn't contain interactive content

Therefore, live regions should not be used for messages or notifications that contain interactive elements, particularly if the user may need to act on those notifications.
As we mentioned earlier, when a screen reader announces the contents of a live region, it will announce the raw text content within the region without any of the structure or semantics.
This means that the semantics of any interactive elements will not be conveyed.

Furthermore, when an update happens in a live region, screen readers will only announce the contents of a live region, but the user's focus does not move to the region.
And there is no mechanism available to allow the user to easily navigate to a live region to interact with any content that might be in it.

If a notification contains an interactive element, you need to ensure that the user can easily navigate to it. And the best way to do that is to move the user's focus to it.
The alert and status live region roles are meant to represent short messages that do not require moving the user's focus to (i.e. that do not contain interactive children).

:::note[Important notice]
Since alerts are not required to receive focus, authors SHOULD NOT require users to close an alert.
If an author desires focus to move to a message when it is conveyed, the author SHOULD use alertdialog instead of alert.

ARIA specification: <https://www.w3.org/TR/wai-aria-1.2/#alert>
:::

### Alertdialog vs dialog

Keep in mind that moving focus should be done as an immediate response to the user's action.
If something happens async or after a delay like if a toast appears that the user hasn't called up, then you shouldn't move their focus to it, otherwise it would be disruptive to the user experience.
Decide if you should move focus or not based on what users are expecting.

#### Alertdialog

For interactive alert notifications, instead of using a toast message, consider using an alert dialog. The ARIA alertdialog role is used to represent a type of dialog that contains an alert message.
As the name implies, alertdialog is a mashup of the dialog and alert roles. This means that it also expects similar keyboard interactions as modal dialogs do.
For example: an error notification that has to be communicated assertively in combination with interactive content (ok/cancel buttons)

More information at <https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/>. (4.1.3 Status Messages - Level AA)

#### Dialog

For status type notifications that contain interactive elements, you may use a modal or non-modal dialog instead, and manage focus within these dialogs when they appear, as documented on the APG modal dialog example page.
For example: a status notification that has to be communicated politely in combination with interactive content

## Tangible examples

### Overview page with sidebar filter

In most web applications, the content in the main section will filter dynamically as soon as the user selects one of the available filters. But just because the content within the section gets updated does not mean that the section should be a live region.
So, how do you let the user know that the content in the section is updating?

Providing simple instructional cues that set the user's expectation of what will happen when they interact with an element is sometimes more than sufficient to let the user know of content updates even before they happen.

:::note[]
Live example of how it should work: [section 4.1.3 Status Messages of page "How to Meet WCAG (Quick Reference)"](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&currentsidebar=%23col_customize#status-messages)
:::

![The Nike product overview page with a highlighted sidebar filter](../../../../assets/images/live-region-sidebar-filter.png)

For the filtering component, what this means is that you can include an instructional cue at the top of the group of filters to let the user know that changing the filters will change the content in the main area.
This way you're setting the user's expectation of what will happen when they select a filter, so you no longer need to make any announcements when the content updates. The user knows that they can just navigate to the main area and start exploring the filtered content.

### Autocomplete search

Another very common UI component that can benefit from a similar implementation approach is a dynamic search component — particularly one where you have a search field that filters and displays results as you type into the field, like the search component you can find on the Smashing Magazine website.

A simpler, more robust, and much more user-friendly approach to implementing this pattern is to provide an instructional cue (i.e. an accessible description for the input field) that tells the user what will happen when they start typing in the field.
The description might say "Results will [ filter / display / etc. ] as you type". For example, the search component on the a11ysupport.io website provides a live implementation of this approach.
The accessible description of the search field lets you know that "Features will be filtered as you type".

The cue must be associated with the search field using `aria-describedby` so that screen readers announce it to their users.

:::note
That being said, you do still want to use an assertive live region to inform the user when no results are found.
:::

Delaying such an announcement would result in wasted time, and potential uncertainty about "when" someone's query stopped working. […]
People who can see the UI are likely going to notice right away when the dynamic content dries up. They can then immediately correct for this by adjusting their query.
This same affordance must be provided to people with disabilities.

Example of "no results found":

```html
<search role="search">
  <label for="search">Find a thing</label>
  <input
    id="search"
    name="search"
    type="search"
    aria-describedby="instruction"
  />
  <p id="instruction">Results will update as you type</p>
</search>

<h2>Search results</h2>
<div role="status">No results found!</div>
<div>[results would be rendered here]</div>
```

## Best practices

### Make sure the live region container is in the DOM as early as possible

The element that is designated as a live region must exist on the page when the browser parses the contents and creates
the accessibility tree of the page. This ensures that the element will be monitored for changes when they happen and
that these changes are communicated to the screen reader and the user.

So when you create a live region, insert it into the DOM as soon as possible (ideally, when the page loads), before you push any updates to it. If you insert a live region into the DOM or convert a container into a live region when you need it, there's a high chance that it won't work.

### Choose an appropriate hiding technique if the live region isn't visible

If the status message is not visible to all users, hide it visually using the visually-hidden utility class.
Don't hide the live region using using `display: none;` or `aria-hidden="true"`, or any other hiding technique that removes it from the accessibility tree. Hidden live regions are not announced.

### Limit the number of live regions on the page

A good practice is to have only two live regions on the page: one assertive region and one polite region that get inserted to the page on page load. Then you insert updates into these two regions and manage the message queue in them via JavaScript.
If you have multiple live regions on a page, they may interfere with each other, and some messages might not be announced at all.

Items which are assertive will be presented immediately, followed by polite items.
User agents or assistive technologies MAY choose to clear queued changes when an assertive change occurs.
(e.g., changes in an assertive region may remove all currently queued changes)

Specification: <https://www.w3.org/TR/wai-aria-1.2/#aria-live>

### Compose and insert your message into the live region in one go

You should pre-compose the notification message's content and insert it into the region in one go. Don't make multiple DOM insertions to create one message, otherwise the screen reader may make multiple separate message announcements, which is not what you want.

### Empty the live region and wait a bit in between updates

If the status message is not visible to everyone or it is removed after a short timeout, set a timeout (e.g. 350ms - 500ms) to remove the notification text from the live region. You are not required to empty a live region after its contents have been announced because announcements are triggered on content additions by default, but emptying the live region between updates ensures that you don't end up with weird or duplicate announcements.

```js
/* set a timeout to empty the live region */
setTimeout(() => {
  //empty live region
}, 350);
```

Emptying the live region when it's no longer visible also ensures that screen reader users will not be able to navigate to it when they are not intended to.

So make sure the live regions are cleared up in between updates, and wait a little bit before inserting new updates to them. And when you do insert a new update, insert the new message in one go.

Debug live regions
To debug live regions on a page, you can use the [NerdeRegion](https://chromewebstore.google.com/detail/nerderegion/lkcampbojgmgobcfinlkgkodlnlpjieb/related?hl=en-US&pli=1) browser extension.
