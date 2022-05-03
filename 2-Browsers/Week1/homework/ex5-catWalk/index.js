'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
const image = document.querySelector('img');
const bodyWidth = window.innerWidth; // variable for the window size
const screenCenter = (bodyWidth - image.clientWidth) / 2; // Variables that divided the screen into two parts

const dancingCatUrl = document.createElement('img');
dancingCatUrl.alt = 'Dancing cat';
dancingCatUrl.src =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
const dancingCatUrlStyle = dancingCatUrl.style; // create new style for the dancing cat
dancingCatUrlStyle.marginLeft = screenCenter + 'px'; // margin left and set it to the center of the screen
dancingCatUrlStyle.display = 'none';

document.body.appendChild(dancingCatUrl); // append the dancing cat to the body

const moveDFuncMillSec = 50; // move the function every 50 milliseconds
const dancingCatDelayTm = 5000; // delay for 5 seconds
const moveDCat = 10; // move the cat
let positionLeft = 0; // Variables for the position
let catReachDCenter = false;

function catWalk() {
  positionLeft += moveDCat;
  image.style.left = `${positionLeft}px`;

  if (!catReachDCenter && positionLeft >= screenCenter) {
    catReachDCenter = true;
    dancingCatUrlStyle.display = 'block';
    clearInterval(setIntervalFunc);

    setTimeout(() => {
      dancingCatUrlStyle.display = 'none';
      setIntervalFunc = setInterval(catWalk, moveDFuncMillSec);
    }, dancingCatDelayTm);
  }

  if (positionLeft > bodyWidth) {
    positionLeft = 0;
    catReachDCenter = false;
  }
}

let setIntervalFunc = setInterval(catWalk, moveDFuncMillSec);

window.addEventListener('load', setIntervalFunc);
