import React from "react";
import "./Hero.css";
import pauseIcon from "../../assets/pause_icon.png";
import playIcon from "../../assets/play_icon.png";
import arrowBtn from "../../assets/arrow-gold.png";


function Hero({ heroData, setHeroData, heroCount, setHeroCount, setPlayStatus, playStatus }) {

    return (
        <div className="hero">
            <div className="heroText">
                <h1>{heroData.text}</h1>
            </div>
            <div className="heroExplore">
                <p>Experience Exclusivity</p>
                <img src={arrowBtn} alt="Arrow Button" />
            </div>
            <div className="heroDotPlay">
                <ul className="heroDots">
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "heroDot gold" : "heroDot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "heroDot gold" : "heroDot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "heroDot gold" : "heroDot"}></li>
                </ul>
                <div className="heroPlay">
                    <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pauseIcon : playIcon} alt=""></img>
                    <p>Watch the Thrill Unfold</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;