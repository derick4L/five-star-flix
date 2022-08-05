module.exports = (sequelize, DataTypes) => {
  const RatedMovies = sequelize.define("RatedMovies", {
    movie_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_comment: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return RatedMovies;
};
