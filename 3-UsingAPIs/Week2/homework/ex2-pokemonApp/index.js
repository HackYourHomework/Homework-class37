/* eslint-disable hyf/camelcase */
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
    throw new Error(`HTTP Error: ${response.status}`);
  }
  return await response.json();
}

function fetchAndPopulatePokemons() {
  const getPokemonButton = document.createElement('button');
  getPokemonButton.type = 'button';
  getPokemonButton.textContent = 'Get Pokemon!';
  getPokemonButton.classList.add('get-pokemon-button');
  document.body.appendChild(getPokemonButton);

  const selectPokemon = document.createElement('select');
  selectPokemon.classList.add('select-pokemon');
  document.body.appendChild(selectPokemon);

  let data = null;
  const urlApi = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  getPokemonButton.addEventListener('click', async function getPokemons() {
    try {
      data = await fetchData(urlApi);
    } catch (error) {
      console.error(error.message);
    }
    const results = data.results;
    for (const pokemon of results) {
      const option = document.createElement('option');
      option.textContent = pokemon.name;
      option.value = pokemon.name;

      selectPokemon.appendChild(option);
    }
    getPokemonButton.removeEventListener('click', getPokemons);
  });
  selectPokemon.addEventListener('change', fetchImage);
}

async function fetchImage(event) {
  const previousPokemon = document.querySelector('img');
  if (previousPokemon) {
    document.body.removeChild(previousPokemon);
  }
  const currentPokemon = event.currentTarget.value;
  const urlCurrentPokemon = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`;
  try {
    const data = await fetchData(urlCurrentPokemon);
    const ImageCurrentPokemon = document.createElement('img');
    ImageCurrentPokemon.classList.add('pokemon-image');
    ImageCurrentPokemon.src = data.sprites.front_default;
    ImageCurrentPokemon.alt = 'Pokemon Image';
    document.body.appendChild(ImageCurrentPokemon);
  } catch (error) {
    console.error(error);
  }
}

function main() {
  fetchAndPopulatePokemons();
}

window.addEventListener('load', main);
