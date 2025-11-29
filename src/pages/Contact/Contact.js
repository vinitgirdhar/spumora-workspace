import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </nav>
          <h1 className="heading-xl">Get in Touch</h1>
          <p className="contact-hero__subtitle">
            We'd love to hear from you. Reach out with questions, feedback, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="heading-md">Send Us a Message</h2>
              <p className="contact-form-intro">
                Fill out the form below and we'll get back to you within 24-48 hours.
              </p>
              
              {submitted ? (
                <div className="contact-success">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll be in touch soon.</p>
                  <button 
                    className="btn btn-outline-primary" 
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Question</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="press">Press & Media</option>
                      <option value="feedback">Product Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <div className="contact-info-items">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div className="contact-info-text">
                      <h4>Email</h4>
                      <p>hello@spumora.com</p>
                      <p>support@spumora.com</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    </div>
                    <div className="contact-info-text">
                      <h4>Phone</h4>
                      <p>+1 (555) 123-4567</p>
                      <p>Mon-Fri: 9am - 6pm EST</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div className="contact-info-text">
                      <h4>Studio & Showroom</h4>
                      <p>123 Botanical Lane</p>
                      <p>Portland, OR 97201</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-social-card">
                <h3>Follow Us</h3>
                <p>Stay connected for updates, behind-the-scenes, and more.</p>
                <div className="contact-social-links">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </a>
                  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12c0 1.5.5 3.5 2 4.5.5-.5.5-1 .5-1.5 0-.5-.5-2-.5-3 0-1 1-2 2-2s1.5 1 1.5 2c0 1-1 2-1 3 0 .5 0 1 .5 1.5 1-.5 2-1.5 2-3.5 0-2.5-2-4.5-4.5-4.5S8 9 8 12z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="contact-faq section bg-cream">
        <div className="container text-center">
          <h2 className="heading-lg">Frequently Asked Questions</h2>
          <p className="contact-faq__text">
            Find quick answers to common questions about orders, shipping, and our products.
          </p>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does shipping take?</h3>
              <p>Standard shipping takes 3-5 business days. Express shipping is 1-2 business days.</p>
            </div>
            <div className="faq-item">
              <h3>Are your products natural?</h3>
              <p>Yes! All Spumora products are made with 100% natural ingredients, free from harsh chemicals.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer returns?</h3>
              <p>We offer a 30-day satisfaction guarantee. If you're not happy, we'll make it right.</p>
            </div>
            <div className="faq-item">
              <h3>Do you ship internationally?</h3>
              <p>Yes, we ship worldwide! International shipping typically takes 7-14 business days.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
