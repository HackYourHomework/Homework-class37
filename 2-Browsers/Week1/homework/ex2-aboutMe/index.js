'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nickName = document.getElementById('nickname');
const favFood = document.getElementById('fav-food');
const homeTown = document.getElementById('hometown');
const li = document.querySelectorAll('li');

nickName.textContent = 'Clement';
favFood.textContent = 'Beans';
homeTown.textContent = 'Delta';

li.forEach((list) => {
  list.classList.add('list-item');
});
document.body.style.fontFamily = 'Arial, sans-serif';
