import { useState } from "react"
import { Link } from "react-router-dom"

function Profile(){

const [name,setName]=useState("")
const [department,setDepartment]=useState("")
const [teach,setTeach]=useState("")
const [learn,setLearn]=useState("")

return(

<div className="container">

<div className="login">

<h1>MY PROFILE</h1>

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Department"
value={department}
onChange={(e)=>setDepartment(e.target.value)}
/>

<input
placeholder="Skills I Teach"
value={teach}
onChange={(e)=>setTeach(e.target.value)}
/>

<input
placeholder="Skills I Want To Learn"
value={learn}
onChange={(e)=>setLearn(e.target.value)}
/>

<Link to="/dashboard">

<button>

SAVE PROFILE

</button>

</Link>
<p>{name}</p>

</div>

</div>

)

}

export default Profile