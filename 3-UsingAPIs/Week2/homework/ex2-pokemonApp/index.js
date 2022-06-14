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
      throw new Error(`HTTP Error ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(error.message);
  }
}

function fetchAndPopulatePokemons() {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Get Pokemon';
  document.body.appendChild(button);
  const selectPokemon = document.createElement('select');
  document.body.appendChild(selectPokemon);
  selectPokemon.id = 'mySelect';
  const pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  button.addEventListener('click', async () => {
    try {
      const response = await fetch(pokemonListUrl);
      const data = await response.json();
      const pokemonNames = data.results;
      for (const pokemon of pokemonNames) {
        const option = document.createElement('option');
        option.text = pokemon.name;
        option.value = pokemon.name;
        selectPokemon.appendChild(option);
      }
    } catch (error) {
      console.error(error.message);
    }
    selectPokemon.addEventListener('change', fetchImage);
  });
}

async function fetchImage(element) {
  const selected = element.target.value;
  const pokemonImageUrl = `https://pokeapi.co/api/v2/pokemon/${selected}`;
  const response = await fetch(pokemonImageUrl);
  const data = await response.json();
  //Why when I used official-artwork the code does not working?
  // const pokemonNames = data.sprites.other.official-artwork.front_default;
  const pokemonNames = data.sprites.other.home.front_default;
  if (selected) {
    const viewPort = document.createElement('div');
    document.body.appendChild(viewPort);
    const pokImg = document.createElement('img');
    viewPort.appendChild(pokImg);
    //Here bellow I couldn't remove the old image so I add position and background to cover the old image.
    pokImg.style.position = 'absolute';
    pokImg.style.backgroundColor = 'white';
    pokImg.style.width = '90vh';
    pokImg.src = pokemonNames;
  }
}

async function main() {
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon/');
    const jsonData = { data };
    fetchAndPopulatePokemons(jsonData);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
