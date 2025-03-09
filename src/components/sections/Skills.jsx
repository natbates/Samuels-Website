import "../../styles/sections/Skills.css";
import { useState } from "react";

const sections = [
    {
        title: "Operating live aircraft",
        description: "My roles in operating aircraft for a show include refuelling, manual handling, hand propping, starting aircraft, steering aircraft, and engineering tasks that pop up amongst so many other tasks",
        image: "images/services/air-shows.jpg",
        hoverImage: "images/services/airshow-2.jpg"
    },
    {
        title: "Maintenance",
        description: "6 Monthly, Annual, 3 Yearly and 9 Yearly inspections are among the many types of maintenance I will undertake on our aircraft",
        image: "images/services/fixed-paint.jpg",
        hoverImage: "images/services/wtf.jpg"
    },
    {
        title: "Historically Accurate Paintwork",
        description: "Painting aircraft parts and structures is one of my skills I practice regularly. For some of these pieces, historical accuracy is paramount",
        image: "images/services/paint.jpg",
        hoverImage: "images/services/fixed-spinny-thing.jpg"
    }
];

const SkillsSection = () => {
    return (
        <div id="skills" className="home-section">
            <h2>What I do</h2>
            <div className="cards-container">
                {sections.map((section, index) => (
                    <SkillCard key={index} section={section} />
                ))}
            </div>
            <p className="about-text">These tasks are only a few of the many other tasks I get to undertake during day-to-day work. If I were to list them all, then this page would be so very long! I am incredibly lucky to work with such highly skilled and attentive people that help me learn and improve my skills within the tasks I do.</p>
        </div>
    );
};

const SkillCard = ({ section }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="card">
            <div 
                className="image-container">
                <img onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="card-image" src={isHovered ? section.hoverImage : section.image} alt={section.title} />
                {!isHovered && <span className="hover-text">Hover to see more</span>}
            </div>
            <div className="card-text">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <a href="https://www.shuttleworth.org/explore/the-collection/" target="_blank" className="read-more">Learn more</a>
            </div>
        </div>
    );
};


export default SkillsSection;
