import "../../styles/sections/ProjectPlanes.css";
import { useState } from "react";

const imageSets = {
    Comet: [
      { src: "images/planes/comet/1.jpeg", description: "DH88 Comet before a display" },
      { src: "images/planes/comet/2.jpeg", description: "Enjoying some fresh air after maintenance" },
      { src: "images/planes/comet/3.jpeg", description: "You cant park that there sir" },
      { src: "images/planes/comet/4.jpg", description: "Refitting the fuel tank cover plate" },
    ],
    Hurricane: [
      { src: "images/planes/hurricane/1.jpeg", description: "Just before beginning maintenance" },
      { src: "images/planes/hurricane/2.jpeg", description: "Catching some shade underneath her wing" },
      { src: "images/planes/hurricane/3.jpeg", description: "Departing IWM Duxford after a static display" },
      { src: "images/planes/hurricane/4.jpg", description: "The oddly spacious cockpit" },
    ],
    se5a: [
      { src: "images/planes/se5a/1.jpeg", description: "Just before an engine run" },
      { src: "images/planes/se5a/2.jpeg", description: "A 'quick' oil change" },
      { src: "images/planes/se5a/3.jpeg", description: "A sunkissed topside" },
      { src: "images/planes/se5a/4.jpeg", description: "Up Up and away" },
    ],
};
  

const ProjectPlanesSection = () => {
    const [selectedSet, setSelectedSet] = useState("Comet");
    const [showMore, setShowMore] = useState(false);

    return (
      <div id="project-planes" className="home-section">
        <h2>Project Aircraft</h2>
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
          A little collection of photographs highlighting a few of the regular sights with the collections aircraft
        </p>
      </div>
    );
};

export default ProjectPlanesSection;