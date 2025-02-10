import "../../styles/sections/Skills.css";

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

const SkillsSection = () => {

    return (
        <div id="skills" className="home-section">
            <h2>What I do</h2>
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

export default SkillsSection;