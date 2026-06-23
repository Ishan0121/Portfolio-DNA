import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { siteConfig } from '../../data/site';

const links = [
  { path: '/', label: 'SYS.HOME' },
  { path: '/about', label: 'SYS.ABOUT' },
  { path: '/skills', label: 'SYS.SKILLS' },
  { path: '/projects', label: 'SYS.PROJECTS' },
  { path: '/contact', label: 'SYS.CONTACT' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4 flex flex-col gap-2"
    >
      <div className="max-w-[1400px] w-full mx-auto glass-panel px-4 md:px-6 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-white font-bold tracking-widest text-sm md:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded whitespace-nowrap">
          {siteConfig.name.split(' ')[0].toUpperCase()}<span className="text-primary">_CORE</span>
        </NavLink>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 lg:gap-8 font-mono text-xs md:text-sm" aria-label="Main Navigation">
          {links.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => 
                `relative transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded px-2 py-1 ${isActive ? 'text-primary font-bold' : 'text-muted'}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <IconX /> : <IconMenu2 />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 glass-panel p-4 flex flex-col gap-4 font-mono text-sm"
          >
            {links.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition-colors ${isActive ? 'bg-primary/20 text-primary font-bold' : 'text-muted hover:text-white hover:bg-white/5'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
