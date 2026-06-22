import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { path: '/', label: 'SYS.HOME' },
  { path: '/about', label: 'SYS.ABOUT' },
  { path: '/skills', label: 'SYS.SKILLS' },
  { path: '/projects', label: 'SYS.PROJECTS' },
  { path: '/contact', label: 'SYS.CONTACT' }
];

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto glass-panel px-6 py-3 flex items-center justify-between">
        <div className="text-white font-bold tracking-widest text-lg">
          EREBUS<span className="text-primary">_CORE</span>
        </div>
        
        <div className="hidden md:flex gap-8 font-mono text-sm">
          {links.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => 
                `relative transition-colors hover:text-white ${isActive ? 'text-primary font-bold' : 'text-muted'}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
