'use strict';

let cartForParty = { 
  beer: 8.90,
  chips: 4.50,
  dips: 5.90,
  sodas: 6.80,
  nuts: 12.50 };

function calculateTotalPrice(total) {
let calculateTotalPrice = 0;
for(let item in total) {
    calculateTotalPrice += parseFloat(total[item]);
}
return `Total: € ${calculateTotalPrice}`
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length === 1);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  console.assert(calculateTotalPrice(cartForParty))
}

function test() {
  test1();
  test2();
}

test();
