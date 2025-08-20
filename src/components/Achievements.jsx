import React from 'react';
import { Trophy, Award, Star, Users, Calendar, Target } from 'lucide-react';
import '../styles/Achievements.css';

const Achievements = () => {
  const achievements = [
    // {
    //   title: "Best Student Society 2023",
    //   category: "College Recognition",
    //   date: "December 2023",
    //   description: "Awarded the prestigious 'Best Student Society' title by the college administration for outstanding contribution to student development and innovation.",
    //   icon: <Trophy />,
    //   color: "gold"
    // },
    // {
    //   title: "HackFest National Champions",
    //   category: "Competition",
    //   date: "October 2023",
    //   description: "Our team 'CodeCrusaders' won the national hackathon with an innovative AI-powered solution for sustainable agriculture.",
    //   icon: <Award />,
    //   color: "blue"
    // },
    {
      title: "100+ Workshop Participants",
      category: "Community Impact",
      date: "Year 2023",
      description: "Successfully conducted workshops that trained over 500 students in various technologies including web development, AI, and cybersecurity.",
      icon: <Users />,
      color: "green"
    },
    {
      title: "Industry Partnership Program",
      category: "Collaboration",
      date: "August 2023",
      description: "Established partnerships with 5 leading tech companies providing internship and job opportunities for our members.",
      icon: <Target />,
      color: "purple"
    },
    // {
    //   title: "Open Source Contributor Award",
    //   category: "Development",
    //   date: "June 2023",
    //   description: "Recognized for contributing over 100 commits to various open source projects, making significant impact in the developer community.",
    //   icon: <Star />,
    //   color: "orange"
    // },
    // {
    //   title: "Tech Innovation Award",
    //   category: "Innovation",
    //   date: "April 2023",
    //   description: "Received the Tech Innovation Award for developing a campus management system that improved administrative efficiency by 40%.",
    //   icon: <Award />,
    //   color: "blue"
    // }
  ];

  const stats = [
    { number: "10+", label: "Active Members", icon: <Users /> },
    // { number: "25+", label: "Projects Completed", icon: <Target /> },
    // { number: "15+", label: "Awards Won", icon: <Trophy /> },
    { number: "200+", label: "Students Trained", icon: <Star /> },
    { number: "1", label: "Years of Excellence", icon: <Calendar /> },
    // { number: "5", label: "Industry Partners", icon: <Award /> }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="achievements-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Our Achievements</h2>
          <p className="section-subtitle">
            Celebrating our milestones and recognizing the hard work of our dedicated community
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="achievement-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className={`achievement-card ${achievement.color}`}>
              <div className="achievement-header">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-meta">
                  <span className="achievement-category">{achievement.category}</span>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
              <div className="achievement-glow"></div>
            </div>
          ))}
        </div>

        {/* Achievement CTA */}
        <div className="achievement-cta">
          <div className="cta-content">
            <h3>Want to Be Part of Our Success Story?</h3>
            <p>Join Victors and contribute to our growing list of achievements while building your own skills and network.</p>
            <a href="#contact" className="btn btn-primary">Join Us Today</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;