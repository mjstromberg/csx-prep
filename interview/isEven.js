// Write a function that determines whether or not
// a number is even. The function should return
// a boolean.

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// const isEven = (number) => number % 2 === 0;

// tests
const result1 = isEven(2);
console.log(result1);
const result2 = isEven(5);
console.log(result2);
