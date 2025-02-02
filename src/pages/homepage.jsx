import Contact from "../components/Contact";
import MapComponent from "../components/Map";
import Socials from "../components/Socials";
import "../styles/homepage.css";


const TravelLine = ({ top }) => { 
    return (
        <div className="line-container" style={{top: top}}>
            <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <path d="M0,0 C150,100, 350,200, 500,100 C650,0, 850,150, 1000,100" 
                      stroke="black" fill="transparent" strokeWidth="2" />
            </svg>
        </div>
    );
}

const HomePage = () =>
{
    return(
        <div id = "home-page">
            
            <div className="divider-section">
                <section>
                    <p>Apprentice Aeronautical Engineer</p>
                    <h1>SAMUEL WEST</h1>
                    <Socials />
                </section>
                <section>
                    <div className="shuttleworth-container">
                        <img src = "svgs/shuttleworth.svg"></img>
                        <div className="text-container">
                            <p>A journey of my work at Shuttleworth</p>
                            <button onClick={() => window.open("https://www.shuttleworth.org/", "_blank")}>
                                See Shuttleworth
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <div id = "home-images" className="home-section">
                <h1>Catch me on the runway...</h1>
                <img src = "/images/sam/IMG_6353.jpeg"></img>
                <div id = "interact-buttons">
                    <img src = "svgs/down-arrow.svg" className="left"></img>
                    <img src = "svgs/down-arrow.svg" className="right"></img>
                </div>
            </div>

            <div id = "about-me" className="home-section"> 
                <h1>What I do</h1>
                <div>
                    <h2>Painting and Plane</h2>
                </div>
            </div>

            <div id = "air-shows" className="home-section"> 
                <h1>Airshows</h1>
            </div>

            <div id = "location" className="home-section">
                <h1>Where I do it</h1>
                <MapComponent />
                <div className="map-location">
                    <p>Shuttleworth</p>
                    <p>Alder Drive</p>
                    <p>Biggleswade</p>
                    <p>Bedfordshire</p>
                    <p>SG18 9DT</p>
                </div>

            </div>

            <div id = "contact-home-page">
                <Contact />
            </div>

        </div>
    );
}

export default HomePage;