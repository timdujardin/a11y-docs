---
title: Tables
description: Semantic approach for structured data
---

Tables are essential for presenting structured data, but they can be challenging for users with visual impairments or those using screen readers. To ensure your tables are accessible, follow these best practices: <https://www.w3.org/WAI/tutorials/tables/>.

:::note[1.3.1 Info and Relationships - Level A]
Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
:::

```html
<table>
  <caption>
    Concerts
  </caption>
  <tr>
    <th>Date</th>
    <th>Event</th>
    <th>Venue</th>
  </tr>
  <tr>
    <td>12 Feb</td>
    <td>Waltz with Strauss</td>
    <td>Main Hall</td>
  </tr>
  […]
</table>
```

## Structure

- Always use `<table>` elements for tabular data
- Use `<th>` for header cells and `<td>` for data cells
- Group related rows with `<thead>`, `<tbody>`, and `<tfoot>`

## Accessible name

Use the `<caption>` element to give a brief description of the table's content

## Rows and headers

- Use `<th scope="col">` for column headers
- Use `<th scope="row">` for row headers

## Association

Use the `headers` attribute on `<td>` elements to link them to their corresponding headers

## Best practices

### Avoid complex table structures

- Simplify tables by splitting complex ones into multiple simpler tables
- Avoid using nested tables

### Use responsive design techniques

- Implement strategies to make tables readable on small screens

### Provide alternatives for complex tables

- Offer a text description or summary for tables with complex relationships
- Convert complex tables to more a simple and concise information structure
