/**
 * Write a function that takes two parameters.
 * The first parameter is an array of numbers, and
 * the second parameter is a number. Your function
 * should filter out all of the numbers that are
 * less than the number from the second parameter.
 */

const jerseyNumbers = [1, 2, 5, 100, 234, 4, 7];

function filterLessThan(numbers, minNum) {
  return numbers.filter(function (number) {
    return number >= minNum;
  });
}
// function filterLessThan(numbers, minNum) {
//   //create new array varaible
//   const newArray = [];
//   //loop through the array
//   for (let i = 0; i < numbers.length; i++) {
//     const currentNum = numbers[i];
//     //use an if statement to filter out numbers less than second parameter
//     if (currentNum >= minNum) {
//       //push numbers less than second parameter into a new array
//       newArray.push(currentNum);
//     }
//   }
//   //return new array
//   return newArray;
// }

const result = filterLessThan(jerseyNumbers, 5);
console.log(result);
