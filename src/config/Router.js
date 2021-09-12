import React from "react"
import { Switch, Route, NavLink } from "react-router-dom"
import Home from "../components/Home.jsx"
import About from "../components/About.jsx"
import Contact from "../components/Contact.jsx"

const AppRouter = () => {

    return (

        <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

        </Switch>

    )

}
export default AppRouter