import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Tech from './pages/Tech';
import NonTech from './pages/nonTech';
import './index.css';
import bgImage from './assets/bg.png';

import ScrollToTop from './component/utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <div 
          className="bg-overlay" 
          style={{
            backgroundImage: `url(${bgImage})`,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
            pointerEvents: 'none',
            zIndex: 0
          }}
        ></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/non-tech" element={<NonTech />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
