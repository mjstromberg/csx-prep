const testUtils = require("../test-utils");
const { test } = testUtils;

/**
 * Write a function that takes in an object and
 * a property name and returns a new object that
 * contains all of the properties except the one
 * associated with the passed in property name.
 *
 * object = { foo: 1, bar: 2 }, propertyName = 'foo' => { bar: 2 }
 */

function removeProperty(object, propertyName) {
  // const newObject = { ...object };
  // delete newObject[propertyName];
  // return newObject;

  const newObject = {};
  for (let key in object) {
    if (key !== propertyName) {
      newObject[key] = object[key];
    }
  }
  return newObject;

  // // make a new object that is a clone of the object passed in
  // let newObject = { ...object }; // spread operator
  // // loop through properties of the object that is passed in
  // for (let key in object) {
  //   // check to see if current key matches the proprtyName passed in
  //   // if key is equal to propertyName
  //   if (key === propertyName) {
  //     // remove property
  //     delete newObject[key];
  //   }
  // }
  // // return new object
  // return newObject;
}

const object = { a: 1, b: 2, c: 3 };

console.log("Remove Property");
console.log(removeProperty(object, "a")); // => { b: 2, c: 3 }
console.log(removeProperty(object, "b"));
console.log(removeProperty(object, "c"));
console.log(removeProperty(object, "d"));

/**
 * Write a function that compares two objects and
 * returns true if they are equal and false if not.
 * The objects are equal if all of their properties
 * are the same.
 *
 * In this problem, property values will only be
 * primititves (e.g. strings, numbers, booleans, but
 * not arrays or objects).
 */

function compareObjects(obj1, obj2) {
  const obj1Length = Object.keys(obj1).length;
  const obj2Length = Object.keys(obj2).length;
  if (obj1Length !== obj2Length) {
    return false;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const object1 = { a: 1, b: 2, c: 3 };
const object2 = { a: 1, b: 2, c: 3 };
const object3 = { a: 1, b: "foo", c: 3 };
const object4 = { a: 1, b: 2, c: 3, d: 4 };

console.log("\nCompare Objects");
// console.log(compareObjects(object1, object3)); // true
test("Test #4", compareObjects(object1, object2), true);
test("Test #5", compareObjects(object1, object3), false);
test("Test #6", compareObjects(object1, object4), false);

/**
 * Let's introduce recurssion.
 * Let's now solve the same problem, but now property
 * values can also be objects and you'll need to
 * check for equality for those as well.
 */

function deeplyCompareObjects(obj1, obj2) {
  // write algorithm here
}

const object5 = { a: 1, b: { c: 2 }, d: 3 };
const object6 = { a: 1, b: { c: 2 }, d: 3 };
const object7 = { a: 1, b: { c: "foo" }, d: 3 };
const object8 = { a: 1, b: { c: 2 }, d: 3, e: 4 };

console.log("\nDeeply Compare Objects");
test("Test #4", deeplyCompareObjects(object5, object6), true);
test("Test #5", deeplyCompareObjects(object5, object7), false);
test("Test #6", deeplyCompareObjects(object5, object8), false);
