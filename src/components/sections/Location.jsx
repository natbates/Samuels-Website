import "../../styles/sections/Location.css";
import MapComponent from "../../components/Map";

const LocationSection = () =>
{
    return (
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
    );
}

export default LocationSection;