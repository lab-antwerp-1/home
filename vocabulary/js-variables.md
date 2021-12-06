# JavaScript Variables

There are three ways to declare a variable in JavaScript: `var`, `let`, and
`const`.

## `var`

The `var` command creates a variable that can be accessed in a variety of
different ways. It is close to being a "global".

```JS
var foo = "some value";
```

## `let`

The `let` command allows us to create a "local" variable, which can only be used
within its own code block.

```JS
let bar = "another value";
```

## `const`

Most programming languages have a notion of "constant" variables, which are
variables whose value cannot be changed during the execution of the program.
Once we declare and initialize a variable with the `const` command we cannot
change the value of that variable. This is useful for setting up parameters or
preferences for our code.

```JS
const userID = 42;
```
