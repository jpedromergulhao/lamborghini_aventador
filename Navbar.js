import React from "react";
import "./Navbar.css";
import logo from "../../assets/lamborghini-logo-white-942614047.png";

function Navbar() {
    return (
        <div className="navBar">
            <img src={logo} alt="Lamborghini logo" className="navLogo" typeof="image/png"></img>
            <ul className="navMenu">
                <li>The Drive Begins</li>
                <li>Discover Excellence</li>
                <li>Our Legacy</li>
                <li className="navContent">Connect with Prestige</li>
            </ul>

        </div>
    );
}

export default Navbar;