# Statements Vs. Expressions

An expression is any valid code that resolves into a value and can be written
whenever you would expect a value. Usually expressions are written in only one
line. For example:

- 42 // a number
- “Hello World” // a string
- 42 + 1 // a calculation
- x = 42 + 1 // calculation
- myVar // a variable
- myFun() // a function that returns a value

But it’s more complicated than that. There are different types of expressions:

- Arithmetic: Resolves to a number, e.g. 42 42 + 1 etc.
- String: Resolves to a string, e.g. "Hello World" "123" etc.
- Logical: Resolves to true or false and often uses a logical operator, e.g.
  true 1 === 0 etc.
- Primary expressions: Basic keywords and general expressions, e.g. this
  grouping operator (...): (1 + 2) \_ 3 etc.
- Left-hand-side-expressions: Left values are the destination of the assignment,
  e.g. var x = 42 + 1 new operator: var myVar = new Object() super keyword to
  call the object’s parent: super.functionOnParent etc.

  A statement can span multiple lines in your code. In JS a statement is a
  little bit harder to describe that an expression, because a statement isn’t a
  keyword but rather a collection of keywords. A statement can be:

  - Control flow: a block of code, if … else, switch, try … catch, break,
    continue , throw , etc.
  - Functions and classes: function myFunction() { ... } , function\_ , async
    function , class , etc. iterations: while , do ... while , for , for ... of
    , etc.
  - Miscellaneous: debugger , import , export , with, etc. You can write an
    expression when a statement is expected.

  These kind of expressions are called expression statements. But the opposite
  is not true, i.e. you can’t write a statement when an expression is expected.

  How do you remember this?

  Expressions are short. Statements are long. I imagine expression to be like
  FedEx. Short, fast, easy to understand. While politicians make statements.
  They are long, can span multiple lines, and you often refactor statements than
  expressions.
