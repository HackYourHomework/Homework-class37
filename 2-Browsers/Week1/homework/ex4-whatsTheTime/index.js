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

  let time = today.toTimeString();
  time = time.split(' ')[0];

  //below is my second way of solving this exercise but I like the above solution!
  /*let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (second < 10) {
    second = `0${second}`;
  }
  const time = hour + ':' + minute + ':' + second; */
  console.log(time);
  return time;
}
addCurrentTime();
window.addEventListener('load', addCurrentTime);
setInterval(addCurrentTime, 1000);

/* window.onload = function () {
  setInterval(addCurrentTime, 1000);
}; */
