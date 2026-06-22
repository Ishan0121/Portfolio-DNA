import React from 'react';
import { TerminalHero } from '../components/HUD/TerminalHero';
import { BasePairProtocol } from '../components/HUD/BasePairProtocol';
import { SceneWrapper } from '../components/3DScene/Scene';

export function HomePage() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center min-h-[80vh]">
      {/* Background 3D DNA explicitly for Home Page */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-80">
        <SceneWrapper />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pointer-events-none mt-20 flex flex-col md:flex-row justify-between items-end min-h-[60vh]">
        <div className="pointer-events-auto w-full md:w-auto">
          <TerminalHero />
        </div>
        <div className="pointer-events-auto hidden md:block w-[350px]">
          <BasePairProtocol />
        </div>
      </div>
    </div>
  );
}
