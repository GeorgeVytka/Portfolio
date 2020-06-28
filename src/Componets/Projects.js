import React from 'react';
import { Container, Row, Col, Card,Button } from "react-bootstrap";
import WhatToWear from '../img/WhatToWear.png';
import TriviaRush from '../img/game_logo.png';
import classes from '../Style/Prpject.module.css';

const Projects = () => {


    return(
        <div style={{paddingBottom:"50px"}} id="projects">
            <Container> 
                <h3 className="text-center" style={{paddingBottom: "50px",
            paddingTop:"30px"}}>
                    Projects
                </h3>

        <Row className="justify-content-around">
            <Col lg={4}>
                <Card className="justify-content-around" style={{ width: '18rem' }}>

                <div>
                <Card.Img variant="top" src={WhatToWear}/>
                </div>
               
                <Card.Body>
    <Card.Title className="text-center">What To Wear</Card.Title>
    <span className="bg-danger px-4 m-1 text-white rounded proj-tech">
                  Swift
                </span>
                <span className="bg-dark px-4 m-2 text-white rounded proj-tech">
                  DarkSkyApi
                </span>
    <Card.Text>
    IOS Application that provides the end-user with information based on the current
weather. features include current weather, today’s forecast, apparel suggestions based on the current weather and
weather alerts.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
                </Card>


               
            
                </Col>


                <Col lg={3}>
                <Card className="justify-content-around" style={{ width: '18rem' }}>

                <Card.Img variant="top" src={TriviaRush}  />
                <Card.Body>
                <Card.Title className="text-center">Triva Rush</Card.Title>
                <span className="bg-success px-2 m-1 text-white rounded proj-tech">
                 Java
                </span>
                <span className="bg-danger px-2 m-1 text-white rounded proj-tech">
                  FireBase
                </span>
                <span className="bg-warning px-2 m-1 text-white rounded proj-tech">
                  FireStore
                </span>
    <Card.Text>
    Trivia RUSH is a Trivia App for Android available on the Play Store. The app was built as a Software Engineering class
project. To learn the concepts of Software Engineering and Software Development life cycle
    </Card.Text>
    <Button variant="primary" href="https://github.com/GeorgeVytka/TriviaGames"  target="_blank">Go somewhere</Button>
  </Card.Body>
                </Card>


               
            
                </Col>

              
            </Row>
            </Container>
        </div>
    )
}

export default Projects;