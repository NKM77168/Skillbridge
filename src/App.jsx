import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Dashboard from "./pages/Dashboard"
import Search from "./pages/Search"
import Requests from "./pages/Requests"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>

<Route
path="/register"
element={<Register/>}
/>

<Route
path="/profile"
element={<Profile/>}
/>

<Route
path="/dashboard"
element={<Dashboard/>}
/>

<Route
path="/search"
element={<Search/>}
/>

<Route
path="/requests"
element={<Requests/>}
/>

</Routes>

</BrowserRouter>

)

}

export default App