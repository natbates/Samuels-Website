import "../../styles/sections/Skills.css";

const sections = [
    {
        title: "Operating live aircraft",
        description: "My roles in operating aircraft for a show include refuelling, manual handling, hand propping, starting aircraft, steering aircraft, and engineering tasks that pop up amongst so many other tasks",
        image: "images/services/air-shows.jpg"
    },
    {
        title: "Maintenance",
        description: "6 Monthly, Annual, 3 Yearly and 9 Yearly inspections are among the many types of maintenance I will undertake on our aircraft",
        image: "images/services/wtf.jpg"
    },
    {
        title: "Historically Accurate Paintwork",
        description: "Painting aircraft parts and structures is one of my skills I practice regularly. For some of these pieces, historical accuracy is paramount",
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
                            <a href = "https://www.shuttleworth.org/explore/the-collection/" target="_blank" className="read-more">Learn more</a>
                        </div>
                    </div>
                ))}
            </div>
            <p className="about-text">These tasks are only a few of the many other tasks I get to undertake during day to day work. If i was to list them all then this page would be so very long! I am incredibly lucky to work with such highly skilled and attentive people that help me learn and improve my skills within the tasks I do.</p>
        </div>
    );
};

export default SkillsSection;