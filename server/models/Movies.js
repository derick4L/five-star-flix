module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define("Movies", {
    movie_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movie_year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Movies;
};
