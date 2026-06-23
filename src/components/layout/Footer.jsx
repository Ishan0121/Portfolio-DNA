import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { IconHeart, IconMail, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { siteConfig } from "../../data/site";
import { SystemMonitor } from "../HUD/SystemMonitor";

const getProtocolName = (path) => {
  switch (path) {
    case '/': return 'BASE PAIR PROTOCOL';
    case '/about': return 'NEURAL NETWORK ARCHITECTURE';
    case '/skills': return 'DATA CORE SYSTEMS';
    case '/projects': return 'CYBER EYE OPTICS';
    case '/contact': return 'BIONIC HEART UPLINK';
    default: return 'SYSTEM PROTOCOL';
  }
};

export function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const protocol = getProtocolName(location.pathname);

  return (
    <footer className="relative mt-24 overflow-hidden w-full z-10">
      {/* Top fade line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="glass-panel border-none rounded-none px-4 sm:px-8 lg:px-12 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 w-fit group focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-background font-bold text-sm shadow-[0_0_14px_rgba(var(--color-primary),0.4)]"
              >
                {siteConfig.name.split(' ').map(n => n[0]).join('')}
              </motion.div>
              <span className="font-semibold text-lg group-hover:text-primary transition-colors text-white tracking-widest">
                {siteConfig.name.split(' ')[0].toUpperCase()}<span className="text-primary">_CORE</span>
              </span>
            </Link>
            <p className="text-sm text-muted max-w-xs leading-relaxed font-mono">
              {siteConfig.bio}
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase font-mono">Navigation</h3>
            <ul className="space-y-2">
              {[
                { title: 'SYS.HOME', href: '/' },
                { title: 'SYS.ABOUT', href: '/about' },
                { title: 'SYS.SKILLS', href: '/skills' },
                { title: 'SYS.PROJECTS', href: '/projects' },
                { title: 'SYS.CONTACT', href: '/contact' }
              ].map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded transition-colors duration-200 flex items-center gap-1.5 group font-mono w-fit"
                  >
                    <span className="w-1 h-1 rounded-full bg-transparent group-hover:bg-primary transition-colors duration-200" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase font-mono">Connect</h3>
            <div className="flex items-center gap-4">
              {siteConfig.github && (
                <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded p-1">
                  <IconBrandGithub size={20} />
                </a>
              )}
              {siteConfig.linkedin && (
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded p-1">
                  <IconBrandLinkedin size={20} />
                </a>
              )}
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-xs text-muted hover:text-primary transition-colors duration-200 font-mono focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded p-1"
            >
              <IconMail size={13} />
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* HUD Elements */}
        <div className="max-w-6xl mx-auto mt-10 p-4 border border-white/10 bg-black/20 rounded flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Protocol Name */}
          <div className="flex items-center">
            <span className="font-mono text-xs text-primary tracking-widest border border-primary/30 bg-primary/5 px-3 py-1 rounded whitespace-nowrap">
              {protocol}
            </span>
          </div>
          <SystemMonitor />
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted font-mono">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <motion.p
            className="text-xs text-muted flex items-center gap-1 font-mono"
            whileHover={{ scale: 1.03 }}
          >
            Built with <IconHeart size={11} className="text-red-500 fill-red-500 mx-0.5 animate-pulse" /> using React & Three.js
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
