// include third party module
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const key = require("../../config/keys").secretOrKey;

// import validation

const userRegisterInput = require("../../validation/register");

// Import models

const User = require("../../models/Users");

// @route:  /api/user/register
// Desc:   Test users get
// Access: Public

router.post("/register", (req, res) => {
  const { errors, isValid } = userRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // get form values using req name,email and password
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  // check wether user exist or not

  User.findOne({
    email: email
  }).then(user => {
    // if user exist return 404  error with message: user already exist
    if (user) {
      errors.email = "User Already exist";
      res.status(404).json(errors);
    } else {
      // if user does  not exist create new user here
      const NewUser = new User({
        name,
        email,
        password
      });
      // before create new user we need to bcryt the password to store securely in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            console.log(err);
          }
          // push hash password to new user
          NewUser.password = hash;

          // finally save the user
          NewUser.save()
            .then(user => {
              return res
                .status(200)
                .json({ name: user.name, email: user.email, id: user._id });
            })
            .catch(err => {
              console.log(err);
            });
        });
      });
    }
  });
});

module.exports = router;
