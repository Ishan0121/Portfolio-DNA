import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Database, Server } from 'lucide-react';

export function SystemMonitor() {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setUptime(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute top-6 right-6 w-64 glass-window p-4 font-mono text-xs"
    >
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
        <span className="text-muted tracking-wider flex items-center gap-2">
          <Server size={14} /> SYSTEM
        </span>
        <span className="text-white font-bold">Erebus Core</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-muted">STATUS</span>
          <span className="text-primary flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> ONLINE
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-muted">UPTIME</span>
          <span className="text-white">{formatUptime(uptime)}</span>
        </div>
        
        <div className="flex justify-between items-start">
          <span className="text-muted flex items-center gap-1"><Database size={12} /> STACK</span>
          <div className="text-right text-white/80 space-y-1">
            <div>C++ | Linux</div>
            <div>AI | Embedded</div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-white/10 mt-2">
          <span className="text-muted flex items-center gap-1"><Cpu size={12} /> MODE</span>
          <span className="text-white/90">Building Future</span>
        </div>
      </div>
    </motion.div>
  );
}
