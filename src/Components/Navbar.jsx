import { Link } from "react-router-dom"

function Navbar(){

return(

<div className="navbar">

<h2>SKILLBRIDGE</h2>

<div>

<Link to="/dashboard">

Dashboard

</Link>

<Link to="/profile">

Profile

</Link>

<Link to="/search">

Search

</Link>

<Link to="/requests">

Requests

</Link>

</div>

</div>

)

}

export default Navbar