# Text encryptor

You are making a text encryptor. It should take multiple words and output a
combined version, where each word is separated by a dollar sign `$`.

For example, for the words "hello", "how", "are", "you", the output should be
`"$hello$how$are$you$"`.

```js
class Add {
  constructor(...words) {
    this.words = words;
  }
  print() {
    let finalString = "";
    for (let index = 0; index < this.words.length; index++) {
      finalString += "$" + this.words[index];
    }
    finalString += "$";
    console.log(finalString);
  }
}

const test1 = new Add("hehe", "hoho", "haha", "hihi", "huhu");
const test2 = new Add("this", "is", "awesome");
const test3 = new Add(
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit"
);
test1.print();
test2.print();
test3.print();
```
