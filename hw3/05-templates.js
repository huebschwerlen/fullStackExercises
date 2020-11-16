const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

// Add your code below

const fetch = require("node-fetch");
const url = "https://restcountries.eu/rest/v2/all";

app.get("/populous", (req, res) => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => initialize(data))
    .catch((err) => console.log("Error:", err));


  function initialize(countries) {
    for (let i = 0; i < countries.length; i++) {
      //console.log(countries.length);
      let currentCountry = countries[i].name;
      let pop = countries[i].population;
      if (pop >= 20000000) {
        res.write(`${currentCountry} - ${pop} \n`);
      }
    }
  }
});

app.get("/main", (req, res) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => initialize(data))
      .catch((err) => console.log("Error:", err));
  
    function initialize(countries) {
      for (let i = 0; i < countries.length; i++) {
        console.log(countries.length);
        let currentCountry = countries[i].name;
        let capital = countries[i].capital;
  
        res.write(`${currentCountry} - ${capital} \n`);
        //res.write("<div style='border: 2px solid black'>`${currentCountry} - ${capital} \n`</div>")
      }
    }
  });

  app.get("/regions", (req, res) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => initialize(data))
      .catch((err) => console.log("Error:", err));
  
    function initialize(countries) {
      for (let i = 0; i < countries.length; i++) {
        console.log(countries.length);
        let currentCountry = countries[i].name;
        let region = countries[i].region;
  
        if (region == "Asia") {
          res.write(`${currentCountry} - ${region} \n`);
        } else if (region == "Americas") {
          res.write(`${currentCountry} - ${region} \n`);
        } else if (region == "Europe") {
          res.write(`${currentCountry} - ${region} \n`);
        }
      }
    }
  });


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
