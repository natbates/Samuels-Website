import "../styles/footer.css";
import { Link, useLocation } from 'react-router-dom';
import Socials from './Socials'; // assuming you have a Socials component

const Footer = () => {
    const location = useLocation(); // Hook to get the current location/pathname

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
        <footer className="footer">
            <div className="container">
                <div className="links">
                    <a href="#" className="link" onClick={handleHomeClick}>
                        Home
                    </a>
                    <Link to="/planes" className="link">
                        Planes
                    </Link>
                    <Link to="/gallery" className="link">
                        Gallery
                    </Link>
                    <a href="#contact-me" className="link" onClick={() => {handleContactClick();}}>
                        Contact
                    </a>
                </div>
                <Socials />
            </div>
        </footer>
    );
};

export default Footer;
