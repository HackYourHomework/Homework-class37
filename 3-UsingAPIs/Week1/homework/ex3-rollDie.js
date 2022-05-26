'use strict';

function rollDie() {
  return new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

    const rollOnce = (roll) => {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);

      if (roll > 6) {
        reject(new Error('Oops... Die rolled off the table.'));
        return;
      }

      if (roll === randomRollsToDo) {
        resolve(value);
        return;
      }

      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };

    rollOnce(1);
  });
}

function main() {
  rollDie()
    .then((value) => {
      console.log(`Success! Die settled on ${value}.`);
    })
    .catch((error) => console.log(error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;

//The problem does not occur since the promise is settled with reject.
// However in previous method with callback , if roll equals to randomrollstodo, the callback will be invoked again with the error value null.  Thus success message will be printed to console.
// to avoid this situation  in callback version , if roll is greater than 6 the function can be returned immediately like this.
/* if (roll === randomRollsToDo) {
      callback(null, value);
      return;
    }
    */
