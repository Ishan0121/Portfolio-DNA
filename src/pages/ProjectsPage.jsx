import React from 'react';
import { motion } from 'framer-motion';
import { IconExternalLink, IconBrandGithubFilled } from '@tabler/icons-react';
import { projects } from '../data/projects';

export function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
          <span className="text-primary animate-pulse">{'>'}</span> System.Projects
        </h1>
        <p className="text-muted text-lg max-w-2xl">
          A showcase of recent software engineering experiments, full-stack applications, and architectural designs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-window group overflow-hidden flex flex-col h-full hover:border-primary/50 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10"></div>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
              {project.featured && (
                <div className="absolute top-3 left-3 z-20 bg-primary text-black text-xs font-bold font-mono px-2 py-1 rounded-sm uppercase tracking-wider shadow-[0_0_10px_#00f0ff]">
                  Featured
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-primary font-mono text-xs mb-2 uppercase tracking-widest">{project.category}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <div className="flex gap-3">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-secondary/70 hover:text-white transition-colors">
                    <IconBrandGithubFilled className="w-5 h-5" />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-secondary/70 hover:text-white transition-colors">
                    <IconExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <p className="text-muted text-sm mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-secondary/80 bg-white/5 px-2 py-1 rounded border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
