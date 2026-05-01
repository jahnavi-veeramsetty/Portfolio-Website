import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <header className="contact-header">
        <h2 className="contact-title">Contact Me</h2>
      </header>
      
      <div className="contact-card">
        <form className="contact-form">
          <div className="form-split">
            <div className="form-left">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your name" 
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your@email.com" 
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-right">
              <div className="form-group full-height">
                <label className="form-label" htmlFor="info">Tell me more</label>
                <textarea 
                  id="info" 
                  placeholder="Write your message here..." 
                  className="form-textarea"
                ></textarea>
              </div>
            </div>
          </div>
          
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
