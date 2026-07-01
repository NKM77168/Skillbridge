import "../styles/Login.css"
import { useEffect } from "react"
import { useState } from "react"

function History(){

const[data,setData]=
useState([])

useEffect(()=>{

const history=

JSON.parse(

localStorage.getItem(
"history"
)

)

||

[]

setData(
history
)

},[])

return(

<div className="container">

<div className="login">

<h1>

EXCHANGE HISTORY

</h1>

{

data.map(

(item,index)=>(

<div
key={index}
className="card"
>

<h3>

{item.name}

</h3>

<p>

Learned:
{item.skill}

</p>

<p>

Status:
Completed

</p>

</div>

)

)

}

</div>

</div>

)

}

export default History