import "../styles/Login.css"
import { useState } from "react"
import { Link } from "react-router-dom"

function Search(){

const [search,setSearch]=useState("")

return(

<div className="container">

<div className="login">

<h1>SEARCH SKILLS</h1>

<input
placeholder="Search skills..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<p>

Searching: {search}

</p>

<div>

<h3>Krishna</h3>

<p>Can Teach: React</p>

<Link to="/requests">

<button>

CONNECT

</button>

</Link>

</div>

<br/>

<div>

<h3>Niranjana</h3>

<p>Can Teach: Canva</p>

<Link to="/requests">

<button>

CONNECT

</button>

</Link>

</div>

<br/>

<div>

<h3>Nesrin</h3>

<p>Can Teach: C Programming</p>

<Link to="/requests">

<button>

CONNECT

</button>

</Link>
</div>

</div>

</div>

)

}

export default Search