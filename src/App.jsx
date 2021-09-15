import React from "react";
import Home from "./component/Home"
import Login from "./component/Login"
import Protective from "./config/Protective"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App = ()=>{
    return <>
    <Router>
        {/* <Link to="/">HOME</Link>
        <Link to="login">LOGIN</Link> */}
        <Switch>
{/* 
            <Route exact path="/"  >
                <Home />
            </Route> */}

            <Protective exact component={Home} path="/"  />

            <Route exact path="/login"  >
                <Login />
            </Route>
          

        </Switch>


    </Router>
   
    
    </>
}
export default App