const express = require("express");
const router = require("./routes/app.js");
const authRouter = require("./routes/auth.js");
const app = express();

app.use(express.json());
require("dotenv").config();

const populate = require("./database/dummy_data.js");

const User = require("./models/user.js");
const User_role = require("./models/user_role.js");
const sequelize = require("./database/database.js");


//   User_role.hasMany(User,{});
//   User.belongsTo(User_role);

 (async () => {
   //await sequelize.sync({alter : true});
   //await populate()
 })();

// require("./models/user.js");

app.use("/", router);
app.use("/auth", authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`${PORT} listened`);
});
