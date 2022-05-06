'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
document.getElementById('nickname').textContent = 'Hustler';
document.getElementById('fav-food').textContent = 'Tihlo';
document.getElementById('hometown').textContent = 'Tigray';
document.body.style.fontFamily = 'Arial, sans-serif';
document.querySelectorAll('li').forEach(list => {
   list.classList.add('list-item');
});

