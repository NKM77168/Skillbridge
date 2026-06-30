const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")

dotenv.config()

const connectDB=require("./config/db")

const app=express()
const userRoutes=
require("./routes/userRoutes")
const authRoutes=
require(
"./routes/authRoutes"
)
connectDB()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{

res.send("SkillBridge Backend Running")

})

app.listen(process.env.PORT,()=>{

console.log("Server started")

})
app.use(
"/api/users",
userRoutes
)
app.use(
"/api/auth",
authRoutes
)