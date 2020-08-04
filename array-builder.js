function arrayBuilder(countObject) {
  // create an array
  const array = [];
  // iterate through countObject
  for (let key in countObject) {
    // create a count variable
    const count = countObject[key];
    // iterate "count" number of times
    for (let i = count; i > 0; i--) {
      // add key to array
      array.push(key);
    }
  }
  // return array
  return array;
}

const array = arrayBuilder({ cats: 2, dogs: 1 }); // [ 'cats', 'cats', 'dog' ]
console.log(array);
