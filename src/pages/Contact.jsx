import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Code, Terminal, Info, CheckCircle } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      subject: formState.subject,
      message: formState.message
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Ambient Background */}
      <div className="contact-ambient-bg">
        <div className="bg-grid"></div>
        {/* Only visible in dark mode via CSS */}
        <div className="floating-code code-1">{"const connect = async () => {};"}</div>
        <div className="floating-code code-2">{"import { network } from 'neural-hub';"}</div>
        <div className="floating-code code-3">{"[STATUS: OK]"}</div>
        
        {/* Animated Neural Nodes */}
        <svg className="bg-neural-paths" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M10,20 Q30,10 50,40 T90,30" className="bg-path p-slow" />
          <path d="M20,80 Q40,90 60,60 T80,80" className="bg-path p-med" />
          <path d="M0,50 C20,30 40,70 100,50" className="bg-path p-fast" />
        </svg>

        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
      </div>

      <div className="contact-container">
        <motion.div 
          className="contact-hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="contact-title">Contact Console</h1>
          <p className="contact-subtitle">Run a connection request and reach me through my professional channels.</p>
        </motion.div>

        <div className="console-layout">
          <motion.div 
            className="terminal-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="scan-line"></div>
            <div className="terminal-header">
              <div className="window-controls">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title"><Terminal size={14} /> bash -- portfolio-cli</span>
            </div>
            <div className="terminal-body" aria-live="polite">
              <p><span className="prompt">{'>'}</span> initialize_contact()</p>
              <br/>
              <p><span className="prompt">{'>'}</span> developer: Somiya Namdeo</p>
              <p><span className="prompt">{'>'}</span> role: AI &amp; ML Engineer</p>
              <p><span className="prompt">{'>'}</span> status: <span className="highlight-green">available</span></p>
              <p><span className="prompt">{'>'}</span> location: India</p>
              <p><span className="prompt">{'>'}</span> preferred_channel: email</p>
              <p><span className="prompt">{'>'}</span> response_time: usually within 24 hours</p>
              <p><span className="prompt">{'>'}</span> <span className="cursor-blink">_</span></p>
            </div>
          </motion.div>

          <motion.div 
            className="contact-channels"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=namdeosomiya@gmail.com" target="_blank" rel="noreferrer" className="channel-card pulse-hover" aria-label="Email Somiya">
              <div className="channel-icon-wrapper"><Mail size={24} className="channel-icon" /></div>
              <div className="channel-info">
                <span className="channel-name">EMAIL</span>
                <span className="channel-detail">namdeosomiya@gmail.com</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/somiya-namdeo-/" target="_blank" rel="noreferrer" className="channel-card pulse-hover" aria-label="Somiya LinkedIn">
              <div className="channel-icon-wrapper"><FaLinkedin size={24} className="channel-icon" /></div>
              <div className="channel-info">
                <span className="channel-name">LINKEDIN</span>
                <span className="channel-detail">linkedin.com/in/somiya-namdeo-</span>
              </div>
            </a>

            <a href="https://github.com/somiya-namdeo" target="_blank" rel="noreferrer" className="channel-card pulse-hover" aria-label="Somiya GitHub">
              <div className="channel-icon-wrapper"><FaGithub size={24} className="channel-icon" /></div>
              <div className="channel-info">
                <span className="channel-name">GITHUB</span>
                <span className="channel-detail">github.com/somiya-namdeo</span>
              </div>
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="editor-form-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="editor-header">
            <Code size={16} className="editor-icon" /> request.json
          </div>
          <div className="editor-body">
            {!submitStatus ? (
              <form onSubmit={handleSubmit} className="code-form" aria-label="Contact Form">
                <div className="form-line">
                  <span className="line-num">1</span>
                  <span className="json-wrapper">
                    <span className="json-key">"name"</span><span className="json-colon">:</span>
                    <input type="text" name="name" required value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} placeholder='"Enter your name"' className="code-input typing-effect" aria-required="true" />
                    <span className="json-comma">,</span>
                  </span>
                </div>
                <div className="form-line">
                  <span className="line-num">2</span>
                  <span className="json-wrapper">
                    <span className="json-key">"email"</span><span className="json-colon">:</span>
                    <input type="email" name="email" required value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} placeholder='"Enter your email"' className="code-input typing-effect" aria-required="true" />
                    <span className="json-comma">,</span>
                  </span>
                </div>
                <div className="form-line">
                  <span className="line-num">3</span>
                  <span className="json-wrapper">
                    <span className="json-key">"subject"</span><span className="json-colon">:</span>
                    <input type="text" name="subject" required value={formState.subject} onChange={e => setFormState({...formState, subject: e.target.value})} placeholder='"Message subject"' className="code-input typing-effect" aria-required="true" />
                    <span className="json-comma">,</span>
                  </span>
                </div>
                <div className="form-line textarea-line">
                  <span className="line-num">4</span>
                  <span className="json-wrapper">
                    <span className="json-key">"message"</span><span className="json-colon">:</span>
                    <textarea name="message" required value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} placeholder='"Type your message here..."' className="code-input code-textarea typing-effect" rows="4" aria-required="true"></textarea>
                  </span>
                </div>
                
                <div className="form-action-line">
                  <span className="line-num">5</span>
                  <button type="submit" disabled={isSubmitting} className="execute-btn" aria-label="Execute Contact Request">
                    {isSubmitting ? 'Executing...' : 'Execute Contact Request'} <Send size={16} className="send-icon" />
                  </button>
                </div>
              </form>
            ) : submitStatus === 'success' ? (
              <motion.div 
                className="success-terminal"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                aria-live="polite"
              >
                <div className="success-icon">
                  <CheckCircle size={48} />
                </div>
                <div className="success-text">
                  <p><span className="prompt">{'>'}</span> connection_established()</p>
                  <p><span className="prompt">{'>'}</span> request_sent: <span className="highlight-green">true</span></p>
                  <p><span className="prompt">{'>'}</span> status: delivered</p>
                  <p><span className="prompt">{'>'}</span> thank_you_for_reaching_out()</p>
                </div>
                <button onClick={() => setSubmitStatus(null)} className="reset-btn" aria-label="Run Again">Reset Console</button>
              </motion.div>
            ) : (
              <motion.div 
                className="success-terminal error-terminal"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                aria-live="polite"
              >
                <div className="success-icon error-icon" style={{color: '#ff5f56'}}>
                  <Terminal size={48} />
                </div>
                <div className="success-text">
                  <p><span className="prompt">{'>'}</span> request_failed()</p>
                  <p><span className="prompt">{'>'}</span> please_try_again_or_email_directly()</p>
                </div>
                <button onClick={() => setSubmitStatus(null)} className="reset-btn" aria-label="Run Again">Try Again</button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
