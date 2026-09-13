import React from 'react';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-surface/50 py-12 mt-20 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-heading font-bold mb-2">Rahul Nagaura</h2>
            <p className="text-text-muted text-sm">{portfolioData.personal.tagline}</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href={`mailto:${portfolioData.personal.email}`} className="text-text-secondary hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <button 
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-text-secondary hover:text-white transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-white/5 text-text-muted text-sm">
          <p>© {new Date().getFullYear()} Rahul Nagaura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
