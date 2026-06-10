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
    overview: 'AI-powered career intelligence platform that analyzes resumes using OCR, NLP, and machine learning to predict job roles, estimate salaries, calculate hiring probabilities, and identify skill gaps.',
    fullOverview: 'CareerLens AI is an AI-powered career intelligence platform that transforms resumes into actionable hiring insights. Using OCR, NLP, and machine learning, the system analyzes candidate profiles, predicts suitable job roles, estimates salary ranges, calculates hiring probabilities, and identifies skill gaps. The platform combines multiple predictive models with an interactive dashboard to help recruiters and job seekers make data-driven career decisions.',
    features: [
      'OCR-Based Resume Processing Pipeline',
      'AI-Powered Resume Intelligence Dashboard',
      'Job Role Prediction Engine',
      'Salary Estimation & Market Analysis',
      'Hire Probability Prediction (94.2% Accuracy)',
      'Skill Gap Detection & Candidate Profiling',
      'Multi-Model Machine Learning Architecture',
      'FastAPI REST Backend',
      'Real-Time Resume Analytics',
      'Production Deployment on Vercel & Render'
    ],
    tech: ['React', 'TypeScript', 'FastAPI', 'Python', 'Scikit-Learn', 'Pandas', 'PyMuPDF'],
    repo: 'https://github.com/somiya-namdeo/CareerLens-AI', 
    live: 'https://career-lens-ai-two.vercel.app',
    category: 'featured'
  },
  {
    id: 'hersakhi',
    title: 'HerSakhi',
    domain: 'AI Wellness Platform',
    status: 'LIVE',
    logo: 'hersakhi.png',
    overview: 'AI-powered women\'s wellness platform featuring cycle tracking, health analytics, personalized wellness insights, and a Gemini-powered health assistant.',
    fullOverview: 'HerSakhi is an AI-powered women\'s wellness platform designed to help users track menstrual health, monitor wellness indicators, and access personalized health guidance through an intelligent and privacy-focused experience. The platform combines cycle tracking, health analytics, wellness scoring, and conversational AI to provide a comprehensive digital wellness ecosystem.\n\nBuilt using React, FastAPI, Supabase, and Google Gemini, HerSakhi transforms everyday health data into meaningful insights through interactive dashboards, predictive wellness analytics, and secure AI-assisted support.',
    features: [
      'AI-Powered Women\'s Wellness Platform',
      'Menstrual Cycle Tracking & Analytics',
      'Personalized Wellness Scoring System',
      'Health Analytics Dashboard',
      'AI Wellness Assistant using Gemini',
      'Symptom & Mood Monitoring',
      'Emergency Support & Safety Features',
      'Secure JWT Authentication',
      'FastAPI REST Backend',
      'Production Deployment on Vercel & Render'
    ],
    tech: ['React', 'FastAPI', 'Python', 'Supabase', 'PostgreSQL', 'Google Gemini', 'JWT'],
    repo: 'https://github.com/somiya-namdeo/HerSakhi-Wellness-Platform', 
    live: 'https://her-sakhi-wellness-platform.vercel.app',
    category: 'featured'
  },
  {
    id: 'cognivue',
    title: 'Cognivue',
    domain: 'AI Productivity Intelligence',
    status: 'LIVE',
    logo: 'cognivue.png',
    overview: 'Privacy-first cognitive intelligence platform that analyzes focus, fatigue, posture, and productivity patterns using local computer vision and behavioral analytics.',
    fullOverview: 'Cognivue is a privacy-first cognitive intelligence platform that helps users understand focus, fatigue, posture, and productivity patterns through real-time computer vision and behavioral analytics. By combining local webcam-based gaze tracking, posture analysis, browser activity monitoring, and AI-powered insights, Cognivue delivers actionable recommendations to improve deep work, productivity, and cognitive well-being.\n\nDesigned with privacy at its core, all vision processing occurs locally on the user\'s device, ensuring that no raw camera feeds, screenshots, or sensitive content are transmitted to external servers.',
    features: [
      'Privacy-First Cognitive Intelligence Platform',
      'Real-Time Gaze & Attention Tracking',
      'Fatigue Detection & Blink Analysis',
      'Posture Monitoring & Slouch Detection',
      'Browser Activity Intelligence',
      'Focus & Productivity Analytics Dashboard',
      'AI-Powered Coaching Recommendations',
      'Chrome Extension Integration',
      'MediaPipe FaceMesh Processing',
      'Production Deployment on Vercel & Render'
    ],
    tech: ['React', 'TypeScript', 'FastAPI', 'Python', 'MediaPipe', 'Supabase', 'Chrome Ext API'],
    repo: 'https://github.com/somiya-namdeo/Cognivue', 
    live: 'https://cognivue-kappa.vercel.app',
    category: 'featured'
  },
  {
    id: 'trinetra',
    title: 'Trinetra AI',
    domain: 'AI Emergency Intelligence',
    status: 'LIVE',
    logo: 'trinetra-ai.png',
    overview: 'AI-powered emergency intelligence platform for incident monitoring, risk assessment, resource management, and real-time operational decision support.',
    fullOverview: 'Trinetra AI is an AI-powered emergency intelligence platform designed to assist in incident monitoring, risk assessment, and resource management during large-scale public events and urban operations. By combining machine learning, natural language processing, and intelligent incident correlation, the platform helps authorities identify critical situations, prioritize response efforts, and improve operational awareness through a centralized command dashboard.',
    features: [
      'AI-Powered Incident Monitoring Platform',
      'Intelligent Risk Assessment Engine',
      'Real-Time Incident Management Dashboard',
      'Emergency Resource Allocation System',
      'Zone Intelligence & Risk Mapping',
      'Memory AI Incident Correlation',
      'Natural Language Incident Analysis',
      'FastAPI REST Backend',
      'React + TypeScript Frontend',
      'Production Deployment on Vercel & Render'
    ],
    tech: ['React', 'TypeScript', 'FastAPI', 'Python', 'Supabase', 'PostgreSQL', 'Google Gemini'],
    repo: 'https://github.com/somiya-namdeo/Trinetra-AI', 
    live: 'https://trinetra-ai-eight.vercel.app',
    category: 'featured'
  },

  // RESEARCH & ACADEMIC
  {
    id: 'hindi-sentiment',
    title: 'Hindi Sentiment Analysis',
    domain: 'Natural Language Processing',
    status: 'Academic',
    logo: 'hindi-sentiment-analysis.png',
    overview: 'Machine learning-based NLP system for classifying Hindi text into positive, negative, and neutral sentiment categories.',
    fullOverview: 'Hindi Sentiment Analysis is a machine learning-based NLP system that classifies Hindi text into Positive, Negative, and Neutral sentiment categories. The project explores multiple approaches including Naive Bayes, Support Vector Machines, and Hybrid Models while building a complete Hindi language sentiment analysis pipeline.\n\nThe system demonstrates text preprocessing, feature engineering, vectorization, sentiment classification, and comparative model evaluation for low-resource language NLP tasks.\n\nClasses: Positive, Negative, Neutral\n\nApplications:\n• Social Media Analysis\n• Customer Feedback Monitoring\n• Product Review Classification\n• Public Opinion Analysis',
    features: [
      'Hindi Text Preprocessing Pipeline',
      'Sentiment Classification Engine',
      'Naive Bayes Implementation',
      'Support Vector Machine Model',
      'Hybrid Ensemble Approach',
      'Feature Extraction & Vectorization',
      'Comparative Model Evaluation',
      'Hindi Language NLP Processing',
      'End-to-End Sentiment Analysis Workflow'
    ],
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'NLP', 'Feature Engineering'],
    repo: 'https://github.com/somiya-namdeo/SENTIMENT-ANALYSIS-', 
    live: null,
    category: 'academic'
  },
  {
    id: 'hand-mouse',
    title: 'Hand Tracking Mouse',
    domain: 'Computer Vision',
    status: 'Academic',
    logo: 'hand-tracking-mouse.png',
    overview: 'Real-time computer vision system that enables cursor control, clicking, and scrolling using hand gestures and webcam-based tracking.',
    fullOverview: 'Hand Tracking Mouse is a real-time computer vision application that enables touchless human-computer interaction using hand gestures captured through a webcam. By leveraging MediaPipe hand landmark detection and OpenCV-based video processing, the system translates natural finger movements into mouse actions such as cursor movement, clicking, and scrolling.\n\nThe project demonstrates how computer vision can replace traditional input devices, providing accessibility-focused and contactless interaction methods for modern computing environments.',
    features: [
      'Real-Time Hand Tracking',
      'Cursor Control via Finger Movement',
      'Left & Right Click Gesture Recognition',
      'Scroll Control Using Hand Gestures',
      'MediaPipe Hand Landmark Detection',
      'Smooth Cursor Movement & Jitter Reduction',
      'Contactless Human-Computer Interaction',
      'Real-Time Performance Monitoring',
      'Accessibility-Focused Design'
    ],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'NumPy', 'Computer Vision'],
    repo: 'https://github.com/somiya-namdeo/hand-tracking-mouse-opencv-mediapipe', 
    live: null,
    category: 'academic'
  },
  {
    id: 'pothole',
    title: 'Pothole Detection & Depth Analysis',
    domain: 'Computer Vision',
    status: 'Academic',
    logo: 'pothole-detection.png',
    overview: 'Deep learning system that detects potholes, estimates depth, categorizes severity, and generates visual road damage analysis reports.',
    fullOverview: 'Pothole Detection and Depth Analysis is a deep learning-powered road damage assessment system that combines transformer-based object detection with depth estimation to identify potholes and evaluate their severity. Beyond simple detection, the platform estimates pothole depth, assigns impact ratings, and generates visual analytics to support infrastructure monitoring and maintenance planning.\n\nThe system demonstrates the integration of object detection, depth estimation, and computer vision analytics into a unified inspection pipeline.\n\nPerformance:\nPrecision: 0.801\nRecall: 0.646\nmAP@50: 0.737\nmAP@50-95: 0.440',
    features: [
      'RF-DETR Transformer-Based Detection',
      'Depth Estimation using Depth Anything',
      'Pothole Severity Classification',
      'Impact Rating System (1–10)',
      'Depth Heatmap Generation',
      '3D Surface Visualization',
      'Cross-Sectional Analysis',
      'Batch Image Processing',
      'Automated Road Damage Reports'
    ],
    tech: ['Python', 'PyTorch', 'Transformers', 'RF-DETR', 'Depth Anything', 'OpenCV', 'Matplotlib', 'Roboflow'],
    repo: 'https://github.com/somiya-namdeo/Pothole-Detection-Depth-Analysis', 
    live: null,
    category: 'academic'
  },
  {
    id: 'robot-path',
    title: 'Autonomous Robot Path Planning',
    domain: 'Reinforcement Learning',
    status: 'Academic',
    logo: 'autonomous-robot-path-tracking.png',
    overview: 'Reinforcement learning system using Q-Learning and SARSA for autonomous robotic navigation and optimal path discovery.',
    fullOverview: 'Autonomous Robot Path Planning is a reinforcement learning project that explores intelligent robotic navigation using Q-Learning and SARSA algorithms. The system trains an agent to discover optimal paths in a grid-based environment while avoiding obstacles and maximizing cumulative rewards.\n\nThe project demonstrates how reinforcement learning enables autonomous decision-making through continuous interaction with an environment, highlighting the trade-offs between efficiency, convergence speed, and learning stability.\n\nResults:\nQ-Learning Final Steps: 14.08\nSARSA Final Steps: 21.64\nBest Efficiency: 48.19%\nHigh Stability Convergence',
    features: [
      'Q-Learning Navigation Agent',
      'SARSA Navigation Agent',
      'Grid-Based Environment Simulation',
      'Obstacle Avoidance Learning',
      'Reward Optimization Framework',
      'Policy Convergence Analysis',
      'Exploration vs Exploitation Evaluation',
      'Reinforcement Learning Performance Comparison',
      'Autonomous Decision-Making System'
    ],
    tech: ['Python', 'NumPy', 'Matplotlib', 'Reinforcement Learning', 'Q-Learning', 'SARSA'],
    repo: 'https://github.com/somiya-namdeo/Autonomous-Robot-Path-Planning-using-Q-Learning-and-SARSA', 
    live: null,
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
                  {(selectedProject.fullOverview || selectedProject.overview).split('\n\n').map((paragraph, i) => (
                    <p key={i} style={{ marginBottom: i > 0 ? '1rem' : '0' }}>{paragraph}</p>
                  ))}
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
