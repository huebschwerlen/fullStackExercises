const http = require("http");
const port = process.env.PORT || 5000;

// http://localhost:5000/ should return a status code 200 with a 'welcome' message

// http://localhost:5000/redirect should redirect the request to '/redirected' by using 302 as the status code

// http://localhost:5000/cache should return 'this resource was cached' in plain text and set the cache max age to a day

// http://localhost:5000/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// http://localhost:5000/check-cookies should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie

// for other routes, this exercise should return a status code 404 with '404 - page not found' in plain text

const server = http.createServer((req, res) => {
  // Add your code below
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>WELCOME</h1>");
    res.end();
  } else if (req.url === "/redirect") {
    res.writeHead(302, { Location: "http://localhost:5000/redirected" });
    res.write("");
    res.end();
  } else if (req.url === "/redirected") {
    res.writeHead(302, { "Content-Type": "text/html" });
    res.write("<h1>You Been Redirected! Status Code:302<h1>");
    res.end();
  } else if (req.url === "/cache") {
    res.writeHead(302, {
      "Content-Type": "text/plain",
      "Cache-Control": "max-age=86400",
    });
    res.write("this resource was cached");
    res.end();
  } else if (req.url === "/cookie") {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(200, {
      "Set-Cookie": "hello=world",
      "Content-Type": "text/plain",
    });
    res.write("cookies... yummm");
    res.end();
  } else if (req.url === "/check-cookies") {
    console.log(`${req.method} - ${req.url}`);
    var cookE = req.headers.cookie;
    if (cookE == "hello=world") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("yes");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("no");
    }
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404: Page not found");
    res.end();
  }

  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
