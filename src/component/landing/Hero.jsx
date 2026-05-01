import React from 'react';
import './Hero.jsx.css';
import meImage from '../../assets/me.png';

const Hero = () => {
    return (
        <div className="hero-container">
            {/* Navigation */}
            <nav className="nav-header">
                <a href="#about" className="nav-link">About</a>
                <a href="#profile" className="nav-link">Profile</a>
                <a href="#contact" className="nav-link">Contact</a>
                <a href="#works" className="nav-link">My Works</a>
            </nav>

            <main className="hero-main">
                {/* Text Content */}
                <div className="hero-text">
                    <h1>
                        <span className="i-am">I am</span>
                        <span className="morpheus">J a h n a v i</span>
                    </h1>
                    <p className="hero-subtitle">designer / developer</p>
                </div>

                {/* Hero Image */}
                <div className="hero-image-container">
                    <img src={meImage} alt="Morpheus" className="hero-image" />
                </div>
            </main>

            {/* Footer Info */}
            <footer className="hero-footer">
                <div className="footer-item">
                    <span className="footer-text">10 years experience</span>
                </div>
                <div className="divider"></div>
                <div className="footer-item">
                    <span className="footer-text">Trustworthy</span>
                </div>
                <div className="divider"></div>
                <div className="footer-item">
                    <span className="footer-text">Modern designs</span>
                </div>
            </footer>
        </div>
    );
};

export default Hero;
