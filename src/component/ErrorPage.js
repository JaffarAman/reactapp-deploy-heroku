import React from "react"
import Pic from "../img/download (1).png"
const Error = ({msg , color})=>{
    return(
        <>

        <div className="errorPage">

            <img src={Pic} width="200px" />
            <p style={{color:color}}>{msg}</p>
        </div>

        </>
    )
}

export default Error
