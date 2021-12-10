# Functions

A function is a reusable block of code that groups together a sequence of
statements to perform a specific task.

![Function Declaration](https://i.imgur.com/gKCPUE4.png)

A parameter is a named variable inside a function’s block which will be assigned
the value of the argument passed in when the function is invoked

![Parameter](https://i.imgur.com/GzjwASN.png)

![To call a function in your code](https://i.imgur.com/MdTY12C.png)

![To define a function using function expressions](https://i.imgur.com/kZGQyzn.png)

![To define a function using arrow function notation](https://i.imgur.com/mIjjVuf.png)

![Function definition can be made consise using consise arrow notation](https://i.imgur.com/wieF09m.png)

The `return` statement stops the execution of a function and returns a value
from that function.

```js
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}
```

It’s good to be aware of the differences between function expressions, arrow
functions, and function declarations. As you program more in JavaScript, you’ll
see a wide variety of how these function types are used.
