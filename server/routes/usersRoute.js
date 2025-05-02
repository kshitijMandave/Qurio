// routes/signup.js

const express = require("express");
const router = express.Router();
const createConnection = require("../db/connect");

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const users = await createConnection();

    // Check if user already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Insert new user
    const result = await users.insertOne({ name, email, password });

    res
      .status(201)
      .json({ message: "User created", userId: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
});

module.exports = router;
