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
            desc: "Browse and lease homes in Germany; without SCHUFA checks or endless paperwork.",
            matter: "A Germany-based housing platform that simplifies renting by removing traditional barriers like SCHUFA checks and excessive documentation, making home leasing faster and more accessible.",
            github: "https://github.com/jahnavi-veeramsetty/Arrivio.git"
        },
        {
            id: 2,
            title: "SafeMom",
            image: safemomImg,
            desc: "Smart maternal care with personalized insights and risk prediction.",
            matter: "A digital health platform for expecting mothers that delivers personalized insights, appointment reminders, and community support—while intelligently predicting risk levels (low, medium, high) for proactive care.",
            github: "https://github.com/jahnavi-veeramsetty/SafeMom.git"
        },
        {
            id: 3,
            title: "Tesoro",
            image: tesoroImg,
            desc: "A 2D adventure where timing and reflexes decide survival.",
            matter: "An engaging 2D game where players navigate obstacles, collect coins, and test their reflexes in a dynamic environment designed for fun and challenge.",
            github: "https://github.com/jahnavi-veeramsetty/Tesoro.git"
        },
        {
            id: 4,
            title: "Vakya Vani",
            image: vakyavaniImg,
            desc: "Turning hand gestures into words using computer vision.",
            matter: "A CV and ML-based system that uses webcam input to detect hand gestures and translate them into meaningful signs, bridging communication gaps through real-time prediction.",
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
            <Link to="/" className="floating-back-link">BACK</Link>
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
                                {selectedProject.github && (
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-link"
                                    >
                                        View on GitHub
                                    </a>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tech;

