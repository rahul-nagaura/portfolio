import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeading 
            title="Certifications & Leadership" 
            accent="Leadership" 
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-6">Certifications</h3>
            <div className="space-y-4">
              {portfolioData.certifications.map((cert, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <GlassCard hover className="p-5 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-text-primary">{cert.title}</h4>
                      <p className="text-sm text-text-secondary">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-text-muted bg-background px-2 py-1 rounded">{cert.date}</span>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-6">Leadership</h3>
            <div className="space-y-4">
              {portfolioData.leadership.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <GlassCard hover className="p-5">
                    <h4 className="font-bold text-primary-light mb-1">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.org}</p>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
