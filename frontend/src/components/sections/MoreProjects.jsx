import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MoreProjects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const projects = portfolioData.moreProjects || [];
  
  if (projects.length === 0) return null;

  // Mobile limit: 3, Desktop limit: 6
  const mobileLimit = 3;
  const desktopLimit = 6;

  return (
    <section id="more-projects" className="py-24 sm:py-32 bg-white dark:bg-[#0A0A0F] transition-colors duration-500 relative border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-black dark:border-white/50 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-black dark:text-white mb-6 transition-colors duration-500">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white transition-colors duration-500"></span>
                <span>Explorations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl break-words font-heading font-extrabold tracking-tighter text-black dark:text-white uppercase transition-colors duration-500 [text-shadow:none]">
                Projects.
              </h2>
            </div>
            <p className="text-sm font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 max-w-sm text-left md:text-right transition-colors duration-500">
              Web apps, decks, and side builds.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            // Visibility logic
            const isHiddenMobile = !isExpanded && index >= mobileLimit;
            const isHiddenDesktop = !isExpanded && index >= desktopLimit;
            
            return (
              <ScrollReveal 
                key={project.id} 
                delay={0.1 + (index * 0.05)} 
                direction="up" 
                className={`h-full ${isHiddenMobile ? 'hidden sm:block' : 'block'} ${isHiddenDesktop ? 'sm:hidden' : ''}`}
              >
                <Link 
                  to={`/projects/${project.id}`}
                  className="group block border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all duration-300 cursor-pointer h-full bg-white dark:bg-[#0A0A0F] text-black dark:text-white p-6 sm:p-8 hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <h3 className="text-xl sm:text-2xl font-mono font-bold mb-3 tracking-tight uppercase">
                    <span dangerouslySetInnerHTML={{ __html: project.title }} />
                  </h3>
                  <p className="text-sm font-body mb-6 text-black/70 dark:text-gray-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-gray-500 border border-black/10 dark:border-white/10 px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* CTA */}
                  <div className="mt-auto flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-500">
                    <span>View Project</span>
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* See More Button */}
        {((projects.length > mobileLimit) || (projects.length > desktopLimit)) && (
          <ScrollReveal delay={0.4} direction="up">
            <div className={`mt-12 flex justify-center ${
              !isExpanded && projects.length <= desktopLimit ? 'flex sm:hidden' : 'flex'
            }`}>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-8 py-3 border border-black dark:border-white text-xs font-mono font-bold uppercase tracking-widest text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 flex items-center gap-2 dark:[text-shadow:none] dark:[filter:none]"
              >
                {isExpanded ? 'Show Less' : 'See More'}
              </button>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
};
