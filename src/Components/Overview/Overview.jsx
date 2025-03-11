import React, { useEffect, useRef, useState } from "react";
import './Overview.css';
import img8 from '../../assets/8.png';
import img9 from '../../assets/9.png';

function Overview() {

    const images = [img8, img9];

    const [imgCount, setImgCount] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setImgCount((prevCount) => (prevCount + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalRef.current);
    }, [images.length]);

    return (
        <div className="overview">
            <h5>Overview</h5>
            <div className="overviewContent">
                <img src={images[imgCount]} className="lambo fade-in" alt="Lamborghini Aventador" />
                <div className="table">
                    <h5>Technical Specification</h5>
                    <table>
                        <tbody>
                            <tr>
                                <td>DISPLACEMENT</td>
                                <td>6.488cm<sup>2</sup> (396.5 cu in)</td>
                            </tr>
                            <tr>
                                <td>MAX POWER</td>
                                <td>740 CV (544 KW) @ 8.400 rpm</td>
                            </tr>
                            <tr>
                                <td>TOP SPEED</td>
                                <td>350 Km/h (217 mph)</td>
                            </tr>
                            <tr>
                                <td>ACCELERATION 0-100 KM/H</td>
                                <td>29s</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Overview;