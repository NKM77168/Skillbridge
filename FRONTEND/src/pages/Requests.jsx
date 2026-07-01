import "../styles/Login.css"

function Requests(){

const requests=

JSON.parse(
localStorage.getItem(
"requests"
)
)

||

[]

return(

<div className="container">

<div className="login">

<h1>

REQUESTS

</h1>

{

requests.map(

(item,index)=>(

<div
key={index}
className="card"
>

<h3>

{item.name}

</h3>

<p>

Requested:
{item.skill}

</p>

<button>

ACCEPT

</button>

<button>

REJECT

</button>

</div>

)

)

}

</div>

</div>

)

}

export default Requests