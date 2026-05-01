import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tech.css';

// Import images from assets/tech
import arrivioImg from '../assets/tech/arrivio.png';
import safemomImg from '../assets/tech/safemom.jpg';
import tesoroImg from '../assets/tech/tesoro.jpg';
import vakyavaniImg from '../assets/tech/vakyavani.png';

const Tech = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Arrivio",
            image: arrivioImg,
            desc: "A comprehensive travel planning application designed to streamline your journeys.",
            matter: "Arrivio is built with React and Node.js, featuring real-time flight tracking, itinerary management, and local recommendations. It aims to make travel planning as seamless as the journey itself.",
            github: "https://github.com/jahnavi/arrivio"
        },
        {
            id: 2,
            title: "SafeMom",
            image: safemomImg,
            desc: "Maternal health tracking and support system for expecting mothers.",
            matter: "SafeMom provides personalized health insights, appointment reminders, and a community forum for mothers. Built with React Native and Firebase, it ensures health data is always at your fingertips.",
            github: "https://github.com/jahnavi/safemom"
        },
        {
            id: 3,
            title: "Tesoro",
            image: tesoroImg,
            desc: "Curated marketplace for unique treasures and handcrafted goods.",
            matter: "Tesoro is an e-commerce platform that connects artisans with collectors. It features a custom search engine, secure payment integration, and a sleek, minimalist UI.",
            github: "https://github.com/jahnavi/tesoro"
        },
        {
            id: 4,
            title: "VakyaVani",
            image: vakyavaniImg,
            desc: "Natural language processing and speech assistant for local languages.",
            matter: "VakyaVani leverages machine learning to provide accurate speech-to-text and translation services. It focuses on accessibility and empowering users in their native tongues.",
            github: "https://github.com/jahnavi/vakyavani"
        }
    ];

    const openPopup = (project) => {
        setSelectedProject(project);
    };

    const closePopup = () => {
        setSelectedProject(null);
    };

    // Close on Escape key press
    React.useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                closePopup();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (

        <div className="project-page-container">
            <Link to="/" className="floating-back-link">← BACK</Link>
            <header className="project-header">
                <h1 className="project-title">Tech Projects</h1>
                <p className="project-tagline">Building the future with code and design.</p>
            </header>

            <main className="project-layout">
                <div className="project-grid">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="project-card"
                            onClick={() => openPopup(project)}
                        >
                            <div className="card-image-container">
                                <img src={project.image} alt={project.title} className="card-image" />
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-short-desc">{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>


            {/* Popup Design */}
            {selectedProject && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closePopup}>×</button>
                        <div className="popup-body">
                            <div className="popup-image-container">
                                <img src={selectedProject.image} alt={selectedProject.title} />
                            </div>
                            <div className="popup-info">
                                <h2 className="popup-title">{selectedProject.title}</h2>
                                <p className="popup-matter">{selectedProject.matter}</p>
                                <a 
                                    href={selectedProject.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="github-link"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tech;

