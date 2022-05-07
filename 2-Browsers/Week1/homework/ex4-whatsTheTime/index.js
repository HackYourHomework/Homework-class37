'use strict';

function addCurrentTime() {
  const timeEl = document.querySelector('#time');
  timeEl.style.fontFamily = 'fantasy';
  timeEl.style.textAlign = 'center';
  timeEl.style.fontSize = '7vw';

  setInterval(() => {
    timeEl.textContent = new Date().toLocaleTimeString('it-IT');
    console.log(timeEl.textContent);
  }, 1000);
}
window.addEventListener('load', addCurrentTime);
