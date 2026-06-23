import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconExternalLink, IconBrandGithubFilled } from '@tabler/icons-react';
import { projects } from '../data/projects';

export function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  
  const categories = useMemo(() => {
    const cats = new Set(projects.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
          <span className="text-primary animate-pulse">{'>'}</span> System.Projects
        </h1>
        <p className="text-muted text-lg max-w-2xl mb-8">
          A showcase of recent software engineering experiments, full-stack applications, and architectural designs.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 font-mono text-sm rounded border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${filter === cat ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/10 text-secondary hover:border-primary/50 hover:text-white'}`}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-window group overflow-hidden flex flex-col h-full hover:border-primary/50 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-4 focus-within:ring-offset-background"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden border-b border-white/10 shrink-0">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10 pointer-events-none"></div>
                <img 
                  src={project.imageUrl} 
                  alt={`Screenshot of ${project.title}`} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3 z-20 bg-primary text-black text-xs font-bold font-mono px-2 py-1 rounded-sm uppercase tracking-wider u-shadow-neon">
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
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-secondary/70 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded" aria-label={`View ${project.title} source code on GitHub`}>
                      <IconBrandGithubFilled className="w-5 h-5" />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-secondary/70 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded" aria-label={`Visit ${project.title} live site`}>
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
        </AnimatePresence>
      </motion.div>
      
      <noscript>
        <div className="p-6 glass-panel mt-8">
          <h2 className="text-xl font-bold text-white mb-4">All Projects</h2>
          <ul className="space-y-4 text-muted">
            {projects.map(p => (
              <li key={p.id}>
                <strong className="text-white">{p.title}</strong> - {p.description} <br/>
                <a href={p.liveUrl} className="text-primary hover:underline">Live Link</a> | <a href={p.githubUrl} className="text-primary hover:underline">Source Code</a>
              </li>
            ))}
          </ul>
        </div>
      </noscript>
    </div>
  );
}
