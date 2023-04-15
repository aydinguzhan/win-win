const User = require('../models/user.js');
const User_role = require('../models/user_role.js');
const Role = require('../models/role.js');

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
        id : 7,
        username : "irem",
        lastname : "aydın",
        email : "irem@gmail.com",
        password : "123456",
    
    });
    await User.create({
        id : 5,
        username : "furkan",
        lastname : "kılıç",
        email : "frkn23@gmail.com",
        password : "123456",
    
    });
    
    await Role.create({
        id : 1,
        name  : "admin"
    });

    await Role.create({
        id : 2,
        name  : "guest"
    })
 
    await User_role.create({
        role_id : 1,
        user_id : 5 
     
    })
    await User_role.create({
        role_id : 2,
        user_id : 7
    })
   }
}

 module.exports = populate;