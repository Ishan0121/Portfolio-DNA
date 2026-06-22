import React from 'react';
import { motion } from 'framer-motion';
import { GlassWindow } from '../components/UI/GlassWindow';

export function ContactPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-3xl font-bold font-mono neon-text mb-8">/contact</h1>
      <GlassWindow title="send_transmission.sh" className="max-w-2xl">
        <form className="space-y-4 font-mono text-sm">
          <div>
            <label className="block text-muted mb-1">{"<"} ID / NAME {">"}</label>
            <input type="text" className="w-full bg-black/40 border border-white/10 rounded p-2 text-white outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block text-muted mb-1">{"<"} FREQUENCY / EMAIL {">"}</label>
            <input type="email" className="w-full bg-black/40 border border-white/10 rounded p-2 text-white outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block text-muted mb-1">{"<"} PAYLOAD / MESSAGE {">"}</label>
            <textarea rows="4" className="w-full bg-black/40 border border-white/10 rounded p-2 text-white outline-none focus:border-primary"></textarea>
          </div>
          <button type="button" className="bg-primary/20 text-primary border border-primary px-4 py-2 rounded hover:bg-primary/30 transition-colors">
            [ EXECUTE TRANSMISSION ]
          </button>
        </form>
      </GlassWindow>
    </motion.div>
  );
}
