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



const ImageSlider = ({ images }) => {
    const [current, setCurrent] = useState(0);

    const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div id="home-images" className="home-section">
            <h1>Catch me on the runway...</h1>
            <img src={images[current]} alt="Runway moment" />
            <div id="interact-buttons">
                <img src="svgs/down-arrow.svg" className="left" onClick={prevImage} />
                <img src="svgs/down-arrow.svg" className="right" onClick={nextImage} />
            </div>
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
                        <AnimatedText textContent="SAMUEL WEST" Tag="h1" interval={101} />
                        <div className="text-container">
                            <AnimatedText textContent={"A journey of my work at Shuttleworth"} Tag="p" interval={51} />
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

            <ImageSlider images={images} />

            <div id="about-me" className="home-section">
                <h1>What I do</h1>
                <div>
                    <h2>Painting and Planes</h2>
                </div>
            </div>

            <div id="air-shows" className="home-section">
                <h1>Airshows</h1>
            </div>

            <div id="location" className="home-section">
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

            <div id="contact-home-page">
                <Contact />
            </div>
        </div>
    );
};

export default HomePage;
