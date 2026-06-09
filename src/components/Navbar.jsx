import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Link to="/" className="nav-brand">
        <div className="brand-logo-wrapper">
          {/* Use favicon.png as the logo per user assets */}
          <img src="/assets/images/favicon.png" alt="Neural S Logo" className="brand-logo" />
        </div>
        <span className="brand-name">SOMIYA</span>
      </Link>
      
      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
