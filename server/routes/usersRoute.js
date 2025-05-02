const express = require("express");
const route = express.Router();

// Callback funcution : route handler
route.post(
  "/signup",
  (req, ees, next) => {
    res.send("working----SignUp");
  },
  (req, res) => {}
);
