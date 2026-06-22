import React from 'react';
import { motion } from 'framer-motion';

function RungGraphic() {
  return (
    <div className="flex items-center gap-1 mr-4">
      {/* Left Sphere */}
      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-[inset_-1px_-1px_3px_rgba(0,0,0,0.5)]"></div>
      {/* Left Cap */}
      <div className="w-2 h-1.5 bg-gray-500"></div>
      {/* Glowing Bridge */}
      <div className="w-8 h-1 bg-primary shadow-[0_0_8px_#00f0ff]"></div>
      {/* Right Cap */}
      <div className="w-2 h-1.5 bg-gray-500"></div>
      {/* Right Sphere */}
      <div className="w-3 h-3 rounded-full bg-gradient-to-bl from-gray-400 to-gray-600 shadow-[inset_1px_-1px_3px_rgba(0,0,0,0.5)]"></div>
    </div>
  );
}

export function BasePairProtocol() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="glass-window p-6 font-mono text-sm max-w-sm ml-auto"
    >
      <div className="text-secondary/80 tracking-widest mb-3">BASE PAIR PROTOCOL</div>
      <div className="h-px w-full bg-white/10 mb-6"></div>

      <div className="space-y-6">
        {/* A - T Pair */}
        <div className="flex items-center">
          <RungGraphic />
          <div className="flex-1">
            <div className="text-white font-bold tracking-widest">A - T</div>
            <div className="text-muted text-xs">2 Hydrogen Bonds</div>
          </div>
          <div className="w-0.5 h-6 bg-white/20"></div>
        </div>

        {/* G - C Pair */}
        <div className="flex items-center">
          <RungGraphic />
          <div className="flex-1">
            <div className="text-white font-bold tracking-widest">G - C</div>
            <div className="text-muted text-xs">3 Hydrogen Bonds</div>
          </div>
          <div className="w-0.5 h-6 bg-primary/50 shadow-[0_0_5px_#00f0ff]"></div>
        </div>
      </div>

      <div className="h-px w-full bg-white/10 mt-6 mb-4"></div>
      
      <div className="flex justify-between text-xs tracking-widest text-secondary/60">
        <span>SECURE</span>
        <span className="text-primary">•</span>
        <span>STABLE</span>
        <span className="text-primary">•</span>
        <span>PRECISE</span>
      </div>
    </motion.div>
  );
}
