'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  let date = new Date(); 
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
    
  let time = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").textContent = time; 
  setTimeout(function(){addCurrentTime()}, 1000);
}
addCurrentTime();

document.getElementById("clock").style.cssText = `
  color: #20B2AA; 
  font-size: 148px;
  font-family: Monospace;
  text-align: center;
`;
