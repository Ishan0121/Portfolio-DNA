import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, FileCode2, Terminal, Cpu, Database, ChevronRight, ChevronDown, Activity, Server } from 'lucide-react';
import { GlassWindow } from './GlassWindow';

const projects = [
  {
    id: 'vcs',
    name: 'version_control_system',
    icon: <Terminal size={16} />,
    details: [
      { name: 'language: C++', icon: <FileCode2 size={14} /> },
      { name: 'status: active', icon: <Activity size={14} /> }
    ],
    description: "A custom Git-like version control system built in C++.",
    tech: "C++"
  },
  {
    id: 'search',
    name: 'search_engine',
    icon: <Database size={16} />,
    details: [
      { name: 'distributed_system', icon: <Server size={14} /> },
      { name: 'backend', icon: <Terminal size={14} /> }
    ],
    description: "Backend infrastructure exploring search and distributed computing concepts.",
    tech: "Backend / Systems"
  },
  {
    id: 'tracker',
    name: 'money_tracker',
    icon: <Terminal size={16} />,
    details: [
      { name: 'Flutter', icon: <FileCode2 size={14} /> },
      { name: 'SQLite', icon: <Database size={14} /> }
    ],
    description: "An offline-first mobile finance application.",
    tech: "Flutter, SQLite"
  },
  {
    id: 'minibot',
    name: 'minibot',
    icon: <Cpu size={16} />,
    details: [
      { name: 'ESP32', icon: <Cpu size={14} /> },
      { name: 'Embedded', icon: <Cpu size={14} /> }
    ],
    description: "A desktop companion robot project.",
    tech: "ESP32, Embedded Systems"
  }
];

export function ProjectExplorer() {
  const [expandedFolders, setExpandedFolders] = useState(['vcs']);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const toggleFolder = (id) => {
    setExpandedFolders(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto my-32">
      {/* File Tree */}
      <GlassWindow title="/projects" className="md:col-span-1 h-[400px]">
        <div className="font-mono text-sm space-y-2">
          {projects.map((project) => {
            const isExpanded = expandedFolders.includes(project.id);
            const isSelected = selectedProject?.id === project.id;
            
            return (
              <div key={project.id} className="select-none">
                <div 
                  className={`flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-white/5 transition-colors ${isSelected ? 'text-primary' : 'text-secondary/80'}`}
                  onClick={() => {
                    toggleFolder(project.id);
                    setSelectedProject(project);
                  }}
                >
                  {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  <Folder size={16} className={isExpanded ? "text-primary" : "text-muted"} />
                  {project.name}/
                </div>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden ml-6 pl-2 border-l border-white/10 space-y-1 mt-1"
                    >
                      {project.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-muted p-1 text-xs">
                          {detail.icon}
                          {detail.name}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </GlassWindow>

      {/* Details Panel */}
      <GlassWindow title="project_details.md" className="md:col-span-2 h-[400px]">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <motion.div 
              key={selectedProject.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {selectedProject.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold neon-text">{selectedProject.name}</h2>
                  <p className="text-sm font-mono text-muted">{selectedProject.tech}</p>
                </div>
              </div>
              
              <div className="space-y-4 text-secondary/90">
                <p>{selectedProject.description}</p>
                <div className="bg-black/30 p-4 rounded font-mono text-sm border border-white/5">
                  <span className="text-muted"># Initialize protocol</span><br/>
                  <span className="text-primary">$</span> ./run {selectedProject.name}<br/>
                  <span className="text-green-400">Loading modules... OK</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex h-full items-center justify-center text-muted font-mono text-sm">
              Select a project from the explorer...
            </div>
          )}
        </AnimatePresence>
      </GlassWindow>
    </div>
  );
}
