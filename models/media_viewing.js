const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const Media_viewing = sequelize.define("media_viewing", {
    mediaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  module.exports = Media_viewing