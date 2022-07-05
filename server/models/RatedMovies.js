module.exports = (sequelize, DataTypes) => {
  const RatedMovies = sequelize.define("RatedMovies", {
    movieTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userRating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userComment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return RatedMovies;
};
