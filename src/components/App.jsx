import "../styles/app.css";
import Navbar from "./Navbar";
import HomePage from "../pages/homepage";
import Footer from "./Footer";


const App = () => {
    return (
        <div id = "page-holder">
            <Navbar />
            <div id = "page-content">
                <HomePage />
            </div>
            <Footer />
        </div>
    );
};

export default App;