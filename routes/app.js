const express = require("express");
const router = express.Router();
const User = require('../models/user.js')

router.get("/", async(req,res)=>{
    const customers = await User.findAll({
        raw : true
    });
    console.log(customers)
    return res.send(customers)
});
router.get("/profile/:id", async(req,res)=>{
    const id = req.params.id;
    const user = await User.findAll({
        raw: true,
        where:{
            id
        }
    })
    return res.send(user)
});


module.exports = router