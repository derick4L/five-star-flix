const express = require("express");
const router = express.Router();

const { Ratings } = require("../models");

router.get("/", async (req, res) => {
  const getAllRatings = await Ratings.findAll();
  res.json(getAllRatings);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Ratings.create(post);
  res.json(post);
});

module.exports = router;
