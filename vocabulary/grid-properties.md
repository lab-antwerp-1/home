# Grid Properties

> CSS Grid Layout (aka “Grid” or “CSS Grid”), is a two-dimensional grid-based
> layout system.

## Properties for the Parent(Grid Container)

- display

  > Defines the element as a grid container and establishes a new grid
  > formatting context for its contents.

  ```css
  .container {
    display: grid | inline-grid;
  }
  ```

- grid-template

  > A shorthand for setting grid-template-rows, grid-template-columns, and
  > grid-template-areas in a single declaration.

  - CSS Syntax

  ```css
  grid-template: none|grid-template-rows / grid-template-columns|grid-template-areas|initial|inherit;
  ```

    <!-- This grid layout has three columns, and the first row is 150px high: -->

  ```css
  .grid-container {
    display: grid;
    grid-template: 150px / auto auto auto;
  }
  ```

  <!-- [reference:A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/#grid-properties) -->
