import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Cpu } from 'lucide-react';

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
    <div className="hidden lg:flex items-center gap-4 font-mono text-[10px] sm:text-xs">
      {/* Status */}
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
        <span className="text-primary font-bold tracking-wider">ONLINE</span>
      </div>
      {/* Uptime */}
      <div className="flex items-center gap-1 text-muted">
        <span>T+</span>
        <span className="text-white">{formatUptime(uptime)}</span>
      </div>
      {/* Specs */}
      <div className="flex items-center gap-2 text-muted border-l border-white/10 pl-4">
        <span className="flex items-center gap-1"><Server size={10} /> Core</span>
        <span className="flex items-center gap-1"><Database size={10} /> AI</span>
        <span className="flex items-center gap-1"><Cpu size={10} /> 99%</span>
      </div>
    </div>
  );
}
