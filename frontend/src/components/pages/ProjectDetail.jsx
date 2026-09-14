import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { portfolioData } from '../../data/portfolio';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  // Find project in data
  const project = portfolioData.moreProjects?.find(p => p.id === projectId);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0A0A0F] flex flex-col items-center justify-center text-black dark:text-white transition-colors duration-500 p-6">
        <h1 className="text-4xl font-heading font-extrabold uppercase mb-4">Project Not Found</h1>
        <button onClick={() => navigate('/')} className="px-6 py-3 border border-black dark:border-white font-mono uppercase tracking-widest text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0F] text-black dark:text-white transition-colors duration-500 pt-32 pb-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        
        {/* Navigation & Header */}
        <ScrollReveal delay={0.1}>
          <Link to="/#projects" className="inline-flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-widest hover:opacity-60 transition-opacity mb-12">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          
          <h1 
            className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tighter uppercase leading-[1.1] mb-6 [text-shadow:none]"
            dangerouslySetInnerHTML={{ __html: project.title }}
          />
          
          <p className="text-lg sm:text-xl font-body text-black/70 dark:text-gray-300 leading-relaxed max-w-2xl mb-8">
            {project.description}
          </p>

          {/* Tags & Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 pb-12 border-b border-black/10 dark:border-white/10">
            {project.tags && project.tags.length > 0 && (
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Stack / Role</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono uppercase tracking-widest border border-black/20 dark:border-white/20 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {project.links && project.links.length > 0 && (
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Links</p>
                <div className="flex flex-wrap gap-4">
                  {project.links.map(link => (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest hover:opacity-60 transition-opacity dark:[text-shadow:none] dark:[filter:none]">
                      {link.label} <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Content Write-up */}
        <ScrollReveal delay={0.2}>
          <div 
            className="py-12 prose prose-lg dark:prose-invert max-w-none font-body text-black/80 dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </ScrollReveal>

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <div className="flex flex-col gap-12 py-8">
            {project.images.map((img, idx) => {
              const imgUrl = typeof img === 'string' ? img : img.url;
              const caption = typeof img === 'string' ? null : img.caption;
              return (
              <ScrollReveal key={idx} delay={0.2 + (idx * 0.1)} direction="up">
                <div className="w-full group">
                  <div className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 p-2 overflow-hidden rounded-xl">
                    <img 
                      src={imgUrl} 
                      alt={caption || `${project.title.replace('<br/>', ' ')} screenshot ${idx + 1}`} 
                      className="w-full h-auto object-cover rounded-lg"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  {caption && (
                    <p className="mt-4 text-center text-sm font-mono tracking-wide text-black/60 dark:text-gray-400">
                      {caption}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            )})}
          </div>
        )}

        <ScrollReveal delay={0.3} direction="up">
          <div className="mt-16 pt-8 border-t border-black/10 dark:border-white/10 text-center">
            <Link to="/#projects" className="inline-flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
              <ArrowLeft size={16} /> Back to Projects
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
