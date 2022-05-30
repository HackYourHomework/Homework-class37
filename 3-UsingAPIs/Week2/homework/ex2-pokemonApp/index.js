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
    throw new Error('Please make sure that you type the address correctly ');
  }
  return response.json();
}

function fetchAndPopulatePokemons(pokemonData) {
  const pokemonDropDownList = createAndAppend(
    'select',
    '.container',
    'pokemon-drop-down-list'
  );

  const arrayOfPokemonNamesAndUrls = pokemonData.results.map((pokemon) => {
    return { name: pokemon.name, url: pokemon.url };
  });
  arrayOfPokemonNamesAndUrls.forEach((pokemon) => {
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
  removeElement(document.querySelector('.pokemon-img'));

  const selectedPokemonData = await fetchData(e.target.value);
  const selectedPokemonImageUrl = selectedPokemonData.sprites.front_shiny;

  const pokemonImage = createAndAppend('img', '.container', 'pokemon-img');
  pokemonImage.src = selectedPokemonImageUrl;
}

//This functions creates a dom element and appends it to its parent.
function createAndAppend(tag, parent, elementClass) {
  const element = document.createElement(tag);
  element.classList.add(elementClass);
  document.querySelector(parent).appendChild(element);
  return element;
}

//This functions removes an element from dom .
function removeElement(element) {
  if (element) {
    element.remove();
  }
}

async function main() {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  createAndAppend('div', 'body', 'container');

  const btnGetPokemon = createAndAppend(
    'button',
    '.container',
    'btn-get-pokemon'
  );
  btnGetPokemon.setAttribute('type', 'button');
  btnGetPokemon.textContent = 'Get Pokemon!';

  const errorField = createAndAppend('div', '.container', 'error-message');

  btnGetPokemon.addEventListener('click', async () => {
    removeElement(document.querySelector('.pokemon-drop-down-list'));
    removeElement(document.querySelector('.pokemon-img'));

    try {
      const pokemonData = await fetchData(apiUrl);
      fetchAndPopulatePokemons(pokemonData);
    } catch (error) {
      console.log(error);
      errorField.textContent = `${error.name}: ${error.message}`;
    }
  });
}

window.addEventListener('load', main);
