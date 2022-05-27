const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  return Promise.all(dice.map(rollDie));
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

// JavaScript has the concept of "run to completion". Unless an error is thrown, a function is executed until a return statement or its end is reached.
// In the case of a rejected promise, dice that have not yet finished their roll continue to do so since Javascript reached  neither return statement nor end.
