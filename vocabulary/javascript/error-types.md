# survey of native js error types

## general

> various errors in code will throw different error messages. these error
> messages fall under different categories or types. understanding the type of
> error can help us locate the problem in our code more easily

### eval error

> `EvalError` is a 'legacy' error type no longer in common use. it throws when
> the global `eval()` function is used. in recent versions of js `EvalError`
> might throw as `TypeError`(see below)

### internal error

> an error that occurs within the js engine due to data overload, excess
> recursions, switch cases etc. will not throw an error message so much as blue
> screen/shut down

### URI error

> uri stands for uniform resource indicator and i am not sure what it is or
> does. global uri functions such as `encodeURI()` or `decodeURI()` will throw
> `URIError` wheen used with malformed uri parameters

### range error

> `RangeError` throws when numbers appear outside of their value range. for
> example in too large array lengths or undefined array lengths

### reference error

> `ReferenceError` will throw when a variable or item are referenced that do not
> exist. it can also occur when a variable is declared but is out of scope of
> where it is referenced

### syntax error

> `SyntaxError` throws when we write code that the js engine can't 'parse'.
> parsing is a stage the code pass through in the js engine before executing. if
> our code is written incorrectly (for example missing punctuation, spacing, or
> misplaced or excess characters) the parsing will fail and throw a syntax error

### type error

> `TypeError` throws when an unexpected data type is used instead of un expected
> one(for example boolean in a string method). type error is also a default
> error type for when no other error types are applicable to a failed operation
> (see eval error above)

### custom error

> custom error types can be created by the programmer through a `.prototype`
> method. the programmer can name the error and define the error message it
> throws

#### extra references

- [bits and pieces](https://blog.bitsrc.io/types-of-native-errors-in-javascript-you-must-know-b8238d40e492)

- [tutorial maker](https://www.tutsmake.com/javascript-error-types/)
