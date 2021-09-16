import React from "react"
import "./Home.css"
import { NavLink } from "react-router-dom"
const ErrorPage = ()=>{
        return(
            <>
             <div className="header">
            <NavLink exact className="navLinks" activeClassName="navLink"  to="/">HOME</NavLink>
            <NavLink exact className="navLinks" activeClassName="navLink" to="/about">ABOUT US</NavLink>
            <NavLink exact className="navLinks" activeClassName="navLink" to="/contact">CONTACT US</NavLink>
            

        </div>
        <div className="mainBox">
            <h1>404</h1>
            <p>THIS PAGE IS NOT FOUND!</p>
            <small>simple React Routing</small>
        </div>
        </>    
        )
}
export default ErrorPage