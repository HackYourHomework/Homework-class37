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
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

async function fetchAndPopulatePokemons(data) {
  // fetch data
  const url = `https://pokeapi.co/api/v2/pokemon/${data}`;
  const getData = await fetchData(url);
  console.log(getData);
  // Div Element
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'pokemon-container');
  // Button Element
  const btnElement = document.createElement('button');
  btnElement.setAttribute('class', 'btn');
  btnElement.textContent = 'Get Pokemon!';

  // addEventlistern
  btnElement.addEventListener('click', () => {
    let num = 5;
    console.log('hello clement');
    for (let i = 1; i < num; i++) {
      console.log(i);
    }
  });

  // Select Element
  const selectElement = document.createElement('select');
  selectElement.setAttribute('class', 'select');
  // Options Element
  const options = document.createElement('option');

  // Append Element
  selectElement.appendChild(options);
  divElement.appendChild(btnElement);
  divElement.appendChild(selectElement);
  document.body.appendChild(divElement);
}

// this will give me the image
function fetchImage(element) {}

async function main() {
  fetchAndPopulatePokemons();
}

window.addEventListener('load', main);
