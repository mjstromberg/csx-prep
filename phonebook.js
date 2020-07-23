// If you're having trouble, use lines 12-14 for expected inputs and outputs
const phoneBook = {};
const names = ["Mira", "Royce", "Kathie"];
const numbers = ["3234958675", "9164059384", "4154958675"];

// Write your code below this line
function makePhonebook(firstNames = [], nums = []) {
  // return firstNames.reduce((phonebook, firstName, index) => {
  //   phonebook[firstName] = nums[index];
  //   return phonebook;
  // }, {});

  const phonebook = {};

  for (let i = 0; i < firstNames.length; i++) {
    const firstName = firstNames[i];
    const num = nums[i];
    phonebook[firstName] = num;
  }

  return phonebook;
}

console.log(makePhonebook(names, numbers));

//Uncomment the lines below to test your code
//console.log(phoneBook["Mira"]);
//=> 3234958675
//console.log(phoneBook["Royce"]);
//=> 9164059384
//console.log(phoneBook["Kathie"]);
//=> 4154958675

// const result = {
//   Mira: "3234958675",
//   Royce: "foo",
//   Kathie: "bar",
// };

// const foo = result["Mira"]; // foo = '3234958675'
// result["Mira"] = "baz";
// console.log(result);
