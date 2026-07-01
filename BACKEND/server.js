const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const connectDB =
require("./config/db")

const ProfileRoutes =
require("./routes/ProfileRoutes")

const userRoutes =
require("./routes/userRoutes")

const authRoutes =
require("./routes/authRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use(
"/api/users",
userRoutes
)

app.use(
"/api/users",
ProfileRoutes
)

app.use(
"/api/auth",
authRoutes
)

app.get("/",(req,res)=>{

res.send(
"SkillBridge Backend Running"
)

})

app.listen(
process.env.PORT,
()=>{

console.log(
"Server started"
)

}
)