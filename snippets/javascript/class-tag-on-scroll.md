# change class tag on scroll

## description

> this snippet will change a preassigned tag to a class on scroll by adding an
> 'event listener' property

## application

> this snippet is useful when we want to activate an animation or reveal
> elements on scroll

### code

```javascript
"use strict";

window.addEventListener("scroll", show);

/* ^ EventListener is the name of the property. - show-  will be the name
of the second tag */

function show() {
  let show = document.querySelectorAll(".hide");

  /* ^ hide is the name of the original
  tag. we add this in the html after the class name. example -
  class="container hide"*/

  for (let i = 0; i < hide.length; i++) {
    // ^ here we assign a variable - i - and set a condition for its value

    let windowheight = window.innerHeight;

    /* ^ declare a variable and assign it a value equal to
  the scroll window's inner height */

    let showtop = hide[i].getBoundingClientRect().top;

    /* ^ declare another variable and assign it to the - hide - tag for
the variable - i - and add get bounding rect property this will return
the element's size and position on screen */

    let showpoint = 200;

    /* ^ one last variable... assigned the number of pixels from
  the bottom of the screen we must scroll before the tag changes */

    if (showtop < windowheight - showpoint) {
      hide[i].classList.add("show");

      /* ok, this is the cool part. here we set a condition, it says
      if the position/scale of the
      element(which we assigned the - hide - tag to) passes a point in
      the window height that is equal to the amount of pixels from the
      bottom we specified subtracted from the overall window height,
      then something will happen, that thing being the class tag change
      from - hide- to - show -. now we can assign animations
      or transformations for the new - show - tag in the css */
    } else {
      hide[i].classList.remove("show");
      /* ^ this last little bit completes the condition, stating that
      if the position of the element does not pass the pixel amount we
      specified the tag will revert to - hide - and with it the css
      properties we created for the - hide - tag */
    }
  }
}
```

### notes

- to regulate and make sure this snippet work watch the console. you should be
  able to see the tags change on scroll. good luck!

### more info

- [tutorial](https://www.youtube.com/watch?v=VplDlwLTR50&t=678s)

- how i used this snippet in my own
  [webpage](https://aviv82.github.io/aviv.home/)
