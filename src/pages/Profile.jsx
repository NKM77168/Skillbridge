import { useState } from "react"
import "../styles/Login.css"

function Profile(){
const [name,setName]=useState("")

const [department,setDepartment]=useState("")

const [teach,setTeach]=useState("")

const [learn,setLearn]=useState("")
return(

<div className="container">

<div className="login">

<h1>

PROFILE

</h1>

<p>

Build your skill profile

</p>

<input
value={name}
onChange={(e)=>

setName(e.target.value)

}
placeholder="Full Name"
/>

<input
value={department}
onChange={(e)=>

setDepartment(e.target.value)

}
placeholder="Department"
/>

<input
value={teach}
onChange={(e)=>

setTeach(e.target.value)

}
placeholder="Skills I Teach"
/>

<input
value={learn}
onChange={(e)=>

setLearn(e.target.value)

}
placeholder="Skills I Want To Learn"
/>

<button>

SAVE PROFILE

</button>
</div>

</div>

)

}

export default Profile