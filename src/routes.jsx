import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

import Login from './Pages/SignIn/index'
import Home from './Pages/Home/index'

function ProtectedRoutes({ redirectTo }) {
    const isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  }

function MyRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />

                <Route element={<ProtectedRoutes redirectTo={"/"} />}>
                    <Route path="/dashboard" element={<Home />} />
                </Route>
                
            </Routes>
        </Router>
    )
}

export default MyRoutes