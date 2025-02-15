import "../../styles/sections/Statistics.css";

const StatisticsSection = () =>
{
    return (
        <div id = "statistics" className = "home-section">
            <div className="about-text-container">
                <h2>Numbers I'm proud of.</h2>
                <p className="about-text">These figures give an accurate visualisation of my work as well as the figures we will see for the end of a display season.</p>
            </div>
            <div className="shuttleworth-stats-container">
                <div className="stats-container">
                    <img src = "svgs/plane.svg"></img>
                    <div className="stats-text">
                        <h3>20+</h3>
                        <p>Aircraft maintained</p>
                    </div>
                </div>
                <div className="stats-container">
                    <img src = "svgs/plane.svg"></img>
                    <div className="stats-text">
                        <h3>3</h3>
                        <p>Ongoing restorations</p>
                    </div>
                </div>
                <div className="stats-container">
                    <img src = "svgs/plane.svg"></img>
                    <div className="stats-text">
                        <h3>20k+</h3>
                        <p>Spectators</p>
                    </div>
                </div>
                <div className="stats-container">
                    <img src = "svgs/plane.svg"></img>
                    <div className="stats-text">
                        <h3>7</h3>
                        <p>Airshows per year</p>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
}

export default StatisticsSection;