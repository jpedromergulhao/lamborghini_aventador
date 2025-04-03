import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Lamborghini logo.png";
import menuIcon from "../../assets/menu.png"

function Navbar() {

    const menu = useRef();
    const icon = useRef();
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);

    const handleClick = () => {
        icon.current.classList.toggle("bx-x");
        const menuMobile = menu.current;

        if (menuMobile.style.display === 'flex') {
            menuMobile.classList.remove("open");
            setTimeout(() => {
                menuMobile.style.display = 'none';
            }, 600);
        } else {
            menuMobile.style.display = 'flex';
            setTimeout(() => {
                menuMobile.classList.add("open");
            }, 10);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (width > 1065) {
            menu.current.style.display = "flex";
        } else {
            menu.current.style.display = 'none';
        }
    }, [width]);

    return (
        <>
            <nav className="navBar">
                <img src={logo} alt="Lamborghini logo" className="navLogo" typeof="image/png" loading="lazy" />

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

                <img ref={icon} onClick={handleClick} src={menuIcon} alt="menu" typeof="image/png" className="menuIcon" loading="lazy" />
            </nav>

            <Outlet />
        </>
    );
}

export default Navbar;