import React from 'react';


const NavBar = () => {

  const tempStyle = {
    paddingLeft: "30px"
  }

    return(
      
     


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{
        
          backgroundColor:" #F8F8F8",
          
          borderBottom: "1px solid red"
      
      }} >
     
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav " style={{

            
            paddingLeft:"30px",
            
            
            
        }}>

          <li className="nav-item active " style={{tempStyle}}>
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active"  style={{

            
              paddingLeft:"30px",


              }}>
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item active"  style={{

            
                paddingLeft:"30px",


                }}>
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item active"  style={{

            
                  paddingLeft:"30px",


                  }}>
            <a className="nav-link " href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>



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