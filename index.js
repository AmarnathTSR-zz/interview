const express = require("express");
const mongoose = require("mongoose");

const uri = require("./config/keys").mongoUri;

const app = express();

const port = process.env.port || 5000;

mongoose
  .connect(
    uri,
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("DB connected success"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.status(200).send({ message: "success" });
});

app.listen(port, () => {
  console.log(`server running in http://localhost:${port}`);
});
