import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './PlaceholderPage.css';

const PlaceholderPage = ({ title }) => {
  return (
    <motion.div 
      className="placeholder-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="placeholder-content">
        <motion.div 
          className="icon-wrapper"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <div className="pulse-ring"></div>
        </motion.div>
        <h1>{title}</h1>
        <p>This section is currently under development. Return to the Neural Hub to explore other connections.</p>
        <Link to="/" className="back-link">
          <ArrowLeft size={18} />
          <span>Back to Neural Hub</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default PlaceholderPage;
