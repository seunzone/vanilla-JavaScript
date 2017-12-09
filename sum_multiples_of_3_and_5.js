// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6
// and 9. The sum of these multiples is 23.
// write a program that takes in an integer and prints sum of all the multiples of 3 or 5
// below that integer.

const number = (input) => {
let num = input;
let sum = 0;
for (let i = 0; i < num; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  } 
} return sum;
}
console.log(number(10));