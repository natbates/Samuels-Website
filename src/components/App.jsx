import "../styles/app.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes

import HomePage from "../pages/homepage";
import Gallery from "../pages/gallery";
import ContactPage from "../pages/contactpage";
import Login from "../pages/login";

const App = () => {
    return (
        <Router> {/* Wrapping the app with Router */}
            <div id="page-holder">
                <div className="top-background-image"></div>
                <Navbar />
                <main id="page-content">
                    <Routes> {/* Replaced Switch with Routes */}
                        <Route exact path="/" element={<HomePage />} /> {/* Home page */}
                        <Route path="/gallery" element={<Gallery />} /> {/* Gallery page */}
                        <Route path = "/contact" element={<ContactPage />}></Route>
                        <Route path = "/login" element={<Login />}></Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
