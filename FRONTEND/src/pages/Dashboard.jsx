import "../styles/Login.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Dashboard(){

const navigate=useNavigate()

const user=
localStorage.getItem("user")

const logout=()=>{

localStorage.removeItem("user")

navigate("/")

}

return(

<div className="container">

<div className="login">

<h1>

SKILLBRIDGE

</h1>

<h3>

Welcome {user}

</h3>

<br/>

<Link to="/search">
<button>SEARCH</button>
</Link>

<br/><br/>

<Link to="/requests">
<button>REQUESTS</button>
</Link>

<br/><br/>

<Link to="/history">
<button>HISTORY</button>
</Link>

<br/><br/>

<Link to="/leaderboard">
<button>LEADERBOARD</button>
</Link>

<br/><br/>

<Link to="/notifications">
<button>NOTIFICATIONS</button>
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