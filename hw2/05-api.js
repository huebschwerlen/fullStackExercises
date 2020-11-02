const url = 'https://restcountries.eu/rest/v2/all';

// Enter your code here
const ol = document.querySelector("#results");
let newCountries;

fetch(url)
  .then((res) => res.json())
  .then((data) => initialize(data))
  .catch((err) => console.log("Error:", err));

function initialize(countriesData) {
  let countries = countriesData;

  for (let i = 0; i < countries.length; i++) {
    let currentCountry = countries[i].name;
    let pop = countries[i].population;

    const li = document.createElement("li");
    li.innerText = `${currentCountry} - ${pop}`;
    ol.appendChild(li);
  }
}
