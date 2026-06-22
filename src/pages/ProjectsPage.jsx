import React from 'react';
import { ProjectExplorer } from '../components/UI/ProjectExplorer';
import { motion } from 'framer-motion';

export function ProjectsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-6 py-12"
    >
      <div className="max-w-5xl mx-auto mb-12">
        <h1 className="text-3xl font-bold font-mono neon-text">/projects</h1>
        <p className="text-muted mt-2 font-mono">Select a directory to inspect the project protocol.</p>
      </div>
      
      <div className="mt-[-80px]">
        <ProjectExplorer />
      </div>
    </motion.div>
  );
}
