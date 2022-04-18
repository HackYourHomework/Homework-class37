'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  // TODO complete this object

  nuts: 11,
  fruits: 9.5,
  chips: 3.2,
  wine: 8.4,
  beer: 7,
};

function calculateTotalPrice(shoppingCart) {
  // TODO replace this comment with your code
  let sum = 0;
  if (shoppingCart !== undefined) {
    for (let value in shoppingCart) {
      sum += shoppingCart[value];
    }
    return `Total : € ${sum}`;
  }
}

calculateTotalPrice(cartForParty);

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  // TODO replace this comment with your code
  console.assert(calculateTotalPrice.length === 1);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // TODO replace this comment with your code
  const actual = calculateTotalPrice(cartForParty);
  const expected = `Total : € 39.1`;
  console.assert(actual === expected);
  console.log(actual);
  console.log(expected);
}

function test() {
  test1();
  test2();
}

test();
