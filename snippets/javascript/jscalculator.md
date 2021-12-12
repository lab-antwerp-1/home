# JS based simple calculator

```js
'use strict'

let operator = '';
let operation = '';
let number1;
let number2;

// accept input from the user and check if it is a number 
while(isNaN(number1)) {
 number1 = parseFloat(prompt ('Enter the first number: '));
}
  operator = prompt('Enter valid operator ( either +, -, * or / ): ');  
  while(!(operator === '+' || operator === '-' || operator === '*' || operator === '/')){
    operator = prompt('Enter valid operator ( either +, -, * or / ): ');  
  }
  // accept input from the user and check if it is a number 
  while(isNaN(number2)) {  
    number2 = parseFloat(prompt ('Enter the second number: '));
   }

let result; // declaration of the variable.  
  
// use if, elseif and else keyword to define the calculator condition in JavaScript.  
if (operator === '+') { // use + (addition) operator to add two numbers  
    result = number1 + number2; 
    operation = "The sum is : " ;
}  
else if (operator === '-') { // use -  (subtraction) operator to subtract two numbers  
    result = number1 - number2;  
    operation = "The difference is : " ;
}  
else if (operator === '*') { // use * (multiplication) operator to multiply two numbers  
    result = number1 * number2;  
    operation = "The product is : " ;
}  
else  {  
  if (number2 !== 0){ //Check if the divider is zero or not 
    result = number1 / number2; // use / (division) operator to divide two numbers 
    operation = "The  quotient is : " ;
  } else
   alert('you cant divide by zero !!!') 
}  
  
// display the result of the Calculator  
alert(operation + result);
