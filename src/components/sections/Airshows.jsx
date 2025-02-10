import "../../styles/sections/AirShows.css";
import { useState } from "react";

const videos = [
    { id: 1, title: "Shuttleworth Race Day", description: "Pr Mk11", src: "images/videos/airshow-1.mp4", link: "https://youtube.com/shorts/VX235w9rB2g?si=vs0c6doVzpogPDki"},
    { id: 2, title: "Duxford Airshow", description: "Lysander", src: "images/videos/airshow-2.mp4", link: "https://www.youtube.com/shorts/gc0VHbvDU5k?si=tt50RooXuPyGNrBb"},
    { id: 3, title: "US Airforce D Day Memorials", description: "C47 Skytrain", src: "images/videos/airshow-3.mp4", link: "https://www.youtube.com/shorts/jSePI_-QajU?si=OlYXIcSqFJv_iqFT"},
    { id: 4, title: "SW Festival of Flight", description: "Vought F4U Corsair", src: "images/videos/airshow-4.mp4", link: "https://youtu.be/nEXcwLzqd-o?si=47N2q1KZYMhvKv0I"}
];

const AirShowsSection = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div id="air-shows" className="home-section">
            <h2>Airshows</h2>
            <div className="video-container">
                {videos
                    .slice(0, showMore ? videos.length : 2) // Show only 2 videos if showMore is false
                    .map((video) => (
                        <div key={video.id} className="video-item">
                            <video autoPlay muted loop>
                                <source src={video.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="video-text">
                                <h2>{video.title}</h2>
                                <p>{video.description}</p>
                                <a href={video.link} target="_blank" className="read-more">See the video</a>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="button-show-more-container">
                <button onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show Less" : "Show More"}
                </button>
                <div></div>
            </div>

            <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
};

export default AirShowsSection;