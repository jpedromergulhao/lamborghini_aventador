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
        )
    } else if (heroCount === 0) {
        return <img src={img1} className="background fade-in" alt="Lamborghini Aventador" type="image/jpg"></img>
    } else if (heroCount === 1) {
        return <img src={img2} className="background fade-in" alt="Lamborghini Aventador" type="image/jpg"></img>
    } else if (heroCount === 2) {
        return <img src={img3} className="background fade-in" alt="Lamborghini Aventador" type="image/jpg"></img>
    }
}

export default Background;
