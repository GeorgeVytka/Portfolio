import React from 'react';
import { Navbar, Nav,NavDropdown } from "react-bootstrap";

const NavBar = () => {

  const tempStyle = {
    paddingLeft: "30px"
  }

    return(
      

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{borderBottom:"5px solid rgba(182, 1, 1, 0.795)"}}>
  <Navbar.Brand href="#home"><img src="https://img.icons8.com/wired/64/000000/home-office.png"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  href="#features" style={{color:"white",
        hover:"red"}} className="pl-5">Home</Nav.Link>
      <Nav.Link href="#about" style={{color:"white"}} className="pl-5">Skills</Nav.Link>
      <Nav.Link href="#resume" style={{color:"white"}} className="pl-5">Resume</Nav.Link>
      <Nav.Link href="#projects" style={{color:"white"}} className="pl-5">Projects</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
     
/*

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" toggleNavKey={1}  style={{
        
          backgroundColor:" #F8F8F8",
          
          borderBottom: "4px solid red"
      
      }} >
     
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav " style={{

            
            paddingLeft:"30px",
            
            
            
        }}>

          <li className="nav-item active " style={{tempStyle}}>
            <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active"  style={{

            
              paddingLeft:"30px",


              }}>
            <a className="nav-link" href="#about">Skills</a>
          </li>
          <li className="nav-item active"  style={{

            
                paddingLeft:"30px",


                }}>
            <a className="nav-link" href="#resume">Resume</a>
          </li>
          <li className="nav-item active"  style={{

            
                  paddingLeft:"30px",


                  }}>
            <a className="nav-link " href="#projects">Projects</a>
          </li>
          <li className="nav-item active"  style={{

            
paddingLeft:"30px",


}}>
<a className="nav-link " href="#contact">Contact</a>
</li>
        </ul>
      </div>
    </nav>


*/
    )
}

/*
<nav class="navbar navbar-expand-sm fixed-top navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">Tip Calculator</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar1">
            <ul class="navbar-nav nav nav-fill w-100">
                <li class="nav-item">
                    <a class="nav-link active" href="#Intro">Info</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Calc">Calculator</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
            </ul>
        </div>
    </div>
</nav>


*/
export default NavBar;