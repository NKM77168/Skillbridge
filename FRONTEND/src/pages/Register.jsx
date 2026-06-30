import "../styles/Login.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Register(){
const navigate = useNavigate()
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const register=async()=>{

await fetch(
"http://localhost:5000/api/users/register",
{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify({

name,
email,
password

})

}

)

alert("Registered")

navigate("/")
``

}
return(

<div className="container">

<div className="login">

<h1>SKILLBRIDGE</h1>

<p>Join • Share • Learn</p>

<input
onChange={
(e)=>
setName(
e.target.value
)
}
/>

<input
onChange={
(e)=>
setEmail(
e.target.value
)
}
/>

<input
type="password"

onChange={
(e)=>
setPassword(
e.target.value
)
}
/>

<input
placeholder="Skill I Can Teach"
/>

<input
placeholder="Skill I Want To Learn"
/>

<button
onClick={
register
}
>

REGISTER

</button>

<Link to="/">

Already have account?

</Link>
</div>

</div>

)

}

export default Register