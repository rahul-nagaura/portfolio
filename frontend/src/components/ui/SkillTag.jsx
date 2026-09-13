import React from 'react';

export const SkillTag = ({ skill, variant = 'technical' }) => {
  const isTechnical = variant === 'technical';
  const bgClass = isTechnical ? 'bg-primary/10 border-primary/20 hover:border-primary/50 text-primary-light' : 'bg-secondary/10 border-secondary/20 hover:border-secondary/50 text-secondary';
  
  return (
    <div className={`px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 cursor-default ${bgClass}`}>
      <span className="font-mono text-sm">{skill}</span>
    </div>
  );
};
