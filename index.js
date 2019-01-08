const express = require("express");
const mongoose = require("mongoose");

const passport = require("passport");
const bodyparser = require("body-parser");

const uri = require("./config/keys").mongoUri;

const users = require("./routes/api/users");
const email = require("./routes/api/email");

const app = express();
// Include custom Router we created

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

// passport middleware added

app.use(passport.initialize());

// include passport stratagy

require("./config/passport")(passport);

// Use our router

app.use("/api/user", users);
app.use("/api/email", email);

 // Set static folder
 app.use(express.static('client/build'));

 app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
 });

app.listen(port, () => {
  console.log(`server running in http://localhost:${port}`);
});
