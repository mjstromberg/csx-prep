// Step #1: Create a function that reverses a string
// Step #2: Write a test for the function and log the result to the console

// string = 'foobar'
function reverseString(string) {
  //create a new string
  let newString = "";
  //loop through string
  for (let i = 0; i < string.length; i++) {
    //grab the current character at the index (i)
    let char = string[i];
    //add it to the new string
    newString = char + newString;
  }
  return newString;
}

// function reverseString(string) {
//   return string.split("").reverse().join("");
// }

const result = reverseString("foobar");
console.log(result);
