import React from "react";
import './BackgroundConnect.css';
import video2 from '../../assets/video-2.mp4';

function BackgroundConnect() {
    return (
        <video className="background" autoPlay loop muted>
            <source src={video2} type="video/mp4"></source>
        </video>
    )
}

export default BackgroundConnect;
