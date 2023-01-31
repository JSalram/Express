const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", async (req, res) => {
  const data = await fetch(
    "https://www.el-tiempo.net/api/json/v2/provincias/50/municipios/50297"
  ).then((response) => response.json());
  res.render("index", data);
});

app.listen(3000);