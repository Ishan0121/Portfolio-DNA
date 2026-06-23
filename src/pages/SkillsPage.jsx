import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData, levelColors } from '../data/skills';

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function SkillsPage() {
  const [view, setView] = useState("grid");

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(var(--color-primary),0.3)]">Skills & Expertise</h2>
        <p className="text-lg text-muted max-w-2xl mx-auto font-mono">
          A comprehensive overview of my technical skills and proficiency levels.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mb-10 h-[200px] lg:h-[300px] w-full max-w-3xl mx-auto rounded-3xl overflow-hidden glass-panel border-white/10 group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700"></div>
        <img 
          src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="skills visual" 
          className="object-cover absolute inset-0 w-full h-full mix-blend-overlay filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-50 group-hover:opacity-80"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center mb-16 w-full z-20"
      >
        <div className="glass-panel bg-black/40 p-1 rounded-full flex gap-1 font-mono text-sm border-white/10">
          <button 
            onClick={() => setView("grid")}
            className={`rounded-full px-6 py-2 transition-all ${view === 'grid' ? 'bg-primary/20 text-white font-bold border border-primary/30' : 'text-muted hover:text-white border border-transparent'}`}
          >
            Grid View
          </button>
          <button 
            onClick={() => setView("tree")}
            className={`rounded-full px-6 py-2 transition-all ${view === 'tree' ? 'bg-primary/20 text-white font-bold border border-primary/30' : 'text-muted hover:text-white border border-transparent'}`}
          >
            Tree View
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-16 w-full max-w-4xl mx-auto"
      >
        {skillsData.map((category, index) => (
          <div key={index} className="space-y-6 overflow-hidden">
            <h3 className="text-2xl font-bold text-white tracking-widest uppercase border-b border-white/10 pb-2">{category.name}</h3>
            
            {view === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={i}
                    variants={i % 2 === 0 ? slideLeft : slideRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="overflow-hidden"
                  >
                    <div className="glass-panel border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/5 h-full group p-5 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-white group-hover:text-primary transition-colors">{skill.name}</h3>
                        <span className={`text-xs font-mono px-2 py-0.5 rounded border ${levelColors[skill.level] || 'bg-white/10 text-white border-white/20'}`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-sm text-muted font-mono">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="pl-6 border-l border-white/20 space-y-6">
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--color-primary),1)]"></div>
                    <h4 className="font-bold text-lg text-white flex items-center gap-3">
                      {skill.name}
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${levelColors[skill.level] || 'bg-white/10 text-white border-white/20'}`}>
                        {skill.level}
                      </span>
                    </h4>
                    <p className="text-sm text-muted mt-1 font-mono">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
