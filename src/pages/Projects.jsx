import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsDb = [
  // FEATURED SYSTEMS
  {
    id: 'careerlens',
    title: 'CareerLens AI',
    domain: 'Machine Learning',
    status: 'LIVE',
    logo: 'careerlens-ai.png',
    overview: 'An AI-driven platform that analyzes resumes against job descriptions to provide automated ATS scoring and tailored career growth recommendations.',
    features: ['Resume Analysis', 'Hire Prediction', 'Job Role Prediction', 'Salary Prediction', 'Skill Gap Analysis'],
    tech: ['Python', 'Scikit-Learn', 'Pandas'],
    repo: 'https://github.com/somiya-namdeo/CareerLens-AI', live: 'https://career-lens-ai-two.vercel.app',
    category: 'featured'
  },
  {
    id: 'hersakhi',
    title: 'HerSakhi',
    domain: 'Intelligent Application',
    status: 'LIVE',
    logo: 'hersakhi.png',
    overview: 'A mobile application dedicated to women\'s safety and empowerment, featuring emergency SOS alerts, trusted contacts, and community support forums.',
    features: ['Period Tracking', 'Wellness Analytics', 'AI Assistant', 'SOS Alerts'],
    tech: ['React Native', 'Node.js', 'MongoDB'],
    repo: 'https://github.com/somiya-namdeo/HerSakhi-Wellness-Platform', live: 'https://her-sakhi-wellness-platform.vercel.app',
    category: 'featured'
  },
  {
    id: 'cognivue',
    title: 'Cognivue',
    domain: 'Computer Vision',
    status: 'LIVE',
    logo: 'cognivue.png',
    overview: 'A computer vision application that processes video feeds in real-time to detect specific objects and anomalies for security surveillance.',
    features: ['Real-time object detection', 'Low-latency video processing', 'Automated anomaly alerts'],
    tech: ['React', 'OpenCV', 'FastAPI'],
    repo: 'https://github.com/somiya-namdeo/Cognivue', live: 'https://cognivue-kappa.vercel.app',
    category: 'featured'
  },
  {
    id: 'trinetra',
    title: 'Trinetra AI',
    domain: 'Intelligent Application + ML Risk Prediction',
    status: 'LIVE',
    logo: 'trinetra-ai.png',
    overview: 'An intelligent surveillance and threat-detection system utilizing multi-modal data processing for advanced security monitoring.',
    features: ['Risk Prediction', 'Incident Intelligence', 'Alert Prioritization', 'Analytics Dashboard'],
    tech: ['Python', 'Deep Learning', 'FastAPI'],
    repo: 'https://github.com/somiya-namdeo/Trinetra-AI', live: 'https://trinetra-ai-eight.vercel.app',
    category: 'featured'
  },

  // RESEARCH & ACADEMIC
  {
    id: 'hindi-sentiment',
    title: 'Hindi Sentiment Analysis',
    domain: 'NLP',
    status: 'Academic',
    logo: 'hindi-sentiment-analysis.png',
    overview: 'A specialized NLP model trained to accurately classify sentiment in Hindi text, accounting for regional dialects and mixed-language (Hinglish) inputs.',
    features: ['Custom transformer fine-tuning', 'Support for Hinglish syntax', 'Real-time inference API'],
    tech: ['NLTK', 'Transformers', 'PyTorch'],
    repo: 'https://github.com/somiya-namdeo/SENTIMENT-ANALYSIS-', live: null,
    category: 'academic'
  },
  {
    id: 'hand-mouse',
    title: 'Hand Tracking Mouse',
    domain: 'Computer Vision',
    status: 'Academic',
    logo: 'hand-tracking-mouse.png',
    overview: 'An interactive application that replaces a physical computer mouse with hand-gesture tracking using an ordinary webcam.',
    features: ['Real-time hand landmark tracking', 'Click gesture recognition', 'Low-friction OS integration'],
    tech: ['MediaPipe', 'OpenCV', 'PyAutoGUI'],
    repo: 'https://github.com/somiya-namdeo/hand-tracking-mouse-opencv-mediapipe', live: null,
    category: 'academic'
  },
  {
    id: 'pothole',
    title: 'Pothole Detection',
    domain: 'Computer Vision',
    status: 'Academic',
    logo: 'pothole-detection.png',
    overview: 'Computer vision model designed to detect and map road potholes in real-time to aid autonomous vehicle navigation and city infrastructure planning.',
    features: ['Real-time object detection', 'Geotagging integration', 'High-accuracy YOLOv8 model'],
    tech: ['Python', 'YOLOv8', 'OpenCV'],
    repo: 'https://github.com/somiya-namdeo/Pothole-Detection-Depth-Analysis', live: null,
    category: 'academic'
  },
  {
    id: 'robot-path',
    title: 'Autonomous Robot Path Planning',
    domain: 'Reinforcement Learning',
    status: 'Academic',
    logo: 'autonomous-robot-path-tracking.png',
    overview: 'Autonomous robot path planning algorithm utilizing reinforcement learning to navigate complex, dynamic grid environments.',
    features: ['Q-Learning', 'SARSA', 'Dynamic obstacle avoidance'],
    tech: ['Python', 'Reinforcement Learning', 'NumPy'],
    repo: 'https://github.com/somiya-namdeo/Autonomous-Robot-Path-Planning-using-Q-Learning-and-SARSA', live: null,
    category: 'academic'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Restore scroll on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getDomainColorClass = (domain) => {
    if (domain.includes('Machine Learning')) return 'glow-ml'; // Green
    if (domain.includes('NLP')) return 'glow-nlp'; // Purple
    if (domain.includes('Computer Vision')) return 'glow-cv'; // Blue
    if (domain.includes('Reinforcement Learning')) return 'glow-rl'; // Orange
    if (domain.includes('Intelligent Application')) return 'glow-apps'; // Pink
    return 'glow-default';
  };

  const featuredProjects = projectsDb.filter(p => p.category === 'featured');
  const academicProjects = projectsDb.filter(p => p.category === 'academic');

  return (
    <div className="projects-gallery-page">
      {/* Background Ambience */}
      <div className="ambient-bg gradient-1"></div>
      <div className="ambient-bg gradient-2"></div>
      <div className="particles-overlay"></div>



      <div className="gallery-container">
        {/* HERO SECTION */}
        <motion.div 
          className="projects-hero flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button onClick={() => window.location.href = '/'} className="return-hero-btn" style={{ marginBottom: '20px' }}>
            <ArrowLeft size={16} /> Return to Neural Hub
          </button>

          <h1 className="hero-title glitch-text" data-text="AI PROJECT LAB" style={{ marginBottom: '16px' }}>AI PROJECT LAB</h1>
          
          <p className="hero-subtitle text-center" style={{ marginBottom: '20px' }}>
            Building intelligent systems across ML, CV, NLP, RL, and intelligent applications.
          </p>
          
          <div className="hero-stats-row">
            <span className="stat-pill">8 Projects</span>
            <span className="stat-pill separator">•</span>
            <span className="stat-pill">4 Deployed Systems</span>
            <span className="stat-pill separator">•</span>
            <span className="stat-pill">4 Academic Projects</span>
            <span className="stat-pill separator">•</span>
            <span className="stat-pill">5 AI Domains</span>
          </div>
        </motion.div>

        {/* SECTION 1: FEATURED SYSTEMS */}
        <div className="gallery-section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <div className="projects-grid featured-grid">
            {featuredProjects.map((project, idx) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                getDomainColorClass={getDomainColorClass}
                onSelect={() => setSelectedProject(project)}
                index={idx}
                isFeatured={true}
              />
            ))}
          </div>
        </div>

        {/* SECTION 2: RESEARCH & ACADEMIC BUILDS */}
        <div className="gallery-section mt-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Research & Academic Builds
          </motion.h2>
          <div className="projects-grid academic-grid">
            {academicProjects.map((project, idx) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                getDomainColorClass={getDomainColorClass}
                onSelect={() => setSelectedProject(project)}
                index={idx}
                isFeatured={false}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DETAIL PANEL SLIDER */}
      <AnimatePresence>
        {selectedProject && (
          <div className="detail-panel-overlay">
            <motion.div 
              className="detail-panel-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />
            <motion.div 
              className={`project-details-panel fixed-right ${getDomainColorClass(selectedProject.domain)}`}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button className="close-panel-btn" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <div className="panel-scroll-content">
                <div className="panel-logo-container">
                  <div className={`logo-ring`}>
                    <img src={`/assets/projects/${selectedProject.logo}`} alt={selectedProject.title} onError={(e) => e.target.style.display = 'none'} />
                  </div>
                </div>

                <div className="panel-header">
                  <span className={`status-badge ${selectedProject.status === 'LIVE' ? 'live' : 'academic'}`}>
                    {selectedProject.status}
                  </span>
                  <h2>{selectedProject.title}</h2>
                  <p className="domain-label">{selectedProject.domain}</p>
                </div>

                <div className="panel-section">
                  <h3>Overview</h3>
                  <p>{selectedProject.overview}</p>
                </div>

                <div className="panel-section">
                  <h3>Key Features</h3>
                  <ul className="feature-list">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}><div className="list-bullet"></div> {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="panel-section">
                  <h3>Tech Stack</h3>
                  <div className="tech-tags">
                    {selectedProject.tech.map(tech => (
                      <span key={tech} className="tech-chip">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="panel-actions">
                  <a href={selectedProject.repo} target="_blank" rel="noreferrer" className="action-btn outline">
                    <FaGithub size={18} /> GitHub
                  </a>
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noreferrer" className="action-btn primary">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Sub-component for Project Cards
const ProjectCard = ({ project, getDomainColorClass, onSelect, index, isFeatured }) => {
  const colorClass = getDomainColorClass(project.domain);
  const logoSizeClass = isFeatured ? 'logo-lg' : 'logo-md';

  return (
    <motion.div 
      className={`project-card glass-card ${colorClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="card-top-content">
        <div className={`card-logo-container ${logoSizeClass}`}>
          <img src={`/assets/projects/${project.logo}`} alt={project.title} onError={(e) => e.target.style.display = 'none'} />
        </div>
        
        <div className="card-badges">
          <span className="domain-badge">{project.domain}</span>
          <span className={`status-badge ${project.status === 'LIVE' ? 'live' : 'academic'}`}>
            {project.status}
          </span>
        </div>

        <h3 className="card-title">{project.title}</h3>
        <p className="card-description line-clamp-3">{project.overview}</p>

        <div className="card-tech-preview">
          {project.tech.slice(0, 3).map(tech => (
            <span key={tech} className="tech-chip mini">{tech}</span>
          ))}
          {project.tech.length > 3 && <span className="tech-chip mini">+{project.tech.length - 3}</span>}
        </div>
      </div>

      <div className="card-footer">
        <div className="quick-links">
          <a href={project.repo} target="_blank" rel="noreferrer" className="icon-link" title="GitHub" onClick={e => e.stopPropagation()}>
            <FaGithub size={20} />
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="icon-link" title="Live Demo" onClick={e => e.stopPropagation()}>
              <ExternalLink size={20} />
            </a>
          )}
        </div>
        <button className="view-details-btn" onClick={onSelect}>
          View Details <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default Projects;
