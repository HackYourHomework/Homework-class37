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
<<<<<<< HEAD
  water : 4.50,
  chips : 5.30,
  chocolate:3.97,
 cream :7.60,
 nuts : 3.90
};

function calculateTotalPrice(forParty) {
  let amount = 0
for (const item in forParty ){
 amount +=forParty[item]
}

  return "Total: € "+amount 
}



=======
  // TODO complete this object
};

function calculateTotalPrice(/* TODO parameter(s) go here */) {
  // TODO replace this comment with your code
}

>>>>>>> 36f5667322659c92acb0b271ad9e082da648e18a
// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  // TODO replace this comment with your code
<<<<<<< HEAD
  console.assert(calculateTotalPrice.length === 1);
=======
>>>>>>> 36f5667322659c92acb0b271ad9e082da648e18a
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // TODO replace this comment with your code
<<<<<<< HEAD
  
  const expected = "Total: € "+25.27 ;
  const actual = calculateTotalPrice(cartForParty);

  console.assert(actual === expected);
=======
>>>>>>> 36f5667322659c92acb0b271ad9e082da648e18a
}

function test() {
  test1();
  test2();
}

test();
