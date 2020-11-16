const http = require("http");
const url = require("url");
const querystring = require("querystring");

const port = process.env.PORT || 5000;

// Add your code below
const query = querystring.parse(
  "http://localhost:8080/attributes?hello=world&lorem=ipsum".replace(/^.*\?/, '')
);
const query2 = querystring.parse(
  "http://localhost:8080/attributes?first=1&second=2&third=3".replace(/^.*\?/, '')
);

//oQueryParams = queryString.parse(oRequest.url.replace(/^.*\?/, ''));

const server = http.createServer((req, res) => {
  // Add your code below

  res.write(
    `<table style="border: 1px solid black">
    <tbody>
      <tr style="border: 1px solid black">
        <td style="border: 1px solid black">Hello</td>
        <td style="border: 1px solid black">${query.hello}</td>
      </tr>
      <tr style="border: 1px solid black">
        <td style="border: 1px solid black">lorem</td>
        <td style="border: 1px solid black">${query.lorem}</td>
      </tr>
    </tbody>
  </table> <br>`
  );
  res.write(
    `<table style="border: 1px solid black">
    <tbody>
      <tr style="border: 1px solid black">
        <td style="border: 1px solid black">First</td>
        <td style="border: 1px solid black">${query2.first}</td>
      </tr>
      <tr style="border: 1px solid black">
        <td style="border: 1px solid black">Second</td>
        <td style="border: 1px solid black">${query2.second}</td>
      </tr>
      <tr style="border: 1px solid black">
        <td style="border: 1px solid black">Third</td>
        <td style="border: 1px solid black">${query2.third}</td>
      </tr>
    </tbody>
  </table>`
  );
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});