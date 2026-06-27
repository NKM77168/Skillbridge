import "../styles/Login.css"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

function Dashboard(){

return(
    <>

<Navbar/>

<div className="container">

<div className="login">

<h1>SKILLBRIDGE</h1>
<p>

Welcome to SkillBridge

</p>

<div>

<h3>Student Profile</h3>

<p>Name: Nesrin</p>

<p>Department: CSE</p>

<p>Teaching: C Programming</p>

<p>Learning: React</p>

</div>
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
</>
)

}

export default Dashboard