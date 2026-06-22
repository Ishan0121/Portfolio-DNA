import React from 'react';
import { motion } from 'framer-motion';
import { GlassWindow } from '../components/UI/GlassWindow';

const skillCategories = [
  {
    title: "CORE_LANGUAGES",
    skills: [
      { name: "C / C++", level: 95 },
      { name: "JavaScript / TS", level: 90 },
      { name: "Python", level: 85 },
      { name: "Rust", level: 65 }
    ]
  },
  {
    title: "SYSTEMS_INFRA",
    skills: [
      { name: "Linux / Bash", level: 95 },
      { name: "Docker", level: 80 },
      { name: "Embedded Systems", level: 85 },
      { name: "Git Workflow", level: 90 }
    ]
  },
  {
    title: "FRAMEWORKS_WEB",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Three.js", level: 75 },
      { name: "Flutter", level: 80 }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function SkillsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-6 py-12 max-w-6xl"
    >
      <div className="mb-12">
        <h1 className="text-3xl font-bold font-mono neon-text">/skills</h1>
        <p className="text-muted mt-2 font-mono">{"<"} Analyzing technical proficiencies and system capabilities... {">"}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <GlassWindow title={`sys.module.${category.title.toLowerCase()}`} className="h-full">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-6 mt-2"
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div key={sIdx} variants={itemVariants} className="font-mono">
                    <div className="flex justify-between text-sm mb-2 text-secondary">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    {/* Cybernetic Progress Bar */}
                    <div className="w-full h-1.5 bg-black/50 rounded overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.3 + (sIdx * 0.1), ease: "easeOut" }}
                        className="h-full bg-primary relative"
                      >
                        {/* Energy pulse effect */}
                        <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/60 blur-[2px]"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </GlassWindow>
          </motion.div>
        ))}
      </div>
      
      {/* Abstract decorative module */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 p-4 border border-primary/20 bg-primary/5 font-mono text-xs text-primary/60 flex items-center gap-4 rounded"
      >
        <div className="animate-pulse w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#00f0ff]"></div>
        <p>ALL SYSTEMS OPERATIONAL. MODULES LOADED AND OPTIMIZED FOR MAXIMAL PERFORMANCE.</p>
      </motion.div>
    </motion.div>
  );
}
