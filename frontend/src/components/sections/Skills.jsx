import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillTag } from '../ui/SkillTag';
import { GlassCard } from '../ui/GlassCard';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeading 
            title="Core Skills" 
            accent="Skills" 
            subtitle="The tools and frameworks I use to solve business problems."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <ScrollReveal direction="right">
            <GlassCard className="h-full">
              <h3 className="text-xl font-heading font-bold text-text-primary mb-6 flex items-center">
                <span className="w-2 h-6 bg-primary rounded-full mr-3"></span>
                Technical Arsenal
              </h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills.technical.map((skill, index) => (
                  <SkillTag key={index} skill={skill} variant="technical" />
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <GlassCard className="h-full">
              <h3 className="text-xl font-heading font-bold text-text-primary mb-6 flex items-center">
                <span className="w-2 h-6 bg-secondary rounded-full mr-3"></span>
                Product & Strategy
              </h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills.product.map((skill, index) => (
                  <SkillTag key={index} skill={skill} variant="product" />
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
