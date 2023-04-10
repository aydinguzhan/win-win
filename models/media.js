const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const Media = sequelize.define("Media", {
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