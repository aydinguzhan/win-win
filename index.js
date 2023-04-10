const express = require('express');
const router = require("./routes/app.js")
const authRouter = require("./routes/auth.js")
const app = express();

app.use(express.json());
require('dotenv').config()


app.use("/",router);
app.use("/auth", authRouter);

const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`${PORT} listened`)
})