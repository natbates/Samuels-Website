import "../styles/app.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes

import HomePage from "../pages/homepage";
import Gallery from "../pages/gallery";
import ContactPage from "../pages/contact";
import Planes from "../pages/planes";

const App = () => {
    return (
        <Router> {/* Wrapping the app with Router */}
            <div id="page-holder">
                <Navbar />
                <div id="page-content">
                    <Routes> {/* Replaced Switch with Routes */}
                        <Route exact path="/" element={<HomePage />} /> {/* Home page */}
                        <Route path="/gallery" element={<Gallery />} /> {/* Gallery page */}
                        <Route path="/planes" element={<Planes />} /> {/* Gallery page */}
                        <Route path = "/contact" element={<ContactPage />}></Route>
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
