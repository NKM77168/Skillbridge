import { useEffect } from "react"
import { useState } from "react"

function Search(){

const[data,setData]=useState([])

useEffect(()=>{

fetch(
"http://localhost:5000/api/users/allprofiles"
)

.then(
(res)=>
res.json()
)

.then(
(data)=>
setData(data)
)

},[])

return(

<div className="container">

<div className="login">

<h1>

SEARCH SKILLS

</h1>

{

data.map(

(user,index)=>(

<div
key={index}
className="card"
>

<h3>

{user.name}

</h3>

<p>

Can Teach:
{user.skill}

</p>

<button

onClick={()=>{

alert(
"Request Sent"
)

}}

>

CONNECT

</button>

</div>

)

)

}

</div>

</div>

)

}

export default Search