module.exports = (sequelize, DataTypes) => {
  const PlaylistItems = sequelize.define("PlaylistItems", {
    playlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return PlaylistItems;
};
