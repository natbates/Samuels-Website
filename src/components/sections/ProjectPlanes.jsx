import "../../styles/sections/ProjectPlanes.css";
import { useState } from "react";

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
  

const ProjectPlanesSection = () => {
    const [selectedSet, setSelectedSet] = useState("Comet");
    const [showMore, setShowMore] = useState(false);

    return (
      <div id="project-planes" className="home-section">
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

export default ProjectPlanesSection;