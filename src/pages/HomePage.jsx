import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconArrowUpRight, IconDownload, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { siteConfig } from '../../data/site';
import { AnimatedText } from '../components/common/AnimatedText';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function HomePage() {
  return (
    <div className="relative w-full z-10 flex flex-col items-center justify-center min-h-[90vh] py-10 px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl flex flex-col items-center justify-center text-center relative z-10"
      >
        <div className="space-y-10 flex flex-col items-center justify-center">
          <motion.div
            variants={fadeUp}
            className="space-y-6 flex flex-col items-center justify-center"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-white max-w-4xl drop-shadow-[0_0_15px_rgba(var(--color-primary),0.3)]">
              <span className="block text-primary/80 text-2xl sm:text-3xl font-mono tracking-widest mb-4">INITIALIZING:</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">
                {siteConfig.name}
              </span>
            </h1>
            <div className="text-xl sm:text-2xl text-secondary h-10 tracking-tight font-mono max-w-2xl text-balance">
              <AnimatedText texts={siteConfig.taglines} speed={65} pause={2000} />
            </div>
          </motion.div>
              
          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-muted max-w-2xl font-mono leading-relaxed text-balance"
          >
            {siteConfig.bio}
          </motion.p>
              
          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-6 pt-6 w-full justify-center font-mono">
            <Link 
              to="/projects"
              className="glass-panel px-6 py-4 flex items-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary group"
            >
              <span className="group-hover:text-primary transition-colors">View My Work</span>
              <IconArrowUpRight className="ml-2 h-4 w-4 group-hover:text-primary transition-colors" />
            </Link>
            <a 
              href={siteConfig.resumeUrl} 
              download
              className="px-6 py-4 flex items-center border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary group"
            >
              <IconDownload className="mr-2 h-4 w-4 group-hover:text-white transition-colors text-muted" />
              <span className="group-hover:text-white transition-colors text-muted">Download CV</span>
            </a>
          </motion.div>
                        
          <motion.div variants={fadeUp} className="pt-10 flex flex-col items-center">
            <div className="text-xs text-primary/80 uppercase tracking-widest font-mono border border-primary/30 bg-primary/5 px-3 py-1 rounded mb-6">
              Connect
            </div>
            <div className="glass-panel px-6 py-4 flex items-center gap-6">
              {siteConfig.github && (
                <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded p-1">
                  <IconBrandGithub size={24} />
                </a>
              )}
              {siteConfig.linkedin && (
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded p-1">
                  <IconBrandLinkedin size={24} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
