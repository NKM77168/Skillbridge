const express =
require("express")

const router =
express.Router()

const{
saveProfile,
getProfiles,
getLeaderboard
}=
require(
"../controllers/ProfileController"
)
router.get(
"/leaderboard",
getLeaderboard
)

router.post(
"/profile",
saveProfile
)

router.get(
"/allprofiles",
getProfiles
)

module.exports =
router