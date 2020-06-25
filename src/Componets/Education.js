import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Education = () =>{

return(
    <div className="mt-5">
        <Container>
        <h2 className="text-center pb-5">
          Education
          
        </h2>

        <div>
            <h4 className=" ">
                College of Staten Island
                <span className="float-md-right pl-3">2015-2020</span>
          </h4>
         
          <h2 className="text-center pb-5">
          Degree
          
        </h2>

        <h5>
        Bachelor's of Science
        <span className="float-md-right pl-3">2018-2020</span>
        </h5>
        <h6>
            computer science
        </h6>
       
        <h5>
        Associate in Applied Science
        <span className="float-md-right pl-3">2015-2028</span>
        </h5>     
        <h6>
            computer science
        </h6>  
        </div>

        </Container>
    </div>
)

}


export default Education;