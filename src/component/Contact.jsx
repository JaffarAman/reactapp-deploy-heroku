import React from "react";
import { NavLink ,Link } from "react-router-dom";
import "./Home.css";
const Contact = () => {
  return (
    <>
      <div className="header">
        <NavLink exact className="navLinks" activeClassName="navLink" to="/">
          HOME
        </NavLink>
        <NavLink
          exact
          className="navLinks"
          activeClassName="navLink"
          to="/about"
        >
          ABOUT US
        </NavLink>
        <NavLink
          exact
          className="navLinks"
          activeClassName="navLink"
          to="/contact"
        >
          CONTACT US
        </NavLink>
        <Link exact className="navLinks" activeClassName="navLink" to="/logout">
          Logout
        </Link>
      </div>
      <div className="mainBox">
        <h1>CONTACT PAGE</h1>
        <p></p>
        <small>Protecting React Routing</small>
      </div>
    </>
  );
};

export default Contact;
