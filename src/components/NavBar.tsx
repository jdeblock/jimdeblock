import * as React from 'react';
import { Link, useLocation } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    const location = useLocation();

    return (
        <>
            <div className="header">
                <div className="headerContainer">
                    <h1>Jim DeBlock</h1>
                </div>
            </div>
            <nav>
                <Link to="/" className={location.pathname === "/" ? 'current': ''}>Home</Link>
                <Link to="/projects" className={location.pathname.includes("/projects") ? 'current': ''}>Projects</Link>
                <Link to="/contact" className={location.pathname === "/contact" ? 'current': ''}>Contact</Link>
            </nav>
        </>
    )
};

export default NavBar;
