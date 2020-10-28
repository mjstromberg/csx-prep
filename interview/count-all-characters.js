/**
 * Complete a function called countAllCharacters. Given a string, your function
 * returns an object where each key is a character in the given string. The value
 * of each key should be how many times each character appeared in the given string.
 *
 * Notes:
 * If given an empty string, countAllCharacters should return an empty object.
 * var output = countAllCharacters('banana');
 * console.log(output); // --> {b: 1, a: 3, n: 2}
 */

function countAllCharacters(str) {
  // create a tally
  const letterCount = {};
  // go over word letter by letter
  for (let i = 0; i < str.length; i++) {
    //creat variable to store the i
    const letter = str[i]; // 'b'
    // when a letter occurs
    // store it in the tally
    const isInLetterCount = letterCount[letter] !== undefined;

    if (isInLetterCount) {
      letterCount[letter] = letterCount[letter] + 1;
    } else {
      // do some other thing
      letterCount[letter] = 1;
    }
  }
  //return tally
  return letterCount;
}

const result = countAllCharacters("banana");
console.log(result);
