import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, ArrowLeft, Hexagon, Activity, Swords, Shield, Zap, Crosshair, Cpu, Brain, Trophy, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CodingArena.css';

const CodingArena = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const portals = [
    {
      id: 'leetcode',
      name: 'LeetCode',
      icon: Code2,
      url: 'https://leetcode.com/u/somiya_namdeo05/',
      focus: 'Data Structures, Algorithms, Interview Preparation',
      color: '#fbbf24', // Amber
      glow: 'rgba(251, 191, 36, 0.4)'
    },
    {
      id: 'codeforces',
      name: 'Codeforces',
      icon: Activity,
      url: 'https://codeforces.com/profile/somiya__',
      focus: 'Competitive Programming, Logic Building, Speed',
      color: '#3b82f6', // Blue
      glow: 'rgba(59, 130, 246, 0.4)'
    },
    {
      id: 'codechef',
      name: 'CodeChef',
      icon: Hexagon,
      url: 'https://www.codechef.com/users/extra_gale_88',
      focus: 'Contests, Practice, Problem Solving',
      color: '#8b5cf6', // Purple
      glow: 'rgba(139, 92, 246, 0.4)'
    }
  ];

  const abilities = [
    { name: 'Arrays', icon: Crosshair },
    { name: 'Strings', icon: Zap },
    { name: 'Trees', icon: Shield },
    { name: 'Graphs', icon: Crosshair },
    { name: 'Dynamic Programming', icon: Zap },
    { name: 'Greedy', icon: Swords },
    { name: 'Sorting', icon: Swords },
    { name: 'Searching', icon: Crosshair },
    { name: 'Recursion', icon: Zap },
    { name: 'STL', icon: Shield },
    { name: 'Binary Search', icon: Crosshair },
    { name: 'Backtracking', icon: Swords }
  ];

  const domains = [
    {
      title: 'Data Structures',
      desc: 'Mastering arrays, trees, graphs, heaps, and hash-based structures.',
      icon: Cpu,
      color: '#38bdf8'
    },
    {
      title: 'Algorithms',
      desc: 'From sorting and searching to dynamic programming and graph theory.',
      icon: Brain,
      color: '#818cf8'
    },
    {
      title: 'Competitive Programming',
      desc: 'Contest-driven practice focused on speed, accuracy, and optimization.',
      icon: Trophy,
      color: '#c084fc'
    },
    {
      title: 'Problem Solving',
      desc: 'Breaking down complex problems into clean, efficient solutions.',
      icon: Lightbulb,
      color: '#e879f9'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 80 }
    }
  };

  return (
    <div className="arena-page">
      <div className="ambient-bg gradient-1"></div>
      <div className="ambient-bg gradient-2"></div>
      <div className="battle-particles"></div>

      <div className="arena-container">
        

        {/* Hero Cinematic Battle Scene */}
        <div className="battle-hero">
          <motion.div 
            className="hero-text-content"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="pre-heading">
              <span className="diamond"></span> ENTER THE ARENA <span className="diamond"></span>
            </div>
            <h1 className="hero-title glitch-text" data-text="CODING ARENA">CODING ARENA</h1>
            <p className="hero-subtitle">
              Where Algorithms Battle, Logic Prevails, and Problems Get Solved.
            </p>
            <p className="hero-description">
              Competitive programming, algorithmic thinking, data structures, and problem-solving practice across multiple coding platforms.
            </p>
          </motion.div>

          <div className="cinematic-stage">
            {/* Center VS Badge */}
            <motion.div 
              className="vs-badge"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2, type: 'spring', stiffness: 200 }}
            >
              VS
            </motion.div>

            {/* The Arena Floor */}
            <motion.div 
              className="arena-floor"
              initial={{ opacity: 0, scale: 0.8, rotateX: 60 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <img src="/assets/coding-arena/arena.png" alt="Arena Floor" />
            </motion.div>

            {/* Left Fighter */}
            <motion.div 
              className="fighter-glove glove-left"
              initial={{ x: -100, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, type: 'spring', bounce: 0.4 }}
            >
              <img src="/assets/coding-arena/glove-left.png" alt="Left AI Glove" />
            </motion.div>

            {/* Right Fighter */}
            <motion.div 
              className="fighter-glove glove-right"
              initial={{ x: 100, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, type: 'spring', bounce: 0.4 }}
            >
              <img src="/assets/coding-arena/glove-right.png" alt="Right AI Glove" />
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="arena-content relative z-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Battle Scoreboard */}
          <div className="scoreboard-section mb-24">
            <motion.div className="section-header text-center mb-10" variants={itemVariants}>
              <p className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-2">Battle Scoreboard</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">Platforms I Compete On</h2>
            </motion.div>

            <div className="scoreboard-grid">
              {portals.map((portal) => {
                const Icon = portal.icon;
                return (
                  <motion.div 
                    key={portal.id}
                    className="score-panel"
                    variants={itemVariants}
                    style={{ '--panel-color': portal.color, '--panel-glow': portal.glow }}
                  >
                    <div className="panel-glow-bg"></div>
                    <div className="panel-inner">
                      <div className="panel-header">
                        <div className="panel-icon">
                          <Icon size={28} />
                        </div>
                        <h3 className="panel-title">{portal.name}</h3>
                      </div>
                      
                      <div className="panel-focus">
                        <span className="focus-label">Combat Focus</span>
                        <p className="focus-text">{portal.focus}</p>
                      </div>

                      <a 
                        href={portal.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="panel-action-btn"
                      >
                        Enter Scoreboard <ExternalLink size={16} />
                      </a>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Combat Arsenal */}
          <motion.div className="arsenal-section text-center w-full mx-auto" variants={itemVariants}>
            <div className="section-header text-center arsenal-header">
              <p className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm">Combat Arsenal</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">Core Skills & Toolkit</h2>
            </div>
            
            <div className="arsenal-grid flex flex-wrap justify-center gap-4">
              {abilities.map((ability, idx) => {
                const AbilityIcon = ability.icon;
                return (
                  <motion.div 
                    key={idx} 
                    className="combat-chip glass-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * idx, type: 'spring' }}
                  >
                    <AbilityIcon size={18} className="chip-icon" />
                    <span>{ability.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Training Domains */}
          <motion.div className="domains-section text-center w-full mx-auto" variants={itemVariants}>
            <div className="section-header text-center domains-header">
              <p className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm">Training Domains</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">Where I Sharpen My Edge</h2>
            </div>

            <div className="domains-grid">
              {domains.map((domain, idx) => {
                const DomainIcon = domain.icon;
                return (
                  <motion.div 
                    key={idx}
                    className="domain-card"
                    variants={itemVariants}
                    style={{ '--domain-color': domain.color }}
                  >
                    <div className="domain-icon-wrapper">
                      <DomainIcon size={24} />
                    </div>
                    <h3 className="domain-title">{domain.title}</h3>
                    <p className="domain-desc">{domain.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default CodingArena;
