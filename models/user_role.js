const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const User_role = sequelize.define("user_role", {
    role_id: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER(),
      allowNull: false
    }
  });

  module.exports = User_role;