import { useEffect,useState } from "react"

function Leaderboard(){

const[data,setData]=
useState([])

useEffect(()=>{

fetch(
"http://localhost:5000/api/users/leaderboard"
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

LEADERBOARD

</h1>

{

data.map(

(user,index)=>(

<div
key={index}
className="card"
>

<h3>

#{index+1}

</h3>

<p>

{user.name}

</p>

<p>

⭐ {user.points}

</p>

</div>

)

)

}

</div>

</div>

)

}

export default Leaderboard