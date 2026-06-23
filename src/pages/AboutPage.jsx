import React from 'react';
import { motion } from "framer-motion";
import { IconBriefcase, IconSchool, IconMapPin, IconSparkles } from "@tabler/icons-react";
import { aboutInfo, timeline, services } from '../data/about';
import { siteConfig } from '../data/site';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function AboutPage() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 relative z-10 px-4 md:px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
      >
        {/* Left Column - Image & Quick Facts */}
        <motion.div variants={fadeIn} className="lg:col-span-5 space-y-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-black/80 mix-blend-overlay z-10"></div>
              <img 
                src={`https://github.com/${siteConfig.githubUsername}.png`} 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
              />
            </div>
          </div>

          <div className="glass-panel border-white/10 bg-black/40 backdrop-blur-xl p-6 flex flex-col gap-3 rounded-xl">
            <div className="flex items-center gap-2 py-1.5 px-3 bg-white/5 rounded-md w-fit text-sm font-mono text-muted border border-white/5">
              <IconMapPin className="w-4 h-4 text-primary" />
              {siteConfig.location}
            </div>
            <div className="flex items-center gap-2 py-1.5 px-3 bg-white/5 rounded-md w-fit text-sm font-mono text-muted border border-white/5">
              <IconBriefcase className="w-4 h-4 text-primary" />
              {timeline[0]?.title || "Available for opportunities"}
            </div>
            <div className="flex items-center gap-2 py-1.5 px-3 bg-white/5 rounded-md w-fit text-sm font-mono text-muted border border-white/5">
              <IconSchool className="w-4 h-4 text-primary" />
              {aboutInfo.degree}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Bio & Experience */}
        <motion.div variants={fadeIn} className="lg:col-span-7 space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white drop-shadow-[0_0_15px_rgba(var(--color-primary),0.3)]">
              {aboutInfo.heading}
            </h1>
            <div className="text-muted max-w-none space-y-6 font-mono text-sm sm:text-base leading-relaxed">
              {aboutInfo.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
             {aboutInfo.stats.map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-xl glass-panel bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group">
                   <div className="text-2xl font-bold text-primary mb-1 group-hover:drop-shadow-[0_0_8px_rgba(var(--color-primary),1)] transition-all">{stat.value}</div>
                   <div className="text-xs text-muted uppercase font-mono tracking-wider">{stat.label}</div>
                </div>
             ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-white font-mono tracking-widest">
              <IconSparkles className="w-6 h-6 text-primary" />
              SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((item, i) => (
                <div key={i} className="glass-panel p-5 hover:bg-white/5 transition-all duration-300 border-white/10 hover:border-primary/50 group rounded-xl">
                  <h3 className="font-bold text-lg mb-1 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted font-mono">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-white font-mono tracking-widest">
              <IconSchool className="w-6 h-6 text-primary" />
              TIMELINE
            </h2>
            <div className="relative ml-3 space-y-8 mt-6">
              <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-white/10" />
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--color-primary),1)]"></div>
                  <div className="text-sm text-primary font-mono mb-1 font-bold">{item.year}</div>
                  <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                  <div className="text-xs text-white/70 mb-2 font-mono uppercase tracking-widest">{item.company}</div>
                  <p className="text-sm text-muted leading-relaxed font-mono">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
