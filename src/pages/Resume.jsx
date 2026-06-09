import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, FileText, CheckCircle, ArrowRight, Mail, FileIcon, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Resume.css';

const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const navigate = useNavigate();
  const resumeUrl = "/assets/resume/Somiya_resume.pdf";

  return (
    <div className="resume-page">
      {/* AI/ML Ambient Background */}
      <div className="ambient-background">
        <div className="bg-grid"></div>
        
        {/* Neural Nodes & Connections */}
        <svg className="bg-neural-paths" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M10,20 Q30,10 50,40 T90,30" className="bg-path p-slow" />
          <path d="M20,80 Q40,90 60,60 T80,80" className="bg-path p-med" />
          <path d="M0,50 C20,30 40,70 100,50" className="bg-path p-fast" />
        </svg>

        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
        <div className="particle p4"></div>
      </div>

      <div className="resume-vault-container">
        <motion.div 
          className="vault-hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="vault-title">Resume Vault</h1>
          <p className="vault-subtitle">My professional profile, experience, projects, and technical expertise.</p>
        </motion.div>

        <motion.div 
          className="vault-centerpiece"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="premium-resume-card float-anim">
            <div className="card-glow-bg"></div>
            <div className="scan-line"></div>
            
            <div className="card-content">
              <div className="card-icon-wrapper pulse-icon">
                <FileIcon size={40} className="file-icon" />
              </div>
              <div className="card-details">
                <h2 className="file-name">Professional Resume</h2>
              </div>
              
              <div className="card-meta">
                <span className="meta-badge"><CheckCircle size={14} /> Updated • June 2026</span>
                <span className="meta-badge"><CheckCircle size={14} /> ATS Friendly</span>
              </div>

              <div className="vault-actions">
                <button 
                  className="vault-btn primary"
                  onClick={() => setIsPreviewOpen(!isPreviewOpen)}
                >
                  {isPreviewOpen ? <><X size={18} /> Close Preview</> : <><Eye size={18} /> Preview Resume</>}
                </button>
                <a href={resumeUrl} download="Somiya_Namdeo_Resume.pdf" className="vault-btn secondary">
                  <Download size={18} /> Download
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {isPreviewOpen && (
            <motion.div 
              className="pdf-preview-section"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: '900px', marginTop: '3rem' }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pdf-glass-container">
                <object 
                  data={resumeUrl} 
                  type="application/pdf" 
                  className="resume-pdf"
                >
                  <div className="pdf-fallback">
                    <FileText size={48} className="fallback-icon" />
                    <p>Resume preview unavailable. Please use Download Resume.</p>
                    <a href={resumeUrl} download="Somiya_Namdeo_Resume.pdf" className="fallback-btn">
                      Download PDF Directly
                    </a>
                  </div>
                </object>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="vault-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="footer-cta-text">Want to explore my work beyond the resume?</div>
          <div className="footer-buttons">
            <button className="cta-btn primary" onClick={() => navigate('/projects')}>
              View Projects
              <ArrowRight size={18} />
            </button>
            <button className="cta-btn secondary" onClick={() => navigate('/contact')}>
              Contact Me
              <Mail size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
