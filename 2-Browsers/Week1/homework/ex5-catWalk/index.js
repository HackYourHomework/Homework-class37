'use strict';

function catWalk() {
  const imgEl = document.querySelector('img');
  const currentLeft = parseInt(imgEl.style.left);

  if (
    imgEl.style.left === '' ||
    currentLeft > window.innerWidth - imgEl.width
  ) {
    imgEl.style.left = '0px';
  } else if (
    imgEl.src ===
    'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif'
  ) {
    imgEl.style.left = currentLeft + 'px';
  } else {
    imgEl.style.left = currentLeft + 10 + 'px';
  }

  if (currentLeft === Math.trunc((window.innerWidth - imgEl.width) / 20) * 10) {
    imgEl.src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    imgEl.alt = 'Cat dancing';
    setTimeout(() => {
      imgEl.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      imgEl.alt = 'Cat walking';
    }, 5000);
  }
}
setInterval(catWalk, 50);
window.onload = () => catWalk();
