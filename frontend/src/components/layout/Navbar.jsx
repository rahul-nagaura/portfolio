import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDark, setIsDark] = useState(true);

  const navLinks = [
    { name: 'Work', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      
      // If at top of page, no section should be active
      if (window.scrollY < 300) {
        setActiveSection('');
        return;
      }

      const scrollPosition = window.scrollY + 200;
      let currentSection = '';
      
      for (const link of navLinks) {
        const sectionId = link.href.replace('#', '');
        const element = document.getElementById(sectionId);
        if (element && 
            element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          currentSection = sectionId;
          break;
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Theme Toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <>
    <div 
      className={`fixed z-[100] w-full flex justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? 'top-6' : 'top-0'
      }`}
    >
      <motion.nav 
        initial={false}
        animate={{
          width: scrolled ? "95%" : "100%",
          maxWidth: scrolled ? "896px" : "100%",
          borderRadius: scrolled ? "9999px" : "0px",
          paddingTop: scrolled ? "12px" : "24px",
          paddingBottom: scrolled ? "12px" : "24px",
          paddingLeft: scrolled ? "24px" : "48px",
          paddingRight: scrolled ? "24px" : "48px",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`relative flex items-center justify-between z-50 overflow-hidden md:overflow-visible transition-colors duration-500 border border-transparent ${
          scrolled 
            ? 'bg-white/90 border-black/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:bg-[#111111]/90 dark:border-white/10 dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent shadow-none'
        }`}
      >
        {/* Left: Logo */}
        <div className="flex items-center shrink-0 relative z-10">
          <a href="#" className="text-xl font-heading font-extrabold tracking-tight text-black dark:text-white transition-colors duration-300">
            Rahul Nagaura
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 relative z-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('/#', '');
            return (
              <Link 
                key={link.name} 
                to={link.href}
                className={`text-[13px] font-mono uppercase tracking-widest transition-colors ${
                  isActive 
                    ? 'text-black font-bold dark:text-white' 
                    : 'text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="flex items-center gap-3 border-l border-black/10 dark:border-white/10 pl-6 ml-2 transition-colors duration-500">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-1.5 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a 
              href={portfolioData.personal.linkedin || "https://linkedin.com"}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>

            <a 
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 bg-black text-white dark:bg-white dark:text-black text-[12px] font-mono font-bold tracking-widest uppercase rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex items-center gap-4 md:hidden relative z-10">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-1.5 text-black dark:text-white"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="p-1.5 text-black dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>
    </div>

    {/* Mobile Menu Dropdown (Moved outside flex wrapper for correct fixed positioning) */}
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-0 z-[140] bg-transparent"
          onClick={() => setIsOpen(false)}
        />
      )}
    </AnimatePresence>

    <AnimatePresence>
      {isOpen && (
        <motion.div 
          key="menu"
          initial={{ opacity: 0, y: -20, x: "-50%", scale: 0.95 }}
          animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
          exit={{ opacity: 0, y: -20, x: "-50%", scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed top-24 left-1/2 w-[90%] max-w-sm bg-white/95 dark:bg-[#111111]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-6 shadow-2xl z-[150] flex flex-col items-center space-y-6"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-mono font-bold uppercase tracking-widest text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex gap-4">
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="p-2 border border-black/10 dark:border-white/10 rounded-full text-black dark:text-white">
              <Linkedin size={20} />
            </a>
          </div>

          <a 
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black font-mono font-bold uppercase tracking-widest rounded-full w-full text-center"
          >
            Resume
          </a>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};
