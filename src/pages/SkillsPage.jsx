import React from 'react';
import { motion } from 'framer-motion';
import { skillsData, levelColors } from '../data/skills';

export function SkillsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
          <span className="text-primary animate-pulse">{'>'}</span> System.Skills
        </h1>
        <p className="text-muted text-lg max-w-2xl">
          Core competencies and technological stack integrated into the developer mainframe.
        </p>
      </motion.div>

      <div className="space-y-12">
        {skillsData.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
          >
            <h2 className="text-2xl font-mono text-secondary/90 mb-6 uppercase tracking-widest border-b border-white/10 pb-2">
              {category.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, sIdx) => (
                <div key={skill.name} className="glass-panel p-6 flex flex-col gap-3 group hover:border-primary/40 hover:bg-white/5 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{skill.name}</h3>
                    <span className={`text-xs font-mono px-2 py-1 border rounded ${levelColors[skill.level] || 'bg-white/10 text-white border-white/20'}`}>
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
