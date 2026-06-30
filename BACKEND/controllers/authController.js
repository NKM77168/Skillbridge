const User=
require("../models/UserModel")

const login=
async(req,res)=>{

const{
email,
password
}=req.body

try{

const user=
await User.findOne({
email
})

if(
!user
){

return res.json(
"User not found"
)

}

if(
user.password
!==password
){

return res.json(
"Wrong password"
)

}

res.json(
"Login Success"
)

}

catch(error){

res.json(error)

}

}

module.exports={
login
}