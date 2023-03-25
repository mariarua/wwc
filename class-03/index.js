const express = require("express");

const PORT = 3000;

const products = [
  {
    id: 1,
    name: "Reloj",
    price: 100,
    quantity: 2,
  },
  {
    id: 2,
    name: "Correa",
    price: 100,
    quantity: 3,
  },
  {
    id: 3,
    name: "Sombrero",
    price: 1000,
    quantity: 6,
  },
];

const app = express();

app.get("/", (req, res) => {
  res.send("Esta es mi primera app en express");
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:productId", (req, res) => {
  const productId = req.params;
  console.log(req.params);
  res.json({});
});

app.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`);
});
