import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const terminalLines = [
  "SYSTEM INITIALIZED",
  "USER: DEVELOPER (Erebus / Noctis)",
  "ROLE: Systems Developer | Full Stack Engineer | Embedded Builder",
  "CORE: ONLINE",
  "FOCUS: Software engineering | Systems programming | AI experimentation | Hardware prototyping"
];

export function TerminalHero() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    setLines([]); // Reset for strict mode
    const interval = setInterval(() => {
      setLines(prev => {
        if (prev.length < terminalLines.length) {
          return [...prev, terminalLines[prev.length]];
        }
        clearInterval(interval);
        return prev;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="glass-panel p-8 max-w-3xl w-full mx-auto"
      >
        <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="ml-4 text-xs font-mono text-muted">terminal@erebus-core:~</span>
        </div>
        
        <div className="font-mono text-sm md:text-base space-y-4">
          {lines.map((line, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={line?.includes("ONLINE") ? "neon-text font-bold" : "text-secondary/90"}
            >
              <span className="text-primary mr-2">{'>'}</span>
              {line}
            </motion.div>
          ))}
          <motion.div 
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-5 bg-primary inline-block ml-2 align-middle"
          />
        </div>
      </motion.div>
    </div>
  );
}
