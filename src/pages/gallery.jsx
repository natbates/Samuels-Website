import { useEffect, useState } from "react";
import "../styles/gallery.css";

const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL;
const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 16; // Adjust as needed

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(GITHUB_API_URL, {
                    headers: { Authorization: `token ${GITHUB_API_KEY}` },
                });

                if (!response.ok) throw new Error("Failed to fetch images");

                const data = await response.json();

                if (Array.isArray(data) && data.length === 0) {
                    setError("No images found. The repository is empty.");
                    setLoading(false);
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
                    setImages(imageFiles);
                }
            } catch (error) {
                console.error("Error fetching images:", error);
                setError("Failed to load images. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    // Pagination logic
    const totalPages = Math.ceil(images.length / imagesPerPage);
    const displayedImages = images.slice(
        (currentPage - 1) * imagesPerPage,
        currentPage * imagesPerPage
    );

    return (
        <div className="home-section-container">
            <div 
                id="gallery-section" 
                className={`home-section ${totalPages > 1 ? "multiple-page" : ""}`}
            >
                <h2>Gallery</h2>
                <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                {loading ? (
                    <div className="loading-spinner"></div>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : images.length === 0 ? (
                    <p className="no-images-message">No images available.</p>
                ) : (
                    <>
                        <div className="image-grid">
                            {displayedImages.map(image => (
                                <div key={image.sha} className="image-item">
                                    <img src={image.url} alt={image.name} />
                                </div>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <>
                                <div className="pagination">
                                    <button 
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                                        disabled={currentPage === 1}
                                    >
                                        <img className="left" src="svgs/down-arrow.svg" alt="Previous page" />
                                    </button>
                                    <span>Page {currentPage} of {totalPages}</span>
                                    <button 
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                                        disabled={currentPage === totalPages}
                                    >
                                        <img className="right" src="svgs/down-arrow.svg" alt="Next page" />
                                    </button>
                                </div>

                                <div className="pagination bottom">
                                    <button 
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                                        disabled={currentPage === 1}
                                    >
                                        <img className="left" src="svgs/down-arrow.svg" alt="Previous page" />
                                    </button>
                                    <span>Page {currentPage} of {totalPages}</span>
                                    <button 
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                                        disabled={currentPage === totalPages}
                                    >
                                        <img className="right" src="svgs/down-arrow.svg" alt="Next page" />
                                    </button>
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Gallery;
