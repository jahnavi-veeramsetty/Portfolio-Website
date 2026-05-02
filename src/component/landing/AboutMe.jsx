import React from 'react';
import './AboutMe.css';
import idImage from '../../assets/id.png';

const AboutMe = () => {
    return (
        <div className="aboutme-container" id="about">
            <div className="aboutme-left">
                <div className="id-image-wrapper">
                    <img src={idImage} alt="ID Card" className="id-image" />
                </div>
            </div>

            <div className="aboutme-right">
                <div className="about-card">
                    <h2 className="about-title">About Me</h2>
                    <p className="about-content">
                        A multidisciplinary designer and developer who blends creativity with technical precision. I enjoy transforming ideas into meaningful digital experiences through thoughtful design, clean interfaces, and intuitive user flows. My work focuses on storytelling, usability, and crafting visually engaging solutions that solve real-world problems.             </p>

                    <div className="about-details">
                        <div className="detail-item">
                            <span className="detail-label">Location</span>
                            <span className="detail-value">Hyderabad, India</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Expertise</span>
                            <span className="detail-value">Graphic Designer & System Designer</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Status</span>
                            <span className="detail-value">Available for Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
