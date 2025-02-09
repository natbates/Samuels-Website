import "../styles/login.css";
import { useState } from "react";
import Dashboard from "../components/Dashboard";
import { useAuth } from "../components/contexts/AuthContext";

const Login = () => {
    const { user, login } = useAuth(); // Access auth functions
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        const success = login(email, password); // Call login from context

        if (success) {
            setError("");
        } else {
            setEmail("");
            setPassword("");
            setError("Invalid email or password.");
        }
    };

    return (
        <div id="login-dashboard-page">
            <div id="login-section" className="home-section">
                {user ? (
                    <Dashboard />
                ) : (
                    <>
                        <h2>Log In</h2>
                        {error && <p className="error-message">{error}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required 
                                />
                            </div>

                            <div className="input-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required 
                                />
                            </div>

                            <div className="button-text-login">
                                <p>Forgot your login details? Message you know who.</p>
                                <button type="submit" className="login-button">Log In</button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
