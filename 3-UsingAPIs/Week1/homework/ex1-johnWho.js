'use strict';

const getAnonName = (firstName) => {
  const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        reject(new Error("You didn't pass in a first name!"));
      }

      const fullName = `${firstName} Doe`;

      resolve(fullName);
    }, 1000);
  });
  return myFirstPromise;
};

function main() {
  getAnonName('John', console.log);
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = getAnonName;
