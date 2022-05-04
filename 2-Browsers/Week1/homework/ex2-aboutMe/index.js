'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me
1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.

// There are more solution of this part and all are working,
// but i don't know what is the difference between all of them.
// Could you please help me understanding the differences?

const personalInfo = document.getElementsByTagName('span');
for (let i = 0; i < personalInfo.length; i++) {
  personalInfo[0].innerHTML = 'Naddaf';
  personalInfo[1].innerHTML = 'Butter chicken';
  personalInfo[2].innerHTML = 'Woerden';
}

const list = document.getElementsByTagName('li');
for (let i = 0; i < list.length; i++) {
  list[i].classList.add('list-item');
}

///////////////////////////////////////////////////////////////////
// Other solution A
// const nickName = document.getElementById('nickname');
// nickName.innerText = 'Naddaf';

// const food = document.getElementById('fav-food');
// food.innerText = 'Butter chicken';

// const myTown = document.getElementById('hometown');
// myTown.innerText = 'Woerden';

///////////////////////////////////////////////////////////////////
// Other solution B

// const nickName = document.getElementById('nickname');
// nickName.textContent = 'Naddaf';

// const food = document.getElementById('fav-food');
// food.textContent = 'Butter chicken';

// const myTown = document.getElementById('hometown');
// myTown.textContent = 'Woerden';
