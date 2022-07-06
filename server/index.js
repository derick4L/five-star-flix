const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const db = require("./models");

const ratedMoviesRouter = require("./routes/RatedMovies");
app.use("/ratedMovies", ratedMoviesRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server running on :3001");
  });
});
