const express = require("express");
const router = express.Router();

const { PlaylistItems } = require("../models");

router.get("/", async (req, res) => {
  const getAllPlaylistItems = await PlaylistItems.findAll();
  res.json(getAllPlaylistItems);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await PlaylistItems.create(post);
  res.json(post);
});

module.exports = router;
