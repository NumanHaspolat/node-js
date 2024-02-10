const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`Data recieved , Name : ${name} , Age : ${age}`);
});

customEmitter.on("response", () => {
  //?   console.log(`Some other logic here`);
});

customEmitter.emit("response", "Numan", 17);

//? ----------------------

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Welcome to our server...");
});

server.listen(5000);
