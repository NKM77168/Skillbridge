import "../styles/Login.css"
import { Link } from "react-router-dom"

function Dashboard(){

const user=
localStorage.getItem(
"user"
)

const profile=

JSON.parse(
localStorage.getItem(
"profile"
)
)

||

{
name:"Not Set",
skill:"Not Set"
}

const logout=()=>{

localStorage.removeItem(
"user"
)

window.location="/"

}

return(

<div className="container">

<div className="login">

<h1>

DASHBOARD

</h1>

<h3>

Welcome,
{user}

</h3>

<div className="card">

<h3>

{profile.name}

</h3>

<p>

Skill:
{profile.skill}

</p>

</div>

<br/>

<Link to="/profile">

<button>

PROFILE

</button>

</Link>

<br/><br/>

<Link to="/search">

<button>

SEARCH

</button>

</Link>

<br/><br/>

<Link to="/requests">

<button>

REQUESTS

</button>

</Link>

<br/><br/>

<Link to="/history">

<button>

HISTORY

</button>

</Link>

<br/><br/>

<Link to="/notifications">

<button>

NOTIFICATIONS

</button>

</Link>

<br/><br/>

<Link to="/leaderboard">

<button>

LEADERBOARD

</button>

</Link>

<br/><br/>

<button
onClick={logout}
>

LOGOUT

</button>

</div>

</div>

)

}

export default Dashboard