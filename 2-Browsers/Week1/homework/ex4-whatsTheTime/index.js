'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

function padZeros(value) {
  ('0' + value).slice(-2);
  return value;
}
function addCurrentTime() {
  const timeEl = new Date();
  const hours = timeEl.getHours();
  const minutes = timeEl.getMinutes();
  const seconds = timeEl.getSeconds();
  const time = document.getElementById('time');
  time.textContent =
    padZeros(hours) + ':' + padZeros(minutes) + ':' + padZeros(seconds);

  console.log(time);
}

addCurrentTime();

window.onload = () => {
  setInterval(addCurrentTime, 1000);
};
