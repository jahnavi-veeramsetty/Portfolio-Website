import React from 'react';
import Hero from '../component/landing/Hero';
import AboutMe from '../component/landing/AboutMe';
import Works from '../component/landing/Works';
import Skills from '../component/landing/Skills';
import Contact from '../component/landing/Contact';
import Footer from '../component/landing/Footer';

const Landing = () => {
  return (
    <div className="landing-page">
      <Hero />
      <AboutMe />
      <Works />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
