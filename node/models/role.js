const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize.js");

const Role = sequelize.define("role", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  module.exports = Role;