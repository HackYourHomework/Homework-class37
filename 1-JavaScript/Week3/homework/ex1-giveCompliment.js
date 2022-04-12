'use strict';
function giveCompliment(name) {
  const compliments = ["great", "cool", "awesome", "amazing", "wonderful","fantastic", "perfect", "crazy", "fabulous", "magnificent"];
  const compliment = compliments[Math.floor(Math.random() * compliments.length)];
  return `You are ${compliment}, ${name}!`;
}

function main() {
  const myName = 'Ali';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Amsterdam';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
