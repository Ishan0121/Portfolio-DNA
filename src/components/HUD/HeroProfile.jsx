import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import { siteConfig } from '../../data/site';
import { Link } from 'react-router-dom';

function AnimatedTaglines({ taglines }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines]);

  return (
    <div className="h-8 relative overflow-hidden flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute text-primary/90 font-mono tracking-widest text-lg md:text-xl"
        >
          {">"} {taglines[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function HeroProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="glass-window p-8 md:p-12 max-w-2xl border-l-4 border-l-primary relative overflow-hidden"
    >
      {/* Background static grid for texture */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10 space-y-6">
        <div className="space-y-2">
          <h2 className="text-secondary/70 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            System User Authorized
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
            Hello, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              {siteConfig.name}
            </span>
          </h1>
        </div>

        <AnimatedTaglines taglines={siteConfig.taglines} />

        <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl border-l border-white/10 pl-4">
          {siteConfig.bio}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Link 
            to="/projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary/10 text-primary border border-primary/50 rounded font-mono hover:bg-primary/20 transition-all duration-300"
          >
            <span>View My Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <div className="absolute inset-0 shadow-[0_0_15px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-shadow pointer-events-none rounded"></div>
          </Link>
          
          <a 
            href={siteConfig.resumeUrl}
            download
            className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/5 text-white border border-white/10 rounded font-mono hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            <span>Download CV</span>
            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
