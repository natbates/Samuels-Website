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

                // Filter only image files
                const imageFiles = data
                    .filter(file => file.type === "file" && file.download_url)
                    .map(file => ({
                        name: file.name,
                        url: file.download_url,
                        sha: file.sha // Unique identifier
                    }));

                setImages(imageFiles);
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
            <div id="gallery-section" className="home-section">
                <h2>Gallery</h2>

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
                            <div className="pagination">
                                <button 
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                                    disabled={currentPage === 1}
                                >
                                    <img className = "left" src = "svgs/down-arrow.svg"></img>
                                </button>
                                <span>Page {currentPage} of {totalPages}</span>
                                <button 
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                                    disabled={currentPage === totalPages}
                                >
                                    <img className = "right" src = "svgs/down-arrow.svg"></img>
                                </button>
                            </div>
                        )}
                                                {totalPages > 1 && (
                            <div className="pagination bottom">
                                <button 
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                                    disabled={currentPage === 1}
                                >
                                    <img className = "left" src = "svgs/down-arrow.svg"></img>
                                </button>
                                <span>Page {currentPage} of {totalPages}</span>
                                <button 
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                                    disabled={currentPage === totalPages}
                                >
                                    <img className = "right" src = "svgs/down-arrow.svg"></img>
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Gallery;
