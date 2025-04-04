import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Lamborghini logo.png";
import menuIcon from "../../assets/menu.png";

function Navbar() {
    const menu = useRef();
    const icon = useRef();
    const [width, setWidth] = useState(window.innerWidth);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResize = () => setWidth(window.innerWidth);

    // Handles opening and closing the mobile menu
    const handleClick = () => {
        icon.current.classList.toggle("bx-x");
        const menuMobile = menu.current;
        setMenuOpen(!menuOpen);

        if (menuMobile.style.display === "flex") {
            menuMobile.classList.remove("open");
            setTimeout(() => {
                menuMobile.style.display = "none";
            }, 600);
        } else {
            menuMobile.style.display = "flex";
            setTimeout(() => {
                menuMobile.classList.add("open");
            }, 10);
        }
    };

    // Updates window width on resize
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Controls menu visibility based on screen width
    useEffect(() => {
        if (width > 1065) {
            menu.current.style.display = "flex";
            setMenuOpen(false);
        } else {
            menu.current.style.display = "none";
        }
    }, [width]);

    return (
        <>
            <nav className="navBar">
                {/* Logo on the left */}
                <img
                    src={logo}
                    alt="Lamborghini logo"
                    className="navLogo"
                    loading="lazy"
                />

                {/* Centered navigation menu */}
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

                    {/* If width is mobile size, render the button inside the menu */}
                    {width <= 1065 && (
                        <li>
                            <Link className="navBtn" to="/conncet">
                                Connect with Prestige
                            </Link>
                        </li>
                    )}
                </ul>

                {/* Right section: only shows the button if NOT in mobile */}
                {width > 1065 && (
                    <div className="navActions">
                        <Link className="navBtn" to="/conncet">
                            Connect with Prestige
                        </Link>
                    </div>
                )}

                {/* Mobile icon */}
                <img
                    ref={icon}
                    onClick={handleClick}
                    src={menuIcon}
                    alt="menu"
                    className="menuIcon"
                    loading="lazy"
                />
            </nav>

            {/* Overlay that appears behind mobile menu */}
            <div
                className={`overlay ${menuOpen ? "active" : ""}`}
                onClick={handleClick}
            ></div>

            <Outlet />
        </>
    );
}

export default Navbar;
