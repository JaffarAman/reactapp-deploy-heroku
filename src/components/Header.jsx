import React from "react"
import styles from "./Header.modular.css"
const Header = ()=>{
    return (
        <div className="w-100 p-3 bg-dark text-success align-items-center d-flex justify-content-around">

            <div className="w-25">
                <h4>MY NOTEBOOK</h4>
            </div>

            <div className={`d-flex w-25 justify-content-around navlinks ${styles.navlinks}`}>
                <li>All</li>
                <li>Acive</li>
                <li>Complete</li>
            </div>


        </div>
    ) 
}
export default Header
