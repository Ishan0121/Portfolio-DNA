import React from 'react';
import { motion } from 'framer-motion';
import { aboutInfo, timeline, services } from '../data/about';

export function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-window p-8 md:p-12 border-l-4 border-l-primary"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {aboutInfo.heading}
        </h1>
        <div className="space-y-4 text-muted text-lg max-w-3xl">
          {aboutInfo.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {aboutInfo.stats.map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 text-center border border-white/5 bg-black/20 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300" tabIndex="0">
              <div className="text-3xl font-bold text-primary mb-2 drop-shadow-[0_0_8px_rgba(var(--color-primary),0.5)]">{stat.value}</div>
              <div className="text-xs font-mono text-secondary/70 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-mono text-white flex items-center gap-3">
            <span className="text-primary animate-pulse">{'>'}</span> Timeline
          </h2>
          <div className="glass-window p-8 flex flex-row lg:flex-col gap-8 overflow-x-auto lg:overflow-visible snap-x lg:snap-none pb-12 lg:pb-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative min-w-[85vw] md:min-w-[400px] lg:min-w-0 snap-center lg:snap-align-none pl-8 border-l border-white/10 before:absolute before:left-[-5px] before:top-2 before:w-2.5 before:h-2.5 before:bg-primary before:rounded-full before:shadow-[0_0_10px_rgba(var(--color-primary),1)]">
                <div className="text-primary font-mono text-sm mb-1">{item.year}</div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <div className="text-secondary/80 text-sm font-mono mb-3 uppercase tracking-wider">{item.company}</div>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-mono text-white flex items-center gap-3">
            <span className="text-primary animate-pulse">{'>'}</span> Services
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="glass-window p-6 border-l-2 border-l-transparent hover:border-l-primary hover:bg-white/5 transition-all duration-300 group">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted font-mono text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
