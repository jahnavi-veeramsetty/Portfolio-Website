import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    info: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b3c692f3-171d-43c7-b16a-e2191ca7cfd3",
          name: formData.name,
          email: formData.email,
          message: formData.info,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', info: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-container" id="contact">
      <header className="contact-header">
        <h2 className="contact-title">Contact Me</h2>
      </header>
      
      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-split">
            <div className="form-left">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name" 
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com" 
                  className="form-input"
                  required
                />
              </div>
            </div>
            
            <div className="form-right">
              <div className="form-group full-height">
                <label className="form-label" htmlFor="info">Tell me more</label>
                <textarea 
                  id="info" 
                  value={formData.info}
                  onChange={handleChange}
                  placeholder="Write your message here..." 
                  className="form-textarea"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          
          <button type="submit" className="submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 
             status === 'success' ? 'Message Sent! ✨' : 
             status === 'error' ? 'Error. Try Again' : 
             'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

