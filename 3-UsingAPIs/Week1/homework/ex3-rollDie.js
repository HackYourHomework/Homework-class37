'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-3-roll-a-die

- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollDie()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDie()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/


function rollDie() {
  return new Promise((resolve, reject) => {
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Die scheduled for ${randomRollsToDo} rolls...`);
  
    const rollOnce = (roll) => {
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Die value is now: ${value}`);
      if (roll > 6) {

        reject(new Error('Oops... Die rolled off the table.'));
      }
      if (roll === randomRollsToDo) {

        resolve(value);
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
    console.log(`Success! Die settled on ${value}.`)
  })
  .catch((error) => {
    console.error(error.message);
  })
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;

/* In the callBack function if the die rolled more than 6 rolls it will print an error message
and when it finished the course of the die scheduled then it will printout the success message.
But by using Promise that means when the die course finished without getting out of the
table it will printout Success because it complete the promise, but if the die rolled out the
table it will printout an error or an errors only because it fulfill the promise
in this case like( it didn't keep it promise :) )*/