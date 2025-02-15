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
            Here is the interactive map for The Shuttleworth Collection. I am based here, nestled in the beautiful heart of Bedfordshire Countryside.
            </p>
        </div>
    );
}

export default LocationSection;