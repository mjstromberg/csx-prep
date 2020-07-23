/**
 * Here is an example of a function.
 *
 * Functions are an important building block of computer science
 * and are used frequently when writing software.
 */
function exampleFunction() {
  // Inside the function, we define instructions for what we
  // want the funciton to do.
  console.log("Hello, World!");
}

/**
 * After defining a function above, we can "invoke" the function
 * later when we need it.
 *
 * Defining a function is like writing a recipe, where as invoking
 * that function definition is like using the recipe to cook.
 */
// exampleFunction();

/**
 * Functions can be defined with "parameters".
 *
 * Paremeters can be passed into the function and then used inside of the
 * function. Parameters are like ingredients to your recipe.
 */
const thingOutside = "a";
function exampleFunctionWithParameters(exampleParameter1, exampleParameter2) {
  const thingInside = "b";

  function exampleInnerFunction() {
    const thingInsideInside = "c";
    console.log(thingOutside);
    console.log(thingInside);
    console.log(thingInsideInside);
  }
  // console.log(exampleParameter1, exampleParameter2);
}

// exampleInnerFunction(); // reference error
// TASK 1: Invoke the exampleFunctionWithParameters function here
// exampleFunctionWithParameters();
// END OF TASK 1

/**
 * a
 * b
 * c
 */

/**
 * This is an example function you might create to multiply two numbers
 * together.
 *
 * Notice the "return" keyword used here. This creates a return statement.
 * Any valid statement directly after the return keyword will be returned
 * from the function.
 *
 * You can think of returns as the output of your recipe. For example,
 * if you're baking a cake, the function is the recipe, the function
 * invocation is you preparing the batter and the putting in the oven,
 * and the return statement is you pulling the finished cake out of the
 * oven.
 */
function multiply(num1, num2) {
  return num1 * num2;
}

const resultOfMuliplication = multiply(8, 7);
console.log(resultOfMuliplication);

// TASK 2: Build a function called "add" which takes in two numbers, adds
// them together and returns them.
function add(a, b) {
  return a + b;
}
const resultOfAddition = add(2, 4);
console.log(resultOfAddition);
// END OF TASK 2

// TASK 3: Build a function called "multiplyThenAdd" which takes in three
// numbers, adds the first two, multiplies the results of the addition with
// the third number, and then returns them.
function multiplyThenAdd(a, b, c) {
  let firstTwo = a + b; // 1 + 2 = 3
  let multResults = firstTwo * c; // 3 * 1 = 3
  return multResults; // 3
}
let finalResult = multiplyThenAdd(1, 2, 1);
console.log(finalResult);
// END OF TASK 3
