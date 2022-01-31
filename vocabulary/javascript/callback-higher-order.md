# Callback vs Higher-order function

## Callback function

A callback function is a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of routine
or action.

```js
function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
```

## Higher-order function

In Javascript, functions can be assigned to variables in the same way that
strings or arrays can. They can be passed into other functions as parameters or
returned from them as well.

A “higher-order function” is a function that accepts functions as parameters
and/or returns a function.

```js
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();

// the counter is now 3
```

## References

[Callback](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)  
[Higher-order](https://www.codecademy.com/learn/game-dev-learn-javascript-higher-order-functions-and-iterators/modules/game-dev-learn-javascript-iterators/cheatsheet)  
[Higher-order:Closures](https://www.w3schools.com/js/js_function_closures.asp)
