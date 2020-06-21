import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import classes from '../Style/Banner.module.css';


const Banner = () => {
  
  /*

 <div className="row ">

 <div className="col-12 p-0">
 </div>
 </div>


  */

    return(

      <div>  
        <div className={classes.context}>
      <div className="container-fluid">
      <div className="row ">
          <div className="col-12 p-0">
              <div className="jumbotron  text-center m-0  d-flex flex-column justify-content-center" style={{ background: "none"}}>
                  <h1 className="display-4">Hello, I'm <span style={{color: "rgba(182, 1, 1, 0.795)"}}>
                    George Vytka.</span> <br/> 
                  I'm a Full-stack deveopler </h1>
                  
                  <p className="lead" style={{ zIndex: 10}} >
                      <a  className="btn btn-primary btn-inverse btn-lg  " style={{
                        
                        color: "#fff",
                        backgroundColor: "transparent",
                        
                        borderColor: "#2E4C80",
                        
                    
                    }} href="#" role="button">Learn more</a>
                  </p>
              </div>
          </div>
      </div>



      
  </div>





  </div>
<div className={classes.area} >
            <ul className={classes.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >

    </div>

    )
}


export default Banner;