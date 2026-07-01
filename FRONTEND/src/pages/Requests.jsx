import "../styles/Login.css"

function Requests(){

const acceptRequest=()=>{

const history=

JSON.parse(
localStorage.getItem(
"history"
)
)

||

[]

history.push({

name:"Krishna",

skill:"React"

})

localStorage.setItem(

"history",

JSON.stringify(
history
)

)

alert(
"Added to History"
)

}

return(

<div className="container">

<div className="login">

<h1>

REQUESTS

</h1>

<div className="card">

<h3>

Krishna

</h3>

<p>

Requested Connection

</p>

<button

onClick={
acceptRequest
}

>

ACCEPT

</button>

<button

onClick={()=>

alert(
"Request Rejected"
)

}

>

REJECT

</button>

</div>

</div>

</div>

)

}

export default Requests