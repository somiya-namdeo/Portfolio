import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, GraduationCap, Calendar, Award, ExternalLink, Zap, Network, BrainCircuit, LineChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AcademicProfile.css';

// --- DATA DEFINITIONS ---

const educationTimeline = [
  {
    id: 'vit',
    institution: 'VIT Bhopal University',
    location: 'Bhopal, Madhya Pradesh, India',
    degree: 'B.Tech Computer Science & Engineering',
    specialization: 'Artificial Intelligence & Machine Learning',
    duration: '2023 \u2013 2027',
    scoreLabel: 'CGPA',
    score: '9.23 / 10',
    type: 'university'
  },
  {
    id: 'school12',
    institution: 'St. Mary\'s Senior Secondary School (CBSE)',
    location: 'Banda, Uttar Pradesh, India',
    degree: 'Class XII',
    duration: '2022 \u2013 2023',
    scoreLabel: 'Score',
    score: '82.2%',
    type: 'school'
  },
  {
    id: 'school10',
    institution: 'St. Mary\'s Senior Secondary School (CBSE)',
    location: 'Banda, Uttar Pradesh, India',
    degree: 'Class X',
    duration: '2020 \u2013 2021',
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
    title: 'Machine Learning Specialization',
    provider: 'DeepLearning.AI & Coursera',
    link: '#'
  },
  {
    id: 'c2',
    title: 'Data Structures and Algorithms in Python',
    provider: 'NPTEL',
    link: '#'
  },
  {
    id: 'c3',
    title: 'Internet of Things',
    provider: 'NPTEL',
    link: '#'
  },
  {
    id: 'c4',
    title: 'Advanced AI Architectures',
    provider: 'Pending Completion',
    link: '#'
  }
];

const snapshots = [
  { id: 'cgpa', label: 'Current CGPA', value: '9.23', suffix: '/ 10', icon: LineChart },
  { id: 'grad', label: 'Expected Graduation', value: '2027', suffix: '', icon: GraduationCap },
  { id: '12th', label: 'Class XII Score', value: '82.2', suffix: '%', icon: Award },
  { id: '10th', label: 'Class X Score', value: '97', suffix: '%', icon: Award }
];

// --- COMPONENT ---

const AcademicProfile = () => {
  const navigate = useNavigate();

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

  return (
    <div className="academic-page page-container">
      {/* Background elements */}
      <div className="ambient-bg gradient-1"></div>
      <div className="ambient-bg gradient-2"></div>
      <div className="particles-overlay"></div>
      
      <div className="page-header overlay-header">
        <button onClick={() => navigate('/')} className="return-btn">
          <ArrowLeft size={16} /> Return to Neural Hub
        </button>
      </div>

      <div className="academic-content">
        <motion.div 
          className="section-title text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap size={44} className="title-icon mx-auto mb-4 text-blue-500" />
          <h1 className="glitch-text text-5xl font-extrabold mb-4" data-text="Academic Profile">Academic Profile</h1>
          <p className="subtitle text-xl text-blue-300">Foundations of Artificial Intelligence & Computer Science</p>
        </motion.div>

        <motion.div 
          className="academic-sections"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* SECTION 5: ACADEMIC SNAPSHOT (Moved to top for instant impact) */}
          <motion.div className="snapshot-grid mb-16" variants={itemVariants}>
            {snapshots.map(snap => {
              const Icon = snap.icon;
              return (
                <div key={snap.id} className="snapshot-card glass-card">
                  <div className="snap-icon-wrapper">
                    <Icon size={24} />
                  </div>
                  <div className="snap-data">
                    <span className="snap-value">{snap.value}<span className="snap-suffix">{snap.suffix}</span></span>
                    <span className="snap-label">{snap.label}</span>
                  </div>
                </div>
              )
            })}
          </motion.div>

          {/* SECTION 1: EDUCATION TIMELINE */}
          <motion.div className="timeline-section mb-16" variants={itemVariants}>
            <h2 className="section-heading"><GraduationCap className="heading-icon" /> Education Timeline</h2>
            
            <div className="timeline-container">
              <div className="timeline-line"></div>
              
              {educationTimeline.map((edu, idx) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-node">
                    <div className="node-core"></div>
                  </div>
                  
                  <div className={`timeline-card glass-card ${edu.type === 'university' ? 'highlight-border' : ''}`}>
                    <div className="card-header-flex">
                      <h3 className="institution">{edu.institution}</h3>
                      <span className="duration badge-glow"><Calendar size={14}/> {edu.duration}</span>
                    </div>
                    
                    <p className="location"><MapPin size={14}/> {edu.location}</p>
                    
                    <div className="degree-info">
                      <p className="degree">{edu.degree}</p>
                      {edu.specialization && (
                        <p className="specialization text-blue-400 font-medium mt-1">{edu.specialization}</p>
                      )}
                    </div>
                    
                    <div className="score-box mt-4">
                      <span className="score-label">{edu.scoreLabel}</span>
                      <span className="score-value">{edu.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SECTION 3: AI SPECIALIZATION (Highlighted Middle Section) */}
          <motion.div className="specialization-section mb-16" variants={itemVariants}>
            <div className="glass-card premium-highlight-card">
              <div className="glow-orb top-right"></div>
              <div className="glow-orb bottom-left"></div>
              
              <div className="highlight-content">
                <BrainCircuit size={40} className="highlight-icon mb-4" />
                <h2>Artificial Intelligence & Machine Learning Specialization</h2>
                <p className="desc mt-4">
                  Focused academic training in Machine Learning, Neural Networks, Deep Learning, Natural Language Processing, Computer Vision, and Reinforcement Learning.
                </p>
                <p className="desc mt-2 font-medium text-blue-300">
                  Hands-on implementation through real-world AI systems including CareerLens AI, HerSakhi, Cognivue, and Trinetra AI.
                </p>
              </div>
            </div>
          </motion.div>

          {/* SECTION 2: CORE COURSEWORK */}
          <motion.div className="coursework-section mb-16" variants={itemVariants}>
            <h2 className="section-heading"><Network className="heading-icon" /> Core Coursework</h2>
            <div className="coursework-grid">
              {coursework.map((course, idx) => (
                <div key={idx} className={`course-chip ${course.isAI ? 'ai-chip' : 'standard-chip'}`}>
                  {course.isAI && <Zap size={14} className="ai-icon" />}
                  <span>{course.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SECTION 4: CERTIFICATIONS */}
          <motion.div className="certifications-section mb-16" variants={itemVariants}>
            <h2 className="section-heading"><Award className="heading-icon" /> Certifications</h2>
            <div className="cert-grid">
              {certifications.map(cert => (
                <div key={cert.id} className="cert-card glass-card">
                  <div className="cert-content">
                    <Award className="cert-badge-icon" />
                    <div className="cert-text">
                      <h3>{cert.title}</h3>
                      <p>{cert.provider}</p>
                    </div>
                  </div>
                  <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link-btn">
                    View Certificate <ExternalLink size={14} />
                  </a>
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
