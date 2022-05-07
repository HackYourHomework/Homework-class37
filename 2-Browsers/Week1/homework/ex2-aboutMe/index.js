'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
const bodyEl = document.querySelector('body');
bodyEl.style.fontFamily = 'Arial, sans-serif';
const nickName = document.querySelector('#nickname');
nickName.textContent = 'Serva';

const favoriteFood = document.querySelector('#fav-food');
favoriteFood.textContent = 'Ghorme Sabzi';

const hometown = document.querySelector('#hometown');
hometown.textContent = 'Baneh';

const myListItem = document.querySelectorAll('li');

myListItem.forEach((item) => (item.className = 'list-item'));
