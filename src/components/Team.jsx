import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Team.css';
import yoyo1 from "../assets/react.svg"
import yash from "../assets/yash.jpg"
import garima from "../assets/Garima1.jpg"
import sanjit from "../assets/sanjit.jpg"
import bhavya from "../assets/bhavya.jpg"
import priyanshu from "../assets/priyanshu.jpg"
import riya from "../assets/riya.jpg"
import mukund from "../assets/mukund.jpg"




const Team = () =>{
  const teamMembers = [
    {
      name: "Pranay Jain",
      role: "Lead",
      description: "Leading our society towards new technological frontiers.",
      image: yoyo1,
      skills: [ "Leadership"],
      social: {
        github: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Garima Verma",
      role: "Co-Lead",
      description: "UI/UX designer and frontend developer. Ensuring our projects are not just functional but beautiful and user-friendly.",
      image: garima,
      skills: ["UI/UX", "React", "Figma"],
      social: {
        github: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Yash Sharma",
      role: "Tech Lead",
      description: "Front-end developer passionate about AI and machine learning. Responsible for technical architecture and mentoring junior developers.",
      image: yash,
      skills: ["React", "Python", "AI/ML"],
      social: {
        github: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Sanjit",
      role: "Tech Coordinator",
      description: "Organizing workshops, hackathons, and tech talks. Building bridges between industry and academia.",
      image: sanjit,
      skills: ["Event Planning", "Public Speaking", "Community Building"],
      social: {
        github: "#",
        linkedin: "#",
        email: ""
      }
    },
    {
      name: "Priyanshu",
      role: "Social Squad Lead",
      description: "Managing our digital presence and communications. Spreading the word about our amazing community and achievements.",
      image: priyanshu,
      skills: ["Digital Marketing", "Content Creation", "Social Media"],
      social: {
        github: "#",
        linkedin: "#",
        email: ""
      }
    },
    {
      name: "Mukund",
      role: "Social Squad Coordinator",
      description: "Overseeing collaborative projects and ensuring smooth execution. Connecting members with exciting opportunities.",
      image: mukund,
      skills: ["Project Management", "Agile", "Team Coordination"],
      social: {
        github: "#",
        linkedin: "#",
        email: ""
      }
    },
    {
      name: "Riya",
      role: "Connectors Hub Lead",
      description: "Overseeing collaborative projects and ensuring smooth execution. Connecting members with exciting opportunities.",
      image: riya,
      skills: ["Project Management", "Agile", "Team Coordination"],
      social: {
        github: "#",
        linkedin: "#",
        email: ""
      }
    },
    {
      name: "Bhavya",
      role: "Connectors Hub Coordinator",
      description: "Overseeing collaborative projects and ensuring smooth execution. Connecting members with exciting opportunities.",
      image: bhavya,
      skills: ["Project Management", "Agile", "Team Coordination"],
      social: {
        github: "#",
        linkedin: "#",
        email: ""
      }
    },
    {
      name: "Garvit Anand",
      role: "Event Crew Lead",
      description: "Overseeing collaborative projects and ensuring smooth execution. Connecting members with exciting opportunities.",
      image: "#",
      skills: ["Project Management", "Agile", "Team Coordination"],
      social: {
        github: "#",
        linkedin: "#",
        email: ""
      }
    },
    {
      name: "Nandini",
      role: "Event Crew Coordinator",
      description: "Overseeing collaborative projects and ensuring smooth execution. Connecting members with exciting opportunities.",
      image: "#",
      skills: ["Project Management", "Agile", "Team Coordination"],
      social: {
        github: "#",
        linkedin: "#",
        email: ""
      }
    },
    {
      name: "Mahak",
      role: "Creative Cell Coordinator",
      description: "Overseeing collaborative projects and ensuring smooth execution. Connecting members with exciting opportunities.",
      image: "#",
      skills: ["Project Management", "Agile", "Team Coordination"],
      social: {
        github: "#",
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Vinay",
      role: "Creative Cell Coordinator",
      description: "Overseeing collaborative projects and ensuring smooth execution. Connecting members with exciting opportunities.",
      image: "#",
      skills: ["Project Management", "Agile", "Team Coordination"],
      social: {
        github: "#",
        linkedin: "#",
        email: "#"
      }
    }
  ];

  return (
    <section id="team" className="team">
      <div className="team-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            The passionate leaders driving innovation and fostering growth in our community
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-overlay">
                  <div className="social-links">
                    <a href={member.social.github} aria-label="GitHub">
                      <Github size={20} />
                    </a>
                    <a href={member.social.linkedin} aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${member.social.email}`} aria-label="Email">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
                <div className="member-skills">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="join-team-cta">
          <div className="cta-content">
            <h3>Want to Join Our Team?</h3>
            <p>We're always looking for passionate individuals to join our leadership team.</p>
            <a href="#contact" className="btn btn-primary">Get Involved</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;