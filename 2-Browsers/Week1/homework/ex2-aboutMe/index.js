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
const nickNameEl = document.querySelector('#nickname');
nickNameEl.textContent = 'Yasemin';
const favFoodEl = document.querySelector('#fav-food');
favFoodEl.textContent = 'Hamsi Tava';
const homeTownEl = document.querySelector('#hometown');
homeTownEl.textContent = 'Izmit';
const liEls = document.querySelectorAll('li');
liEls.forEach((element) => element.classList.add('list-item'));
