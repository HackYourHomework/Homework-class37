'use strict';

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
