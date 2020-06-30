import React from 'react';

const About = () => {

    return(
        
        <div id="about"className="container"  style={{heigth: "300px",
        paddingBottom: "150px",
        
        
        
        }}>

            <div className="row  " >
           
           
                        
            <div className="col-12 p-0">

            <h2 className="text-center  " style={{
                            marginTop: "80px",
                            textDecoration: "underline"
                        }}>Skills</h2>
            </div>
            </div>
            
            <div className="card-columns " style={{
                marginTop: "80px",
                paddingLeft: "45px"
            }}>

            <div className="card" style={{width: "18rem"}}>
           
        
          
            <div className="card-body shadow">
                <h5 className="card-title text-center">Front-End</h5>
                <img src="https://img.icons8.com/ios-filled/80/000000/html-5.png" alt="html logo"/>
                <img src="https://img.icons8.com/color/80/000000/css3.png" alt="css logo"/>
                <img src="https://img.icons8.com/color/80/000000/javascript.png" alt="javascript logo"/>
                <img src="https://img.icons8.com/plasticine/80/000000/react.png" alt="react logo"/>
                <img src="https://img.icons8.com/color/80/000000/bootstrap.png" alt="bootshrap logo"/>
            </div>
            </div>


            <div className="card shadow" style={{width: "18rem"}}>
            
            <div className="card-body">
                <h5 className="card-title text-center">Back-End</h5>
                <img src="https://img.icons8.com/color/80/000000/c-plus-plus-logo.png " alt=" c++ logo"/>
                <img src="https://img.icons8.com/color/80/000000/nodejs.png" alt=" node.js logo"/>
                <img src="https://img.icons8.com/color/80/000000/mongodb.png" alt="mongodb logo"/>
            </div>
            </div>

            <div className="card shadow"  style={{width: "18rem"}}>
           
            <div className="card-body">
                <h5 className="card-title text-center">Other</h5>
                <img src="https://img.icons8.com/color/80/000000/git.png" alt=" git logo"/>
                <img src="https://img.icons8.com/color/80/000000/ubuntu--v1.png" alt="ubuntu logo"/>
                <img src="https://img.icons8.com/fluent/80/000000/swift.png"  alt="swfit logo"/>
                <img src="https://img.icons8.com/plasticine/80/000000/android-os.png" alt="android logo"/>
            </div>


           
            </div>

            





            </div>








           

         
           
            











            

        </div>





        
    )
}

export default About;