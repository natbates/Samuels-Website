import Socials from "../components/Socials";
import "../styles/homepage.css";

const HomePage = () =>
{
    return(
        <div id = "home-page">
            <div className="divider-section">
                <section>
                    <p>Apprentice Aeronautical Engineer</p>
                    <h1>SAMUEL WEST</h1>
                    <Socials />
                </section>
                <section>
                    <p>My work at Shuttleworth</p>
                    <button>See Shuttleworth</button>
                </section>
            </div>

            <div id = "about-me"> 
                <h1>What I do</h1>
            </div>

        </div>
    );
}

export default HomePage;