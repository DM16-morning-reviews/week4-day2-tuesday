require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const app = express();
const port = 3001;

const controller = require("./controller.js");

app.use(json());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.get("/api/pets", controller.getAllPets);

app.listen(port, () => {
  console.log(`Port is running on: ${port}`);
});
