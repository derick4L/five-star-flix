module.exports = (sequelize, DataTypes) => {
  const Playlists = sequelize.define("Playlists", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    playlist_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Playlists;
};
