import React, { useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Lamborghini logo.png";
import menuIcon from "../../assets/menu.png"

function Navbar() {

    const menu = useRef();
    const icon = useRef();
    const handleClick = () => {
        icon.current.classList.toggle("bx-x");
        menu.current.classList.toggle("open");
    }

    return (
        <>
            <nav className="navBar">
                <img src={logo} alt="Lamborghini logo" className="navLogo" typeof="image/png" />
                <ul className="navMenu" ref={menu}>
                    <li>
                        <Link to="/">The Drive Begins</Link>
                    </li>
                    <li>
                        <Link to="/discoverExcellence">Discover Excellence</Link>
                    </li>
                    <li>
                        <Link to="/legacy">Our Legacy</Link>
                    </li>
                    <li>
                        <Link className="navBtn" to="/conncet">Connect with Prestige</Link>
                    </li>
                </ul>

                <img ref={icon} onClick={handleClick} src={menuIcon} alt="menu" typeof="image/png" className="menuIcon" />
            </nav>

            <Outlet />
        </>
    );
}

export default Navbar;