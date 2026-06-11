import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './NeuralOS.css';

const osModules = [
  {
    id: 'MOD_01',
    name: 'AI & Machine Learning',
    desc: 'Core intelligence stack used for predictive modeling, classification, forecasting, intelligent systems, and data-driven AI applications.',
    techs: ['Python', 'Scikit-Learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'CatBoost', 'Pandas', 'NumPy', 'Matplotlib'],
    caps: ['Predictive Modeling', 'Classification', 'Regression', 'Feature Engineering', 'Model Evaluation', 'Hyperparameter Tuning']
  },
  {
    id: 'MOD_02',
    name: 'Computer Vision',
    desc: 'Visual intelligence systems for image processing, object detection, tracking, gesture recognition, and real-time computer vision applications.',
    techs: ['OpenCV', 'YOLO', 'MediaPipe', 'Python', 'TensorFlow', 'PyTorch', 'Image Processing'],
    caps: ['Object Detection', 'Image Processing', 'Hand Tracking', 'Gesture Recognition', 'Real-Time Vision Systems', 'Feature Extraction']
  },
  {
    id: 'MOD_03',
    name: 'Natural Language Processing',
    desc: 'Language intelligence stack used for text processing, sentiment analysis, feature extraction, and classification-based NLP systems.',
    techs: ['NLP', 'NLTK', 'TF-IDF', 'Python', 'Pandas', 'Scikit-Learn', 'PyQt5'],
    caps: ['Sentiment Analysis', 'Text Classification', 'Text Preprocessing', 'Feature Extraction', 'Language Understanding', 'Model Evaluation']
  },
  {
    id: 'MOD_04',
    name: 'Full Stack Development',
    desc: 'Modern application development stack used for building responsive, interactive, AI-powered web platforms and dashboards.',
    techs: ['React.js', 'Vite', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion', 'FastAPI'],
    caps: ['Frontend Development', 'Responsive Design', 'UI/UX Engineering', 'API Integration', 'Dashboard Development', 'Backend Development']
  },
  {
    id: 'MOD_05',
    name: 'Cloud & Deployment',
    desc: 'Deployment and backend infrastructure stack used for production-ready AI applications, authentication, databases, and hosted platforms.',
    techs: ['AWS', 'Supabase', 'PostgreSQL', 'Vercel', 'Render', 'REST APIs', 'JWT Authentication'],
    caps: ['Cloud Deployment', 'Database Management', 'Authentication Systems', 'Backend Integration', 'API Development', 'Production Deployment']
  },
  {
    id: 'MOD_06',
    name: 'Tools & Workflow',
    desc: 'Development workflow tools used for experimentation, coding, collaboration, debugging, API testing, and project delivery.',
    techs: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Kaggle'],
    caps: ['Version Control', 'Collaborative Development', 'Experimentation', 'Debugging', 'API Testing', 'Model Prototyping']
  }
];

const activeDomains = [
  'Machine Learning',
  'Computer Vision',
  'NLP',
  'Full Stack',
  'Cloud',
  'Tools & Workflow'
];

const NeuralOS = () => {
  const [activeMod, setActiveMod] = useState(osModules[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="os-page">
      <div className="os-container">
        
        {/* Header */}
        <div className="os-header">
          <div className="system-status-indicator">
            <div className="status-dot"></div>
            <span>SYSTEM.ONLINE // SKILL_MATRIX V2.6</span>
          </div>
          <h1 className="os-title">NEURAL OS</h1>
          <p className="os-subtitle">
            An interactive operating system showcasing the technologies, frameworks, tools, and engineering domains powering my AI journey.
          </p>
        </div>

        {/* Dashboard Layout */}
        <div className="os-dashboard">
          
          {/* Left Panel: System Modules */}
          <div className="os-panel left-panel">
            <div className="panel-header">
              <div className="panel-header-left">
                <div className="panel-dot"></div>
                <span>SYSTEM MODULES</span>
              </div>
              <span>LEFT_PANEL</span>
            </div>
            
            <div className="modules-list">
              {osModules.map((mod) => (
                <button
                  key={mod.id}
                  className={`module-btn ${activeMod.id === mod.id ? 'active' : ''}`}
                  onClick={() => setActiveMod(mod)}
                >
                  <span className="module-id">{mod.id}</span>
                  <span className="module-name">{mod.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Center Panel: Skill Workspace */}
          <div className="os-panel center-panel">
            <div className="panel-header">
              <div className="panel-header-left">
                <div className="panel-dot"></div>
                <span>SKILL WORKSPACE</span>
              </div>
              <span>{activeMod.id}</span>
            </div>

            <div className="workspace-panel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMod.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="workspace-module-id">{activeMod.id} // LOADED</div>
                  <h2 className="workspace-title">{activeMod.name}</h2>
                  <p className="workspace-desc">{activeMod.desc}</p>

                  <div className="section-divider">
                    <span className="section-label">TECHNOLOGIES</span>
                    <span className="section-meta">// RUNTIME_STACK</span>
                  </div>

                  <div className="tech-grid">
                    {activeMod.techs.map((tech, idx) => (
                      <div key={idx} className="tech-chip">
                        <div className="tech-dot"></div>
                        {tech}
                      </div>
                    ))}
                  </div>

                  <div className="section-divider">
                    <span className="section-label">CORE CAPABILITIES</span>
                    <span className="section-meta">// PROCESS_THREADS</span>
                  </div>

                  <div className="cap-grid">
                    {activeMod.caps.map((cap, idx) => (
                      <div key={idx} className="cap-card">
                        <div className="cap-content">
                          <span className="cap-id">0{idx + 1}</span>
                          <span className="cap-name">{cap}</span>
                        </div>
                        <div className="cap-dot"></div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="system-ready-bar">
              <div className="ready-dot"></div>
              <span className="ready-text">SYSTEM READY</span>
              <span className="ready-sub">// Awaiting next command</span>
              <span className="blinking-cursor"></span>
            </div>
          </div>

          {/* Right Panel: System Diagnostics */}
          <div className="os-panel right-panel">
            <div className="panel-header">
              <div className="panel-header-left">
                <div className="panel-dot"></div>
                <span>SYSTEM DIAGNOSTICS</span>
              </div>
              <span>RIGHT_PANEL</span>
            </div>

            <div className="diagnostics-panel">
              
              {/* Status */}
              <div className="diag-card">
                <div className="diag-header">
                  <span>SYSTEM STATUS</span>
                  <div className="diag-header-dot" style={{ background: '#10b981' }}></div>
                </div>
                <div className="diag-status">All Systems Active</div>
              </div>

              {/* Domains */}
              <div className="diag-card">
                <div className="diag-header">
                  <span>ACTIVE DOMAINS</span>
                  <div className="diag-header-dot" style={{ background: '#3b82f6' }}></div>
                </div>
                <ul className="domain-list">
                  {activeDomains.map((domain, idx) => (
                    <li key={idx} className="domain-item">{domain}</li>
                  ))}
                </ul>
              </div>

              {/* Mission */}
              <div className="diag-card">
                <div className="diag-header">
                  <span>CURRENT MISSION</span>
                  <div className="diag-header-dot" style={{ background: '#c084fc' }}></div>
                </div>
                <div className="diag-content">Building AI-powered applications that combine machine learning, full-stack engineering, and intelligent automation.</div>
              </div>

              {/* Dev Mode */}
              <div className="diag-card">
                <div className="diag-header">
                  <span>DEVELOPMENT MODE</span>
                  <div className="diag-header-dot" style={{ background: '#06b6d4' }}></div>
                </div>
                <div className="diag-content">Research • Build • Deploy</div>
              </div>

              {/* Signal */}
              <div className="diag-card">
                <div className="diag-header">
                  <span>SIGNAL // LIVE</span>
                </div>
                <div className="signal-container">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="signal-bar" 
                      style={{ 
                        height: `${Math.random() * 80 + 20}%`,
                        animationDelay: `${Math.random() * 1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NeuralOS;
