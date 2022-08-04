const express = require("express");
const router = express.Router();

const { Playlists } = require("../models");

router.get("/", async (req, res) => {
  const getAllPlaylists = await Playlists.findAll();
  res.json(getAllPlaylists);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Playlists.create(post);
  res.json(post);
});

module.exports = router;
