import React from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './fontawesome';

const About = () => {

    return(
        
        <div className="container" >

            <div className="row ">
           
           
                        
            <div className="col-12 p-0">

            <h2 className="text-center  d-flex flex-column justify-content-center" style={{
                            marginTop: "80px",
                            textDecoration: "underline"
                        }}>About</h2>
            </div>
            </div>
            
            <div className="card-columns" style={{
                marginTop: "80px"
            }}>

            <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..." />
            <FontAwesomeIcon icon={faHome} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>


            <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>


            </div>

        </div>
    )
}

export default About;