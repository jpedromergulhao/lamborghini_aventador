import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Lamborghini logo.png";

function Navbar() {
    return (
        <>
            <nav className="navBar">
                <img src={logo} alt="Lamborghini logo" className="navLogo" typeof="image/png"></img>
                <ul className="navMenu">
                    <li>
                        <Link to="/">The Drive Begins</Link>
                    </li>
                    <li>
                        <Link to="/discoverExcellence">Discover Excellence</Link>
                    </li>
                    <li>
                        <Link to="/legacy">Our Legacy</Link>
                    </li>
                </ul>
                <Link className="navBtn" to="/conncet">Connect with Prestige</Link>
            </nav>

            <Outlet />
        </>
    );
}

export default Navbar;