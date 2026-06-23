import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../../data/site';

const terminalLines = [
  "SYSTEM INITIALIZED",
  `USER: ${siteConfig.name.toUpperCase()}`,
  `ROLE: ${siteConfig.role.toUpperCase()}`,
  `LOC: ${siteConfig.location.toUpperCase()}`,
  "CORE: ONLINE",
];

export function TerminalHero() {
  const [lines, setLines] = useState([]);
  const [speed, setSpeed] = useState(() => {
    return parseInt(localStorage.getItem('terminalSpeed') || '400', 10);
  });

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
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  const toggleSpeed = () => {
    const newSpeed = speed === 400 ? 150 : speed === 150 ? 50 : 400;
    setSpeed(newSpeed);
    localStorage.setItem('terminalSpeed', newSpeed.toString());
  };

  const speedLabel = speed === 400 ? '1x' : speed === 150 ? '2x' : 'MAX';

  return (
    <div className="w-full flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="glass-panel p-8 max-w-3xl w-full mx-auto relative"
      >
        <button
          onClick={toggleSpeed}
          className="absolute top-6 right-6 text-xs font-mono text-muted hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded px-2 py-1 border border-white/10 hover:border-primary/50 transition-colors bg-black/20"
          aria-label={`Toggle typing speed. Current speed is ${speedLabel}`}
          title="Adjust Terminal Speed"
        >
          SPEED: {speedLabel}
        </button>

        <div className="flex gap-2 mb-6 border-b border-white/10 pb-4 pr-24">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="ml-4 text-xs font-mono text-muted hidden sm:inline">terminal@erebus-core:~</span>
        </div>
        
        <section aria-labelledby="terminal-heading">
          <h2 id="terminal-heading" className="sr-only">System Initialization Terminal</h2>
          <div className="font-mono text-sm md:text-base space-y-4" role="log" aria-live="polite">
            {lines.map((line, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={line?.includes("ONLINE") ? "neon-text font-bold" : "text-secondary/90"}
              >
                <span className="text-primary mr-2" aria-hidden="true">{'>'}</span>
                {line}
              </motion.div>
            ))}
            <motion.div 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-5 bg-primary inline-block ml-2 align-middle"
              aria-hidden="true"
            />
          </div>
        </section>
      </motion.div>
    </div>
  );
}
