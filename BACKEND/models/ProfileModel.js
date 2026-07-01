const mongoose=
require("mongoose")

const profileSchema=
new mongoose.Schema({

name:String,

skill:String,

points:{

type:Number,

default:0

}

})

module.exports=
mongoose.model(
"Profile",
profileSchema
)