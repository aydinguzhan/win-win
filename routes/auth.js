const express = require('express');
const app = express();
const router = express.Router();
const auth = require("../controllers/auth.js") 

router.get("/login", auth.loginGet);


router.post("/login", auth.loginPost)


router.get("/register", auth.registerGet);


router.post("/login", auth.registerPost)

module.exports = router