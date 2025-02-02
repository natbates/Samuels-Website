import "../styles/navbar.css";
import { useState } from "react";

const Navbar = () => {
    const [navBarState, setNavBarState] = useState(false);

    return (
        <div id="top-nav-bar">
            <div className="logo-container">
                <img src="svgs/plane.svg" className="logo" />
            </div>

            <div 
                className="dropdown"
                onMouseEnter={() => setNavBarState(true)} 
                onMouseLeave={() => setNavBarState(false)}
            >
                <img 
                    src="svgs/down-arrow.svg" 
                    className={`dropdown-arrow ${navBarState ? "rotated" : ""}`} 
                />
                <div className={`nav-menu ${navBarState ? "show" : ""}`}>
                    <ul>Home</ul>
                    <ul>About</ul>
                    <ul>Services</ul>
                    <ul>Contact</ul>
                    <ul>Blog</ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
