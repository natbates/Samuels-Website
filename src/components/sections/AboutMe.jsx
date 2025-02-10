import "../../styles/sections/AboutMe.css";
import Socials from "../Socials";

const AboutMeSection = () => {
    return (
        <div id="about-me" className="home-section">
            <h2>About Me</h2>
            <div className="info-columns">
                <div className="info-section">
                    <h3>My Background</h3>
                    <p>I have always been passionate about aviation and engineering. My journey started with a deep curiosity for how things work, leading me to pursue a career in aircraft maintenance and design.</p>
                    <div className="info-section">
                        <h3>My Location</h3>
                        <p>I have always been passionate about aviation and engineering. spursue a career in aircraft maintenance and design.</p>
                    </div>
                    <Socials />
                </div>

                <div className="info-section">
                    <h3>My Experience</h3>
                    <p>With hands-on experience in various aircraft systems, I have worked on different models, ensuring top-notch performance and safety. My training has provided me with both technical knowledge and problem-solving skills.</p>
                    <p>With hands-on experience in various aircraft systems, ensuring top-notch performance and safety. My training has provided me with both technical knowledge and problem-solving skills.</p>
                </div>
                <div className="info-section">
                    <h3>My Goals</h3>
                    <p>My aspiration is to become a leading aircraft engineer, contributing to innovations in aviation technology. I strive to continually learn and grow, pushing the boundaries of aircraft performance and efficiency.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSection;