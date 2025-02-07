import "../styles/navbar.css";
import { useState, useEffect } from "react";
import { Link, useLocation} from "react-router-dom"; // Import Link for routing

const Navbar = () => {
    const [navBarState, setNavBarState] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const location = useLocation();

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

    const handleHomeClick = () => {
        if (location.pathname === '/') {
            // Scroll to the top if we're on the home page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Redirect to the home page if we're on any other page
            window.location.href = '/';
        }
    };

    return (
        <div id="top-nav-bar">
            <div className="logo-container" onClick={handleHomeClick}>
                <img src="svgs/plane.svg" className="logo" />
            </div>

            {!isMobile && (
                <div className={`nav-menu ${navBarState ? "show" : ""}`}>
                    <div className="nav-item" title="Go to Home Section">
                        <Link to="/" onClick={handleHomeClick}>
                            Home
                        </Link>
                    </div>

                    <div className="nav-item" title="Go to Planes">
                        <Link to="/planes">Planes</Link>
                    </div>
                    <div className="nav-item" title="Go to Gallery">
                        <Link to="/gallery">Gallery</Link>
                    </div>
                    <div className="nav-item" title="Go to Contact Section">
                        <Link to="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
            )}


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
                            <li><a>Planes</a></li>
                            <li><a>Gallery</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            }

        </div>
    );
};

export default Navbar;
