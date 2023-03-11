//const fetch = require("node-fetch");
// Cuando se usa el fetch descargado sale error
// Se decidio que se iba a usar nativo y funciona bien

const fetchApi = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    data.results.forEach((d) => console.log(d.id, d.name, d.gender));
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchApi;
