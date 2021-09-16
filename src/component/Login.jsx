import React, { useState } from "react";
import "./login.css"
import LoginPic from "../img/login.png"
import { useHistory } from "react-router";
const Login = ()=>{
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState(null)
    const history = useHistory()
    if(localStorage.getItem("user")){
            history.push("/")
    }
    const login = ()=>{
       console.log("hello")
       const obj ={
           email,
           password
       }
       localStorage.setItem("user",JSON.stringify(obj))
       console.log(history.location.pathname)
       history.replace("/")
    }
   console.log(email)
   return <>
        <div className="mainBoxxs">

        <div className="logInBox">

            
            <div className="img">
            <img src={LoginPic}   alt="pic" />
            </div>
            <div className="loginForm">
                <h3>LOGIN</h3>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
                    <button onClick={login}>LOGIN</button>
            </div>


        </div>


        </div>


    </>
}
export default Login