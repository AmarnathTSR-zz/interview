const express = require("express");
const mongoose = require("mongoose");

const bodyparser = require("body-parser");

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

app.use(
  bodyparser.urlencoded({
    extended: false
  })
);

// parse application/json
app.use(bodyparser.json());

// access control origin server

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.status(200).send({ message: "success" });
});

app.listen(port, () => {
  console.log(`server running in http://localhost:${port}`);
});
