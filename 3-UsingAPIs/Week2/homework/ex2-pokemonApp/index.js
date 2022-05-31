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
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

function fetchAndPopulatePokemons() {
  const pokemonButton = document.createElement('button');
  pokemonButton.type = 'button';
  pokemonButton.textContent = 'Get Pokemon!';
  pokemonButton.classList.add('button');
  document.body.appendChild(pokemonButton);

  const selectElement = document.createElement('select');
  selectElement.classList.add('select');
  document.body.appendChild(selectElement);

  let data = 0;
  const urlApi = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  pokemonButton.addEventListener('click', async () => {
    try {
      data = await fetchData(urlApi);
    } catch (error) {
      console.error(error.message);
    }
    const results = data.results;
    for (const pokemon of results) {
      const option = document.createElement('option');
      option.textContent = pokemon.name;
      option.value = results.indexOf(pokemon) + 1;
      selectElement.appendChild(option);
    }
  });
  selectElement.addEventListener('change', fetchImage);
}

async function fetchImage(value) {
  const clearImage = document.querySelector('img');
  if (clearImage) {
    clearImage.remove();
  }
  
  try {
    const data = `https://pokeapi.co/api/v2/pokemon/${value.currentTarget.value}`;
    const getData = await fetchData(data);
    const select = document.querySelector('select');
    if (select) {
      const image = document.createElement('img');
      image.alt = 'Selected Pokemon Image';
      image.src = getData.sprites.other.home.front_default;
      image.classList.add('pokemon-image');
      document.body.appendChild(image);
    }
    }catch (error) {
      console.log(error);
    }
}

async function main() {
  try {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=80';
    fetchAndPopulatePokemons(url)
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
