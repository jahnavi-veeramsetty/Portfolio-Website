import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Works.css';
import techImg from '../../assets/tech.png';
import nonTechImg from '../../assets/nontech.png';

const Works = () => {
    const navigate = useNavigate();

    const categories = [
        {
            title: 'Tech Project',
            description: 'Step into the side where ideas become systems.',
            icon: techImg,
            isImage: true,
            type: 'Dev Space',
            class: 'card-tech',
            path: '/tech'
        },
        {
            title: 'Non Tech Projects',
            description: 'Step into the side where ideas become art.',
            icon: nonTechImg,
            isImage: true,
            type: 'Art Space',
            class: 'card-posters',
            path: '/non-tech'
        }
    ];

    return (
        <div className="works-container" id="works">
            <header className="works-header">
                <h2 className="works-title">My Works</h2>
            </header>

            <div className="works-grid">
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className={`work-card ${item.class}`}
                        onClick={() => navigate(item.path)}
                    >
                        <div className="card-icon-box">
                            {item.isImage ? (
                                <img src={item.icon} alt={item.title} className="card-icon-img" />
                            ) : (
                                item.icon
                            )}
                        </div>
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-description">{item.description}</p>
                        <div className="card-badge">
                            {item.type}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
