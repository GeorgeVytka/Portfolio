import React from 'react';
import logo from './logo.svg';
import BannerContainer from './Componets/BannerContainer';
import NavBar from './Componets/NavBar';
import About from './Componets/About';
import Resume from './Componets/Resume';
import Education from './Componets/Education';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';


import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div >
     
    <BannerContainer />
    <NavBar />
    <About />
    <Resume />
   <Education />
    </div>
  );
}

export default App;
