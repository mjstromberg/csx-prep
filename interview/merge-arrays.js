/**
 * Write a function that takes two arrays and merges them
 * together into a new array.
 */

const a = [true, "foo", 5];
const b = [{}, false, "bar"];

function mergeArray(array1, array2) {
  const mergedArray = [];
  array1.forEach(function (item) {
    mergedArray.push(item);
  });
  array2.forEach(function (item) {
    mergedArray.push(item);
  });
  return mergedArray;
}

const result = mergeArray(a, b);
console.log(result);
