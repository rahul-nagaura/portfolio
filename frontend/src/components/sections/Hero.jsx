import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-white dark:bg-[#0A0A0F] transition-colors duration-500 pt-28 lg:pt-0 pb-16 lg:pb-0">
      
      {/* Editorial Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] transition-colors duration-500"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 mt-4 lg:mt-0">
          
          {/* Left Column (Text & CTAs) */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center text-center lg:text-left">
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-1.5 border border-black dark:border-white/50 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-black dark:text-white mb-6 sm:mb-8 transition-colors duration-500">
                <span className="w-1.5 h-1.5 bg-black dark:bg-white transition-colors duration-500"></span>
                <span>BUSINESS ANALYST @ CREDITQ</span>
              </div>

              <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-[75px] leading-[0.9] font-heading font-extrabold tracking-tighter text-black dark:text-white mb-6 sm:mb-8 uppercase transition-colors duration-500 [text-shadow:none]">
                RAHUL<br />
                NAGAURA.
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} direction="up">
              <p className="text-base sm:text-lg md:text-xl text-black dark:text-gray-300 font-medium mb-10 max-w-2xl leading-snug transition-colors duration-500 [text-shadow:none] mx-auto lg:mx-0">
                I sit between frustrated customers and the engineering backlog — translating one into the other at CreditQ. Chemical engineer by training, product person by choice.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4} direction="up" className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a href="#projects" className="px-8 py-3.5 sm:py-4 bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-mono font-bold tracking-widest text-xs uppercase w-full sm:w-auto text-center [text-shadow:none] [filter:none]">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3.5 sm:py-4 bg-white text-black dark:bg-[#0A0A0F] dark:text-white border border-black dark:border-white hover:bg-gray-50 dark:hover:bg-white/10 transition-colors font-mono font-bold tracking-widest text-xs uppercase w-full sm:w-auto text-center [text-shadow:none] [filter:none]">
                Get in Touch
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column (Stats) */}
          <div className="w-full lg:w-[40%] flex flex-row lg:flex-col justify-between lg:justify-center gap-4 sm:gap-8 lg:gap-16 pt-8 lg:pt-0 lg:pl-16">
            <ScrollReveal delay={0.3} direction="left" className="text-center lg:text-left flex-1">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black dark:text-white mb-1 sm:mb-2 tracking-tighter transition-colors duration-500">10K</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 transition-colors duration-500">organic followers<br className="hidden lg:block"/> zero ad spend</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4} direction="left" className="text-center lg:text-left flex-1">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black dark:text-white mb-1 sm:mb-2 tracking-tighter transition-colors duration-500">100K+</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 transition-colors duration-500">ride records<br className="hidden lg:block"/> analyzed</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5} direction="left" className="text-center lg:text-left flex-1">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black dark:text-white mb-1 sm:mb-2 tracking-tighter transition-colors duration-500">5-stage</div>
                <div className="text-[9px] sm:text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 transition-colors duration-500">B2B funnel built<br className="hidden lg:block"/> end-to-end</div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 hidden lg:flex">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-black dark:text-white mb-2 transition-colors duration-500">Scroll</span>
        <ChevronDown size={16} className="text-black dark:text-white animate-bounce transition-colors duration-500" />
      </div>
    </section>
  );
};
