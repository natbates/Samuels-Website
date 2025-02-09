import ReactDOM from "react-dom/client";
import React from "react";
import App from "./components/App.jsx";
import { AuthProvider } from "./components/contexts/AuthContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
);