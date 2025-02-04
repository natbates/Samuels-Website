import "../styles/footer.css";
import Socials from "./Socials";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="links">
                    <a href="#" className="link">Home</a>
                    <a href="#" className="link">Home</a>
                    <a href="#" className="link">Home</a>
                </div>
                <Socials />
            </div>
        </footer>
    );
};

export default Footer;
