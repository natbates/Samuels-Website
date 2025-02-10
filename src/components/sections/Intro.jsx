import "../../styles/sections/Intro.css";

const IntroSection = () =>
{
    return (
        <div id="intro-section" className="home-section">
            <h1>Samuel West</h1>
            <div className="text-container">
                <p>A journey of my work at Shuttleworth</p>
                <button onClick={() => window.open("https://www.shuttleworth.org/", "_blank")}>
                    See Shuttleworth
                </button>
            </div>
        </div>
    );
}

export default IntroSection;