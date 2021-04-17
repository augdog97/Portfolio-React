
import React from 'react';
import firebase from 'firebase';


// Components
import Services from './Services';
import About from './About';
import Video from './Video';

// External imports
import Fade from 'react-reveal';


const Home = () => {
    

    return (
        <div>
                 <div  className=" title-col  text-center">
                     <Fade top>
                        <div className="row">
                    <div className=" col-xs col-sm-10 col-md col-lg col-xl august-1">
                        <h1 id="august-2" className="ml7">
                            <span className="text-wrapper">
                                <span className="letters">August Shah</span>
                            </span>
                        </h1>
                    </div>
                    <div className="col-xs col-sm-10 col-md col-lg col-xl august-3">
                        <h2 id="august-4">Welcome to my web based portfolio.</h2>
                    </div>
                </div>
                     </Fade>
                
                <Fade bottom>
                    <div className="row" id="more-chevron">
                    <div className="col-xs col-sm col-md col-lg col-xl  pr-sm-1 see-col">
                        <a id="see-id" href="#services">
                            <i className="fas fa-chevron-down p-3 bg-white" id="chevron-color" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                </Fade>
                
            </div> 
           
            <Services />
            < About />
            <Video />
        </div>
        
    )
}

export default Home;