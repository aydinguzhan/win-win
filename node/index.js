const express = require("express");
const router = require("./routes/app.js");
const authRouter = require("./routes/auth.js");
const app = express();

app.use(express.json());
require("dotenv").config();

const populate = require("./database/dummy_data.js");

const User = require("./models/user.js");
const User_role = require("./models/user_role.js");
const Role = require('./models/role.js')
const sequelize = require("./database/sequelize.js");

User.hasOne(User_role, {
  foreignKey: {
    name : 'user_id',
    allowNull: false,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  }
  
})
User_role.belongsTo(User, { foreignKey : "user_id"})

Role.hasMany(User_role, {
  foreignKey: {
    name : 'role_id',
    allowNull: false
  }
});
User_role.belongsTo(Role, { foreignKey : 'role_id'});


 (async () => {
   await sequelize.sync({force : true});
   await populate()
 })();


app.use("/", router);
app.use("/auth", authRouter);

const PORT = process.env.NODE_DOCKER_PORT || 5000;
app.listen(PORT, () => {
  console.log(`${PORT} listened`);
});
