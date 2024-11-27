import React, { useEffect, useState, useRef } from "react";
import NavBar from "../Components/Navbar";
import backgroundVideo from '../Assets/Videos/Video-Background.mp4';
import Loader from "../Components/Loader"; 
import '../Css/LandingPage.css';
import { useNavigate } from "react-router-dom";
import AboutImage from '../Assets/Images/AboutSection.jpg'

const LandingPage = () => {
    const [showTagline, setShowTagline] = useState(false);
    const [showLoader, setShowLoader] = useState(false); 
    const navigate = useNavigate();
    const aboutRef = useRef(null); 

    useEffect(() => {
        setShowTagline(true);
    }, []);

    const handleLaunchAppClick = () => {
        setShowLoader(true); 

       
        setTimeout(() => {
            navigate('/detect'); 
        }, 3000);
    }

    const handleAboutClick = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' }); 
        }
    };

    return (
        <>
            <NavBar onAboutClick={handleAboutClick} />
            <div className={`taglineContainer ${showTagline ? 'show' : ''}`}>
                <div className="tagline">
                    <h1>Fortifying Nations, Safeguarding Sovereignty: Our Commitment to Security Excellence</h1>
                </div>
            </div>
            <div className="videoBackgroundContainer">
                <video autoPlay loop muted className="videoBackground">
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <div className="overlay"></div>
            </div>
            <div className="tryButton" onClick={handleLaunchAppClick}>
                <div className="btn">
                    <span>Try now {">>"}</span>
                </div>
            </div>
           
            {showLoader && <Loader />}

            <div className="About" ref={aboutRef}>
                <div className="aboutHeader"><h1>About Us</h1></div>
                <div className="aboutUsSection">
                <div className="aboutPara">
                    <p>"At SkyGuard, we revolutionize security with cutting-edge technology. Our mission is to safeguard the skies and counter emerging threats. Leveraging advanced algorithms and real-time data analysis, SkyGuard provides unparalleled protection against unauthorized drone activity."
                    </p>
                </div>
                <div className="droneImage"><img src={AboutImage} alt="About" /></div>
                </div>
                <br /><br />
                <div className="creators">
                <div className="creatorHeading">
                    <p>Behind the Code: Meet the Creators of SkyGuard</p>
                </div>
                <div className="creatorsProfile">
                        <div className="p1">
                                <div class="card-content">
                                     <div class="default-info">
                                                    <p>Priyanshu Sharma</p>
                                     </div>
                                <div class="hover-info">
                                        <p>LinkedIn: <a href="https://www.linkedin.com/in/priyanshu-sharma-0015b522a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">Priyanshu Sharma</a></p>
                                        <p>Email : priyanshush57@gmail.com</p>
                                </div>
                                </div>
                        </div>
                        <div className="p2">
                                <div class="card-content">
                                     <div class="default-info">
                                                    <p>Prince Tripathi</p>
                                     </div>
                                <div class="hover-info">
                                        <p>LinkedIn: <a href="https://www.linkedin.com/in/prince-tripathi-77b355225" target="_blank">Prince Tripathi</a></p>
                                        <p>Email : triprince73@gmail.com</p>
                                </div>
                                </div>
                        </div>
                        <div className="p3">
                                <div class="card-content">
                                     <div class="default-info">
                                                    <p>Rudra Ranjan</p>
                                     </div>
                                <div class="hover-info">
                                        <p>LinkedIn: <a href=" https://www.linkedin.com/in/rudra-ranjan-5b753a223" target="_blank">Rudra Ranjan</a></p>
                                        <p>Email :rudraranjan26@gmail.com</p>
                                </div>
                                </div>
                        </div>
                        <div className="p4">
                                <div class="card-content">
                                     <div class="default-info">
                                                    <p>Avikshit Chanda</p>
                                     </div>
                                    
                                <div class="hover-info">
                                <p>LinkedIn: <a href="https://www.linkedin.com/in/avikshitchanda" target="_blank"> Avikshit Chanda </a></p>
                                        <p>Email : avikshitchanda@gmail.com</p>
                                </div>
                                </div>  
                        </div>
                </div>
                </div>
            </div>
            <br />
            <div className="footer"><p>&copy; 2024  SkyGuard. All Rights Reserved.</p></div>
            
        </>
    );
}

export default LandingPage;
