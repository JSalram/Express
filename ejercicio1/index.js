const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "Este request/response está OK",
  });

  console.log(`Request a ${req.baseUrl} ${Date.now()}`);
});

app.listen(3000);
