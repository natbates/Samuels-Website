import "../styles/travelLines.css";

export const TravelLine = () => (
    <div className={`line-container`}>
        <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path 
                d="M0,0 C150,100, 350,200, 500,100 C650,0, 850,150, 1000,100" 
                stroke="black" fill="transparent" strokeWidth="2" 
            />
        </svg>
    </div>
);

export const TravelLine2 = () => (
    <div className="line-container">
        <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path 
                d="M0,150 C150,200, 300,50, 500,150 C700,250, 850,100, 1000,50" 
                stroke="black" fill="transparent" strokeWidth="2" 
            />
        </svg>
    </div>
);

export const TravelLine3 = () => (
    <div className="line-container">
        <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <path 
                d="M0,50 C100,150, 300,0, 450,180 C600,200, 800,50, 1000,120" 
                stroke="black" fill="transparent" strokeWidth="2" 
            />
        </svg>
    </div>
);
