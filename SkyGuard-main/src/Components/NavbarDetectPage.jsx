import React, { useState } from 'react';
import '../Css/NavbarDetectPage.css';
import Logo1 from '../Assets/Images/Logo.png';
import Loader from './Loader'; // Import Loader component
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [showLoader, setShowLoader] = useState(false); // State to control loader visibility

    const handleHomeClick = () => {
        setShowLoader(true); // Show loader when Home button is clicked

        // Simulate loading for 3 seconds
        setTimeout(() => {
            navigate('/'); // Redirect to home page after 3 seconds
            setShowLoader(false); // Hide loader after redirecting
        }, 3000);
    };

    return (
        <div className="navbar">
            <div className="navbarlogo">
                <img src={Logo1} alt="Logo" onClick={handleHomeClick} />
            </div>
            <div className="navbarbuttons">
                <button className="homeButton1" onClick={handleHomeClick}>Home</button>
            </div>
            
            {showLoader && <Loader />}
        </div>
    );
}

export default Navbar;
