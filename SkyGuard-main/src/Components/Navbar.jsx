import React, { useState } from 'react';
import '../Css/NavBar.css';
import Logo from '../Assets/Images/Logo.png';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onAboutClick }) => {
    const navigate = useNavigate();
    const [showLoader, setShowLoader] = useState(false);

    const handleHomeClick = () => {
        setShowLoader(true); 

        
        setTimeout(() => {
            window.location.reload(); 
        }, 2000);
    };

    const handleAboutClick = () => {
        if (typeof onAboutClick === 'function') {
            onAboutClick();
        }
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="Logo" onClick={handleHomeClick} />
            </div>
            <div className="navbar-buttons">
                <div className="homeButton" onClick={handleHomeClick}>Home</div>
                <div className="aboutButton" onClick={handleAboutClick}>About</div>
            </div>
            {showLoader && <Loader />}
        </div>
    );
}

export default Navbar;
