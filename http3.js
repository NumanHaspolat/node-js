const { readFileSync, createReadStream } = require("fs");
const http = require("http");
http
  .createServer((req, res) => {
    // const txt = readFileSync("./bigC.txt", "utf8");
    // res.end(txt);

    const fileStream = createReadStream("./bigC.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });

    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
