// Write a function 'largestSwap' that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// 'largestSwap' should return a boolean.
// For example, if 27 is our our input, we should return false because swapping the digits gives us 72, and 72 > 27.
// Furthermore, if our input is 43 'largestSwap' should return true because swapping the digits gives us 34 and 43 > 34.

// number = 72
function largestSwap(number) {
  // convert num into a string --> number = '72'
  let string = number.toString();
  // separate out the digits ---> digit1 = '7', digit2 = '2'
  let firstDigit = string[0];
  let secondDigit = string[1];
  // swap the digits ---> swappedStr = '27'
  let swappedString = secondDigit + firstDigit;
  // convert back to a number
  let swappedNumber = parseInt(swappedString);
  // compare to our argument
  // if the new number is less than ---> return true
  // if the new number is greater than ---> return false
  if (swappedNumber > number) {
    return false;
  } else {
    return true;
  }
}

const result = largestSwap(22);
console.log(result);
