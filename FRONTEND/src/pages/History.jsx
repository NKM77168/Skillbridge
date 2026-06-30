import "../styles/Login.css"
import { Link } from "react-router-dom"

function History(){

return(

<div className="container">

<div className="login">

<h1>EXCHANGE HISTORY</h1>

<div className="card">

<h3>Krishna</h3>

<p>

Learned: C Programming

</p>

<p>

Status: Completed

</p>

</div>

<br/>

<div className="card">

<h3>Niranjana</h3>

<p>

Learned: React

</p>

<p>

Status: Completed

</p>

</div>
<Link to="/leaderboard">

<button>

VIEW LEADERBOARD

</button>

</Link>

</div>

</div>

)

}

export default History