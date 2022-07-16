const express = require("express");
const router = express.Router();

const { RatedMovies } = require("../models");

router.get("/", async (req, res) => {
  const getAllRatedMovies = await RatedMovies.findAll();
  // Will have to customize the response to include the user's rating and comment
  res.json(getAllRatedMovies);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await RatedMovies.create(post);
  res.json(post);
});

module.exports = router;
