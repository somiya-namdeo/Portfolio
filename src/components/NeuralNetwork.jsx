import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  GraduationCap, 
  Brain, 
  FolderGit2, 
  Briefcase,
  Terminal, 
  FileText, 
  Mail
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './NeuralNetwork.css';

// Sorted strictly clockwise starting from Top (index 0)
const nodesData = [
  { id: 'recruiter', label: 'Recruiter Snapshot', icon: Eye, path: '/recruiter-snapshot', color: '#3b82f6' }, // Top
  { id: 'academic', label: 'Academic Profile', icon: GraduationCap, path: '/academic-profile', color: '#60a5fa' }, // Upper Right
  { id: 'skills', label: 'Skill Matrix', icon: Brain, path: '/skill-matrix', color: '#8b5cf6' }, // Middle Right
  { id: 'projects', label: 'AI Project Lab', icon: FolderGit2, path: '/projects-universe', color: '#3b82f6' }, // Lower Right
  { id: 'experience', label: 'Experience Timeline', icon: Briefcase, path: '/experience-timeline', color: '#60a5fa' }, // Bottom Right
  { id: 'github', label: 'GitHub Hub ↗', icon: FaGithub, path: 'https://github.com/somiya-namdeo', isExternal: true, color: '#8b5cf6' }, // Bottom Left
  { id: 'coding', label: 'Coding Arena', icon: Terminal, path: '/coding-arena', color: '#3b82f6' }, // Lower Left
  { id: 'resume', label: 'Resume Vault', icon: FileText, path: '/resume-vault', color: '#60a5fa' }, // Middle Left
  { id: 'contact', label: 'Contact Console', icon: Mail, path: '/contact-console', color: '#8b5cf6' }, // Upper Left
];

const NeuralNetwork = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [radius, setRadius] = useState(300);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setRadius(160);
      } else if (window.innerWidth < 768) {
        setRadius(230);
      } else if (window.innerWidth < 1024) {
        setRadius(280);
      } else {
        setRadius(340); // Slightly expanded to fit the 9 nodes perfectly
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalNodes = nodesData.length;
  
  // Create perfectly balanced 9-node circular positions (40 degrees apart)
  const calculatePosition = (index) => {
    // Start at Top (-90 degrees or -PI/2) and map clockwise
    const angle = (index / totalNodes) * 2 * Math.PI - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y, angle };
  };

  return (
    <div className="neural-network-container" ref={containerRef}>
      {/* SVG Canvas for Connections */}
      <svg className="neural-connections" viewBox="-500 -500 1000 1000">
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-glow)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent-glow)" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Animated Orbit Rings */}
        <circle cx="0" cy="0" r={radius * 0.65} className="bg-ring dashed" />
        <circle cx="0" cy="0" r={radius} className="bg-ring dotted" />

        {/* Neural Paths */}
        {nodesData.map((node, index) => {
          const { x, y } = calculatePosition(index);
          const isHovered = hoveredNode === node.id;
          
          // Elegant S-curve bezier pushing radially outwards then swooping
          const distance = Math.sqrt(x*x + y*y);
          const cp1x = (x / distance) * (distance * 0.4);
          const cp1y = (y / distance) * (distance * 0.4);
          const cp2x = x - (x / distance) * (distance * 0.2);
          const cp2y = y - (y / distance) * (distance * 0.2);
          
          const pathD = `M 0 0 C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;
          
          return (
            <g key={`path-${node.id}`}>
              <path
                d={pathD}
                className={`neural-path ${isHovered ? 'active' : ''}`}
                stroke="var(--line-color)"
                strokeWidth={isHovered ? "3" : "1.5"}
                fill="none"
              />
            </g>
          );
        })}
      </svg>

      {/* Central Profile Node with Radar Rings */}
      <div className="center-node">
        {/* Radar Rings centered perfectly */}
        <div className="profile-radar-ring r1"></div>
        <div className="profile-radar-ring r2"></div>
        <div className="profile-radar-ring r3"></div>

        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0.4 }}
          style={{ position: 'relative', zIndex: 30 }}
        >
          <div className="profile-wrapper">
            <img src="/assets/images/profile-main.png" alt="Somiya Profile" className="profile-img" />
            <div className="profile-glow"></div>
          </div>
        </motion.div>
      </div>

      {/* Orbital Nodes (9 nodes, perfectly equidistant) */}
      {nodesData.map((node, index) => {
        const { x, y } = calculatePosition(index);
        const Icon = node.icon;
        
        return (
          <div
            key={node.id}
            className={`orbital-node-wrapper ${hoveredNode === node.id ? 'hovered' : ''}`}
            style={{ 
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              transform: 'translate(-50%, -50%)'
            }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => {
              if (node.isExternal) {
                window.open(node.path, '_blank', 'noopener,noreferrer');
              } else {
                navigate(node.path);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, type: "spring", bounce: 0.4 }}
              className="node-motion-wrapper"
            >
              <div className="node-card">
                <div className="node-icon-wrapper">
                  <Icon size={24} className="node-icon" />
                </div>
                <span className="node-label">{node.label}</span>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default NeuralNetwork;
