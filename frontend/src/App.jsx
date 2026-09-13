import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { MoreProjects } from './components/sections/MoreProjects';
import { Contact } from './components/sections/Contact';
import { ProjectDetail } from './components/pages/ProjectDetail';

// Handle automatic hash scrolling when route changes
const ScrollToHashElement = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);
  return null;
};

const Home = () => (
  <main className="flex-grow">
    <Hero />
    <Projects />
    <MoreProjects />
    <Experience />
    <About />
    <Contact />
  </main>
);

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <ScrollToHashElement />
      <div className="min-h-screen flex flex-col relative">
        {/* Global cursor glow */}
        <div 
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(108, 99, 255, 0.05), transparent 40%)'
          }}
        />
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
