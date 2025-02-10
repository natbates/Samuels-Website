import "../../styles/sections/Statistics.css";

const StatisticsSection = () =>
{
    return (
        <div id = "statistics" className = "home-section">
            <h2>Numbers I'm proud of.</h2>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis.</p>
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

export default StatisticsSection;