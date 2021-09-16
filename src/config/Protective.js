import React  from "react";
import {Route , Redirect} from "react-router-dom"
const Protective = ({component:Component , ...rest})=>{
    return(

        <Route  render={(props)=>{
                return localStorage.getItem("user") ?
                <Component {...props} /> : <Redirect  to="/login"/>
        }} />

    )

}
export default Protective