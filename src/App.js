import React from 'react';
import logo from './logo.svg';
import BannerContainer from './Componets/BannerContainer';
import NavBar from './Componets/NavBar';
import About from './Componets/About';
import './App.css';
import './fontawesome';


import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div >
     
    <BannerContainer />
    <NavBar />
    <About />
   
    </div>
  );
}

export default App;
