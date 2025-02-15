import "../../styles/sections/AboutMe.css";
import Socials from "../Socials";

const AboutMeSection = () => {
    return (
        <div id="about-me" className="home-section">
            <h2>About Me</h2>
            <div className="info-columns">
                <div className="info-section">
                    <h3>Beginnings</h3>
                    <p>My story began in the Hangars of The Shuttleworth Collection, IWM Duxford, and Sywell. The vast array of beautifully preserved aircraft captured a part of me I did not know existed. A part of me that now operates along with a team of the worlds finest aircraft engineers. </p>
                    <div className="info-section">
                        <h3>My Location</h3>
                        <p>I am based at The Shuttleworth Collection, Old Warden, Bedfordshire. See the interactive map at the bottom of this page for a more detailed view.</p>
                    </div>

                </div>

                <div className="info-section">
                    <h3>My Experience</h3>
                    <p>I have hands on experience in maintenance, restoration, and operating over 20 different types of aircraft and over 15 different types of engines, some of these aircraft include Hawker Sea Hurricanes, Spitfires, Racing aircraft such as the DH88 Comet as well as many other famous historical aircraft.</p>
                    <p>I have been an active member in the restoration of Hawker Hind G-AENP, Percival Mewgull G-AEXF, and De Havilland Dragon Rapide G-AGSH </p>
                </div>
                <div className="info-section">
                    <h3>My Goals</h3>
                    <p>My current goal is to complete my 4 year apprenticeship with the Collection and with hard work focus and determination, I will earn my place to continue to work with the worlds finest engineers spearheading the fight to keep historical and vintage aircraft flying. I hope to one day operate as skillfully and professionally as my colleagues.</p>
                    <Socials />
                </div>
            </div>
        </div>
    );
};

export default AboutMeSection;