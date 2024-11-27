import React from "react";
import loaderGif from '../Assets/Videos/radar.gif'; 
import '../Css/Loader.css'; 

const Loader = () => {
    return (
        <div className="loaderContainer">
            <div className="loaderBackground"></div>
            <img src={loaderGif} alt="Loader" className="loader" />
        </div>
    );
}

export default Loader;
