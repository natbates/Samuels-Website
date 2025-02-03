import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="text">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <div className="links">
                    <a href="#" className="link">Privacy Policy</a>
                    <a href="#" className="link">Terms of Service</a>
                    <a href="#" className="link">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
