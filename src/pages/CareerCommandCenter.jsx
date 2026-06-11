import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Target, Briefcase, Award, Zap } from 'lucide-react';
import './CareerCommandCenter.css';

const activeMissions = [
  {
    id: 1,
    name: 'ServiceNow Internship Program',
    status: 'ACTIVE',
    focus: ['Enterprise Platforms', 'Workflow Automation', 'Digital Transformation']
  },
  {
    id: 2,
    name: 'AI/ML Internship Program (MPOnline)',
    status: 'ACTIVE',
    focus: ['Machine Learning', 'AI Applications', 'Intelligent Systems']
  },
  {
    id: 3,
    name: 'Software Engineering Internship Program (MPOnline)',
    status: 'ACTIVE',
    focus: ['Software Development', 'Engineering Practices', 'System Design']
  }
];

const acquiredSkills = [
  'Machine Learning', 'Data Analysis', 'Geospatial Analytics', 'Web Development',
  'FastAPI', 'React', 'Environmental Data Processing', 'Research',
  'Problem Solving', 'Team Collaboration'
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const CareerCommandCenter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ccc-page">
      <div className="ccc-container">
        
        {/* SECTION 1: HERO */}
        <motion.div 
          className="ccc-hero"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="ccc-syslog">SYSTEM.LOG // CAREER_COMMAND_CENTER</div>
          <h1 className="ccc-title">CAREER COMMAND CENTER</h1>
          <p className="ccc-subtitle">
            Tracking professional missions, internships, certifications, and industry experience across my AI journey.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* SECTION 2: ACTIVE MISSIONS */}
          <motion.div variants={itemVariants}>
            <h2 className="ccc-section-title"><Zap size={24} /> ACTIVE MISSIONS</h2>
            <div className="ccc-active-grid">
              {activeMissions.map(mission => (
                <div key={mission.id} className="ccc-card">
                  <div className="mission-card-header">
                    <h3 className="mission-name">{mission.name}</h3>
                    <div className="live-badge">
                      <div className="live-dot"></div>
                      LIVE
                    </div>
                  </div>
                  <div className="mission-status">Status: {mission.status}</div>
                  <div className="mission-focus-title">Focus:</div>
                  <ul className="mission-focus-list">
                    {mission.focus.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SECTION 3: COMPLETED MISSIONS */}
          <motion.div variants={itemVariants} className="ccc-completed">
            <h2 className="ccc-section-title"><Briefcase size={24} /> COMPLETED MISSIONS</h2>
            <div className="ccc-card completed-card">
              <div className="completed-badge">MISSION COMPLETED</div>
              <h3 className="completed-mission-name">NetZero Aqua</h3>
              <p className="completed-role">Geospatial Data Analyst & Web Development Intern</p>
              <p className="completed-duration">Dec 2025 – Mar 2026</p>
              
              <ul className="completed-highlights">
                <li>Designed and developed a complete web application supporting organizational workflows and operational data visualization.</li>
                <li>Extracted aquaculture and environmental datasets using Microsoft Planetary Computer Explorer APIs.</li>
                <li>Processed and analyzed water-quality datasets including pH, alkalinity, and turbidity parameters.</li>
                <li>Applied statistical and analytical techniques for environmental insights.</li>
              </ul>

              <a 
                href="https://drive.google.com/file/d/1il8ehZHjN_pi52DSWekgdImhIWU752zk/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-certificate"
              >
                View Internship Certificate <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>

          {/* SECTION 4: SKILLS ACQUIRED */}
          <motion.div variants={itemVariants} className="ccc-skills">
            <h2 className="ccc-section-title"><Award size={24} /> SKILLS ACQUIRED</h2>
            <div className="skills-grid">
              {acquiredSkills.map((skill, idx) => (
                <motion.div 
                  key={idx} 
                  className="skill-chip"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, type: 'spring' }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SECTION 5: NEXT OBJECTIVE */}
          <motion.div variants={itemVariants} className="ccc-target">
            <h2 className="ccc-section-title"><Target size={24} /> NEXT OBJECTIVE</h2>
            <div className="ccc-card target-card">
              <div className="target-content">
                <span className="target-label">NEXT TARGET</span>
                <h3 className="target-title">AI / ML Engineer</h3>
                <p className="target-desc">
                  Building intelligent systems, real-world AI products, and scalable machine learning applications for industry impact.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default CareerCommandCenter;
