import React from 'react';
import classes from '../Style/Banner.module.css';

const temp = classes.temp;

const Banner = () => {

    return(
        <div className={classes.backGround}>
          <div className="row d-flex justify-content-center ">
              
              <div className={temp} >
              <h1>Hello, I'm <span className={classes.nameColor} >George Vytka.</span>
              <br/> I'm a Software developer.</h1>
              </div>
          </div>
        </div>
    )
}


export default Banner;