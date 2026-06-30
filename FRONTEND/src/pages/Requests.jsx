import "../styles/Login.css"
import { Link } from "react-router-dom"

function Requests(){

return(

<div className="container">

<div className="login">

<h1>REQUESTS</h1>

<div className="card">

<h3>Krishna</h3>

<p>

Wants to learn C Programming

</p>

<button>

ACCEPTED

</button>

</div>

<br/>

<div>

<h3>Niranjana</h3>

<p>

Wants to learn React

</p>

<button>

ACCEPT

</button>

<button>

REJECT

</button>

</div>

<br/>

<Link to="/history">

<button>

VIEW HISTORY

</button>

</Link>

</div>

</div>

)

}

export default Requests