import React, { useState, useEffect } from "react";
import Contact from "../components/Contact";
import MapComponent from "../components/Map";
import Socials from "../components/Socials";
import "../styles/homepage.css";

const TravelLine = () => (
    <div className="line-container">
        <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path 
                d="M0,0 C150,100, 350,200, 500,100 C650,0, 850,150, 1000,100" 
                stroke="black" fill="transparent" strokeWidth="2" 
            />
        </svg>
    </div>
);

const AnimatedText = ({ textContent, Tag = 'h1', interval = 101 }) => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!textContent) return;

        const intervalId = setInterval(() => {
            if (index < textContent.length) {
                setText((prev) => prev + textContent[index]);
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(intervalId);
            }
        }, interval);

        return () => clearInterval(intervalId); 
    }, [index, textContent]);

    return <Tag id="animated-text">{text}</Tag>;
};

const AboutMeSection = () => {
    const sections = [
        {
            title: "Assisting in Airshows",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: "images/services/air-shows.jpg"
        },
        {
            title: "Engineering Excellence",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: "images/services/wtf.jpg"
        },
        {
            title: "Historically Accurate Paintwork",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: "images/services/paint.jpg"
        }
    ];

    return (
        <div id="about-me" className="home-section">
            <Title text = {"What I can do"} />
            {sections.map((section, index) => (
                <div key={index} className={`about-section ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <img className="section-image" src={section.image} alt={section.title} />
                    <div className="section-text">
                        <h2>{section.title}</h2>
                        <p>{section.description}</p>
                    </div>
                </div>
            ))}
            <div className="bottom-curve"></div>
        </div>
    );
};


const Title = ({text}) => {
    return (
        <div className="heading-container">
            <img src="/svgs/star.svg" alt="Star" className="star-icon" />
            <AnimatedText textContent={text} tag = "h1" interval={"100"}/>
            <img src="/svgs/star.svg" alt="Star" className="star-icon" />
        </div>
    );
};

const HomePage = () => {
    const images = [
        "/images/sam/IMG_6353.jpeg",
        "/images/sam/IMG_6354.jpeg",
        "/images/sam/IMG_6355.jpeg"
    ];

    return (
        <div id="home-page">
            <div className="intro-section">
                <section>
                    <div className="shuttleworth-container">
                        <AnimatedText textContent="SAMUEL WEST" Tag="h1" interval={100} />
                        <div className="text-container">
                            <AnimatedText textContent={"A journey of my work at Shuttleworth"} Tag="p" interval={31} />
                            <button onClick={() => window.open("https://www.shuttleworth.org/", "_blank")}>
                                See Shuttleworth
                            </button>
                            <div className="home-socials-container">
                                <Socials />
                            </div>
                        </div>
                    </div>
                </section>
                <img src="svgs/shuttleworth.svg" alt="Shuttleworth" />
            </div>

            <TravelLine />

            <div id="home-images" className="home-section">
            </div>

            <AboutMeSection />
            
            <div id="air-shows" className="home-section">
                <Title text={"Airshows"} />
            </div>

            <div id="location" className="home-section">
                <div className="top-curve"></div>
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

            <TravelLine />

            <div id="contact-home-page">
                <Contact />
            </div>
        </div>
    );
};

export default HomePage;
