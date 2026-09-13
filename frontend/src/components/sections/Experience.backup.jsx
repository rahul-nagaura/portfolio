import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { TimelineItem } from '../ui/TimelineItem';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeading 
            title="Professional Experience" 
            accent="Experience" 
            subtitle="My journey through product, growth, and analytics roles."
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto mt-12 relative">
          {portfolioData.experience.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
