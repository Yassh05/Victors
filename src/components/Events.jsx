import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';
import '../styles/Events.css';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: "AWS Hands-on Workshops",
      date: "2024-02-15",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab A",
      attendees: 45,
      // description: "Hands-on workshop covering fundamentals of AI and ML with practical projects using Python and TensorFlow.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      type: "Workshop",
      registrationLink: "#"
    },
  
    {
      id: 2,
      title: "Android App PRoject Series",
      date: "Stay tuned",
      time: "24 Hours",
      location: "Main Auditorium",
      attendees: 120,
      // description: "Annual hackathon bringing together students to build innovative solutions for real-world problems.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      type: "Hackathon",
      registrationLink: "#"
    },
    {
      id: 3,
      title: "Tech Talk Webinars",
      date: "2024-04-10",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      attendees: 80,
      // description: "Panel discussion with industry professionals about career paths, internships, and job opportunities in tech.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      type: "Panel Discussion",
      registrationLink: "#"
    }
  ];

  const pastEvents = [
    {
      id: 4,
       title: "TECHPRENEUR",
      date: "2024-03-28",
      location: "Study Hall",
      attendees: 35,
      description: "A high-energy startup pitching competition to fuel creativity, empower entrepreneurs, and turn ideas into reality.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      type: "Community Event",
      gallery: ["#", "#", "#"]
      
    },
    {
      id: 5,
      title: "Resume Building Workshop",
      date: "2024-09-27",
      time: "01:50 PM Onwards",
      location: "Seminar Hall",
      attendees: 60,
      description: "Comprehensive bootcamp covering modern web development with React, Node.js, and MongoDB.",
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      type: "Workshop",
      gallery: ["#", "#", "#"]
     
    },
    {
      id: 6,
      title: "Career Guidance and iOS Development",
      date: "2024-10-06",
      time: "12:00 PM Onwards",
      location: "Online",
      attendees: 60,
      description: "Comprehensive bootcamp covering modern web development with React, Node.js, and MongoDB.",
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      type: "Bootcamp",
      gallery: ["#", "#", "#"]
     
    },
    {
      id: 7,
      title: "WEB-IT-UP",
      date: "2024-10-25",
      time: "Full Day",
      location: "Computer Lab B",
      attendees: 60,
      description: "Comprehensive bootcamp covering modern web development with React, Node.js, and MongoDB.",
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      type: "Bootcamp",
      gallery: ["#", "#", "#"]
     
    },
    {
      id: 8,
      title: "Importance of DSA & PPS",
      date: "2024-11-17",
      time: "2:30 PM - 05:00 PM",
      location: "Lecture Hall 1",
      attendees: 85,
      description: "Educational webinar on Strengthening Data Structures & Algorithms + Problem-Solving skills with industry insights.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      type: "Webinar",
      gallery: ["#", "#", "#"]
    },
    {
      id: 9,
      title: "Foundations of Cloud Computing",
      date: "2024-12-15",
      time: "2:00 PM - 5:00 PM",
      location: "Online",
      attendees: 85,
      description: "Strategic overview session on Cloud Computing concepts.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      type: "Workshop",
      gallery: ["#", "#", "#"]
    },
    {
      id: 10,
      title: "PUBG Gaming Competition",
      date: "2025-01-31",
      // time: "2:00 PM - 5:00 PM",
      location: "Online",
      attendees: 85,
      description: "Strategic overview session on Cloud Computing concepts.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      type: "Gaming Event",
      gallery: ["#", "#", "#"]
    },
    {
      id: 11,
      title: "Hype your Profile",
      date: "2025-02-03",
      time: "6:30 PM - 8:00 PM",
      location: "Online",
      attendees: 85,
      description: "To guide students on growing their LinkedIn presence and building a strong personal brand.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      type: "Workshop",
      gallery: ["#", "#", "#"]
    },
    {
      id: 12,
      title: "Headshot Huslers",
      date: "2025-2-8",
      // time: "2:00 PM - 5:00 PM",
      location: "Lecture Hall 1",
      attendees: 85,
      description: "Fun and competitive gaming event for BGMI enthusiasts. ₹2000 cash prize, customized swags, free vouchers",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      type: "Gaming Event",
      gallery: ["#", "#", "#"]
    },
      {
      id: 13,
      title: "Cloud Computing Event",
      date: "",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab A",
      attendees: 120,
      // description: "Hands-on workshop covering fundamentals of AI and ML with practical projects using Python and TensorFlow.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      type: "Workshop",
      gallery: []
    },
  ];

  const events = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <section id="events" className="events">
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
                    <a href={event.registrationLink} className="btn btn-primary">
                      Register Now
                      <ExternalLink size={16} />
                    </a>
                  </div>
                ) : (
                  <div className="event-actions">
                    <button className="btn btn-secondary">View Gallery</button>
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