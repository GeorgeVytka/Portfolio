import React from "react";
import { Container,Nav, Card,Row, Col,Button } from "react-bootstrap";
import linkedin from '../img/linkedin.png'

const Contact = () => {
  return (
    <div id="contact" className="mt-5" style={{
      paddingBottom: "45px",
      paddingTop:"45px",
      borderTop:"5px solid rgba(182, 1, 1, 0.795)",
      backgroundColor: " #252934"}}>



      <Container>

      

<Row className="justify-content-center"> 


<Card className="shadow" style={{ width: '30rem' }}>
  <Card.Header>
    
  </Card.Header>
  <Card.Body>
    <Card.Title className="text-center">Contact Me!</Card.Title>
    
    <Nav variant=" justify-content-center" >
      <Nav.Item >
        <Nav.Link href="https://github.com/GeorgeVytka"  target="_blank" ><img src="https://img.icons8.com/fluent/64/000000/github.png" alt="github logo"/></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link"  target="_blank"><img src="https://img.icons8.com/ios-filled/64/000000/email.png" alt="email logo"/></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://www.linkedin.com/in/george-vytka" target="_blank"> 
        <img src={linkedin}  alt="linkenid logo"/>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Body>
</Card>
 
 
</Row>

<Row className="justify-content" style={{paddingTop:"25px"}}>
  <Col className="text-center">
  <Button variant="info" href="#banner">^</Button>
  </Col>
</Row>
     
      </Container>
      
    </div>
  );
};

export default Contact;


/*

<Card style={{ width: '20rem' }}>
<Card.Body>

<Card.Subtitle className="mb-2 text-muted text-center">Conteact Me</Card.Subtitle>
<Card.Text>

 <img src="https://img.icons8.com/fluent/64/000000/github.png"/>
 <img src="https://img.icons8.com/ios-filled/64/000000/email.png"/>
 <img src="linkedin.png"/>
 
</Card.Text>

</Card.Body>
</Card>

*/