'use strict';

function hijackGoogleLogo() {
  const googleLogoEl = document.querySelector('.lnXdpd');
  googleLogoEl.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  googleLogoEl.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
}

hijackGoogleLogo();
