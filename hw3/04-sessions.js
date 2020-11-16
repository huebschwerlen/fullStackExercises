const express = require("express");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 5000;

app.use(
  session({
    store: new session.MemoryStore(),
    secret: "a secret to sign the cookie",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 86400000,
    },
  })
);

app.get("/", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/plain" });
  if (req.session.example === undefined) {
    req.session.example = [];
    req.session.example.push(req.originalUrl);
    res.send(
      "Currently on route: " +
        req.originalUrl +
        "\n" +
        "Welcome to http://localhost:5000" +
        req.originalUrl
    );
  } else {
    req.session.example.push(req.originalUrl);
    res.send(
      "Currently on route: " +
        req.originalUrl +
        "\n" +
        "Previously visited: " +
        "\n" +
        req.session.example.slice(0, -1).join("\n")
    );
  }
});

app.get("/:id", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/plain" });
  if (req.session.example === undefined) {
    req.session.example = [];
    req.session.example.push(req.originalUrl);
    res.send(
      "Currently on route: " +
        req.originalUrl +
        "\n" +
        "Welcome to http://localhost:5000" +
        req.originalUrl
    );
  } else {
    req.session.example.push(req.originalUrl);
    res.send(
      "Currently on route: " +
        req.originalUrl +
        "\n" +
        "Previously visited: " +
        "\n" +
        req.session.example.slice(0, -1).join("\n")
    );
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});