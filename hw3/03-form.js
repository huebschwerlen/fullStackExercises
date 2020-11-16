const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});

app.post("/submit", (req, res) => {
  res.set({ "Content-Type": "text/html" });
  let newsVar = "Yes, I would like to sing up for the newsletter";
  if (req.body.news != "on") {
    newsVar = "No, thank you";
  }
  res.send(
    "Name: " +
      req.body.name +
      "<br>" +
      "Email: " +
      req.body.email +
      "<br>" +
      "Comments: " +
      req.body.comments +
      "<br>" +
      "Newsletter: " +
      newsVar
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
