const EventEmitter = require("events");
const { writeFileSync } = require("fs");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  // console.log(`Data recieved , Name : ${name} , Age : ${age}`);
});

customEmitter.on("response", () => {
  //?   console.log(`Some other logic here`);
});

customEmitter.emit("response", "Numan", 17);

//? ----------------------

// for (let i = 0; i <= 100; i++) {
//   writeFileSync("./bigC.txt", `That file has ${i} strings\n`, { flag: "a" });
// }

const { createReadStream } = require("fs");

const stream = createReadStream("./bigC.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

stream.on("data", (result) => {
  // console.log(result);
});
stream.on("error", (err) => {
  console.log(err);
});
