import "../styles/Login.css"
import { useState } from "react"

function Profile(){

const existing=

JSON.parse(
localStorage.getItem(
"profile"
)
)

||

{
name:"",
skill:""
}

const[name,setName]=
useState(
existing.name
)

const[skill,setSkill]=
useState(
existing.skill
)

const saveProfile=()=>{

localStorage.setItem(

"profile",

JSON.stringify({

name,
skill

})

)

alert(
"Profile Updated"
)

}

return(

<div className="container">

<div className="login">

<h1>

PROFILE

</h1>

<input

value={name}

placeholder="Name"

onChange={
(e)=>
setName(
e.target.value
)
}

/>

<input

value={skill}

placeholder="Skill"

onChange={
(e)=>
setSkill(
e.target.value
)
}

/>

<button

onClick={
saveProfile
}

>

SAVE

</button>

<br/><br/>

<div className="card">

<h3>

{name}

</h3>

<p>

Skill:
{skill}

</p>

</div>

</div>

</div>

)

}

export default Profile