import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import '../Css/DroneDetectPage.css';
import Navbar1 from '../Components/NavbarDetectPage';
import droneSound from '../Assets/alert.mp3';

const Detect = () => {
    const [videoStream, setVideoStream] = useState(null);
    const [capturedFrame, setCapturedFrame] = useState(null);
    const [detectedMessages, setDetectedMessages] = useState([]);
    const videoRef = useRef();
    const [webcamActive, setWebcamActive] = useState(false);

    const audioRef = useRef();

    useEffect(() => {
        const sendFrame = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                setVideoStream(stream);
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    setWebcamActive(true);
                }
            } catch (error) {
                console.error("An error occurred: ", error);
            }
        };

        sendFrame();

        
        return () => {
            if (videoStream) {
                videoStream.getTracks().forEach(track => track.stop());
                setWebcamActive(false);
            }
        };
    }, []);

    useEffect(() => {
        const captureInterval = setInterval(captureFrame, 1000);

        return () => clearInterval(captureInterval);
    }, []);

    const captureFrame = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const video = videoRef.current;
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = canvas.toDataURL('image/jpeg');
            setCapturedFrame(imageData);
            sendFrameToBackend(imageData);
        }
    };

    const sendFrameToBackend = async (imageData) => {
        try {
            const response = await axios.post('https://sky-guard-backend.vercel.app/process_frame', { frameData: imageData });
            const detectedObjects = response.data.detected_objects;
            const droneDetected = detectedObjects.includes('Drone detected!');
            if (droneDetected) {
                setDetectedMessages(prevMessages => [...prevMessages, 'Drone detected']);
                audioRef.current.play();
            }
        } catch (error) {
            console.error('Error sending frame to backend:', error);
        }
    };

    return (
        <>
            <div className="navbar"><Navbar1 /></div>
            <audio ref={audioRef} src={droneSound} />
            <div id="container">
                <div id="video-container" style={{ backgroundColor: webcamActive ? 'black' : '#FEFBF6' }}>
                    <video ref={videoRef} width="640" height="480" autoPlay></video>
                </div>
                <div id="message-container">
                    <div className="messageHeader"><h2>Live Alert Messages</h2></div>
                    {detectedMessages.map((message, index) => (
                        <div key={index} className="message">
                            {message}
                        </div>
                    ))}
                </div>
            </div>
            <div className="freeSpace"></div>
            <div className="footer"><p>&copy; 2024  SkyGuard. All Rights Reserved.</p></div>
        </>
    );
};

export default Detect;
