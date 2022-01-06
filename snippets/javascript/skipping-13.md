# Skipping 13

Many tall buildings, including hotels, skip the number 13 when numbering floors
-- often going from floor 12 to floor 14. It is thought that the number 13 is
unlucky. This is a program that will number 15 rooms starting from 1, skipping
the number 13. Output to the console each room number in separate line.

```js
let countOfRooms = 15;
for (let roomNumber = 1; roomNumber <= countOfRooms + 1; roomNumber++) {
  if (roomNumber === 13) {
    continue;
  }
  console.log(roomNumber);
}
```
