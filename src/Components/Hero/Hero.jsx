import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Hero.css";
import pauseIcon from "../../assets/pause_icon.png";
import playIcon from "../../assets/play_icon.png";
import arrowBtn from "../../assets/arrow-right.png";

function Hero({ heroData, heroCount, setHeroCount, setPlayStatus, playStatus }) {

    return (
        <>
            <div className="hero">
                <h1>{heroData[heroCount].text}</h1>
                <Link to="/conncet" className="heroExplore">
                    <p>Experience Exclusivity</p>
                    <img src={arrowBtn} alt="Arrow button" />
                </Link>
                <div className="heroDotPlay">
                    <ul className="heroDots">
                        {[0, 1, 2].map((count) => (
                            <li
                                key={count}
                                onClick={() => setHeroCount(count)}
                                className={heroCount === count ? "heroDot gold" : "heroDot"}
                            ></li>
                        ))}
                    </ul>
                    <div className="heroPlay">
                        <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pauseIcon : playIcon} alt="Play button" />
                        <p>Watch the Thrill Unfold</p>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default Hero;
