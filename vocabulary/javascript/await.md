# `await`

The await operator is used to wait for a Promise. It can only be used inside an
async function within regular JavaScript code.

If you want to fetch() raw data from api and then process it, you have to add
`await` before fetch(). Otherwise there will have error.

## Syntax

```js
[rv] = await expression;
```
