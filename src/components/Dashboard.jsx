import { useAuth } from "./contexts/AuthContext";
import { useState } from "react";
import "../styles/dashboard.css";

const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL; // Make sure to set this in .env
const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY; // GitHub token

const Dashboard = () => {
    const { user, logout } = useAuth();
    const [files, setFiles] = useState([]);
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);

    // Handle file selection
    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
    };

    // Validate that the files are images
    const validateFiles = () => {
        const invalidFiles = files.filter(file => !file.type.startsWith("image/"));
        if (invalidFiles.length > 0) {
            setError("Only image files are allowed.");
            return false;
        }
        return true;
    };

    // Upload files to GitHub
    const handleUpload = async () => {
        if (!validateFiles()) return;

        setUploading(true);
        setError("");

        try {
            const uploadPromises = files.map(async (file) => {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file); // Convert the file to base64
                await new Promise((resolve, reject) => {
                    fileReader.onload = () => resolve();
                    fileReader.onerror = reject;
                });

                const base64Data = fileReader.result.split(",")[1]; // Get the base64 data without the prefix

                const response = await fetch(GITHUB_API_URL, {
                    method: "POST",
                    headers: {
                        "Authorization": `token ${GITHUB_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message: `Upload ${file.name}`,
                        content: base64Data,
                        path: `images/${file.name}`,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Failed to upload ${file.name}`);
                }
                return response.json();
            });

            await Promise.all(uploadPromises); // Upload all images concurrently
            alert("Images uploaded successfully!");
            setFiles([]); // Clear selected files after upload
        } catch (err) {
            setError("An error occurred during upload.");
            console.error(err);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div id="dashboard">
            <h2>Welcome to your Dashboard!</h2>
            <button onClick={logout} className="logout-button">Log Out</button>

            <h3>Upload Gallery Images</h3>

            {error && <p className="error-message">{error}</p>}

            <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
            />

            {files.length > 0 && (
                <div className="file-preview">
                    <ul>
                        {files.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                    <button
                        className="upload-button"
                        onClick={handleUpload}
                        disabled={uploading}
                    >
                        {uploading ? "Uploading..." : "Upload Images"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
