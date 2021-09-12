import React from "react"
import "./Home.css"
import {   useParams } from "react-router-dom"

const Home = ()=>{
    const {id} = useParams()
    console.log(id)
    return(
        <>
        <div className="mainBox">
            <h1>HOME PAGE</h1>
            <p></p>
            <small>simple React Routing</small>
        </div>
        </>
    )

}

export default Home