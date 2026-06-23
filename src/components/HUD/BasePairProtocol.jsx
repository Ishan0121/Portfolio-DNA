import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown, IconChevronUp, IconInfoCircle } from '@tabler/icons-react';

function RungGraphic({ type }) {
  const numBonds = type === 'G-C' ? 3 : 2;
  return (
    <div className="flex items-center gap-0.5 mr-4" title={`${numBonds} Hydrogen Bonds`}>
      {/* Left Sphere */}
      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-[inset_-1px_-1px_3px_rgba(0,0,0,0.5)]"></div>
      {/* Left Arm */}
      <div className="w-3 h-1 bg-gray-700"></div>
      {/* Left Lego Cap */}
      <div className="w-1.5 h-2 bg-gray-500 rounded-sm"></div>
      
      {/* Glowing Gap (Hydrogen Bonds) */}
      <div className="flex flex-col gap-0.5 mx-0.5 justify-center h-2.5">
        {Array.from({ length: numBonds }).map((_, i) => (
          <div key={i} className="w-3 h-[1px] bg-primary" style={{ boxShadow: '0 0 5px rgb(var(--color-primary) / 1)' }}></div>
        ))}
      </div>

      {/* Right Lego Cap */}
      <div className="w-1.5 h-2 bg-gray-500 rounded-sm"></div>
      {/* Right Arm */}
      <div className="w-3 h-1 bg-gray-700"></div>
      {/* Right Sphere */}
      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-bl from-gray-400 to-gray-600 shadow-[inset_1px_-1px_3px_rgba(0,0,0,0.5)]"></div>
    </div>
  );
}

export function BasePairProtocol() {
  const [isExpanded, setIsExpanded] = useState(false); // Default collapsed on mobile

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="glass-window p-4 xl:p-6 font-mono text-sm w-full xl:max-w-sm xl:ml-auto"
    >
      <div className="flex justify-between items-center mb-2 xl:mb-3">
        <div className="text-secondary/80 tracking-widest flex items-center gap-2">
          BASE PAIR PROTOCOL
          <IconInfoCircle className="w-4 h-4 text-primary" title="Real-time bond integrity monitoring" />
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="xl:hidden text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded p-1 hover:text-primary transition-colors"
          aria-expanded={isExpanded}
          aria-label="Toggle Base Pair Protocol details"
        >
          {isExpanded ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
        </button>
      </div>
      
      <div className="h-px w-full bg-white/10 mb-4 xl:mb-6"></div>

      <div className={`xl:block overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 xl:max-h-96 xl:opacity-100'}`}>
        <div className="space-y-6 pt-2 xl:pt-0">
          {/* A - T Pair */}
          <div className="flex items-center" title="Adenine-Thymine Pair: 2 Hydrogen Bonds. Less thermal stability.">
            <RungGraphic type="A-T" />
            <div className="flex-1">
              <div className="text-white font-bold tracking-widest">A - T</div>
              <div className="text-muted text-xs">2 Hydrogen Bonds</div>
            </div>
            <div className="w-0.5 h-6 bg-white/20"></div>
          </div>

          {/* G - C Pair */}
          <div className="flex items-center" title="Guanine-Cytosine Pair: 3 Hydrogen Bonds. Higher thermal stability.">
            <RungGraphic type="G-C" />
            <div className="flex-1">
              <div className="text-white font-bold tracking-widest">G - C</div>
              <div className="text-muted text-xs">3 Hydrogen Bonds</div>
            </div>
            <div className="w-0.5 h-6 bg-primary/50 shadow-[0_0_5px_rgba(var(--color-primary),1)]"></div>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 mt-6 mb-4"></div>
        
        <div className="flex justify-between text-xs tracking-widest text-secondary/60 pb-2 xl:pb-0">
          <span className="text-white font-bold">SECURE</span>
          <span className="text-primary">•</span>
          <span className="text-white font-bold">STABLE</span>
          <span className="text-primary">•</span>
          <span className="text-white font-bold">PRECISE</span>
        </div>
      </div>
    </motion.div>
  );
}
