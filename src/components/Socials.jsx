import "../styles/socialContainer.css";

const Socials = () => {
    return (
        <div className="socials-container">
            {/* Facebook Link */}
            <a href="https://www.facebook.com/share/15FSF4sYrt/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <img src="./svgs/socials/facebook.svg" alt="Facebook" />
            </a>

            {/* Instagram Link */}
            <a href="https://www.instagram.com/sam.__.west?igsh=MTM0aGtucjRmNnhqZw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <img src="./svgs/socials/insta.svg" alt="Instagram" />
            </a>

            {/* LinkedIn Link */}
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <img src="./svgs/socials/linkedin.svg" alt="LinkedIn" />
            </a>
        </div>
    );
}

export default Socials;
