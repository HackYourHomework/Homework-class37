'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Something unexpected happened. Please try again later.');
  }
  return response.json();
}

async function fetchAndPopulatePokemons() {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const pokemonData = await fetchData(apiUrl);

  const pokemonDropDownList = createAndAppend(
    'select',
    '.container',
    'pokemon-drop-down-list'
  );
  pokemonData.results.forEach((pokemon) => {
    const { name, url } = pokemon;
    const optionPokemon = createAndAppend(
      'option',
      '.pokemon-drop-down-list',
      'pokemon-drop-down-list-item'
    );
    optionPokemon.textContent = name;
    optionPokemon.value = url;
  });
  pokemonDropDownList.addEventListener('change', fetchImage);
}

async function fetchImage(e) {
  if (document.querySelector('.pokemon-img')) {
    document.querySelector('.pokemon-img').remove();
  }

  try {
    const url = e.target.value;
    const { sprites, name } = await fetchData(url);

    const pokemonImage = createAndAppend('img', '.container', 'pokemon-img');
    pokemonImage.src = sprites.front_shiny;
    pokemonImage.alt = name;
    console.log(name);
  } catch (err) {
    renderErr(err);
  }
}

//This function creates a dom element and appends it to its parent.
function createAndAppend(tag, parent, elementClass) {
  const element = document.createElement(tag);
  element.classList.add(elementClass);
  document.querySelector(parent).appendChild(element);
  return element;
}

//This function initialize the page; creates a container and a button
function initPage() {
  createAndAppend('div', 'body', 'container');

  const btnGetPokemon = createAndAppend(
    'button',
    '.container',
    'btn-get-pokemon'
  );
  btnGetPokemon.setAttribute('type', 'button');
  btnGetPokemon.textContent = 'Get Pokemon!';
}

//This function renders the errors
function renderErr(err) {
  console.log(err);
  const errorMessage = createAndAppend('div', '.container', 'error-message');
  errorMessage.textContent = `Error: ${err.message}`;
}

function main() {
  initPage();

  document
    .querySelector('.btn-get-pokemon')
    .addEventListener('click', async () => {
      if (document.querySelector('.pokemon-drop-down-list')) {
        document.querySelector('.pokemon-drop-down-list').remove();
      }
      if (document.querySelector('.pokemon-img')) {
        document.querySelector('.pokemon-img').remove();
      }
      try {
        await fetchAndPopulatePokemons();
      } catch (error) {
        renderErr(error);
      }
    });
}

window.addEventListener('load', main);
