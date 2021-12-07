# a list of variable types in js

## general

> variables are containers which can be assigned different values the value (or
> data) is stored in the computer's memory. variables are an essential aspect of
> js

## naming variables

- variable names are case sensitive
- variables cannot be named the same as js keywords such as; if, else or new
- variable names cannot begin with a number

> it is standard practice to use camelCase when naming variables. camelCase is
> written without spaces. the first word is lowercase and the first letter of
> every subsequent word is capitalized. examples: yourName firstParDown
> nameOfCompany

## variable types

### var

> var is the og keyword for creating a variable. because it is function scoped
> it is not used as often these days but still common in 'legacy' (older) code

### let

> let was introduced in 2015 with the 6th edition of ESMAScript (ES6 for short).
> unlike var it is object scoped and therefore prefered by developers today

### const

> const is a keyword which creates a specific type of variable - a constant
> unlike var and let variables, constant variables are declared a value once and
> cannot be reassigned. const variables must also be assigned a value when they
> are declared, unlike var and let variables which can be left undefined
