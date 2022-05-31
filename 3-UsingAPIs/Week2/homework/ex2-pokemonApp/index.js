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
function fetchData(url) {
  fetch(url).then(async (response) => {
    try {
      const jsonResponse = await response.json();
      console.log('response jsonResponse', jsonResponse);
      if (response.ok) {
        return jsonResponse;
      }
      throw new Error('Failed');
    } catch (errors) {
      console.log(`HTTP or network errors ${errors}`);
    }
  });
}

function fetchAndPopulatePokemons(data) {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Get Pokemon';
  document.body.appendChild(button);

  const selectPokemon = document.createElement('select');
  document.body.appendChild(selectPokemon);
  selectPokemon.id = 'mySelect';

  button.addEventListener('click', () => {
    const pokemonNames = data.results;
    // console.log('data results', data.results);
    pokemonNames.forEach((element) => {
      const pokemon = document.createElement('option');
      pokemon.text = element.name;
      pokemon.value = element.url;
      selectPokemon.appendChild(pokemon);
    });
  });
  selectPokemon.addEventListener('change', fetchImage);
}

function fetchImage(element) {
  const selected = element.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${selected}`;
  if (selected) {
    const pokeImg = document.createElement('img');
    pokeImg.src = url.img;
    document.appendChild(pokeImg);
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
