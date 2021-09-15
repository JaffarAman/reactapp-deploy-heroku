import React, { useState } from "react";
import "./login.css"
import LoginPic from "../img/login.png"
import InputField from "./TextField"
import  InputAdornments from "./PasswordTextField"
const Login = ()=>{
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState(null)
   const login = ()=>{
       console.log("hello")
       const obj ={
           email,
           password
       }
       localStorage.setItem("user",JSON.stringify(obj))
   }
   console.log(email)
   return <>
        <div className="mainBox">

        <div className="logInBox">

            
            <div className="img">
            <img src={LoginPic}   alt="pic" />
            </div>
            <div className="loginForm">
                <h3>LOGIN</h3>
                <InputField />
                <InputAdornments />
            </div>


        </div>


        </div>


    </>
}
export default Login