import React, { useState, useEffect } from "react";
import Contact from "../components/Contact";
import MapComponent from "../components/Map";
import Socials from "../components/Socials";
import "../styles/homepage.css";

const TravelLine = ({ mirrored }) => (
    <div className={`line-container ${mirrored ? "mirrored" : ""}`}>
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

const imageSets = {
    plane1: [
      { src: "images/home/1.jpg", description: "Description of Plane 1A" },
      { src: "images/home/2.jpg", description: "Description of Plane 1B" },
      { src: "images/home/3.jpg", description: "Description of Plane 1C" },
      { src: "images/home/4.jpeg", description: "Description of Plane 1D" },
    ],
    plane2: [
      { src: "https://via.placeholder.com/300", description: "Description of Plane 2A" },
      { src: "https://via.placeholder.com/300", description: "Description of Plane 2B" },
      { src: "https://via.placeholder.com/300", description: "Description of Plane 2C" },
      { src: "https://via.placeholder.com/300", description: "Description of Plane 2D" },
    ],
    plane3: [
      { src: "https://via.placeholder.com/300", description: "Description of Plane 3A" },
      { src: "https://via.placeholder.com/300", description: "Description of Plane 3B" },
      { src: "https://via.placeholder.com/300", description: "Description of Plane 3C" },
      { src: "https://via.placeholder.com/300", description: "Description of Plane 3D" },
    ],
};
  

const ImageGallery = () => {
    const [selectedSet, setSelectedSet] = useState("plane1");
  
    return (
      <div id="home-images" className="gallery-container">
        <div className="logo-image-container">
            <img id = "shuttle-worth-logo" src="svgs/shuttleworth.svg" alt="Shuttleworth" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  
        <div className="button-title-container"> 
          <div className="button-group">
            {Object.keys(imageSets).map((set) => (
              <button 
                key={set} 
                onClick={() => setSelectedSet(set)}
                className={selectedSet === set ? "active" : ""} // Add active class
              >
                {set.toUpperCase()}
              </button>
            ))}
          </div>
          <h1>{selectedSet}</h1>
        </div>
  
        <div className="image-grid">
          {imageSets[selectedSet].map((img, index) => (
            <div key={index} className="image-card">
              <img src={img.src} alt={img.title} />
              <p>{img.description}</p>
            </div>
          ))}
        </div>
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
            </div>

            <TravelLine />

            <ImageGallery />

            <TravelLine mirrored={true}/>

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