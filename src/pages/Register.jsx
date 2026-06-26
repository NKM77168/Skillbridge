import "../styles/Login.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Register(){
const navigate = useNavigate()
return(

<div className="container">

<div className="login">

<h1>SKILLBRIDGE</h1>

<p>Join • Share • Learn</p>

<input
placeholder="Full Name"
/>

<input
type="email"
placeholder="Enter your email"
/>

<input
type="password"
placeholder="Create password"
/>

<input
placeholder="Skill I Can Teach"
/>

<input
placeholder="Skill I Want To Learn"
/>

<button
onClick={()=>

navigate("/profile")

}

>

REGISTER

</button>

<Link to="/">

Already have account?

</Link>
</div>

</div>

)

}

export default Register