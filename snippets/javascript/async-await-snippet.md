```js

const randomizer = Math.ceil(Math.random() _ 4000); const char =
String.fromCharCode(Math.ceil(Math.random() _ 400)); // console.log(char);

const timer = (num = Math.ceil(Math.random() \* 400)) => { const char =
String.fromCharCode(num); return char; };

const firstDelay = () => { setTimeout(timer, Math.ceil(Math.random() _ 4000));
}; const secondDelay = () => { setTimeout(timer, Math.ceil(Math.random() _
4000)); }; const thirdDelay = () => { setTimeout(timer, Math.ceil(Math.random()
_ 4000)); }; const fourthDelay = () => { setTimeout(timer,
Math.ceil(Math.random() _ 4000)); }; const fifthDelay = () => {
setTimeout(timer, Math.ceil(Math.random() \* 4000)); }; let word = ''; ` const
construct = (char = '') => { word = word + char; return word; };

construct(firstDelay()); construct(secondDelay()); construct(thirdDelay());
construct(fourthDelay()); construct(fifthDelay()); console.log(word);

```
