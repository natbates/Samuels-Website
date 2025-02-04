import "../styles/navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [navBarState, setNavBarState] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    const checkWidth = () => {
      if (window.innerWidth < 1000) {
        setIsMobile(true);
        setNavBarState(false);
      } else {
        setIsMobile(false);
        setMobileNav(false);
      }
    };

    useEffect(() => {
        if (mobileNav) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [mobileNav, isMobile]);
    
  
    useEffect(() => {
      checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => {
        window.removeEventListener("resize", checkWidth);
      };
    }, []);

    return (
        <div id="top-nav-bar">
            <div className="logo-container">
                <img src="svgs/plane.svg" className="logo" />
            </div>

            {!isMobile && 
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
            }

            {isMobile && 
                <div id = "mobile-nav-bar">
                    <input id="page-nav-toggle" class="main-navigation-toggle" type="checkbox" />
                    <label htmlFor="page-nav-toggle">
                    {!mobileNav ? 
                        <img
                            className="icon--menu-toggle"
                            src="svgs/burger.svg" 
                            alt="Open menu"
                            width="40"
                            height="40"
                            onClick={() => {setMobileNav(true)}}
                    />
                    :
                        <img
                            className="icon--menu-toggle"
                            src="svgs/cross.svg" 
                            alt="Open menu"
                            width="40"
                            height="40"
                            onClick={() => {setMobileNav(false)}}
                        >
                        </img>
                    }
                    </label>
                    <nav class="main-navigation">
                        
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Home</a></li>
                            <li><a>Home</a></li>
                        </ul>
                    </nav>
                </div>
            }

        </div>
    );
};

export default Navbar;
