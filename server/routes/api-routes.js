require('dotenv').config();
const { Router } = require("express");
const mongoose = require("mongoose");
const Model = require("../models/models");

const router = Router();

const users = [];
const db = process.env.DB_CONNECTION;

mongoose.connect(
  db,
  { useNewUrlParser: true },
  (err, res) => {
    if (err) {
      console.log("Failed to connected to db");
    } else {
      console.log("Connected to db");
    }
  }
);

// GET
router.get("/users", function(req, res) {
  Model.find({}, (err, users) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});

// PUT
router.post("/users", async function({ body }, res) {
  await Model.deleteMany({});
  const result = await Model.insertMany(body);
  res.status(200).send(result);
});

module.exports = router;
