const http = require("http");

const HOST = "localhost";
const PORT = 3000;

const writeHTMLResponse = (res, htmlCode) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(htmlCode);
};

const writeJSONResponse = (res, json) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(json));
};

const products = [
  {
    name: "Reloj",
    price: 100,
    quantity: 2,
  },
  {
    name: "Correa",
    price: 100,
    quantity: 3,
  },
  {
    name: "Sombrero",
    price: 1000,
    quantity: 6,
  },
];

const server = http.createServer(async (req, res) => {
  const url = req.url;
  let body = "";
  console.log("URL es", url);

  await req.on("data", (chunk) => {
    body += chunk;
  });

  if (url === "/other") {
    writeHTMLResponse(res, "<p>Esta es otra ruta <p>");
  } else if (url === "/api/v1/products") {
    const method = req.method;
    console.log("Method", method);
    if (method === "GET") {
      writeJSONResponse(res, products);
    } else if (method === "POST") {
      const product = JSON.parse(body);
      products.push(product);
      writeJSONResponse(res, products);
    } else if (method === "DELETE") {
      const productInformation = JSON.parse(body);
      const productName = productInformation.name;
      if (productName) {
        const indexProduct = products.findIndex((p) => p.name == productName);

        console.log("index of product", indexProduct);
        if (indexProduct !== -1) {
          products.splice(indexProduct, 1);
        }
        writeJSONResponse(res, products);
      }
    }
  } else {
    writeHTMLResponse(res, "<p>Esto es HTML</p>");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en HTTP://${HOST}:${PORT}`);
});
