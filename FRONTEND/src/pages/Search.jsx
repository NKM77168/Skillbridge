import "../styles/Login.css"
import { useState } from "react"

function Search(){

const users=[

{
name:"Krishna",
skill:"C Programming"
},

{
name:"Niranjana",
skill:"React"
},

{
name:"Nesrin",
skill:"Java"
}

]

const[search,setSearch]=
useState("")

const filtered=

users.filter(

(user)=>

user.skill
.toLowerCase()

.includes(

search
.toLowerCase()

)

)

return(

<div className="container">

<div className="login">

<h1>

SEARCH SKILLS

</h1>

<input

placeholder="Search skill"

onChange={
(e)=>
setSearch(
e.target.value
)
}

/>

<br/><br/>

{

filtered.map(

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

const requests=

JSON.parse(

localStorage.getItem(
"requests"
)

)

||

[]

requests.push({

name:user.name,

skill:user.skill

})

localStorage.setItem(

"requests",

JSON.stringify(
requests
)

)

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