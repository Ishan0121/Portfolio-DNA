import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/social';
import { siteConfig } from '../data/site';
import { IconSend } from '@tabler/icons-react';

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate send or fallback to mailto
    window.location.href = `mailto:${siteConfig.email}?subject=Contact from ${formData.name}&body=${formData.message} (%0A%0AFrom: ${formData.email})`;
    setStatus('Message queued for transmission.');
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 max-w-6xl mx-auto flex flex-col justify-center relative z-10">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-window p-8 border-t-4 border-t-primary flex flex-col"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Send Transmission</h2>
          <form onSubmit={handleSubmit} className="space-y-4 flex-1">
            <div>
              <label htmlFor="name" className="block text-secondary/70 font-mono text-xs uppercase tracking-widest mb-2">Identifier (Name)</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-black/40 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-secondary/70 font-mono text-xs uppercase tracking-widest mb-2">Return Address (Email)</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-black/40 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-secondary/70 font-mono text-xs uppercase tracking-widest mb-2">Payload (Message)</label>
              <textarea 
                id="message" 
                rows="4" 
                required
                className="w-full bg-black/40 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-primary transition-colors focus-visible:ring-1 focus-visible:ring-primary resize-none"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary/10 text-primary border border-primary/50 rounded font-mono hover:bg-primary/20 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              <span>Transmit</span>
              <IconSend className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            {status && (
              <p className="text-primary font-mono text-xs text-center animate-pulse mt-4">{status}</p>
            )}
          </form>
        </motion.div>

        {/* Socials & Direct */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-8"
        >
          <div className="glass-panel p-8 border-l-4 border-l-primary flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Direct Channel</h2>
              <p className="text-muted mb-8">Secure connection established. Awaiting input stream.</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="text-secondary/70 font-mono text-xs uppercase tracking-widest mb-1">Email ID</div>
                <a href={`mailto:${siteConfig.email}`} className="text-lg text-white hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded">
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
          </div>

          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((social, idx) => (
              <a 
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit my ${social.label} profile`}
                className="glass-panel p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 group transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <social.icon className="w-8 h-8 text-secondary/80 group-hover:text-primary transition-colors" />
                <span className="font-mono text-sm text-white group-hover:text-primary transition-colors">{social.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
