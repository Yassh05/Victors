import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone, Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Events", href: "#events" },
    { name: "Achievements", href: "#achievements" }
  ];

  const resources = [
    { name: "Gallery", href: "#gallery" },
    // { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "Join Us", href: "#contact" }
  ];

  const socialLinks = [
    // { icon: <Github size={20} />, name: "GitHub", url: "#" },
    { icon: <Linkedin size={20} />, name: "LinkedIn", url: "https://www.linkedin.com/company/the-victors-club/posts/?feedView=all" },
    // { icon: <Twitter size={20} />, name: "Twitter", url: "#" },
    { icon: <Instagram size={20} />, name: "Instagram", url: "https://www.instagram.com/thevictorsclub.dce?igsh=Z2llMDZwZW1mZHc0" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">VICTORS</span>
            </div>
            <p className="footer-description">
              Empowering the next generation of tech leaders through innovation, 
              collaboration, and continuous learning. Join our vibrant community 
              of passionate students and industry professionals.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  aria-label={social.name}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(resource.href);
                    }}
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Get in Touch</h4>
            <div className="footer-contact">
              {/* <div className="contact-item"> */}
                {/* <MapPin size={16} />
                <span>Room XX<br />University Campus</span>
              </div> */}
              <div className="contact-item">
                <Mail size={16} />
                <span>info.victors.dce@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 XXXXXXXXXX</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="newsletter-mini">
              <h5>Stay Updated</h5>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button type="submit">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>
                © {currentYear} Victors Society. Made with{' '}
                <Heart size={16} className="heart-icon" /> by the Victors Tech Team.
              </p>
            </div>
            <div className="footer-bottom-links">
              <button onClick={scrollToTop} className="back-to-top">
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>

        {/* Footer Decoration */}
        <div className="footer-decoration">
          <div className="decoration-line"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;