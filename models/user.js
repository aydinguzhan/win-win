const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

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

const Role = sequelize.define("role", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

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


// (async () => {
//     await User_role.sync()
//     await User.sync({force :  true});
//     await Role.sync({force :  true});
//     await Media.sync({force :  true});
//     await Media_viewing.sync({force : true})
//     console.log("create user model")
// })();
