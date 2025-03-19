import React, { useEffect, useRef } from "react";
import "./Background.css";
import video1 from "../../assets/video-1.mp4";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";

function Background({ playStatus, heroCount }) {
    const images = [img1, img2, img3];
    const videoRef = useRef(null);

    // Manual lazy load for the video
    useEffect(() => {
        if (playStatus && videoRef.current) {
            videoRef.current.load();
        }
    }, [playStatus]);

    return (
        <>
            {playStatus ? (
                <video
                    ref={videoRef}
                    className="background"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    poster={images[heroCount]} 
                >
                    <source src={video1} type="video/mp4" />
                </video>
            ) : (
                <img
                    src={images[heroCount]}
                    className="background fade-in"
                    alt="Lamborghini Aventador"
                    loading="lazy"
                    decode="async" 
                />
            )}
        </>
    );
}

export default Background;
