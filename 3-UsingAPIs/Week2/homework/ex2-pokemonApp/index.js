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
  // TODO complete this function
  try {
    const response = await fetch(url);
    if (response.ok) {
      const pokemonData = await response.json();
      console.log(pokemonData);
      return pokemonData;
    }
  } catch (error) {
    console.log(error);
  }
}

function fetchAndPopulatePokemons(data) {
  // TODO complete this function
  const selectEl = document.createElement('select');
  document.body.appendChild(selectEl);
  selectEl.addEventListener('change', fetchImage);
  selectEl.classList.add('select');
  const getPokemonButtonEl = document.createElement('button');
  getPokemonButtonEl.type = 'button';
  getPokemonButtonEl.textContent = 'Get Pokemon!';
  document.body.appendChild(getPokemonButtonEl);
  getPokemonButtonEl.classList.add('pokmon-button');
  getPokemonButtonEl.addEventListener('click', () => {
    const pokemonData = data.results;
    pokemonData.forEach((result) => {
      const pokemonNames = document.createElement('option');
      result.name = pokemonNames.value;
      result.name = pokemonNames.text;
      selectEl.appendChild('pokemonNames');
    });
  });
}

async function fetchImage() {
  // TODO complete this function
  const image = document.createElement('img');
}

async function main() {
  // TODO complete this function
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    fetchAndPopulatePokemons(data);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
