import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function GlassWindow({ children, className, title }) {
  return (
    <div className={cn("glass-window flex flex-col", className)}>
      {title && (
        <div className="border-b border-white/10 bg-white/5 px-4 py-2 flex items-center justify-between">
          <span className="text-sm font-mono text-muted">{title}</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
          </div>
        </div>
      )}
      <div className="p-4 flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
