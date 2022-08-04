module.exports = (sequelize, DataTypes) => {
  const Ratings = sequelize.define("Ratings", {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    movie_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Ratings;
};
