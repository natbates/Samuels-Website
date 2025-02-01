import "../styles/app.css";
import Navbar from "./Navbar";
import HomePage from "../pages/homepage";

const App = () => {
    return (
        <div id = "page-holder">
            <Navbar />
            <div id = "page-content">
                <HomePage />
            </div>
        </div>
    );
};

export default App;