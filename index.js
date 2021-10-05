// Création d'un serveur express
const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/app/views");

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
