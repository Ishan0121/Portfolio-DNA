import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { SystemMonitor } from '../HUD/SystemMonitor';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../data/site';
import { SceneWrapper } from '../3DScene/Scene';
import { useInteract } from '../../context/InteractContext';
import { InteractToggle } from '../HUD/InteractToggle';

export function MainLayout() {
  const location = useLocation();
  const { isInteractMode } = useInteract();

  return (
    <div className="relative w-full min-h-screen bg-background text-secondary flex flex-col">
      <Helmet>
        <title>{siteConfig.name} - {siteConfig.role}</title>
        <meta name="description" content={siteConfig.bio} />
        <meta name="theme-color" content="#0a0a0a" />
      </Helmet>

      {/* Global 3D Background */}
      <div className={`fixed inset-0 transition-opacity duration-700 z-0 ${isInteractMode ? 'opacity-100 pointer-events-auto' : 'opacity-80 pointer-events-none'}`}>
        <SceneWrapper route={location.pathname} />
      </div>

      {/* Free Cam Toggle */}
      <InteractToggle />

      {/* UI Wrapper (Fades out when in Free Cam) */}
      <div className={`transition-all duration-700 flex-1 flex flex-col ${isInteractMode ? 'opacity-0 pointer-events-none blur-sm' : 'opacity-100 blur-0'}`}>
        {/* Top Navigation */}
        <Navbar />

        {/* System Monitor overlay globally */}
        <div className="fixed inset-0 z-40 pointer-events-none hidden lg:block mt-24">
          <SystemMonitor />
        </div>

        {/* Page Content */}
        <main id="main-content" className="flex-1 relative z-20 pt-24 pb-12 focus:outline-none" tabIndex="-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
