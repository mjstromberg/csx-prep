/**
 * You are provided with an array, possibleIterable.
 * Using a for loop, build out the object divByThree
 * so that each key is an element of possibleIterable
 * that is divisible by three. The value of each key
 * should be the array index at which that key can be
 * found in possibleIterable.
 */

const possibleIterable = ["hello", 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE

function divideByThreeV1() {
  // loop through the array
  for (let i = 0; i < possibleIterable.length; i++) {
    // get number
    const number = possibleIterable[i];
    // check if number is divisible by three
    if (number % 3 === 0) {
      // add a property onto the divByThree object
      // where the key is the number and
      // where the value is the index
      divByThree[number] = i;
    }
  }
}

function divideByThreeV2() {
  possibleIterable.forEach(function (number, i) {
    if (number % 3 === 0) {
      divByThree[number] = i;
    }
  });
}

function divideByThreeV3() {
  function checkIfDivisbileByThreeAndAddToObject(number, i) {
    if (number % 3 === 0) {
      divByThree[number] = i;
    }
  }

  possibleIterable.forEach(checkIfDivisbileByThreeAndAddToObject);
}

// test
divideByThreeV1();
// divideByThreeV2();
// divideByThreeV3();
console.log(divByThree);
