import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Tech.css'; // Reusing shared styles for consistency
import './Songs.css'; // Dedicated styling for songs


// Dynamically import images from posters and bookmarks
const posterModules = import.meta.glob('../assets/nontech/posters/*.{png,jpg,jpeg,svg}', { eager: true });
const bookmarkModules = import.meta.glob('../assets/nontech/bookmarks/*.{png,jpg,jpeg,svg}', { eager: true });

const posterImages = Object.values(posterModules).map(img => ({ 
    src: img.default, 
    type: 'posters',
    filename: img.default.split('/').pop().split('?')[0] // To help with identification
}));

// Manual swap: bookcover.jpeg should be where Hook Steps.png is
const hookIdx = posterImages.findIndex(img => img.src.includes('Hook') && img.src.includes('Steps'));
const bookIdx = posterImages.findIndex(img => img.src.includes('bookcover'));

if (hookIdx !== -1 && bookIdx !== -1) {
    const temp = posterImages[hookIdx];
    posterImages[hookIdx] = posterImages[bookIdx];
    posterImages[bookIdx] = temp;
}

const bookmarkImages = Object.values(bookmarkModules).map(img => ({ src: img.default, type: 'bookmarks' }));


// Placeholder songs - user will add links later
// Placeholder songs - user will add links later
const songItems = [
    {
        title: "Tears in the Shadows",
        src: "https://img.youtube.com/vi/Whcvi0c2Da4/maxresdefault.jpg",
        type: 'songs',
        url: "https://youtu.be/Whcvi0c2Da4?si=lYoEJqIil1U98tFV"
    },
    {
        title: "Fractured Heart",
        src: "https://img.youtube.com/vi/9GK-J7QpYyU/maxresdefault.jpg",
        type: 'songs',
        url: "https://youtu.be/9GK-J7QpYyU?si=fVhEIQEtkwbuPKPB"
    },
    {
        title: "Frozen",
        src: "https://img.youtube.com/vi/fzK5nGMhy5Y/maxresdefault.jpg",
        type: 'songs',
        url: "https://youtu.be/fzK5nGMhy5Y?si=dQ64HSm4XcmJ2fQF"
    },
    {
        title: "Always been you",
        src: "https://img.youtube.com/vi/W6rfqFMSFXY/maxresdefault.jpg",
        type: 'songs',
        url: "https://youtu.be/W6rfqFMSFXY?si=0c6C57-F1qJBKgw0"
    },
    {
        title: "Fall for you",
        src: "https://img.youtube.com/vi/LuFYtl5j1LE/maxresdefault.jpg",
        type: 'songs',
        url: "https://youtu.be/LuFYtl5j1LE?si=DtFQklXqEebW7DKv"
    },
    {
        title: "If I was First",
        src: "https://img.youtube.com/vi/IWsp8kwpQXA/maxresdefault.jpg",
        type: 'songs',
        url: "https://youtu.be/IWsp8kwpQXA?si=bQGyBOHiPi01K4DY"
    }
];

const NonTech = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [filter, setFilter] = useState('posters');

    const filteredItems = filter === 'posters'
        ? posterImages
        : filter === 'bookmarks'
            ? bookmarkImages
            : songItems;

    const openLightbox = (index) => {
        if (filter === 'songs') {
            window.open(filteredItems[index].url, '_blank');
        } else {
            setSelectedImageIndex(index);
        }
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
    };

    const nextImage = () => {
        setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex]);

    return (
        <div className="project-page-container">
            <Link to="/" className="floating-back-link">BACK</Link>

            <header className="project-header">
                <h1 className="project-title">Non-Tech Projects</h1>
                <p className="project-tagline">Visual stories, posters, and creative experiments.</p>
            </header>

            <div className="filter-container">
                <button
                    className={`filter-btn ${filter === 'posters' ? 'active' : ''}`}
                    onClick={() => setFilter('posters')}
                >
                    Posters
                </button>
                <button
                    className={`filter-btn ${filter === 'bookmarks' ? 'active' : ''}`}
                    onClick={() => setFilter('bookmarks')}
                >
                    Bookmarks
                </button>
                <button
                    className={`filter-btn ${filter === 'songs' ? 'active' : ''}`}
                    onClick={() => setFilter('songs')}
                >
                    Songs
                </button>
            </div>

            <main className={`gallery-grid ${filter}`}>
                {filteredItems.map((item, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => openLightbox(index)}
                    >
                        <div className="image-wrapper">
                            <img src={item.src} alt={item.title || `Project ${index + 1}`} className="gallery-img" />
                            {filter === 'songs' && (
                                <div className="play-overlay">
                                    <span className="play-icon">▶</span>
                                </div>
                            )}
                        </div>
                        {filter === 'songs' && item.title && (
                            <div className="song-info">
                                <h3 className="song-title">{item.title}</h3>
                            </div>
                        )}
                    </div>
                ))}
            </main>

            {/* Lightbox / Carousel */}
            {selectedImageIndex !== null && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>×</button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-nav prev" onClick={prevImage}>‹</button>

                        <div className="lightbox-image-container">
                            <img
                                src={filteredItems[selectedImageIndex].src}
                                alt={`Project ${selectedImageIndex + 1}`}
                                className="lightbox-img"
                            />
                        </div>

                        <button className="lightbox-nav next" onClick={nextImage}>›</button>
                    </div>

                    <div className="lightbox-counter">
                        {selectedImageIndex + 1} / {filteredItems.length}
                    </div>
                </div>
            )}


        </div>
    );
};

export default NonTech;

