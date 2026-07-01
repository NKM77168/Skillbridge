const Profile =
require(
"../models/ProfileModel"
)

const saveProfile =
async(req,res)=>{

try{

const profile =
await Profile.create(
req.body
)

res.json(profile)

}

catch(error){

res.json(error)

}

}

const getProfiles =
async(req,res)=>{

const profiles =
await Profile.find()

res.json(
profiles
)

}
const getLeaderboard=
async(req,res)=>{

const users=

await Profile.find()

.sort({

points:-1

})

res.json(
users
)

}
module.exports={

saveProfile,
getProfiles,
getLeaderboard

}