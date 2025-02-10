import "../styles/homepage.css";
import React, { useEffect } from "react";

import { TravelLine, TravelLine2, TravelLine3 } from "../components/TravelLines";

import IntroSection from "../components/sections/Intro";
import AboutMeSection from "../components/sections/AboutMe";
import ProjectPlanesSection from "../components/sections/ProjectPlanes";
import StatisticsSection from "../components/sections/Statistics";
import SkillsSection from "../components/sections/Skills";
import AirShowsSection from "../components/sections/Airshows";
import LocationSection from "../components/sections/Location";
import Contact from "../components/Contact";

const HomePage = () => {

    useEffect(() => {
        if (localStorage.getItem("scrollToContact") === "true") {
            localStorage.removeItem("scrollToContact"); 
            setTimeout(() => {
                document.getElementById("contact-me")?.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll('.home-section, .line-container');
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.05
        });
    
        elements.forEach(element => {
            observer.observe(element);
        });
    
        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);
    
    return (
        <div id="home-page">

            <div className="home-section-container">
                <IntroSection />
            </div>

            <div className="home-section-container">
                <AboutMeSection />
            </div>

            <div className="home-section-container">
                <TravelLine />
                <ProjectPlanesSection />               
            </div>

            <div className="home-section-container">
                <StatisticsSection />
            </div>
            
            <div className="home-section-container">
                <TravelLine2 />
                <SkillsSection/>
            </div>

            <div className="home-section-container">
                <AirShowsSection />
            </div>

            <div className="home-section-container">
                <TravelLine3 />
                <LocationSection />
            </div>

            <div id="contact-home-page" className="home-section">
                <Contact />
            </div>
        </div>
    );
};

export default HomePage;
