import { useState } from "react"

function Profile(){

const[name,setName]=useState("")
const[skill,setSkill]=useState("")

const saveProfile=async()=>{

await fetch(
"http://localhost:5000/api/users/profile",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name,
skill

})

}

)

alert(
"Profile Saved"
)

}

return(

<div className="container">

<div className="login">

<h1>

PROFILE

</h1>

<input
placeholder="Your Name"

onChange={
(e)=>
setName(
e.target.value
)}
/>

<input
placeholder="Skill"

onChange={
(e)=>
setSkill(
e.target.value
)}
/>

<button
onClick={
saveProfile
}
>

SAVE

</button>

</div>

</div>

)

}

export default Profile