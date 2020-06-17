import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Container from  'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const NavBar = () => {

    return(
      <nav className="mb-5 navbar navbar-expand-md navbar-light" >
       
      <button aria-controls="navbarNavDropdown" type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed">
        <span className="navbar-toggler-icon"></span></button><div className="navbar-collapse collapse" id="navbarNavDropdown">
          <div className="ml-auto navbar-nav">
        <a href="#about" data-rb-event-key="#about" className="px-2 nav-link">About</a>
        <a href="#skills" data-rb-event-key="#skills" className="px-2 nav-link">Skills</a>
      <a href="#education" data-rb-event-key="#education" className="px-2 nav-link">Education</a>
      <a href="#resume" data-rb-event-key="#resume" className="px-2 nav-link">Resume</a>
      <a href="#contact" data-rb-event-key="#contact" className="px-2 nav-link">Contact</a>
      </div>
      </div>
      </nav>
    )
}


/*
<nav class="fixed-top mb-5 navbar navbar-expand-md navbar-light" style="background-color: transparent;"><a href="#" class="logo navbar-brand"><span>&lt; </span>Matthew Henschke<span> /&gt;</span></a>
<button aria-controls="navbarNavDropdown" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse" id="navbarNavDropdown"><div class="ml-auto navbar-nav">
  <a href="#about" data-rb-event-key="#about" class="px-2 nav-link">About</a><a href="#skills" data-rb-event-key="#skills" class="px-2 nav-link">Skills</a>
<a href="#education" data-rb-event-key="#education" class="px-2 nav-link">Education</a><a href="#resume" data-rb-event-key="#resume" class="px-2 nav-link">Resume</a><a href="#contact" data-rb-event-key="#contact" class="px-2 nav-link">Contact</a></div></div></nav>
*/







/*



     <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse my-2 my-lg-0" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    
  </div>
</nav>

          
  
        </div>



<form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
*/
export default NavBar;