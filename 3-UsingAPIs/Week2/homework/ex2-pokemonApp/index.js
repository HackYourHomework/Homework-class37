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
  try {
    const response = await fetch(url);
    if (!response) {
      throw new Error(`HTTP Error ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchAndPopulatePokemons() {
  const pokemonDivContainer = document.createElement('div');
  pokemonDivContainer.setAttribute('class', 'div-container');

  const pokemonBtnElement = document.createElement('button');
  pokemonBtnElement.textContent = 'Get Pokemon!';
  pokemonBtnElement.setAttribute('class', 'btn-elem');
  pokemonBtnElement.setAttribute('type', 'submit');

  const pokemonSelectElement = document.createElement('select');
  pokemonSelectElement.setAttribute('class', 'select-elem');

  pokemonDivContainer.append(pokemonBtnElement, pokemonSelectElement);
  document.body.appendChild(pokemonDivContainer);

  pokemonBtnElement.addEventListener('click', async () => {
    const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const data = await fetchData(pokemonUrl);
    const getDataFromPokemon = data.results;

    getDataFromPokemon.forEach((getData) => {
      const pokemonOptionElement = document.createElement('option');
      pokemonOptionElement.textContent = getData.name;
      pokemonSelectElement.appendChild(pokemonOptionElement);
    });
    pokemonSelectElement.addEventListener('change', fetchImage);
  });
}

async function fetchImage(image) {
  const innerHtmlImgElem = document.querySelector('img');
  if (innerHtmlImgElem) {
    innerHtmlImgElem.remove();
  }

  const getPokemonClickedElem = image.target.value;
  const getTargetPokemonImg = `https://pokeapi.co/api/v2/pokemon/${getPokemonClickedElem}`;
  const data = await fetchData(getTargetPokemonImg);

  const pokemonDivElement = document.createElement('div');

  const pokemonImageElement = document.createElement('img');
  pokemonImageElement.setAttribute('class', 'pokemon-img');
  pokemonImageElement.src =
    data.sprites.other['official-artwork'].front_default;
  pokemonImageElement.alt = 'pokemon-img';

  pokemonDivElement.appendChild(pokemonImageElement);

  document.body.appendChild(pokemonDivElement);
}

function main() {
  fetchAndPopulatePokemons();
}

window.addEventListener('load', main);
