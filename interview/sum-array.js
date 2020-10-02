// Write a function that takes in an array
// of numbers, and returns the sum of those
// numbers.
const numbers1 = [2, 4, 1];
function sumOfNumbers(array) {
  //create a variable for the sum
  let sum = 0;
  //add each element of an array
  array.forEach(function (num) {
    sum += num;
  });
  return sum;
}
console.log(sumOfNumbers(numbers1));
