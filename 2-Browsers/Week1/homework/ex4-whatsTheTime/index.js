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
  currentTime.style.color = 'red';
  currentTime.style.fontSize = '40px'
  document.body.append(currentTime);

  currentTime.id = 'clock';
  const setTime = new Date();
  
  const hh = setTime.getHours();
  const hours = hh.toString().padStart(2, '0')

  const mm = setTime.getMinutes();
  const minutes = mm.toString().padStart(2, '0')

  const ss = setTime.getSeconds();
  const seconds = ss.toString().padStart(2, '0')

  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
  console.log(setTime);
}


const timeId = setInterval(addCurrentTime, 1000);

window.addEventListener('load', addCurrentTime);