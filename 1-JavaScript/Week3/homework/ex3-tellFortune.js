'use strict';

function selectRandomly(array) {
  const rand = Math.floor(Math.random() * 5);
  const randomValue = array[rand];
  return randomValue;
}

function tellFortune(a, b, c, d) {
  // I call selectRandomly() 4 times
  const kind = selectRandomly(a);
  const partner = selectRandomly(b);
  const location = selectRandomly(c);
  const jobTitle = selectRandomly(d);
  return `You will be a ${jobTitle} in ${location}, married to ${partner} with ${kind} kids`;
}

function main() {
  const numKids = [1, 2, 3, 4, 5];

  const partnerNames = ['Samira', 'Valentina ', 'Negar', 'Juliet', 'Cornelia'];

  const locations = ['Amsterdam', 'London', 'New York', 'Paris', 'Rome'];

  const jobTitles = ['manager', 'director', 'pilot', 'teacher', 'doctor'];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
