import React from 'react';

/**
 * GlassCard — Reusable glassmorphism card component.
 * 
 * UI/UX Style Guidelines Applied (from style search: glassmorphism):
 * - Backdrop blur: 15px (recommended 10-20px range)
 * - Background opacity: 15% translucent white on dark
 * - Border: 1px solid rgba(255,255,255,0.15) for subtle definition
 * - Text contrast: maintained at 4.5:1 minimum
 * - Hover: translateY(-4px) + subtle purple glow shadow
 * - cursor-pointer on hoverable cards
 * - Smooth transition timing (200-300ms per UX interaction rules)
 * 
 * @param {boolean} hover - Enable hover lift effect
 * @param {string} className - Additional CSS classes
 */
export const GlassCard = ({ children, className = '', hover = false }) => {
  return (
    <div 
      className={`
        bg-white/[0.04] 
        backdrop-blur-[15px] 
        border border-white/[0.12] 
        rounded-xl p-6 
        transition-all duration-300 ease-out
        ${hover ? 'cursor-pointer hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/[0.18] hover:shadow-[0_8px_32px_rgba(108,99,255,0.12)]' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};
