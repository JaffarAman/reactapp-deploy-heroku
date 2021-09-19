import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import Logo from "../img/gitLogo.PNG"
const Header = ({changeColor, icon})=>{
    return(
        <>

<Navbar style={{backgroundColor: "#161B22"}} expand="lg">
  <Navbar.Brand  className="text-white">
    <img src={Logo}  />
    GITHUB Search
    </Navbar.Brand>

    <Nav className="ml-auto darkIcon" >
      <Nav.Link>
      <i class={icon} onClick={()=>changeColor()}></i>
      </Nav.Link>
      </Nav>
    
  
</Navbar>


        </>
    )
}

export default Header