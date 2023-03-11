const isOdd = require("is-odd");

console.log(isOdd(4));

const fs = require("fs");
const path = require("path");

const readFile = async () => {
  try {
    const filePath = path.resolve(`${__dirname}/archivo.txt`);
    const data = await fs.promises.readFile(filePath, "ascii");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

readFile();
