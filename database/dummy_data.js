const User = require('../models/user.js');
const User_role = require('../models/user_role.js');

async function populate(){
    const count = await User.count();
   if(count == 0){
    await User.create({
        username : "oguz",
        lastname : "aydın",
        email : "oguz23@gmail.com",
        password : "123456",
       
    });
    await User.create({
        username : "sunay",
        lastname : "aydın",
        email : "sny23@gmail.com",
        password : "123456",
    
    });
    await User.create({
        username : "irem",
        lastname : "aydın",
        email : "irem@gmail.com",
        password : "123456",
    
    });
    await User.create({
        username : "furkan",
        lastname : "kılıç",
        email : "frkn23@gmail.com",
        password : "123456",
    
    });
 
    await User_role.create({
        role_id : 1,
     
    })
    await User_role.create({
        role_id : 2,
    })
   }
}

 module.exports = populate;