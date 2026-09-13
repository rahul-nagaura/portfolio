import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { GlassCard } from './GlassCard';

export const TimelineItem = ({ role, company, period, location, description, highlights, tags, current }) => {
  return (
    <ScrollReveal direction="up" delay={0.1} className="relative pl-8 sm:pl-10 pb-12 last:pb-2">
      {/* Connector line */}
      <div className="absolute left-[11px] sm:left-[15px] top-6 bottom-[-16px] w-px bg-white/10 last:hidden"></div>
      
      {/* Timeline Dot Indicator */}
      <div className={`absolute left-0 sm:left-[4px] top-2 w-6 h-6 rounded-full border-4 border-background flex items-center justify-center ${
        current ? 'bg-secondary shadow-[0_0_12px_rgba(0,212,170,0.6)] animate-pulse' : 'bg-primary/80'
      }`}></div>
      
      <GlassCard hover className="p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-3 gap-2">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="text-xl font-heading font-bold text-text-primary">{role}</h3>
              {current && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                  Active
                </span>
              )}
            </div>
            <p className="text-primary-light font-medium text-base mt-0.5">{company}</p>
          </div>
          
          <div className="text-left sm:text-right shrink-0">
            <span className="inline-block px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full text-xs sm:text-sm font-mono text-text-secondary mb-1">
              {period}
            </span>
            <p className="text-xs text-text-muted">{location}</p>
          </div>
        </div>
        
        {description && (
          <p className="text-text-secondary text-sm sm:text-base mb-4 leading-relaxed">{description}</p>
        )}
        
        <ul className="space-y-2.5 mb-5">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start text-text-secondary text-sm sm:text-base leading-relaxed">
              <span className="text-primary mr-2.5 mt-1 font-bold">▹</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
            {tags.map((tag, idx) => (
              <span key={idx} className="text-xs font-mono bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-md text-text-muted">
                {tag}
              </span>
            ))}
          </div>
        )}
      </GlassCard>
    </ScrollReveal>
  );
};
