const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const User_role = sequelize.define("user_role", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
  });