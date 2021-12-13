# Try and catch

## Errors Will Happen

If your program keeps crashing at a particular spot, try surrounding that code
with try catch blocks to investigate the error object that gets returned.

The `try` statement allows you to define a block of code to be tested for errors
while it is being executed.

The `catch` statement allows you to define a block of code to be executed, if an
error occurs in the try block.

The JavaScript statements `try` and `catch` come in pairs

```js
<script>
try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
</script>
```

In this example "alert" is misspelled as "adddlert" to deliberately produce an
error. JavaScript catches adddlert as an error, and executes the catch code to
handle it.

"JavaScript Error Handling

How to use catch to display an error.

Can't find variable: adddlert"
