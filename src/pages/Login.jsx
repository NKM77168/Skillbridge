import "../styles/Login.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(){
const navigate = useNavigate()
return(

<div className="container">

<div className="login">

<h1>

SKILLBRIDGE

</h1>
<p>

Connect • Learn • Grow

</p>

<input
type="email"
placeholder="Enter your email"
/>
<input
type="password"
placeholder="Enter password"
/>

<button
onClick={()=>

navigate("/dashboard")

}

>

LOGIN

</button>
<Link to="/register">

Create Account

</Link>

</div>

</div>

)

}

export default Login