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
const sequelize = require("./database/database.js");

User.hasOne(User_role, {
  foreignKey: {
    name : 'user_id',
    allowNull: false,
    field :'user_id'
  }
  
})
User_role.belongsTo(User)

Role.hasMany(User_role, {
  foreignKey: {
    name : 'role_id',
    allowNull: false,
    field :'role_id'
  }
});
User_role.belongsTo(Role);


 (async () => {
    await sequelize.sync({force : true});
    await populate()
 })();

// require("./models/user.js");

app.use("/", router);
app.use("/auth", authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`${PORT} listened`);
});
