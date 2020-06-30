import React from 'react';
import Embed from 'react-embed';
import { Container } from "react-bootstrap";
import pdf from "../items/resume_George_Vytka_1.3.pdf";
//TODO- get maybe the iframe working


const Resume = () => {
    const iframe =' <iframe src="../items/resume_George_Vytka_1.3.pdf" width="100%" height="500px"></iframe>';

    return(
        
      <div id="resume" style={{
        
        
        
        paddingBottom: "100px"
      }}>
      <Container>
        <h2 className="text-center py-5 " style={{
           textDecoration: "underline"
        }} >
          Resume
         
        </h2>
        <embed className="shadow"
          src={pdf}
          width="100%"
          height="800px"
          internalinstanceid="5"
        />
      </Container>
      <hr />
    </div>
    )

   
}

export default Resume;