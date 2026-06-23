import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconChevronDown, IconChevronUp, IconInfoCircle } from '@tabler/icons-react';

function RungGraphic({ type }) {
  const numBonds = type === 'G-C' ? 3 : 2;
  return (
    <div className="flex items-center gap-0.5 mr-4" title={`${numBonds} Hydrogen Bonds`}>
      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-[inset_-1px_-1px_3px_rgba(0,0,0,0.5)]"></div>
      <div className="w-3 h-1 bg-gray-700"></div>
      <div className="w-1.5 h-2 bg-gray-500 rounded-sm"></div>
      <div className="flex flex-col gap-0.5 mx-0.5 justify-center h-2.5">
        {Array.from({ length: numBonds }).map((_, i) => (
          <div key={i} className="w-3 h-[1px] bg-primary" style={{ boxShadow: '0 0 5px rgb(var(--color-primary) / 1)' }}></div>
        ))}
      </div>
      <div className="w-1.5 h-2 bg-gray-500 rounded-sm"></div>
      <div className="w-3 h-1 bg-gray-700"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-bl from-gray-400 to-gray-600 shadow-[inset_1px_-1px_3px_rgba(0,0,0,0.5)]"></div>
    </div>
  );
}

function DetailItem({ title, desc, iconColor = "bg-primary", graphic }) {
  return (
    <div className="flex items-center">
      {graphic ? graphic : (
        <div className="mr-4 flex items-center justify-center w-8">
          <div className={`w-2 h-2 rounded-full ${iconColor} animate-pulse`} style={{ boxShadow: `0 0 8px var(--color-primary)` }}></div>
        </div>
      )}
      <div className="flex-1">
        <div className="text-white font-bold tracking-widest">{title}</div>
        <div className="text-muted text-xs">{desc}</div>
      </div>
      <div className={`w-0.5 h-6 ${iconColor === 'bg-primary' ? 'bg-primary/50' : 'bg-white/20'}`}></div>
    </div>
  );
}

export function ProtocolDetails() {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const getDetails = (path) => {
    switch (path) {
      case '/':
        return {
          title: 'BASE PAIR PROTOCOL',
          info: 'Real-time bond integrity monitoring',
          footer: ['SECURE', 'STABLE', 'PRECISE'],
          content: (
            <>
              <DetailItem 
                graphic={<RungGraphic type="A-T" />} 
                title="A - T" 
                desc="2 Hydrogen Bonds" 
                iconColor="bg-white/20" 
              />
              <DetailItem 
                graphic={<RungGraphic type="G-C" />} 
                title="G - C" 
                desc="3 Hydrogen Bonds" 
                iconColor="bg-primary" 
              />
            </>
          )
        };
      case '/about':
        return {
          title: 'NEURAL NETWORK ARCHITECTURE',
          info: 'Synaptic pathway analysis',
          footer: ['ADAPTIVE', 'LEARNING', 'CONNECTED'],
          content: (
            <>
              <DetailItem title="NODES" desc="1024 Quantum Cores" iconColor="bg-primary" />
              <DetailItem title="SYNAPSES" desc="Optic Fiber Bridges" iconColor="bg-white/20" />
            </>
          )
        };
      case '/skills':
        return {
          title: 'DATA CORE SYSTEMS',
          info: 'Storage and retrieval metrics',
          footer: ['ENCRYPTED', 'REDUNDANT', 'FAST'],
          content: (
            <>
              <DetailItem title="SECTORS" desc="Encrypted Memory Blocks" iconColor="bg-white/20" />
              <DetailItem title="BUS" desc="Quantum Data Bus" iconColor="bg-primary" />
            </>
          )
        };
      case '/projects':
        return {
          title: 'CYBER EYE OPTICS',
          info: 'Visual spectrum analysis',
          footer: ['FOCUSED', 'MULTI-SPECTRAL', 'SHARP'],
          content: (
            <>
              <DetailItem title="LENS" desc="Multi-spectral Sensors" iconColor="bg-primary" />
              <DetailItem title="IRIS" desc="Mechanical Shutter" iconColor="bg-white/20" />
            </>
          )
        };
      case '/contact':
        return {
          title: 'BIONIC HEART UPLINK',
          info: 'Energy distribution monitor',
          footer: ['PUMPING', 'SYNCHRONIZED', 'ALIVE'],
          content: (
            <>
              <DetailItem title="PUMP" desc="Magnetic Centrifugal" iconColor="bg-white/20" />
              <DetailItem title="VALVES" desc="Titanium Iris Valves" iconColor="bg-primary" />
            </>
          )
        };
      default:
        return {
          title: 'SYSTEM PROTOCOL',
          info: 'General system status',
          footer: ['ONLINE', 'READY', 'STEADY'],
          content: <DetailItem title="STATUS" desc="All systems operational" iconColor="bg-primary" />
        };
    }
  };

  const current = getDetails(location.pathname);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="glass-window p-4 xl:p-6 font-mono text-sm w-full flex-1"
    >
      <div className="flex justify-between items-center mb-2 xl:mb-3">
        <div className="text-secondary/80 tracking-widest flex items-center gap-2">
          {current.title}
          <IconInfoCircle className="w-4 h-4 text-primary" title={current.info} />
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded p-1 hover:text-primary transition-colors"
          aria-expanded={isExpanded}
          aria-label={`Toggle ${current.title} details`}
        >
          {isExpanded ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
        </button>
      </div>
      
      <div className="h-px w-full bg-white/10 mb-4 xl:mb-6"></div>

      <div className={`md:block overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'}`}>
        <div className="space-y-6 pt-2 xl:pt-0">
          {current.content}
        </div>

        <div className="h-px w-full bg-white/10 mt-6 mb-4"></div>
        
        <div className="flex justify-between text-xs tracking-widest text-secondary/60 pb-2 xl:pb-0">
          <span className="text-white font-bold">{current.footer[0]}</span>
          <span className="text-primary">•</span>
          <span className="text-white font-bold">{current.footer[1]}</span>
          <span className="text-primary">•</span>
          <span className="text-white font-bold">{current.footer[2]}</span>
        </div>
      </div>
    </motion.div>
  );
}
