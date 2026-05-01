import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Works.css';

const Works = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: 'Tech Project',
      description: 'Building modern web applications with cutting-edge technologies and sleek user interfaces.',
      icon: '💻',
      type: 'Development',
      class: 'card-tech',
      path: '/tech'
    },
    {
      title: 'Non Tech Projects',
      description: 'Creative visual designs, posters, and curated artistic collections.',
      icon: '🎨',
      type: 'Creative Design',
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
              {item.icon}
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
