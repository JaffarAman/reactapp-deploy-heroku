import React from "react";
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Error from "./component/Error"
import Login from "./component/Login"

import Protective from "./config/Protective"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Logout from "./component/Logout";

const App = ()=>{
    return <>
    <Router>
        {/* <Link to="/">HOME</Link>
        <Link to="login">LOGIN</Link> */}
        <Switch>


         

            <Protective  component={Home} path="/" exact />
            <Protective  component={About} path="/about" exact />
            <Protective  component={Contact} path="/contact" exact />
            <Protective  component={Logout} path="/logout" exact />
            
            <Route exact path="/login"  >
                <Login />
            </Route>
          
            <Protective  component={Error}  />

        </Switch>


    </Router>
   
    
    </>
}
export default App