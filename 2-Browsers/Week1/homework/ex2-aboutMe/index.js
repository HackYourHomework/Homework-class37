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

// Solution A

const textColor = document.querySelector('ul');
textColor.classList.add('list-item')

const nickName = document.getElementById('nickname');
nickName.innerText = 'Naddaf';

const food = document.getElementById('fav-food');
food.innerText = 'Butter chicken';

const myTown = document.getElementById('hometown');
myTown.innerText = 'Woerden';

///////////////////////////////////////////////////////////////////
// Solution B
// Why this solution doesn't work?


// const nickName = document.getElementById('nickname');
// nickName.textContent = 'Naddaf';

// const food = document.getElementById('fav-food');
// food.textContent = 'Butter chicken';

// const myTown = document.getElementById('hometown');
// myTown.textContent = 'Woerden';

// const textColor = document.querySelectorAll('span');
// textColor.classList.add('list-item');
