import "../styles/Login.css"
import { Link } from "react-router-dom"

function Dashboard(){

return(

<div className="container">

<div className="login">

<h1>SKILLBRIDGE</h1>
<p>

Welcome to SkillBridge

</p>

<p>Learn • Teach • Connect</p>

<Link to="/profile">
<button>MY PROFILE</button>
</Link>

<Link to="/search">
<button>SEARCH SKILLS</button>
</Link>

<Link to="/requests">
<button>REQUESTS</button>
</Link>

</div>

</div>

)

}

export default Dashboard