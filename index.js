const express = require("express");

const app = express();

const port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.status(200).send({ message: "success" });
});

app.listen(port, () => {
  console.log(`server running in http://localhost:${port}`);
});
