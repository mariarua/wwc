const http = require("http");

const HOST = "localhost";
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.end("Este es mi primer servidor en node");
});

server.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en HTTP://${HOST}:${PORT}`);
});
