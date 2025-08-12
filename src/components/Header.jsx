import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import '../styles/Header.css';

const Header = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo and Brand */}
        <div className="header-brand">
          <div className="logo">
            <span className="logo-text">VICTORS</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#team" onClick={() => scrollToSection('team')}>Team</a></li>
            <li><a href="#events" onClick={() => scrollToSection('events')}>Events</a></li>
            <li><a href="#achievements" onClick={() => scrollToSection('achievements')}>Achievements</a></li>
            <li><a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a></li>
            <li><a href="#blog" onClick={() => scrollToSection('blog')}>Blog</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>

        {/* Theme Toggle and Mobile Menu Button */}
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMenuOpen ? 'nav-mobile-open' : ''}`}>
          <ul className="nav-mobile-list">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#team" onClick={() => scrollToSection('team')}>Team</a></li>
            <li><a href="#events" onClick={() => scrollToSection('events')}>Events</a></li>
            <li><a href="#achievements" onClick={() => scrollToSection('achievements')}>Achievements</a></li>
            <li><a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a></li>
            <li><a href="#blog" onClick={() => scrollToSection('blog')}>Blog</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;