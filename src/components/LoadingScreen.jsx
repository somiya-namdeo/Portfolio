import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1800); // 1.8 seconds max

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="loading-content">
        <motion.div 
          className="logo-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* We use favicon.png as the logo per user assets */}
          <img src="/assets/images/favicon.png" alt="Neural S Logo" className="loading-logo" />
          <div className="loading-pulse-ring"></div>
          <div className="loading-pulse-ring delay"></div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          SOMIYA
        </motion.h1>
        
        <motion.p
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Loading Neural Hub...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
