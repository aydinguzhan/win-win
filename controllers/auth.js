const { Op } = require('sequelize');
const User = require('../models/user.js')

const loginGet = async (req,res)=>{
    let user = await User.findAll({
        where :{
          username : username
        },
        raw: true
     });
     console.log(user)
     await res.send({message : "login"});
}

const loginPost = async (req,res)=>{
    const { username , email , password} = req.body;
    let user = await User.findAll({
       where :{
         username : username
       },
       raw: true
    });
    await res.send({message : "login-post"});
    console.log(user);
};

const registerGet = async (req,res)=>{
    await res.send({message : "register get"})
};

const registerPost = async (req,res)=>{
    const { username , lastname, email , password} = req.body;
    const user = await User.create({
        username,
        lastname,
        email,
        password
    })
    await res.status(201).send({message : "created user"});
    console.log(user)
    
}

module.exports ={
    loginGet,
    loginPost,
    registerGet,
    registerPost
}