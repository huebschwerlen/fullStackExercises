const url = 'https://pokeapi.co/api/v2/pokemon/';

// Enter your code here
const results = document.querySelector("#results");

fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
  .then((response) => response.json())
  .then((allpokemon) => initalize(allpokemon));

function initalize(poke) {
  for (let i = 0; i < poke.results.length; i++) {
    const span = document.createElement("span");
    span.innerText = poke.results[i].name + " - ";
    results.appendChild(span);
  }
}
