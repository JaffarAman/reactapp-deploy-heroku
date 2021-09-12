import React from "react";
import "./simpleRoute.css"
import { Switch, Route , NavLink ,  useParams } from "react-router-dom"
import AppRouter from "./config/Router"
const App = () => {
 
    return (
        <>
        <div className="header">
            <NavLink exact className="navLinks" activeClassName="navLink"  to="/">HOME</NavLink>
            <NavLink exact className="navLinks" activeClassName="navLink" to="/about">ABOUT US</NavLink>
            <NavLink exact className="navLinks" activeClassName="navLink" to="/contact">CONTACT US</NavLink>
            

        </div>
            
            <div>
                <AppRouter />
            </div>
            

        <div className="footer" >
            <small>CopyRights &copy; All Right Reserved</small>

        </div>

        </>
    )
}

export default App