const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const results = [];

  const successHandler = (value, die) => {
    results.push(value);
    return rollDie(die);
  };

  return rollDie(1)
    .then((value) => {
      return successHandler(value, 2);
    })
    .then((value) => {
      return successHandler(value, 3);
    })
    .then((value) => {
      return successHandler(value, 4);
    })
    .then((value) => {
      return successHandler(value, 5);
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
