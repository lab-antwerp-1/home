# JavaScript Vocabulary

## Asynchronous

Code is asynchronous when you initiate something, forget about it, and when the result is ready you get it back without having to wait for it. The typical example is an AJAX call, which might take even seconds and in the meantime you complete other stuff, and when the response is ready, the callback function gets called. Promises and async/await are the modern way to handle async

## Block

In JavaScript a block is delimited curly braces ({}). An if statement contains a block, a for loop contains a block.

## Immutability

A variable is immutable when its value cannot change after it’s created. A mutable variable can be changed. The same applies to objects and arrays.

## Strict mode

Strict mode is an ECMAScript 5.1 new feature, which causes the JavaScript runtime to catch more errors, but it helps you improve the JavaScript code by denying undeclared variables and other things that might cause overlooked issues like duplicated object properties and other subtle things. Hint: use it. The alternative is “sloppy mode” which is not a good thing even looking at the name we gave it.

## Function Scoping

With Function Scoping, any variable defined in a function is visible and accessible from inside the whole function.

## Block Scoping

With Function Scoping, any variable defined in a block is visible and accessible from inside the whole block, but not outside of it.
