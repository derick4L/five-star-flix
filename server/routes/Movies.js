const express = require("express");
const router = express.Router();

const { Movies } = require("../models");

router.get("/", async (req, res) => {
  const getAllMovies = await Movies.findAll();
  res.json(getAllMovies);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Movies.create(post);
  res.json(post);
});

module.exports = router;
