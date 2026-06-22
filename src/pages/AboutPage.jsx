import React from 'react';
import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-3xl font-bold font-mono neon-text mb-8">/about_me</h1>
      <div className="glass-window p-8 max-w-4xl font-mono text-secondary/90 space-y-4">
        <p>{">"} INITIALIZING BIO SEQUENCE...</p>
        <p>System Architect and Full Stack Engineer. Specializing in bridging the gap between low-level embedded systems and high-level web interfaces.</p>
        <p>My digital genome is comprised of C++, React, and robust system designs.</p>
        <p className="animate-pulse text-primary mt-4">_</p>
      </div>
    </motion.div>
  );
}
