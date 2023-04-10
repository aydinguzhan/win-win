const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const Role = sequelize.define("role", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });