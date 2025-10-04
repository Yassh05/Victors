import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Team.css';

import yash from "../assets/yash1.jpg"
import garima from "../assets/Garima1.jpg"
import sanjit from "../assets/sanjit.jpg"
import bhavya from "../assets/bhavya.jpg"
import priyanshu from "../assets/priyanshu.jpg"
import riya from "../assets/riya.jpg"
import mukund from "../assets/mukund.jpg"
import garvit from "../assets/garvit.jpg"
import nandini from "../assets/nandini.png"
import keshav from "../assets/keshav.jpg"
import aditya from "../assets/aditya.jpg"
import pranay from "../assets/pranay.jpg"
import mahak from "../assets/mahak.jpg"
import vinay from "../assets/vinay.jpg"
import mentorImg from "../assets/mentor.jpg" // Add your mentor's image here


const Team = () =>{
  // Mentor details
  const mentor = {
    name: "Prof. Pooja Khot", // Replace with actual name
    role: "Faculty Mentor",
    description: "Guiding and inspiring the team with expertise, wisdom, and encouragement.", // Add a custom description
    image: mentorImg,
    skills: ["Mentorship", "Leadership", "Research"]
    // social: {
    //   // // github: "#",
    //   linkedin: "#",
    //   email: "khotp4103@gmail.com"
    // }
  };

  const teamMembers = [
    {
      name: "Pranay Jain",
      role: "Lead",
      description: "As a President, I see myself as a dedicated and responsible leader who inspires teamwork, encourages knowledge sharing, and creates an environment where everyone can learn, grow, and achieve their potential.",
      image: pranay,
      skills: [ "Leadership", "AWS", "EC2"],
      social: {
        // github: "#",
        linkedin: "https://www.linkedin.com/in/pranay-jain-470783293/",
        email: "jpranay216@gmail.com"
      }
    },
    {
      name: "Garima Verma",
      role: "Co-Lead",
      description: "A creative mind who codes, designs, and explores AI, leading the team with energy and innovation to make every event unforgettable.",
      image: garima,
      skills: ["Python", "AI & ML", "Figma"],
      social: {
        // github: "#",
        linkedin: "https://www.linkedin.com/in/16garimaverma",
        email: "garima16work5@gmail.com"
      }
    },
    {
      name: "Yash Sharma",
      role: "Tech Lead",
      description: "Front-end developer passionate about AI and machine learning. Responsible for technical architecture and mentoring junior developers.",
      image: yash,
      skills: ["React", "Python", "AI/ML"],
      social: {
        // // github: "https://github.com/Yassh05",
        linkedin: "https://www.linkedin.com/in/yashsharma05/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BQ5SERD1oQvWhfY59aApmuQ%3D%3D",
        email: "yashsharmaa555@gmail.com"
      }
    },
    {
      name: "Sanjit Rakshit",
      role: "Tech Lead",
      description: "As a Tech Lead, I focus on combining technical skills with teamwork and mentorship. I enjoy solving problems, guiding peers, and ensuring projects are built with quality and innovation.",
      image: sanjit,
      skills: ["Event Planning", "DSA" ,"Web DEV"],
      social: {
        // // github: "https://github.com/Sanjitrakshit",
        linkedin: "https://www.linkedin.com/in/sanjit-rakshit-093844367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "sanjitrksht@gmail.com"
      }
    },
     {
      name: "Keshav",
      role: "Cloud Lead",
      description: "Experienced in AWS services and cloud-native development, with a focus on optimizing infrastructure and enabling innovation for business growth.",
      image: keshav,
      skills: ["AWS", "Cloud", "DevOps"],
      social: {
        // github: "#",
        linkedin: "https://www.linkedin.com/in/keshav-kumar-3649812b5/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "keshavdeploys@gmail.com"
      }
    },
    {
      name: "Aditya",
      role: "Cloud Lead",
      description: "A versatile blend of cloud expertise and creative design, combining AWS architecture with graphic artistry.",
      image: aditya,
       skills: ["AWS", "Graphic Design", "Cloud"],
      social: {
        // github: "#",
        linkedin: "https://www.linkedin.com/in/aditya-singh-92b740289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "joshadityasingh@gmail.com"
      }
    },
    {
      name: "Riya",
      role: "Connectors Hub Lead",
      description: "Working to build strong partnerships with companies and startups by securing sponsorships and support for events, helping create opportunities that benefit and grow our college community.",
      image: riya,
      skills: ["Communacation Skill", "Networking", "Community Building"],
      social: {
        // github: "#",
        linkedin: "https://www.linkedin.com/in/riya-dobhal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "riyadobhal216@gmail.com"
      }
    },
    {
      name: "Bhavya",
      role: "Connectors Hub Lead",
      description: "Turning strangers into collaborators and ideas into impact.",
      image: bhavya,
      skills: ["Networking", "Collaboration", "Community Building"],
      social: {
        // // github: "https://github.com/Bhavya-sheoran/",
        linkedin: "https://www.linkedin.com/in/bhavya-sheoran?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "bhavyasheoran2000@gmail.com"
      }
    },
        {
      name: "Mahak",
      role: "Creative Cell Lead",
      description: "From engineering logic to creative UI/UX, I design functional and engaging digital experiences.",
      image: mahak,
      skills: ["UI", "Cyber", "Team Coordination"],
      social: {
        // github: "#",
        linkedin: "https://www.linkedin.com/in/mahak-sharma-8b6841378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "Sharmamahak247@gmail.com"
      }
    },
    {
      name: "Vinay",
      role: "Creative Cell Lead",
      description: "Creative editor and UI/UX enthusiast, blending design with functionality.",
      image: vinay,
      skills: ["Creative Thinking", "UI/UX", "Team Coordination"],
      social: {
        // github: "#",
        linkedin: "https://www.linkedin.com/in/vinay-singh-shekhawat-14a609350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "vinayshekhawat2004@gmail.com"
      }
    },
    {
      name: "Priyanshu",
      role: "Social Squad Lead",
      description: "Managing our digital presence and communications. Spreading the word about our amazing community and achievements.",
      image: priyanshu,
      skills: ["Digital Marketing", "Content Creation", "Social Media"],
      social: {
        // github: "#",
        linkedin: "https://www.linkedin.com/in/priyanshu-roy-596305289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "priyanshu.roy0525@gmail.com"
      }
    },
    {
      name: "Mukund",
      role: "Social Squad Lead",
      description: "Overseeing collaborative projects and ensuring smooth execution. Connecting members with exciting opportunities.",
      image: mukund,
      skills: ["Social Media", "UI", "UX"],
      social: {
        // github: "#",
        linkedin: "https://www.linkedin.com/in/mukund-rai-179922326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "chanchala8743@gmail.com"
      }
    },
    
    {
      name: "Garvit Anand",
      role: "Event Crew Lead",
      description: "Event Management Lead. Bringing ideas to life by planning and organizing engaging events that run smoothly and create lasting memories.",
      image: garvit,
      skills: ["Planning", "Communication", "Team Coordination"],
      social: {
        // github: "#",
        linkedin:"https://www.linkedin.com/in/garvit-anand-978a82209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "garvit1310@gmail.com"
      }
    },
    {
      name: "Nandini",
      role: "Event Crew Lead",
      description: "Overseeing collaborative projects and ensuring smooth execution. Connecting members with exciting opportunities.",
      image: nandini,
      skills: ["Project Management", "WEB DEV", "Team Coordination"],
      social: {
        // // // github: "https://github.com/nandini06483",
        linkedin: "https://www.linkedin.com/in/nandini-23650b335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "nandini3306@gmail.com"
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

        {/* Mentor Card (centered above team) */}
        <div className="mentor-card" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div className="team-card" style={{ maxWidth: 350 }}>
            <div className="member-image">
              <img src={mentor.image} alt={mentor.name} />
              <div className="member-overlay">
                {/* <div className="social-links">
                  {/* <a href={mentor.social.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer"> */}
                  {/* <Github size={20} /> */}
                  {/* </a> */}
                  {/* <a href={mentor.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"> */}
                    {/* <Linkedin size={20} /> */}
                  {/* </a> */}
                  {/* <a href={`mailto:${mentor.social.email}`} aria-label="Email"> */}
                    {/* <Mail size={20} /> */}
                  {/* </a> */}
                {/* </div> */} 
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">{mentor.name}</h3>
              <p className="member-role">{mentor.role}</p>
              <p className="member-description">{mentor.description}</p>
              <div className="member-skills">
                {mentor.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-overlay">
                  <div className="social-links">
                    {/* <a href={member.social.github} aria-label="GitHub"  target="_blank" rel="noopener noreferrer"> */}
                      {/* <Github size={20} /> */}
                    {/* </a> */}
                    <a href={member.social.linkedin} aria-label="LinkedIn"  target="_blank" rel="noopener noreferrer">
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
