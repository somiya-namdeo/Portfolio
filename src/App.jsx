import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import PlaceholderPage from './pages/PlaceholderPage'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import AcademicProfile from './pages/AcademicProfile'
import CodingArena from './pages/CodingArena'
import NeuralOS from './pages/NeuralOS'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Apply theme to body
    if (theme === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
        ) : (
          <div className="app-container" key="app">
            <ScrollToTop />
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home theme={theme} />} />
                
                {/* Core New Routes */}
                <Route path="/recruiter-snapshot" element={<PlaceholderPage title="Recruiter Snapshot" />} />
                <Route path="/academic-profile" element={<AcademicProfile />} />
                <Route path="/skill-matrix" element={<NeuralOS />} />
                <Route path="/projects-universe" element={<Projects />} />
                <Route path="/experience-timeline" element={<PlaceholderPage title="Experience Timeline" />} />
                <Route path="/resume-vault" element={<Resume />} />
                <Route path="/contact-console" element={<Contact />} />
                <Route path="/coding-arena" element={<CodingArena />} />
                <Route path="/github-hub" element={<PlaceholderPage title="GitHub Hub" />} />

                {/* Legacy Redirects */}
                <Route path="/projects" element={<Navigate to="/projects-universe" replace />} />
                <Route path="/resume" element={<Navigate to="/resume-vault" replace />} />
                <Route path="/skills" element={<Navigate to="/skill-matrix" replace />} />
                <Route path="/experience" element={<Navigate to="/experience-timeline" replace />} />
                <Route path="/contact" element={<Navigate to="/contact-console" replace />} />
                <Route path="/coding-profiles" element={<Navigate to="/coding-arena" replace />} />
                <Route path="/github" element={<Navigate to="/github-hub" replace />} />
                <Route path="/education" element={<Navigate to="/academic-profile" replace />} />
                <Route path="/certifications" element={<Navigate to="/academic-profile" replace />} />
              </Routes>
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
