import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Tech.css'; // Reusing shared styles for consistency

// Dynamically import images from posters and bookmarks
const posterModules = import.meta.glob('../assets/nontech/posters/*.{png,jpg,jpeg,svg}', { eager: true });
const bookmarkModules = import.meta.glob('../assets/nontech/bookmarks/*.{png,jpg,jpeg,svg}', { eager: true });

const posterImages = Object.values(posterModules).map(img => ({ src: img.default, type: 'posters' }));
const bookmarkImages = Object.values(bookmarkModules).map(img => ({ src: img.default, type: 'bookmarks' }));
const allImages = [...posterImages, ...bookmarkImages];

const NonTech = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [filter, setFilter] = useState('all');
  
  const filteredImages = filter === 'all' 
    ? allImages 
    : allImages.filter(img => img.type === filter);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };



  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
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
      <Link to="/" className="floating-back-link">← BACK</Link>
      
      <header className="project-header">
        <h1 className="project-title">Non-Tech Projects</h1>
        <p className="project-tagline">Visual stories, posters, and creative experiments.</p>
      </header>

      <div className="filter-container">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Works
        </button>
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
      </div>

      <main className={`gallery-grid ${filter}`}>
        {filteredImages.map((img, index) => (
          <div 
            key={index} 
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <img src={img.src} alt={`Project ${index + 1}`} className="gallery-img" />
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
                src={filteredImages[selectedImageIndex].src} 
                alt={`Project ${selectedImageIndex + 1}`} 
                className="lightbox-img"
              />
            </div>
            
            <button className="lightbox-nav next" onClick={nextImage}>›</button>
          </div>
          
          <div className="lightbox-counter">
            {selectedImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}

    </div>
  );
};

export default NonTech;

