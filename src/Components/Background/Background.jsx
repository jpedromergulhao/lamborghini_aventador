import React from "react";
import "./Background.css";
import video1 from "../../assets/video-1.mp4";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";

function Background({ playStatus, heroCount }) {
    if (playStatus) {
        return (
            <video className="background" autoPlay loop muted>
                <source src={video1} type="video/mp4"></source>
            </video>
        );
    }

    const images = [img1, img2, img3];
    return <img src={images[heroCount]} className="background fade-in" alt="Lamborghini Aventador" />;
}

export default Background;
