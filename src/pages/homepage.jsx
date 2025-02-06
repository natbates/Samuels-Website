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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "images/services/air-shows.jpg"
        },
        {
            title: "Engineering Excellence",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "images/services/wtf.jpg"
        },
        {
            title: "Historical Paintwork",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "images/services/paint.jpg"
        }
    ];

    return (
        <div id="about-me" className="home-section">
            <h1 className="fancy"><span>Skills</span></h1>
            <div className="cards-container">
                {sections.map((section, index) => (
                    <div key={index} className="card">
                        <img className="card-image" src={section.image} alt={section.title} />
                        <div className="card-text">
                            <h2>{section.title}</h2>
                            <p>{section.description}</p>
                            <a className="read-more">Learn more</a>
                        </div>
                    </div>
                ))}
            </div>
            <img className = "about-plane" src = "svgs/plane-background.svg"></img>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
};

const imageSets = {
    Comet: [
      { src: "images/planes/comet/1.jpeg", description: "Description of Plane 1A" },
      { src: "images/planes/comet/2.jpeg", description: "Description of Plane 1B" },
      { src: "images/planes/comet/3.jpeg", description: "Description of Plane 1C" },
      { src: "images/planes/comet/4.jpeg", description: "Description of Plane 1D" },
    ],
    Hurricane: [
      { src: "images/planes/hurricane/1.jpeg", description: "Description of Plane 2A" },
      { src: "images/planes/hurricane/2.jpeg", description: "Description of Plane 2B" },
      { src: "images/planes/hurricane/3.jpeg", description: "Description of Plane 2C" },
      { src: "images/planes/hurricane/4.jpeg", description: "Description of Plane 2D" },
    ],
    se5a: [
      { src: "images/planes/se5a/1.jpeg", description: "Description of Plane 3A" },
      { src: "images/planes/se5a/2.jpeg", description: "Description of Plane 3B" },
      { src: "images/planes/se5a/3.jpeg", description: "Description of Plane 3C" },
      { src: "images/planes/se5a/4.jpeg", description: "Description of Plane 3D" },
    ],
};
  

const ImageGallery = () => {
    const [selectedSet, setSelectedSet] = useState("Comet");
  
    return (
      <div id="home-images" className="gallery-container">

        <div className = "about-shuttleworth">
            <div className="logo-image-container">
                <img id = "shuttle-worth-logo" src="svgs/shuttleworth.svg" alt="Shuttleworth" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

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
          <span> 
            <img src="/svgs/star.svg" alt="Star" className="star-icon" />
            <h1>{selectedSet}</h1>
          </span>
        </div>
  
        <div className="image-grid">
          {imageSets[selectedSet].map((img, index) => (
            <div key={index} className="image-card">
              <img src={img.src} alt={img.title} />
              <p>{img.description}</p>
              <a href = "" target = "_blank" className="read-more">See more</a> {/* Send to gallary*/}
            </div>
          ))}
        </div>
        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  };
  

const videos = [
    { id: 1, title: "Shuttleworth Race Day", description: "Pr Mk11", src: "images/videos/airshow-1.mp4", link: "https://youtube.com/shorts/VX235w9rB2g?si=vs0c6doVzpogPDki"},
    { id: 2, title: "Duxford Airshow", description: "Lysander", src: "images/videos/airshow-2.mp4", link: "https://www.youtube.com/shorts/gc0VHbvDU5k?si=tt50RooXuPyGNrBb"},
    { id: 3, title: "US Airforce D Day Memorials", description: "C47 Skytrain", src: "images/videos/airshow-3.mp4", link: "https://www.youtube.com/shorts/jSePI_-QajU?si=OlYXIcSqFJv_iqFT"},
    { id: 4, title: "Shuttleworth Festival of Flight", description: "Vought F4U Corsair", src: "images/videos/airshow-4.mp4", link: "https://youtu.be/nEXcwLzqd-o?si=47N2q1KZYMhvKv0I"}
];

const AirShows = () => {
    return (
        <div id="air-shows" className="home-section">
            <h1 className="fancy"><span>Air Shows</span></h1>
            <div className="video-container">
                {videos.map((video) => (
                    <div key={video.id} className="video-item">
                        <video autoPlay muted loop>
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <h2>{video.title}</h2>
                        <p>{video.description}</p>
                        <a href = {video.link} target = "_blank" className="read-more">See the video</a>
                    </div>
                ))}
            </div>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                        </div>
                    </div>
                </section>
            </div>


            <ImageGallery />

            <AboutMeSection />
            
            <AirShows />

            <div id="location" className="home-section">
                <h1 className="fancy"><span>Location</span></h1>
                <MapComponent />
                <div className="map-location">
                    <p>Shuttleworth</p>
                    <p>Alder Drive</p>
                    <p>Biggleswade</p>
                    <p>Bedfordshire</p>
                    <p>SG18 9DT</p>
                </div>
                <img className = "location-plane" src = "svgs/plane-2.svg"></img>
            </div>

            <div id="contact-home-page">
                <Contact />
            </div>
            
        </div>
    );
};

export default HomePage;