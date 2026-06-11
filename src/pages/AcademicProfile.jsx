import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, Award, ExternalLink, Zap, Network, LineChart, FileX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AcademicProfile.css';

// --- DATA DEFINITIONS ---

const educationTimeline = [
  {
    id: 'vit',
    institution: 'VIT Bhopal University',
    location: 'Bhopal, Madhya Pradesh',
    degree: 'B.Tech CSE (AI & ML)',
    duration: '2023 – 2027',
    scoreLabel: 'CGPA',
    score: '9.23 / 10',
    type: 'university'
  },
  {
    id: 'school12',
    institution: 'St. Mary\'s Senior Secondary School (CBSE)',
    location: 'Banda, Uttar Pradesh',
    degree: 'Class XII',
    duration: '2022 – 2023',
    scoreLabel: 'Score',
    score: '82.2%',
    type: 'school'
  },
  {
    id: 'school10',
    institution: 'St. Mary\'s Senior Secondary School (CBSE)',
    location: 'Banda, Uttar Pradesh',
    degree: 'Class X',
    duration: '2020 – 2021',
    scoreLabel: 'Score',
    score: '97%',
    type: 'school'
  }
];

const coursework = [
  { name: 'Data Structures & Algorithms', isAI: false },
  { name: 'Database Management Systems', isAI: false },
  { name: 'Operating Systems', isAI: false },
  { name: 'Computer Networks', isAI: false },
  { name: 'Object Oriented Programming', isAI: false },
  { name: 'Applied Machine Learning', isAI: true },
  { name: 'Artificial Neural Networks', isAI: true },
  { name: 'Deep Learning', isAI: true },
  { name: 'Natural Language Processing', isAI: true },
  { name: 'Computer Vision', isAI: true },
  { name: 'Reinforcement & Representational Learning', isAI: true }
];

const certifications = [
  {
    id: 'c1',
    title: 'Introduction to Internet of Things',
    provider: 'NPTEL',
    date: 'Apr 2026',
    link: 'https://drive.google.com/file/d/1xsN2MqLCHHbLZ883qLwPAQLn9k42iVmZ/view?usp=drive_link'
  },
  {
    id: 'c2',
    title: 'Machine Learning with Python',
    provider: 'Coursera',
    date: 'Jan 2026',
    link: 'https://drive.google.com/file/d/1LuX_3QOegeqRXTwy6V6PlFA5NKv9Byz1/view?usp=drive_link'
  },
  {
    id: 'c3',
    title: 'Cloud Practitioner Essentials',
    provider: 'AWS',
    date: 'Sep 2025',
    link: 'https://drive.google.com/file/d/1surERqXdY5lUOTuZlVzIsWb3duIAEQ79/view?usp=drive_link'
  },
  {
    id: 'c4',
    title: 'Cloud Computing',
    provider: 'NPTEL',
    date: 'May 2025',
    link: 'https://drive.google.com/file/d/10n9G8yg1YbA0Q0KCFHcmIG9DaESx5bua/view?usp=drive_link'
  },
  {
    id: 'c5',
    title: 'MATLAB Onramp',
    provider: 'MathWorks',
    date: 'Aug 2023',
    link: 'https://drive.google.com/file/d/10CWo3CTBkvNeXW0cOucirLdRyPcMkeW2/view?usp=drive_link'
  }
];

const snapshots = [
  { id: 'cgpa', label: 'CGPA', value: '9.23', suffix: ' / 10', icon: LineChart },
  { id: 'grad', label: 'Graduation', value: '2027', suffix: '', icon: GraduationCap },
  { id: '12th', label: 'Class XII', value: '82.2', suffix: '%', icon: Award },
  { id: '10th', label: 'Class X', value: '97', suffix: '%', icon: Award }
];

// --- COMPONENT ---

const AcademicProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const timelineLineVariants = {
    hidden: { height: 0 },
    visible: { height: '100%', transition: { duration: 1.5, ease: 'easeInOut' } }
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: 'spring' } }
  };

  return (
    <div className="academic-page">
      {/* Background elements */}
      <div className="ambient-bg gradient-1"></div>
      <div className="ambient-bg gradient-2"></div>
      <div className="particles-overlay"></div>
      
      <div className="academic-container">
        
        {/* HERO SECTION */}
        <motion.div 
          className="academic-hero flex flex-col items-center text-center pt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title glitch-text" data-text="ACADEMIC PROFILE" style={{ marginBottom: '16px' }}>ACADEMIC PROFILE</h1>
          
          <p className="hero-subtitle text-center" style={{ marginBottom: '32px' }}>
            Foundations of Artificial Intelligence, Machine Learning, and Computer Science.
          </p>
          
          <div className="snapshot-grid">
            {snapshots.map((snap, idx) => {
              const Icon = snap.icon;
              return (
                <motion.div 
                  key={snap.id} 
                  className="snapshot-card glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                >
                  <div className="snap-icon-wrapper">
                    <Icon size={20} />
                  </div>
                  <div className="snap-data">
                    <span className="snap-value">{snap.value}<span className="snap-suffix">{snap.suffix}</span></span>
                    <span className="snap-label">{snap.label}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div 
          className="academic-sections"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* SECTION 1: EDUCATION TIMELINE */}
          <motion.div className="timeline-section section-block" variants={itemVariants}>
            <h2 className="section-heading"><GraduationCap className="heading-icon" /> Education Timeline</h2>
            
            <div className="timeline-container">
              <motion.div 
                className="timeline-line"
                variants={timelineLineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              ></motion.div>
              
              {educationTimeline.map((edu, idx) => (
                <motion.div 
                  key={edu.id} 
                  className="timeline-item"
                  variants={timelineItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.4 }}
                >
                  <motion.div 
                    className="timeline-node"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (idx * 0.4), type: "spring" }}
                  >
                    <div className="node-core"></div>
                  </motion.div>
                  
                  <div className={`timeline-card glass-card education-card ${edu.type === 'university' ? 'highlight-border' : ''}`}>
                    {/* LEFT COLUMN */}
                    <div className="education-left">
                      <h3 className="institution">{edu.institution}</h3>
                      <p className="location text-sm text-gray-400 m-0"><MapPin size={14} className="inline mr-1" />{edu.location}</p>
                      <p className="degree text-lg font-semibold mt-4">{edu.degree}</p>
                    </div>
                    
                    {/* RIGHT COLUMN */}
                    <div className="education-right">
                      <span className="duration badge-glow"><Calendar size={14} className="inline mr-1"/> {edu.duration}</span>
                      
                      <div className="score-box">
                        <span className="score-label">{edu.scoreLabel}</span>
                        <span className="score-value">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SECTION 2: CORE COURSEWORK */}
          <motion.div className="coursework-section section-block" variants={itemVariants}>
            <h2 className="section-heading"><Network className="heading-icon" /> Core Coursework</h2>
            <div className="coursework-grid">
              {coursework.map((course, idx) => (
                <motion.div 
                  key={idx} 
                  className={`course-chip ${course.isAI ? 'ai-chip' : 'standard-chip'}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (idx * 0.05) }}
                >
                  {course.isAI && <Zap size={14} className="ai-icon" />}
                  <span>{course.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SECTION 3: CERTIFICATIONS */}
          <motion.div className="certifications-section section-block" variants={itemVariants}>
            <h2 className="section-heading"><Award className="heading-icon" /> Certifications</h2>
            <div className="cert-grid">
              {certifications.map(cert => (
                <div key={cert.id} className="cert-card glass-card">
                  <div className="cert-content">
                    <Award className="cert-badge-icon" />
                    <div className="cert-text flex-1">
                      <h3>{cert.title}</h3>
                      <p className="provider">{cert.provider}</p>
                      <p className="date text-sm opacity-70 mt-1"><Calendar size={12} className="inline mr-1" /> {cert.date}</p>
                    </div>
                  </div>
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link-btn active">
                      View Certificate <ExternalLink size={14} />
                    </a>
                  ) : (
                    <div className="cert-link-btn pending">
                      <FileX size={14} /> Certificate link pending
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default AcademicProfile;
