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
                        I'm a passionate designer and developer with a decade of experience in creating modern,
                        high-impact digital experiences. I believe in the power of minimal yet bold aesthetics.
                    </p>

                    <div className="about-details">
                        <div className="detail-item">
                            <span className="detail-label">Location</span>
                            <span className="detail-value">New York, USA</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Expertise</span>
                            <span className="detail-value">UI/UX & Frontend Development</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Status</span>
                            <span className="detail-value">Available for Projects</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Motto</span>
                            <span className="detail-value">Design is life.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
