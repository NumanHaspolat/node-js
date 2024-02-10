//? ---------- HTTP -------------

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to our HOME page.");
  }
  if (req.url === "/about") {
    return res.end("Welcome to our ABOUT page.");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We cant seem to find the page u are looking for.</p>
  <a href="/">Back Home</a>
  `);
});

server.listen(5000, () => {
  console.log("Server is running on http://localhost:5000/");
});
