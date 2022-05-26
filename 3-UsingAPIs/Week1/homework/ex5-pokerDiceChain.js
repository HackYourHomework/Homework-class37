const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const results = [];
  const successHandler = (value, promise, die) => {
    results.push(value);
    return promise(die);
  };
  return rollDie(1)
    .then((value) => {
      successHandler(value, rollDie, 2);
    })
    .then((value) => {
      successHandler(value, rollDie, 3);
    })
    .then((value) => {
      successHandler(value, rollDie, 4);
    })
    .then((value) => {
      successHandler(value, rollDie, 5);
    })
    .then((value) => {
      results.push(value);
      return results;
    });
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
