//?   GLOBALS - NO WINDOW

//*  __dirname  - path to current directory
//*  __filename - file name
//*  require    - function to use modules (file)
//*  module     - info about current module (file)
//*  process    - info about env where the program is being executed

//? console.log(__dirname);    C:\Users\haspo\OneDrive\Masaüstü\node-js
//? console.log(__filename);   ...app.js

//? CommonJS - every file is Module by default.
//? Modules - Encapsulated code (only share minimum)

//* require("./vars");

const man = require("./vars");
//? console.log(man); => {"James" , "Pc"}

const os = require("os");

//* info about current user ...
const user = os.userInfo();

//* console.log(`The System uptime is ${os.uptime()} seconds..`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

// console.log(currentOs);

//* -------------------------------------

const path = require("path");

const filePath = path.join("./content", "subfolder", "test.txt");

const base = path.basename(filePath);

const absolute = path.resolve(__dirname, "content", "subflder", "test.txt");

// console.log(absolute);

const {
  readFileSync,
  writeFileSync,
  readFile,
  writeFile,
  read,
} = require("fs");

const first = readFileSync("./first.txt", "utf8"); //? This function is only read a file.
const sec = readFileSync("./sec.txt", "utf8");

//! console.log(` FIRST FILE :${first} , SECOND FILE : ${sec}`);

writeFileSync(
  "./result.txt",
  `, and im Dev`,
  { flag: "a" } //? Value kismina girdigim degeri mevcut degere ekledi , bunun gibi birkac tane daha flag var w ,r ve varyantlari...
);

writeFileSync("./first.txt", `Hello this one is first`); //* But this function has to create a new file and add a value in this new file , if tehere is already a file with the same name , it should change the current value of file.

//? --------------------------------------------

readFile("./first.txt", "utf8", (err, res) => {
  const first = res;
  err
    ? console.log(err)
    : readFile(
        "./sec.txt",
        "utf8",
        (err, res) => {
          const sec = res;

          err
            ? console.log(err)
            : writeFile(
                "./result-2.txt",
                `Hello this one is SECOND RESULT`,
                (err, res) => {
                  err ? console.log(err) : null;
                }
              );
        }
        // console.log("This task is done")
      );
});

// console.log("Starting next task");

//? --------------------------

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
//* console.log(newItems); ==> [ 1, 2, 3, 4 ]

//? --------------------------

const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

//? --------------------------

const start = async () => {
  try {
    const first = await readFilePromise("./first.txt", "utf8");
    const sec = await readFilePromise("./sec.txt", "utf8");
    await writeFilePromise('./result.txt', "THIS IS RESULT FILE 1....")
    console.log(first, "--", sec);
  } catch (err) {
    console.log(err);
  }
};

start();

// getText("./first.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
