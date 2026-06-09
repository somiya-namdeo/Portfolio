import React from 'react';
import { motion } from 'framer-motion';
import NeuralNetwork from '../components/NeuralNetwork';
import './Home.css';

const Home = ({ theme }) => {
  return (
    <motion.main 
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="hero-quote">
            Every connection tells a story.<br />
            Every project adds a node.
          </h1>
          <div className="section-label-container">
            <span className="section-label-line"></span>
            <span className="section-label">NEURAL HUB</span>
            <span className="section-label-line"></span>
          </div>
        </motion.div>
      </section>

      <section className="network-section">
        <NeuralNetwork />
      </section>

      <section className="identity-section">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="identity-name">SOMIYA NAMDEO</h2>
          <h3 className="identity-title">AI & ML ENGINEER</h3>
          <p className="identity-subtitle">Final Year CSE (AI & ML) · VIT Bhopal University</p>
          <p className="identity-desc">
            Turning curiosity into projects, <br />
            projects into experience, <br />
            and experience into meaningful solutions.
          </p>
        </motion.div>
      </section>
      
      {/* Ambient background particles */}
      <div className="ambient-particles">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
      </div>
    </motion.main>
  );
};

export default Home;
