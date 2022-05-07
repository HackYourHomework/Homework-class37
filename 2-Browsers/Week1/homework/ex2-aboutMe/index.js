'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
const nicknameEl = document.getElementById("nickname");
nicknameEl.textContent = "Crazzy Bob";

const favFoodEl = document.getElementById("fav-food");
favFoodEl.textContent = "Pizza";

const hometownEl = document.getElementById("hometown");
hometownEl.textContent = "New York";

const newClass = document.querySelectorAll("li");

newClass.forEach((li) => {
   li.classList.add('list-item');
});
