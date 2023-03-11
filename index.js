const isOdd = require("is-odd");

console.log(isOdd(4));

const fs = require("fs");
const path = require("path");

const readFile = async () => {
  try {
    const filePath = path.resolve(`${__dirname}/archivo.txt`);
    const data = await fs.promises.readFile(filePath, "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const writeFile = async () => {
  try {
    const filePath = path.resolve(`${__dirname}/archivo.txt`);
    const message = "Estoy agregando mensajes a mi archivo";
    const data = await fs.promises.writeFile(filePath, message, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const appendFile = async () => {
  try {
    const filePath = path.resolve(`${__dirname}/archivo.txt`);
    const message = "ahora aqui append a mi archivo";
    const data = await fs.promises.appendFile(filePath, message, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const writeAppenteReadFile = async () => {
  try {
    await readFile();
    await writeFile();
    await readFile();
    await appendFile();
    await readFile();
  } catch (error) {
    console.log(error);
  }
};

writeAppenteReadFile();
