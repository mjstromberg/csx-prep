/**
 * Write a function that converts a date string from
 * the format M/D/YYYY to YYYY/MM/DD.
 *
 * Example: 9/1/2020 to 2020/09/01
 */

// Note: declare variable and assign it a value

//make a function that takes in a date as an argument
function convertDate(date) {
  //create an empty string
  let newDate = "";
  //create variable to store original month
  //create variable to store original day
  //create variable to store original 4 digit year
  let dateComponents = date.split("/");
  let month = dateComponents[0];
  let day = dateComponents[1];
  let year = dateComponents[2];
  //add a zero if needed to day
  if (day.length === 1) {
    day = "0" + day;
  }
  //add a zero if needed to month
  if (month.length === 1) {
    month = "0" + month;
  }
  //concatenate the year into the empty string
  //concatenate the month into empty string
  //concatenate the day into empty string
  newDate = year + month + day;
  //return result
  return newDate;
}

// tests
const result1 = convertDate("9/1/2020");
console.log(result1);
const result2 = convertDate("10/2/2019");
console.log(result2);
