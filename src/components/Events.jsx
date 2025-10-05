import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Events.css';
import workshop from '../gallery/workshop.jpg';
import bgmi from '../gallery/bgmi.jpg';
import webitup from '../gallery/web.jpg';
import care from '../gallery/care.jpg';
import techv from '../gallery/tech.jpg';
import ppsv from '../gallery/pps.jpg';
import foundv from '../gallery/foundation.jpg';
import head from '../gallery/headshot.jpg';
import cloud from '../gallery/cloud.jpg';
// import hypev from '../gallery/hype.jpg';
import seven from '../gallery/71.jpg';
import sevenone from '../gallery/72.jpg';
import seventwo from '../gallery/73.jpg';
import six from '../gallery/61.jpg';
import sixone from '../gallery/62.jpg';
import five from '../gallery/51.jpg';
import fiveone from '../gallery/52.jpg';
import nine from '../gallery/91.jpg';
import welcome from '../gallery/tech2.png';
import x from '../gallery/image.png'
import bgmi2 from '../gallery/bgmi2.png'
import tech2 from '../gallery/2_0new.png'


const GalleryLightbox = ({ images, title, description, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="lightbox">
      <div className="lightbox-content">
        <button className="lightbox-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="lightbox-image">
          <img src={images[currentIndex]} alt={`Gallery image ${currentIndex + 1}`} />
          
          {images.length > 1 && (
            <>
              <button className="lightbox-nav lightbox-prev" onClick={handlePrev}>
                <ChevronLeft size={24} />
              </button>
              <button className="lightbox-nav lightbox-next" onClick={handleNext}>
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="lightbox-info">
          <h3>{title}</h3>
          <p className="lightbox-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

const GalleryModal = ({ images, onClose }) => {
  return (
    <div className="gallery-modal">
      <div className="gallery-content">
        <button onClick={onClose} className="close-button">&times;</button>
        <div className="gallery-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Gallery image ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedGallery, setSelectedGallery] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: "TECHPRENEUR 2.0",
      date: "2025-10-17",
      time: "10:00 AM - 03:00 PM",
      location: "Dronacharya College of Engineering",
      attendees: 100,
      // description: "Hands-on workshop covering fundamentals of AI and ML with practical projects using Python and TensorFlow.",
      image: tech2,
      type: "Workshop",
      registrationLink: "https://unstop.com/o/9j2EJqZ?lb=wE7mLjgs"
    },
  
    // {
    //   id: 2,
    //   title: "Cloud Computing Event",
    //   date: "Stay tuned",
    //   time: "24 Hours",
    //   location: "Main Auditorium",
    //   attendees: 120,
    //   description: "Coming Soon.",
    //   image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    //   type: "Hackathon",
    //   registrationLink: "#"
    // },
    // {
    //   id: 3,
    //   title: "Tech Talk Webinars",
    //   date: "2024-04-10",
    //   time: "2:00 PM - 5:00 PM",
    //   location: "Virtual Event",
    //   attendees: 80,
    //   // description: "Panel discussion with industry professionals about career paths, internships, and job opportunities in tech.",
    //   image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    //   type: "Panel Discussion",
    //   registrationLink: "#"
    // }
  ];

  const pastEvents = [
    {
      id: 4,
       title: "TECHPRENEUR",
      date: "2024-03-28",
      location: "Study Hall",
      attendees: 35,
      description: "A high-energy startup pitching competition to fuel creativity, empower entrepreneurs, and turn ideas into reality.",
      image: x,
      type: "Community Event",
      gallery: [techv]
      
    },
    {
      id: 5,
      title: "Resume Building Workshop",
      date: "2024-09-27",
      time: "01:50 PM Onwards",
      location: "Seminar Hall",
      attendees: 60,
      description: "Comprehensive bootcamp covering modern web development with React, Node.js, and MongoDB.",
      image: workshop,
      type: "Workshop",
      gallery: [workshop, five, fiveone]
     
    },
    {
      id: 6,
      title: "Career Guidance and iOS Development",
      date: "2024-10-06",
      time: "12:00 PM Onwards",
      location: "Online",
      attendees: 60,
      description: "Comprehensive bootcamp covering modern web development with React, Node.js, and MongoDB.",
      image: six,
      type: "Bootcamp",
      gallery: [six, cloud, sixone]
     
    },
    {
      id: 7,
      title: "WEB-IT-UP",
      date: "2024-10-25",
      time: "Full Day",
      location: "Computer Lab B",
      attendees: 60,
      description: "Comprehensive bootcamp covering modern web development with React, Node.js, and MongoDB.",
      image: webitup,
      type: "Bootcamp",
      gallery: [seven, sevenone, seventwo]
     
    },
    {
      id: 8,
      title: "Importance of DSA & PPS",
      date: "2024-11-17",
      time: "2:30 PM - 05:00 PM",
      location: "Lecture Hall 1",
      attendees: 85,
      description: "Educational webinar on Strengthening Data Structures & Algorithms + Problem-Solving skills with industry insights.",
      image: ppsv,
      type: "Webinar",
      gallery: [care, cloud, ppsv]
    },
    {
      id: 9,
      title: "Foundations of Cloud Computing",
      date: "2024-12-15",
      time: "2:00 PM - 5:00 PM",
      location: "Online",
      attendees: 85,
      description: "Strategic overview session on Cloud Computing concepts.",
      image: foundv,
      type: "Workshop",
      gallery: [foundv, nine, cloud]
    },
    {
      id: 10,
      title: "Headshot Huslers",
      date: "2025-01-31",
      // time: "2:00 PM - 5:00 PM",
      location: "Online",
      attendees: 85,
      description: "Fun and competitive gaming event for BGMI enthusiasts. ₹2000 cash prize, customized swags, free vouchers.",
      image: bgmi2,
      type :"Gaming Event",
      gallery: [bgmi,head]
    }
    // {
    //   id: 11,
    //   title: "Hype your Profile",
    //   date: "2025-02-03",
    //   time: "6:30 PM - 8:00 PM",
    //   location: "Online",
    //   attendees: 85,
    //   description: "To guide students on growing their LinkedIn presence and building a strong personal brand.",
    //   image: hypev,
    //   type: "Workshop",
    //   gallery: ["#", "#", "#"]
    // }
    // {
    //   id: 12,
    //   title: "Headshot Huslers",
    //   date: "2025-2-8",
    //   // time: "2:00 PM - 5:00 PM",
    //   location: "Lecture Hall 1",
    //   attendees: 85,
    //   description: "Fun and competitive gaming event for BGMI enthusiasts. ₹2000 cash prize, customized swags, free vouchers",
    //   image: head,
    //   type: "Gaming Event",
    //   gallery: ["#", "#", "#"]
    // },
    //   {
    //   id: 13,
    //   title: "Cloud Computing Event",
    //   date: "",
    //   time: "10:00 AM - 4:00 PM",
    //   location: "Computer Lab A",
    //   attendees: 120,
    //   // description: "Hands-on workshop covering fundamentals of AI and ML with practical projects using Python and TensorFlow.",
    //   image: cloud,
    //   type: "Workshop",
    //   gallery: []
    // },
  ];

  const events = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <section id="events" className="events">
      {selectedGallery && (
        <GalleryLightbox
          images={selectedGallery.images}
          title={selectedGallery.title}
          description={selectedGallery.description}
          onClose={() => setSelectedGallery(null)}
        />
      )}
      <div className="events-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Events</h2>
          <p className="section-subtitle">
            Join us for exciting workshops, hackathons, and networking opportunities
          </p>
        </div>

        {/* Event Tabs */}
        <div className="event-tabs">
          <button 
            className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events
          </button>
          <button 
            className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            Past Events
          </button>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-type">{event.type}</div>
              </div>
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                
                <div className="event-details">
                  <div className="event-detail">
                    <Calendar size={16} />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="event-detail">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="event-detail">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="event-detail">
                    <Users size={16} />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                {activeTab === 'upcoming' ? (
                  <div className="event-actions">
                    <a href={event.registrationLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Register Now
                      <ExternalLink size={16} />
                    </a>
                  </div>
                ) : (
                  <div className="event-actions">
                    <button 
                      className="btn btn-secondary"
                      onClick={() => {
                        if (event.gallery && event.gallery[0] !== "#") {
                          setSelectedGallery({
                            images: event.gallery,
                            title: event.title,
                            description: event.description
                          });
                        }
                      }}
                    >
                      View Gallery
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Event Submission CTA */}
        <div className="event-cta">
          <div className="cta-content">
            <h3>Have an Event Idea?</h3>
            <p>We're always looking for new workshop topics and event suggestions from our community.</p>
            <a href="#contact" className="btn btn-primary">Suggest an Event</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;