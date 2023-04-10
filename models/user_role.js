const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const User_role = sequelize.define("user_role", {
    role_id: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      defaultValue : 1,
    }
  });

  module.exports = User_role;