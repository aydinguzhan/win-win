const loginGet = async (req,res)=>{
    await res.send({message : "login"})
}

const loginPost = async (req,res)=>{
    const { username , email , password} = req.body;
    await res.send({message : "login-post"});
    console.log("username : "+ username + " "+ "Password : "+password+" "+ "email :"+email );
};

const registerGet = async (req,res)=>{
    await res.send({message : "register get"})
};

const registerPost = async (req,res)=>{
    const { username , email , password} = req.body;
    await res.send({message : "register get"});
    console.log("username : "+ username + " "+ "Password : "+password+" "+ "email :"+email )
    
}

module.exports ={
    loginGet,
    loginPost,
    registerGet,
    registerPost
}