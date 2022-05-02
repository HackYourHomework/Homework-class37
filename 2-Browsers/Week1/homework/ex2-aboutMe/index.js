'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/




const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';

const nickName = document.querySelector('#nickname');
nickName.textContent = "Baraah";


const myFavoriteFood = document.querySelector('#fav-food');
myFavoriteFood.textContent = "Shaworma";

const myHometown = document.querySelector('#hometown');
myHometown.textContent = "Homs";

const listItem = document.querySelectorAll('li');
listItem.forEach((item) => item.classList.add('list-item'));