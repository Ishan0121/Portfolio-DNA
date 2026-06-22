import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/social';
import { siteConfig } from '../data/site';

export function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 max-w-4xl mx-auto flex flex-col justify-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-primary">{'>'}</span> Initiate.Contact
        </h1>
        <p className="text-muted text-lg">
          My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-window p-8 border-l-4 border-l-primary flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Direct Channel</h2>
            <p className="text-muted mb-8">Secure connection established. Awaiting input stream.</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="text-secondary/70 font-mono text-xs uppercase tracking-widest mb-1">Email ID</div>
              <a href={`mailto:${siteConfig.email}`} className="text-lg text-white hover:text-primary transition-colors">
                {siteConfig.email}
              </a>
            </div>
            <div>
              <div className="text-secondary/70 font-mono text-xs uppercase tracking-widest mb-1">Location</div>
              <div className="text-lg text-white">
                {siteConfig.location}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-4"
        >
          {socialLinks.map((social, idx) => (
            <a 
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 group transition-all duration-300"
            >
              <social.icon className="w-8 h-8 text-secondary/80 group-hover:text-primary transition-colors" />
              <span className="font-mono text-sm text-white group-hover:text-primary transition-colors">{social.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
