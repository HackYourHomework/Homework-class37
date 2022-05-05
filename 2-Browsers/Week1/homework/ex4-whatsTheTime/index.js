'use strict';

function addCurrentTime() {
  const timeEl = document.querySelector('#time');
  timeEl.style.fontFamily = 'fantasy';
  timeEl.style.textAlign = 'center';
  timeEl.style.fontSize = '7vw';
  timeEl.textContent = new Date().toLocaleTimeString('it-IT');
  console.log(timeEl.textContent);
}

window.addEventListener('load', setInterval(addCurrentTime, 1000));
