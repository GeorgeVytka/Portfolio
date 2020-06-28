import React from 'react';

const About = () => {

    return(
        
        <div id="about"className="container"  style={{heigth: "300px",
        paddingBottom: "150px",
        
        
        }}>

            <div className="row ">
           
           
                        
            <div className="col-12 p-0">

            <h2 className="text-center  " style={{
                            marginTop: "80px",
                            textDecoration: "underline"
                        }}>Skills</h2>
            </div>
            </div>
            
            <div className="card-columns" style={{
                marginTop: "80px"
            }}>

            <div className="card" style={{width: "18rem"}}>
           
        
          
            <div className="card-body shadow">
                <h5 className="card-title text-center">Front-End</h5>
                <img src="https://img.icons8.com/ios-filled/80/000000/html-5.png"/>
                <img src="https://img.icons8.com/color/80/000000/css3.png"/>
                <img src="https://img.icons8.com/color/80/000000/javascript.png"/>
                <img src="https://img.icons8.com/plasticine/80/000000/react.png"/>
                <img src="https://img.icons8.com/color/80/000000/bootstrap.png"/>
            </div>
            </div>


            <div className="card shadow" style={{width: "18rem"}}>
            
            <div className="card-body">
                <h5 className="card-title text-center">Back-End</h5>
                <img src="https://img.icons8.com/color/80/000000/c-plus-plus-logo.png"/>
                <img src="https://img.icons8.com/color/80/000000/nodejs.png"/>
                <img src="https://img.icons8.com/color/80/000000/mongodb.png"/>
            </div>
            </div>

            <div className="card shadow"  style={{width: "18rem"}}>
           
            <div className="card-body">
                <h5 className="card-title text-center">Other</h5>
                <img src="https://img.icons8.com/color/80/000000/git.png"/>
                <img src="https://img.icons8.com/color/80/000000/ubuntu--v1.png"/>
                <img src="https://img.icons8.com/fluent/80/000000/swift.png"/>
                <img src="https://img.icons8.com/plasticine/80/000000/android-os.png"/>
            </div>


           
            </div>

            





            </div>








           

         
           
            











            

        </div>





        
    )
}

export default About;