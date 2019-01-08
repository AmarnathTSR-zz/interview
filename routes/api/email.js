// include third party module
const express = require("express");
const router = express.Router();

// import validation

const userEmailInput = require("../../validation/email");

// post to contact

router.post("contact", (req, res) => {
  const { errors, isValid } = userEmailInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
});

module.exports = router;
