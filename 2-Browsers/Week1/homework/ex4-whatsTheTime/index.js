'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

function addCurrentTime() {
  const currentTime = document.createElement('div');
  document.body.append(currentTime);
  currentTime.id = 'clock';
  const setTime = new Date();
  const hh = setTime.getHours();
  const mm = setTime.getMinutes();
  const ss = setTime.getSeconds();
  document.getElementById('clock').textContent = `HH ${hh}: MM ${mm}: SS ${ss}`;
}

const timeId = setInterval(addCurrentTime, 1000);

console.log(timeId);

window.addEventListener('load', timeId);
