import React, { useRef, useEffect } from "react";
import "./BackgroundConnect.css";
import video2 from "../../assets/video-2.mp4";
import posterImage from "../../assets/11.jpg"; 

function BackgroundConnect() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, []);

    return (
        <video
            ref={videoRef}
            className="background"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster={posterImage} 
        >
            <source src={video2} type="video/mp4" />
        </video>
    );
}

export default BackgroundConnect;
