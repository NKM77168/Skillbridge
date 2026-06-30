import {
BrowserRouter,
Routes,
Route,
Navigate
} from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Dashboard from "./pages/Dashboard"
import Search from "./pages/Search"
import Requests from "./pages/Requests"
import History from "./pages/History"
import Leaderboard from "./pages/Leaderboard"
import Notifications from "./pages/Notifications"

function App(){

const user=
localStorage.getItem(
"user"
)

return(

<BrowserRouter>

<Routes>

<Route
path="/"
element={<Login/>}
/>

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

element={

user
?

<Dashboard/>

:

<Navigate
to="/"
/>

}

/>

<Route
path="/search"
element={<Search/>}
/>

<Route
path="/requests"
element={<Requests/>}
/>

<Route
path="/history"
element={<History/>}
/>

<Route
path="/leaderboard"
element={<Leaderboard/>}
/>

<Route
path="/notifications"
element={<Notifications/>}
/>

</Routes>

</BrowserRouter>

)

}

export default App