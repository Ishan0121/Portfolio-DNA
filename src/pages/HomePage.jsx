import React from 'react';
import { TerminalHero } from '../components/HUD/TerminalHero';
import { BasePairProtocol } from '../components/HUD/BasePairProtocol';
import { HeroProfile } from '../components/HUD/HeroProfile';
import { SceneWrapper } from '../components/3DScene/Scene';

export function HomePage() {
  return (
    <div className="relative w-full">
      {/* Background 3D DNA fixed for parallax effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-80">
        <SceneWrapper />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pointer-events-none min-h-[90vh] flex flex-col justify-center pt-24 pb-24">
        <div className="flex flex-col xl:flex-row justify-between items-start gap-12 w-full">
          
          {/* Left Column */}
          <div className="pointer-events-auto w-full xl:w-2/3 flex flex-col gap-8">
            <TerminalHero />
            <HeroProfile />
          </div>
          
          {/* Right Column (Pinned/Sticky) */}
          <div className="pointer-events-auto hidden xl:block xl:w-1/3 sticky top-32">
            <BasePairProtocol />
          </div>

        </div>
      </div>
    </div>
  );
}
