'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

// TO add zero in front of numbers if the number < 10 (credits: W3school)
function checkTime(i) {
  if (i < 10) { i = "0" + i }
  return i;
}


function addCurrentTime() {
  const today = new Date();
  const hour = today.getHours();
  const minutes = checkTime(today.getMinutes());
  const seconds = checkTime(today.getSeconds());

  const time = document.querySelector('.time');

  time.textContent = hour + ':' + minutes + ':' + seconds;
}
setInterval(addCurrentTime, 1000);
window.onload = () => {
  addCurrentTime();
}


