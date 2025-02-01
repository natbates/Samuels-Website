import "../styles/navbar.css";
import { useState } from "react";

const Navbar = () =>
{

    const [navBarState, setNavBarState] = useState(false);

    return (
        <div id="top-nav-bar">
            <div className="logo-container">
                <img src = "svgs/plane.svg" className="logo"></img>
            </div>
            <img src = "svgs/down-arrow.svg"></img>
        </div>
    )
}

export default Navbar;