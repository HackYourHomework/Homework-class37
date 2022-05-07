'use strict';
const imgEl = document.querySelector('img');

let currentLeft = 0;

const dancingCat =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

const walkingCat = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';

const middleOfTheScreen =
  Math.round((window.innerWidth - imgEl.width) / 2 / 10) * 10;

const rightHandOfTheScreen = window.innerWidth - imgEl.width;

function catWalk() {
  const intervalId = setInterval(() => {
    imgEl.style.left = `${currentLeft}px`;
    currentLeft += 10;

    if (currentLeft > rightHandOfTheScreen) {
      currentLeft = 0;
    } else if (currentLeft === middleOfTheScreen) {
      imgEl.src = dancingCat;
      imgEl.alt = 'Cat dancing';
      clearInterval(intervalId);

      setTimeout(() => {
        imgEl.src = walkingCat;
        imgEl.alt = 'Cat walking';
        catWalk();
      }, 5000);
    }
  }, 50);
}

window.addEventListener('load', catWalk);
