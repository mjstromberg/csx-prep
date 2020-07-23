/**
 * Objects are containers for data
 */
// const cupboard = {
//   bakingPowder: 15,
//   flour: 10,
//   sugar: 20,
//   vanilla: 10,
// };

// const refrigerator = {
//   butter: 4,
//   eggs: 12,
//   milk: 1,
// };

/**
 * This can be any type of data
 */
const foo = {
  bar: 5,
  baz: function () {
    return "baz";
  },
  fizz: true,
  "bu zz": ["hello", "world"],
};

/**
 * Object property lookup
 *
 * You can lookup properties on objects using
 * either "dot" notation or "square bracket"
 * notation.
 *
 * Square bracket notation can be useful where
 * dot notation fails, specifically when the
 * property key is non-conforming.
 */
// console.log(foo.bar);
// console.log(foo["bar"]);
// console.log(foo.bu zz)
// console.log(foo["bu zz"]);
// console.log(foo.baz);

/**
 * Object assignment
 *
 * You can assign object properties using the
 * assignment operator along with dot or bracket
 * notation.
 */
// console.log(foo.yo);
// foo.yo = "hello";
// console.log(foo.yo);

/**
 * In JavaScript, you have primitive types like:
 *  strings - 'stuff', "", String(), new String()
 *  numbers - 123, Number(123), new Number(123)
 *  booleans - true, Boolean(true), new Boolean(0)
 *  nulls - null
 *  undefined - undefined
 *  symbols - Symbol('foo')
 *
 * Everything else is either an object type or a
 * special version of an object.
 */
const stringLiteral = "Strings are objects, too.";
console.log(stringLiteral.length);
console.log(stringLiteral[2]);
console.log(stringLiteral.charAt(3));

const stringLiteralAnatomy = {
  0: "S",
  1: "t",
  // ...etc.
  length: 25,
  prototype: {
    concat: () => {
      /* does stuff here */
    },
    toUpperCase: () => {
      /* does stuff here */
    },
  },
};

/**
 * Build a function that takes in kitchen inventory
 * objects and a recipe object and returns if there
 * are enough ingredients available for the recipe.
 */
const cupboard = {
  bakingPowder: 15,
  flour: 10,
  sugar: 20,
  vanilla: 10,
};
const refrigerator = {
  butter: 4,
  eggs: 12,
  milk: 1,
};
const recipe = {
  butter: 2,
  eggs: 3,
  flour: 7,
  sugar: 10,
  vanilla: 2,
};

/**
 * Now build a function that takes in kitchen inventory
 * objects and a recipe object but return true if there
 * are enough ingredients available and return an object
 * of the missing ingredient amounts with their units.
 *
 * You can use the same recipe from above.
 *
 * Example missing ingredient amounts:
 * {
 *   flour: '10 cups',
 *   vanilla: '5 tsp.'
 * }
 */
const recipe2 = {
  butter: 2,
  eggs: 3,
  flour: 100,
  sugar: 10,
  vanilla: 200,
};
const cupboardUnits = {
  bakingPowder: "oz.",
  flour: "cups",
  sugar: "tbsp.",
  vanilla: "tsp.",
};
const refrigeratorUnits = {
  butter: "oz.",
  eggs: "qty.",
  milk: "oz.",
};
