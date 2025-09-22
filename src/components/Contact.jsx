import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        interest: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email Us",
      details: "info.victors.dce@gmail.com",
      description: "Send us an email and we'll get back to you within 24 hours."
    },
    {
      icon: <Phone />,
      title: "Call Us",
      details: "+91 xxxxxxxxxx",
      description: "Available Monday to Friday, 9:00 AM - 6:00 PM"
    },
    {
      icon: <MapPin />,
      title: "Visit Us",
      details: "Room XX",
      description: "Drop by during our office hours or scheduled meetings."
    }
  ];

  const socialLinks = [
    { icon: <Github />, name: "GitHub", url: "#", color: "#333" },
    { icon: <Linkedin />, name: "LinkedIn", url: "#", color: "#0077B5" },
    // { icon: <Twitter />, name: "Twitter", url: "#", color: "#1DA1F2" },
    { icon: <Instagram />, name: "Instagram", url: "#", color: "#E4405F" }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to join our community or have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    <p className="contact-main">{info.details}</p>
                    <p className="contact-description">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h3>Follow Us</h3>
              <p>Stay connected with our community on social media</p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    aria-label={social.name}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="quick-info">
              <h3>Quick Info</h3>
              <div className="info-grid">
                <div className="info-item">
                  <strong>Meeting Times:</strong>
                  <span>Fridays, 4:00 PM - 6:00 PM</span>
                </div>
                <div className="info-item">
                  <strong>Membership:</strong>
                  <span>Open to all students</span>
                </div>
                <div className="info-item">
                  <strong>Founded:</strong>
                  <span>20244</span>
                </div>
                <div className="info-item">
                  <strong>Focus Areas:</strong>
                  <span>Web Dev, AI/ML, Cloud Computing, Android Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h3>Send Us a Message</h3>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <form className="contact-form" action="https://formsubmit.co/yashsharmaa555@gmail.comcd v " method="post">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
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
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="interest">I'm Interested In</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="membership">Becoming a Member</option>
                  <option value="events">Upcoming Events</option>
                  <option value="workshops">Workshops & Training</option>
                  <option value="collaboration">Project Collaboration</option>
                  <option value="speaking">Speaking Opportunity</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>

              {/* Submit Status */}
              {submitStatus && (
                <div className={`submit-status ${submitStatus}`}>
                  {submitStatus === 'success' ? (
                    <p>✅ Message sent successfully! We'll get back to you soon.</p>
                  ) : (
                    <p>❌ Something went wrong. Please try again or email us directly.</p>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="contact-cta">
          <div className="cta-content">
            <h3>Ready to Join the Victors Community?</h3>
            <p>Whether you're a beginner or an experienced developer, there's a place for you in our society.</p>
            <div className="cta-buttons">
              <a href="#about" className="btn btn-primary">Learn More About Us</a>
              <a href="#events" className="btn btn-secondary">View Upcoming Events</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;