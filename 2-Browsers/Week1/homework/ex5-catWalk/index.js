'use strict';

function catWalk() {
  const imgEl = document.querySelector('img');
  const currentLeft = parseInt(imgEl.style.left);
  const middleOfTheScreen =
    Math.round((window.innerWidth - imgEl.width) / 20) * 10;
  const rightHandOfTheScreen = window.innerWidth - imgEl.width;
  const dancingCat =
    'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
  const walkingCat = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';

  if (imgEl.style.left === '' || currentLeft > rightHandOfTheScreen) {
    imgEl.style.left = '0px';
  } else if (imgEl.src === dancingCat) {
    imgEl.style.left = currentLeft + 'px';
  } else {
    imgEl.style.left = currentLeft + 10 + 'px';
  }

  if (currentLeft === middleOfTheScreen) {
    imgEl.src = dancingCat;
    imgEl.alt = 'Cat dancing';
    setTimeout(() => {
      imgEl.src = walkingCat;
      imgEl.alt = 'Cat walking';
    }, 5000);
  }
}
setInterval(catWalk, 50);
window.addEventListener('load', catWalk);
