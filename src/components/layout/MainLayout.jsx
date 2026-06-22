import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { SystemMonitor } from '../HUD/SystemMonitor';

export function MainLayout() {
  return (
    <div className="relative w-full min-h-screen bg-background text-secondary flex flex-col">
      {/* Top Navigation */}
      <Navbar />

      {/* System Monitor overlay globally */}
      <div className="fixed inset-0 z-40 pointer-events-none hidden lg:block mt-24">
        <SystemMonitor />
      </div>

      {/* Page Content */}
      <main className="flex-1 relative z-20 pointer-events-auto pt-24 pb-12">
        <Outlet />
      </main>
    </div>
  );
}
