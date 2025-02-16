import { useAuth } from "./contexts/AuthContext";
import { useState, useEffect } from "react";
import "../styles/dashboard.css";

const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL; // Make sure to set this in .env
const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY; // GitHub token

const Dashboard = () => {
    const { user, logout } = useAuth();
    const [files, setFiles] = useState([]);
    const [repoImages, setRepoImages] = useState([]);
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);
    const [deleting, setDeleting] = useState(null);

    useEffect(() => {
        fetchImagesFromRepo();
    }, []);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Fetch images from the GitHub repo
    const fetchImagesFromRepo = async () => {
        try {
            const response = await fetch(`${GITHUB_API_URL}?timestamp=${new Date().getTime()}`, {
                headers: { Authorization: `token ${GITHUB_API_KEY}` },
            });

            if (!response.ok) throw new Error("Failed to fetch images.");

            const data = await response.json();
            console.log("FETCHED", data);

            if (Array.isArray(data) && data.length === 0) {
                setError("No images found. The repository is empty.");
                return;
            }

            // Filter only image files
            const imageFiles = data
                .filter(file => file.type === "file" && file.download_url)
                .map(file => ({
                    name: file.name,
                    url: file.download_url,
                    sha: file.sha, // Unique identifier
                }));

            if (imageFiles.length === 0) {
                setError("No images available in the repository.");
            } else {
                console.log("ALL IMAGES ", imageFiles);
                setRepoImages(imageFiles);
                setError(""); // Clear error if images are successfully loaded
            }
        } catch (error) {
            console.error("Error fetching images:", error);
            setError("Failed to load images. Please try again later.");
        }
    };

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

    // Get SHA for an existing file
    const getFileSha = async (fileName) => {
        const shaResponse = await fetch(
            `https://api.github.com/repos/L3monDrizzl3/Website-Images/contents/${fileName}`,
            { headers: { Authorization: `token ${GITHUB_API_KEY}` } }
        );

        if (shaResponse.ok) {
            const data = await shaResponse.json();
            return data.sha;
        }
        return null;
    };

    // Handle file upload
    const handleUpload = async () => {
        if (!validateFiles()) return;
        if (!files.length) {
            setError("No files selected.");
            return;
        }
        if (!GITHUB_API_KEY) {
            setError("GitHub API key is missing.");
            return;
        }

        setUploading(true);
        setError("");

        try {
            const uploadPromises = files.map(async (file) => {
                const fileReader = new FileReader();
                const base64Data = await new Promise((resolve, reject) => {
                    fileReader.onload = () => resolve(fileReader.result.split(",")[1]);
                    fileReader.onerror = () => reject(new Error(`FileReader error on ${file.name}`));
                    fileReader.readAsDataURL(file);
                });

                const sha = await getFileSha(file.name);

                const response = await fetch(
                    `https://api.github.com/repos/L3monDrizzl3/Website-Images/contents/${file.name}`,
                    {
                        method: "PUT",
                        headers: {
                            "Authorization": `token ${GITHUB_API_KEY}`,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            message: `Upload ${file.name}`,
                            content: base64Data,
                            sha: sha || undefined,
                        }),
                    }
                );

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Failed to upload ${file.name}. Status: ${response.status}. Response: ${errorText}`);
                }
            });

            await Promise.all(uploadPromises);
            alert("Images uploaded successfully!");
            setFiles([]);

            await delay(5000); // Wait 5 seconds for GitHub to update
            fetchImagesFromRepo();
        } catch (err) {
            setError("An error occurred during upload.");
            console.error("Upload error:", err);
        } finally {
            setUploading(false);
        }
    };

    // Handle file delete
    const handleDelete = async (fileName) => {
        setDeleting(fileName);

        try {
            const sha = await getFileSha(fileName);
            if (!sha) throw new Error("File SHA not found.");

            const response = await fetch(
                `https://api.github.com/repos/L3monDrizzl3/Website-Images/contents/${fileName}`,
                {
                    method: "DELETE",
                    headers: {
                        "Authorization": `token ${GITHUB_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message: `Delete ${fileName}`,
                        sha: sha,
                    }),
                }
            );

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to delete ${fileName}. Status: ${response.status}. Response: ${errorText}`);
            }

            await delay(5000); // Wait 5 seconds for GitHub to update
            fetchImagesFromRepo();
            setError(""); // Clear error after successful delete
        } catch (err) {
            setError("An error occurred during deletion.");
            console.error("Delete error:", err);
        } finally {
            setDeleting(null);
        }
    };

    return (
        <div id="dashboard">
            <h2>Welcome to your Dashboard!</h2>
            <button onClick={logout} className="logout-button">Log Out</button>

            <h3>Upload Gallery Images</h3>

            {error && <p className="error-message">{error}</p>}

            <input type="file" multiple accept="image/*" onChange={handleFileChange} />

            {files.length > 0 && (
                <div className="file-preview">
                    <ul>
                        {files.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                    <button className="upload-button" onClick={handleUpload} disabled={uploading}>
                        {uploading ? "Uploading..." : "Upload Images"}
                    </button>
                </div>
            )}

            <h3>Delete Gallery Images</h3>
            <div className="image-scroll-container">
                {repoImages.map((image) => (
                    <div key={image.name} className="image-item">
                        <img src={image.url} alt={image.name} />
                        <button onClick={() => handleDelete(image.name)} disabled={deleting === image.name}>
                            <img src="svgs/trash.svg" alt="Delete" />
                        </button>
                    </div>
                ))}
            </div>
            <p>When you add or delete images they will take a while to process with GitHub, so they might not appear immediately - give it about 5-10 seconds.</p>
        </div>
    );
};

export default Dashboard;
