import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Gallery.css';
import a from '../gallery/100.jpg';
import b from '../gallery/101.jpg';
import c from '../gallery/102.jpg';
import d from '../gallery/103.jpg';
import e from '../gallery/73.jpg';
import f from '../gallery/105.jpg';
import g from '../gallery/106.jpg';
import h from '../gallery/107.jpg';
import i from '../gallery/108.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: c,
      title: "Industry Panel Discussion",
      category: "Events",
      description: "Tech industry leaders sharing insights with our members"
    },
    {
      id: 2,
      src: a,
      title: "VictorHack 2024",
      category: "Hackathon",
      description: "48-hour hackathon with innovative project presentations"
    },
    {
      id: 3,
      src: b,
      title: "Team Building Workshop",
      category: "Workshop",
      description: "Members collaborating on technical challenges"
    },
    {
      id: 4,
      src: d,
      title: "Web Development Bootcamp",
      category: "Training",
      description: "Intensive coding session during our web development bootcamp"
    },
    {
      id: 5,
      src: f,
      title: "Award Ceremony",
      category: "Achievement",
      description: "Celebrating our Best Student Society award"
    },
    {
      id: 6,
      src: g,
      title: "AI Workshop",
      category: "Workshop",
      description: "Hands-on machine learning project development"
    },
    {
      id: 7,
      src: h,
      title: "Networking Session",
      category: "Networking",
      description: "Members connecting with alumni and industry professionals"
    },
    {
      id: 8,
      src: i,
      title: "Cybersecurity Seminar",
      category: "Seminar",
      description: "Learning about digital security and ethical hacking"
    },
    {
      id: 9,
      src: e,
      title: "Project Demo Day",
      category: "Showcase",
      description: "Students presenting their innovative projects"
    }
  ];

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">
            Capturing moments from our workshops, events, and community activities
          </p>
        </div>

        {/* Category Filter */}
        <div className="gallery-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openLightbox(image, index)}
            >
              <img src={image.src} alt={image.title} />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>{image.title}</h3>
                  <p>{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                <X size={24} />
              </button>
              
              <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
                <ChevronLeft size={24} />
              </button>
              
              <div className="lightbox-image">
                <img src={selectedImage.src} alt={selectedImage.title} />
              </div>
              
              <button className="lightbox-nav lightbox-next" onClick={nextImage}>
                <ChevronRight size={24} />
              </button>
              
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p className="lightbox-category">{selectedImage.category}</p>
                <p className="lightbox-description">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Gallery CTA */}
        <div className="gallery-cta">
          <div className="cta-content">
            <h3>Share Your Moments</h3>
            <p>Have photos from our events? We'd love to add them to our gallery!</p>
            <a href="#contact" className="btn btn-primary">Submit Photos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;