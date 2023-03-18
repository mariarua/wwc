const http = require("http");

const HOST = "localhost";
const PORT = 8000;

const writeHTMLResponse = (res, htmlCode) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(htmlCode);
};

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log("URL es", url);

  if (url === "/other") {
    writeHTMLResponse(res, "<p>Esta es otra ruta <p>");
  } else {
    writeHTMLResponse(res, "<p>Esto es HTML</p>");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en HTTP://${HOST}:${PORT}`);
});
