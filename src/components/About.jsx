import React from 'react';
import { Target, Eye, Heart, Code, Users, Lightbulb } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const values = [
    {
      icon: <Code />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve real-world problems."
    },
    {
      icon: <Users />,
      title: "Collaboration",
      description: "Together we achieve more. We foster teamwork and knowledge sharing among our members."
    },
    {
      icon: <Lightbulb />,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from projects to personal growth."
    },
    {
      icon: <Heart />,
      title: "Impact",
      description: "We focus on creating meaningful change in our college community and beyond."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">About Victors</h2>
          <p className="section-subtitle">
            Discover our story, mission, and the values that drive us forward
          </p>
        </div>

        {/* About Content */}
        <div className="about-content">
          {/* Story */}
          <div className="about-story">
            <div className="story-text">
              <h3>Our Story</h3>
              <p>
                Founded in 2024 by a group of passionate computer science students, Victors began as a 
                small tech community focused on learning and building together. What started as weekend 
                coding sessions has evolved into one of the most dynamic societies in our college.
              </p>
              <p>
                Today, we're a thriving community of developers, designers, innovators, and leaders who 
                believe in the power of technology to create positive change. Our members come from diverse 
                backgrounds, united by a shared passion for excellence and innovation.
              </p>
            </div>
            <div className="story-visual">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-event">Society Founded</div>
                </div>
                {/* <div className="timeline-item">
                  <div className="timeline-year">2021</div>
                  <div className="timeline-event">First Hackathon Win</div>
                </div> */}
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-event">10+ Members</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2025</div>
                  <div className="timeline-event">??</div>
                </div>
                {/* <div className="timeline-item">
                  <div className="timeline-year">2023</div>
                  <div className="timeline-event">Tech Lead Program</div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mission-vision">
            <div className="mission-card">
              <Target className="card-icon" />
              <h3>Our Mission</h3>
              <p>
                To create an inclusive environment where students can develop their technical skills, 
                collaborate on innovative projects, and grow as future technology leaders.
              </p>
            </div>
            <div className="vision-card">
              <Eye className="card-icon" />
              <h3>Our Vision</h3>
              <p>
                To be the leading student technology society that bridges the gap between academic 
                learning and industry requirements, fostering the next generation of tech innovators.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="core-values">
            <h3>Our Core Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;