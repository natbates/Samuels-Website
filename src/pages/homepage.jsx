import React, { useState, useEffect } from "react";
import Contact from "../components/Contact";
import MapComponent from "../components/Map";
import Socials from "../components/Socials";
import "../styles/homepage.css";

const TravelLine = () => (
    <div className={`line-container`}>
        <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path 
                d="M0,0 C150,100, 350,200, 500,100 C650,0, 850,150, 1000,100" 
                stroke="black" fill="transparent" strokeWidth="2" 
            />
        </svg>
    </div>
);

const TravelLine2 = () => (
    <div className="line-container">
        <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path 
                d="M0,150 C150,200, 300,50, 500,150 C700,250, 850,100, 1000,50" 
                stroke="black" fill="transparent" strokeWidth="2" 
            />
        </svg>
    </div>
);

const TravelLine3 = () => (
    <div className="line-container">
        <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path 
                d="M0,50 C100,150, 300,0, 450,180 C600,200, 800,50, 1000,120" 
                stroke="black" fill="transparent" strokeWidth="2" 
            />
        </svg>
    </div>
);


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
            <h2>What I do</h2>
            {/* <h1 className="fancy"><span>Skills</span></h1> */}
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
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
};

const imageSets = {
    Comet: [
      { src: "images/planes/comet/1.jpeg", description: "Description of Plane 1A" },
      { src: "images/planes/comet/2.jpeg", description: "Description of Plane 1B" },
      { src: "images/planes/comet/3.jpeg", description: "Description of Plane 1C" },
      { src: "images/planes/comet/4.jpg", description: "Description of Plane 1D" },
    ],
    Hurricane: [
      { src: "images/planes/hurricane/1.jpeg", description: "Description of Plane 2A" },
      { src: "images/planes/hurricane/2.jpeg", description: "Description of Plane 2B" },
      { src: "images/planes/hurricane/3.jpeg", description: "Description of Plane 2C" },
      { src: "images/planes/hurricane/4.jpg", description: "Description of Plane 2D" },
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
    const [showMore, setShowMore] = useState(false);

    return (
      <div id="home-images" className="gallery-container home-section">
        <h2>Project Planes</h2>
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
          {imageSets[selectedSet]
            .slice(0, showMore ? imageSets[selectedSet].length : 2) // Only show 2 if !showMore
            .map((img, index) => (
              <div key={index} className="image-card">
                <img src={img.src} alt={img.title}/>
                <p>{img.description}</p>
                <a href="" target="_blank" className="read-more">See more</a>
              </div>
          ))}
        </div>
        
        <div className="button-show-more-container">
            <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
            </button>
            <div></div>
        </div>

        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
};


const InfoText = () => {
    return (
        <div id="information-text" className="home-section">
            <h2 className="section-title">About Me</h2>
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


const AboutText = () =>
{
    return (
        <div id = "about-shuttleworth" className = "home-section">
            <div></div>
            <div className="about-text-container">
                <h2>Numbers I'm proud of.</h2>
                <p  className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis.</p>
            </div>
            <div className="shuttleworth-stats-container">
                <div className="stats-container">
                    <img src = "svgs/plane.svg"></img>
                    <div className="stats-text">
                        <h3>235</h3>
                        <p>Things Done</p>
                    </div>
                </div>
                <div className="stats-container">
                    <img src = "svgs/plane.svg"></img>
                    <div className="stats-text">
                        <h3>15</h3>
                        <p>Planes Fixed</p>
                    </div>
                </div>
                <div className="stats-container">
                    <img src = "svgs/plane.svg"></img>
                    <div className="stats-text">
                        <h3>800</h3>
                        <p>People</p>
                    </div>
                </div>
                <div className="stats-container">
                    <img src = "svgs/plane.svg"></img>
                    <div className="stats-text">
                        <h3>342</h3>
                        <p>Airshows</p>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
}

const videos = [
    { id: 1, title: "Shuttleworth Race Day", description: "Pr Mk11", src: "images/videos/airshow-1.mp4", link: "https://youtube.com/shorts/VX235w9rB2g?si=vs0c6doVzpogPDki"},
    { id: 2, title: "Duxford Airshow", description: "Lysander", src: "images/videos/airshow-2.mp4", link: "https://www.youtube.com/shorts/gc0VHbvDU5k?si=tt50RooXuPyGNrBb"},
    { id: 3, title: "US Airforce D Day Memorials", description: "C47 Skytrain", src: "images/videos/airshow-3.mp4", link: "https://www.youtube.com/shorts/jSePI_-QajU?si=OlYXIcSqFJv_iqFT"},
    { id: 4, title: "SW Festival of Flight", description: "Vought F4U Corsair", src: "images/videos/airshow-4.mp4", link: "https://youtu.be/nEXcwLzqd-o?si=47N2q1KZYMhvKv0I"}
];

const AirShows = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div id="air-shows" className="home-section">
            <h2>Airshows</h2>
            <div className="video-container">
                {videos
                    .slice(0, showMore ? videos.length : 2) // Show only 2 videos if showMore is false
                    .map((video) => (
                        <div key={video.id} className="video-item">
                            <video autoPlay muted loop>
                                <source src={video.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="video-text">
                                <h2>{video.title}</h2>
                                <p>{video.description}</p>
                                <a href={video.link} target="_blank" className="read-more">See the video</a>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="button-show-more-container">
                <button onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show Less" : "Show More"}
                </button>
                <div></div>
            </div>

            <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
};



const HomePage = () => {
    const images = [
        "/images/sam/IMG_6353.jpeg",
        "/images/sam/IMG_6354.jpeg",
        "/images/sam/IMG_6355.jpeg"
    ];

    useEffect(() => {
        // Select all elements with the 'home-section' or 'line-container' class
        const elements = document.querySelectorAll('.home-section, .line-container');
    
        // Create an Intersection Observer instance
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // If the section is in view, add the 'animate' class
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target); // Optionally, stop observing once it's animated
                }
            });
        }, {
            threshold: 0.2 // The threshold for triggering the observer (50% of the element in view)
        });
    
        // Observe all the selected elements
        elements.forEach(element => {
            observer.observe(element);
        });
    
        // Clean up the observer on component unmount
        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);
    
    return (
        <div id="home-page">
            <div className="top-background-image"></div>

            <div id="intro-section" className="home-section">
                <h1>SAMUEL WEST</h1>
                <div className="text-container">
                    <p>A journey of my work at Shuttleworth</p>
                    <button onClick={() => window.open("https://www.shuttleworth.org/", "_blank")}>
                        See Shuttleworth
                    </button>
                </div>
            </div>

            <InfoText />

            <div className="home-section-container">
                <TravelLine />
                <ImageGallery />
            </div>

            <AboutText />

            <div className="home-section-container">
                <TravelLine2 />
                <AboutMeSection />
            </div>

            <AirShows />

            <div className="home-section-container">
                <TravelLine3 />
                <div id="location" className="home-section">
                    <h2>Location</h2>
                    <MapComponent />
                    <div className="map-location">
                        <h2>Shuttleworth</h2>
                        <div className="address">
                            <p>Alder Drive, Biggleswade, Bedfordshire </p>
                            <p>SG18 9DT</p>
                        </div>
                        <div className="contact">
                            <p>+44 (0)1767 627 927</p>
                            <p>enquiries@shuttleworth.org</p>            
                        </div>
                    </div>
                    <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            <div id="contact-home-page" className="home-section">
                <Contact />
            </div>
        </div>
    );
};

export default HomePage;
