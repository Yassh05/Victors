import React from 'react';
import { ChevronRight, Users, Target, Trophy } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="brand-highlight">VICTORS</span>
            </h1>
            <p className="hero-subtitle">
              Empowering innovation, fostering collaboration, and building tomorrow's leaders through technology and teamwork.
            </p>
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Join Us
                <ChevronRight size={20} />
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('events')}
              >
                Explore Events
              </button>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="hero-stats">
            <div className="stat-card">
              <Users className="stat-icon" />
              <div className="stat-content">
                <h3>10+</h3>
                <p>Active Members</p>
              </div>
            </div>
            <div className="stat-card">
              <Target className="stat-icon" />
              <div className="stat-content">
                <h3>X</h3>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="stat-card">
              <Trophy className="stat-icon" />
              <div className="stat-content">
                <h3>X</h3>
                <p>Awards Won</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <div className="hero-logo">
            <div className="logo-circle">
              <span className="logo-letter">V</span>
            </div>
            <div className="logo-rings">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;