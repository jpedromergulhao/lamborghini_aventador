import React from "react";
import "./Main.css"
import lambo80 from '../../assets/5.jpg';
import lambo00 from '../../assets/6.jpg';
import lamboCurr from '../../assets/7.jpg';
import Overview from "../Overview/Overview";

function Main() {
    return (
        <main>
            <div className="topMain">
                <div className="imgSet">
                    <div>
                        <div className="imgBorder">
                            <img src={lambo80} alt="Lamborghini 80's" loading="lazy" />
                        </div>
                        <p>1980</p>
                    </div>
                    <div>
                        <div className="imgBorder">
                            <img src={lambo00} alt="Lamborghini 00's" loading="lazy" />
                        </div>
                        <p>2000</p>
                    </div>
                    <div>
                        <div className="imgBorder">
                            <img src={lamboCurr} alt="Current Lamborghini" loading="lazy" />
                        </div>
                        <p>Nowadays</p>
                    </div>
                </div>
            </div>
            <Overview />
        </main>
    )
}

export default Main;