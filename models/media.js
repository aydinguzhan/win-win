const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize.js");

const Media = sequelize.define("media", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner_id: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  module.exports = Media;