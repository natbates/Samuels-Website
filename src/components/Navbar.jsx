import "../styles/navbar.css";
import { useState, useEffect } from "react";
import { Link, useLocation} from "react-router-dom"; // Import Link for routing

const Navbar = () => {
    const [active, setActive] = useState(false);
    const location = useLocation();

    const handleHomeClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.location.href = '/';
        }
        setActive(false); 
    };

    const handleNavLinkClick = () => {
        setActive(false); 
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (active && !document.getElementById("mobile-nav-bar")?.contains(event.target)) {
                setActive(false);
            }
        };
    
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [active]);
    

    return (
        <div id="top-nav-bar">
            <div className="logo-container" onClick={handleHomeClick}>
                <img src="svgs/plane.svg" className="logo" />
            </div>

            <div id = "mobile-nav-bar">
                <input disabled id="page-nav-toggle" className="main-navigation-toggle" />
                <label htmlFor="page-nav-toggle" onClick={() => setActive(!active)}>
                {!active ? (
                    <img
                        className="icon--menu-toggle"
                        src="svgs/burger.svg"
                        alt="Open menu"
                        width="40"
                        height="40"
                    />
                ) : (
                    <img
                        className="icon--menu-toggle"
                        src="svgs/cross.svg"
                        alt="Close menu"
                        width="40"
                        height="40"
                    />
                    )}
                </label>

    
                <nav className={`main-navigation ${active ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
                    <ul>
                        <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
                        <li><Link to="/gallery" onClick={handleNavLinkClick}>Gallery</Link></li>
                        <li><Link to="/contact" onClick={handleNavLinkClick}>Contact</Link></li>
                        <li><Link to="/login" onClick={handleNavLinkClick}>Log in</Link></li>
                    </ul>
                </nav>
                

            </div>
            

        </div>
    );
};

export default Navbar;
