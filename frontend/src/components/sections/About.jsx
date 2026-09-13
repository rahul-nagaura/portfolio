import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { ScrollReveal } from '../ui/ScrollReveal';

export const About = () => {
  const doubledCards = [...portfolioData.about.cards, ...portfolioData.about.cards];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white dark:bg-[#0A0A0F] transition-colors duration-500 relative border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: col-span-6 */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <ScrollReveal direction="up" delay={0.1}>
              <h4 className="text-[11px] font-mono font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-6">
                About
              </h4>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-extrabold tracking-tighter text-black dark:text-white uppercase leading-[1.1] mb-6 break-words">
                I SHIP THINGS<br />PEOPLE USE.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="max-w-2xl">
                {portfolioData.about.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-base sm:text-lg font-body leading-relaxed text-gray-600 dark:text-gray-400">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: col-span-6 */}
          <div className="lg:col-span-6 relative h-[420px] lg:h-[520px] overflow-hidden [mask-image:linear-gradient(transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(transparent,black_12%,black_88%,transparent)] w-full">
            
            {/* Infinite Marquee Container */}
            <div className="absolute top-0 left-0 w-full h-max animate-marquee-y flex flex-col gap-4">
              {doubledCards.map((card, index) => (
                <div key={index} className="bg-transparent border border-black/20 dark:border-white/30 p-5 flex flex-row items-center gap-4 sm:gap-6 transition-colors duration-500 w-full hover:bg-black/5 dark:hover:bg-white/5">
                  {card.logo && (
                    <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 bg-white border border-black/10 flex items-center justify-center p-2 rounded-md overflow-hidden">
                      <img src={card.logo} alt={card.title} className="w-full h-full object-contain" />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-gray-500 mb-1">
                      {card.label}
                    </span>
                    <span className="text-xl font-heading font-extrabold text-black dark:text-white uppercase tracking-tight mb-1">
                      {card.title}
                    </span>
                    {card.description && (
                      <span className="text-sm font-body text-gray-600 dark:text-gray-400 leading-snug">
                        {card.description}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
