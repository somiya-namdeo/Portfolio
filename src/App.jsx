import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PlaceholderPage from './pages/PlaceholderPage'
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
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home theme={theme} />} />
                <Route path="/recruiter-snapshot" element={<PlaceholderPage title="Recruiter Snapshot" />} />
                <Route path="/education" element={<PlaceholderPage title="Education" />} />
                <Route path="/skills" element={<PlaceholderPage title="Skills" />} />
                <Route path="/projects" element={<PlaceholderPage title="Projects" />} />
                <Route path="/experience" element={<PlaceholderPage title="Experience" />} />
                <Route path="/certifications" element={<PlaceholderPage title="Certifications" />} />
                <Route path="/github" element={<PlaceholderPage title="GitHub" />} />
                <Route path="/coding-profiles" element={<PlaceholderPage title="Coding Profiles" />} />
                <Route path="/resume" element={<PlaceholderPage title="Resume" />} />
                <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
              </Routes>
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
