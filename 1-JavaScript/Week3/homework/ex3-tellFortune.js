'use strict';

function selectRandomly(items) {
  
  return items[Math.floor(Math.random() * items.length)];
}

function tellFortune(numKids, partnerNames, locations, jobTitles) {
  
const numKid = selectRandomly(numKids)
const partnerName = selectRandomly(partnerNames)
const location = selectRandomly(locations)
const jobTitle = selectRandomly(jobTitles)

  return `You will be ${jobTitle} in ${location}, married to ${partnerName} with ${numKid} kids.`

}

function main() {
  const numKids = [
      "2","3","4","5","6"
  ];

  const partnerNames = [
      "Ted", "Robin", "Marshall", "Lily", "Barney"
  ];

  const locations = [
      "New York", "Amsterdam", "London", "Istanbul", "Paris"
  ];

  const jobTitles = [
      "Teacher", "Doctor", "Engineer", "Super-Model", "Sofware Developer"
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
