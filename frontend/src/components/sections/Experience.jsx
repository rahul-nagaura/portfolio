import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export const Experience = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <section id="experience" className="py-24 sm:py-32 bg-gray-50 dark:bg-[#0A0A0F] transition-colors duration-500 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16 border-b border-black/10 dark:border-white/10 transition-colors duration-500 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-black dark:border-white/50 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-black dark:text-white mb-6 transition-colors duration-500">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white transition-colors duration-500"></span>
                <span>Track Record</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl break-words font-heading font-extrabold tracking-tighter text-black dark:text-white uppercase transition-colors duration-500 dark:[text-shadow:none] dark:[filter:none]">
                Experience.
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          
          {/* Top Row: Full Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.experience.map((exp, index) => {
              if (exp.size !== 'large') return null;
              
              return (
                <div key={index} className={!isExpanded && index >= 3 ? 'hidden md:block' : 'block'}>
                  <ScrollReveal delay={0.2 + (index * 0.1)} direction="up">
                    <div className="bg-white dark:bg-[#111111] text-black dark:text-white p-8 sm:p-10 border border-black/10 dark:border-white/10 flex flex-col transition-colors duration-500 hover:border-black/30 dark:hover:border-white/30 group relative overflow-hidden h-auto">
                      
                      {/* Background Number */}
                      <div className="absolute -right-6 -bottom-6 text-[150px] font-heading font-black text-black/[0.03] dark:text-white/[0.02] select-none pointer-events-none leading-none transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="relative z-10 flex-grow">
                      <div className="flex justify-between items-start mb-6 flex-col sm:flex-row gap-4">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight mb-2 uppercase">
                            {exp.company}
                          </h3>
                          <div className="flex items-center gap-3">
                            <h4 className="text-sm font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                              {exp.role}
                            </h4>
                            {exp.current && (
                              <span className="px-2 py-0.5 border border-black/20 dark:border-white/20 text-[10px] font-mono tracking-widest uppercase flex items-center gap-2">
                                <span className="w-1 h-1 bg-black dark:bg-white animate-pulse"></span>
                                Live
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-left sm:text-right shrink-0">
                          <p className="text-[10px] font-mono tracking-widest uppercase opacity-60 mb-1 whitespace-nowrap">{exp.period}</p>
                          <p className="text-[10px] font-mono tracking-widest uppercase opacity-40">{exp.location}</p>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg font-body leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                        {exp.description}
                      </p>
                    </div>

                    {/* Tags aligned below text */}
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {exp.tags?.map(tag => (
                        <span key={tag} className="text-[10px] font-mono tracking-widest uppercase border border-black/10 dark:border-white/20 px-2 py-1 text-gray-600 dark:text-gray-400 transition-colors duration-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
                </div>
              );
            })}
          </div>

          {/* Bottom Rows: Compact Entries */}
          <div className="space-y-4">
            {portfolioData.experience.map((exp, index) => {
              if (exp.size !== 'compact') return null;
              
              return (
                <div key={index} className={!isExpanded && index >= 3 ? 'hidden md:block' : 'block'}>
                  <ScrollReveal delay={0.4 + (index * 0.1)} direction="up">
                    <div className="bg-white dark:bg-[#0A0A0F] text-black dark:text-white p-6 sm:p-8 border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors duration-500 flex flex-col relative overflow-hidden group">
                      
                      {/* Background Number */}
                      <div className="absolute -right-4 -top-8 text-[120px] font-heading font-black text-black/[0.02] dark:text-white/[0.015] select-none pointer-events-none transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="relative z-10">
                      
                      {/* Header Row */}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                            <h3 className="text-xl font-heading font-bold uppercase tracking-tight">
                              {exp.company}
                            </h3>
                            <span className="hidden sm:block text-black/20 dark:text-white/20">/</span>
                            <h4 className="text-[11px] font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                              {exp.role}
                            </h4>
                          </div>
                        </div>
                        
                        <div className="text-left md:text-right shrink-0">
                          <p className="text-[10px] font-mono tracking-widest uppercase opacity-60 mb-1 whitespace-nowrap">{exp.period}</p>
                          <p className="text-[10px] font-mono tracking-widest uppercase opacity-40">{exp.location}</p>
                        </div>
                      </div>

                      {/* Body Text */}
                      <p className="text-sm font-body text-gray-700 dark:text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        {exp.description}
                        {exp.link && (
                          <a href={exp.link} className="inline-flex items-center gap-1 ml-2 text-black dark:text-white hover:opacity-70 transition-opacity font-mono text-[11px] uppercase tracking-widest">
                            See full case study <ArrowRight size={12} />
                          </a>
                        )}
                      </p>

                      {/* Tags aligned below text, left aligned */}
                      {exp.tags && (
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map(tag => (
                            <span key={tag} className="text-[9px] font-mono tracking-widest uppercase border border-black/10 dark:border-white/10 px-2 py-1 text-gray-600 dark:text-gray-500 transition-colors duration-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                    </div>
                  </div>
                </ScrollReveal>
                </div>
              );
            })}
          </div>
          
          {/* Mobile "See More" Button */}
          {portfolioData.experience.length > 3 && (
            <div className="flex md:hidden justify-center mt-4">
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-6 py-3 border border-black/20 dark:border-white/20 text-xs font-mono tracking-widest uppercase text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {isExpanded ? 'Show Less' : 'See More'}
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
