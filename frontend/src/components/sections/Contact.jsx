import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-[#0A0A0F] text-black dark:text-white pt-12 sm:pt-24 pb-6 relative z-20 transition-colors duration-500 border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex flex-col justify-between">
        
        <div className="flex-grow flex flex-col justify-center">
          {/* Top Section: Headline & Photo */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-6 sm:gap-12 mb-8 sm:mb-16">
            <ScrollReveal direction="up" delay={0.1} className="w-full md:flex-1 flex flex-col justify-center">
              <h2 className="text-[11vw] sm:text-6xl md:text-[80px] lg:text-[100px] font-heading font-extrabold tracking-tight uppercase leading-[1.1] md:leading-[1] mb-0 break-words dark:[text-shadow:none]">
                LET'S<span className="hidden md:inline"><br /></span><span className="md:hidden"> </span>TALK.
              </h2>
            </ScrollReveal>

            {/* Profile Photo - Hidden on mobile, visible on md and up */}
            <ScrollReveal direction="up" delay={0.2} className="hidden md:block shrink-0 w-[200px] lg:w-[260px]">
              <div className="w-full h-full aspect-square md:aspect-[4/5] bg-gray-100 dark:bg-white/5 overflow-hidden transition-colors duration-500 rounded-sm">
                <img 
                  src="/profile.png" 
                  alt="Rahul Nagaura" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Middle Section: Contact Info & Buttons */}
          <div className="border-t border-black/10 dark:border-white/10 transition-colors duration-500 pt-6 sm:pt-12 pb-8 sm:pb-16 flex flex-col md:flex-row justify-between gap-8 sm:gap-12 items-start md:items-center">
            
            {/* Left: Info */}
            <ScrollReveal direction="up" delay={0.3} className="flex flex-col gap-4 sm:gap-6">
              <a 
                href={`mailto:${portfolioData.personal.email}`}
                className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wide text-black dark:text-white dark:[text-shadow:none] dark:[filter:none] hover:opacity-60 transition-opacity"
              >
                {portfolioData.personal.email}
              </a>
              <p className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wide text-black dark:text-white dark:[text-shadow:none] dark:[filter:none]">
                JAIPUR, INDIA
              </p>
            </ScrollReveal>

            {/* Right: Links/Buttons */}
            <ScrollReveal direction="up" delay={0.4} className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <a 
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border border-black/20 dark:border-white/20 font-heading font-bold text-sm tracking-widest uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 flex items-center justify-center gap-3 w-full sm:w-auto group dark:[text-shadow:none] dark:[filter:none]"
              >
                LINKEDIN <ArrowUpRight size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border border-black/20 dark:border-white/20 font-heading font-bold text-sm tracking-widest uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 flex items-center justify-center gap-3 w-full sm:w-auto group dark:[text-shadow:none] dark:[filter:none]"
              >
                RESUME <ArrowUpRight size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </ScrollReveal>
            
          </div>
        </div>

        {/* Footer Strip */}
        <div className="border-t border-black/10 dark:border-white/10 transition-colors duration-500 pt-6 flex justify-between items-center text-[10px] sm:text-xs font-mono tracking-widest text-gray-500 dark:text-gray-400 uppercase">
          <p>V1.0</p>
          <p>© 2026 RAHUL NAGAURA</p>
        </div>

      </div>
    </footer>
  );
};
