import "../styles/Login.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login(){

const navigate=useNavigate()

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

const login=async()=>{

const res=
await fetch(
"http://localhost:5000/api/auth/login",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

email,
password

})

}

)

const data=
await res.json()

console.log(data)

if(
data==="Login Success"
||
data.message==="Login Success"
){

localStorage.setItem(
"user",
email
)

navigate(
"/dashboard"
)

}

else{

alert(
"Login Failed"
)

}

}

return(

<div className="container">

<div className="login">

<h1>

SKILLBRIDGE

</h1>

<p>

Connect • Learn • Grow

</p>

<input

placeholder="Email"

onChange={
(e)=>
setEmail(
e.target.value
)
}

/>

<input

type="password"

placeholder="Password"

onChange={
(e)=>
setPassword(
e.target.value
)
}

/>

<button

onClick={login}

>

LOGIN

</button>

<br/>

<Link to="/register">

Create Account

</Link>

</div>

</div>

)

}

export default Login