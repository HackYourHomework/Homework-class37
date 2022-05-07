'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const today = new Date();
  const timeEl = document.querySelector('#time');
  timeEl.textContent = today.toTimeString().split(' ')[0];

  timeEl.style.fontFamily = 'Times New Roman", Times, serif';
  timeEl.style.fontSize = '50px';
  timeEl.style.textAlign = 'center';
  setInterval(addCurrentTime, 1000);
  console.log(timeEl.textContent);
  return timeEl;
}

window.addEventListener('load', addCurrentTime);
