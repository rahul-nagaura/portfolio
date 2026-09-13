import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * ScrollReveal — Animates children when they scroll into view.
 * 
 * UI/UX Guidelines Applied:
 * - Respects `prefers-reduced-motion` (renders final state immediately)
 * - Small y-offset (12px) so it reads as a fade, not a slide
 * - Spring physics for natural, organic motion feel
 * - Triggers once only (no re-animation on scroll back)
 * 
 * @param {string} direction - Animation origin: 'up' | 'down' | 'left' | 'right'
 * @param {number} delay - Delay before animation starts (in seconds)
 * @param {number} duration - Animation duration (in seconds)
 * @param {string} className - Additional CSS classes
 */
export const ScrollReveal = ({ children, direction = 'up', delay = 0, duration = 0.5, className = '' }) => {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-10px 0px', // Slightly inside viewport for better timing
  });

  // If user prefers reduced motion, render content immediately without animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // Keep offsets small (8-16px) per GSAP/UX best practices — reads as fade, not slide
  const offsets = {
    up: { x: 0, y: 12 },
    down: { x: 0, y: -12 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  const offset = offsets[direction] || offsets.up;

  const variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale: 0.98, // Subtle scale for depth
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // Smooth ease-out curve
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
