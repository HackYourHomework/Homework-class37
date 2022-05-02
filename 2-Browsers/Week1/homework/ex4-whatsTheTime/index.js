'use strict';

function checkTime(timeItem) {
  return timeItem < 10 ? '0' + timeItem : timeItem;
}

function addCurrentTime() {
  const today = new Date();
  const hour = checkTime(today.getHours());
  const minute = checkTime(today.getMinutes());
  const second = checkTime(today.getSeconds());
  const timeEl = document.querySelector('#time');
  timeEl.style.fontFamily = 'fantasy';
  timeEl.style.textAlign = 'center';
  timeEl.style.fontSize = 'large';
  timeEl.textContent = hour + ':' + minute + ':' + second;
  console.log(timeEl.textContent);
}
setInterval(addCurrentTime, 1000);
window.onload = () => {
  addCurrentTime();
};
