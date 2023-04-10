const express = require("express");
const router = express.Router()

router.get("/",(req,res)=>{
    return res.send({message : "main response"})
});
router.get("/profile", (req,res)=>{
    return res.send({message : "profile response"})
});

module.exports = router