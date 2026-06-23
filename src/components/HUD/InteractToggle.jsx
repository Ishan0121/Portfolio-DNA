import React from 'react';
import { useInteract } from '../../context/InteractContext';
import { IconView360, IconX, IconRefresh } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

export function InteractToggle() {
  const { isInteractMode, setIsInteractMode, triggerReset } = useInteract();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isInteractMode && (
          <motion.button
            initial={{ scale: 0, opacity: 0, x: 20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0, opacity: 0, x: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={triggerReset}
            className="p-3 rounded-full border shadow-lg flex items-center justify-center backdrop-blur-md transition-colors bg-primary/20 border-primary/50 text-primary hover:bg-primary/30 shadow-[0_0_10px_rgba(var(--color-primary),0.3)]"
            title="Reset Camera Position"
          >
            <IconRefresh className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence mode="wait">
        <motion.button
          key={isInteractMode ? 'exit' : 'enter'}
          initial={{ scale: 0, opacity: 0, rotate: -90 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0, opacity: 0, rotate: 90 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsInteractMode(!isInteractMode)}
          className={`p-4 rounded-full border shadow-lg flex items-center justify-center backdrop-blur-md transition-colors ${
            isInteractMode 
              ? 'bg-red-500/20 border-red-500/50 text-red-500 hover:bg-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.5)]' 
              : 'bg-primary/20 border-primary/50 text-primary hover:bg-primary/30 shadow-[0_0_15px_rgba(var(--color-primary),0.5)]'
          }`}
          title={isInteractMode ? "Exit Free Cam" : "Enter Free Cam"}
        >
          {isInteractMode ? <IconX className="w-6 h-6" /> : <IconView360 className="w-6 h-6" />}
        </motion.button>
        </AnimatePresence>
        {isInteractMode && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-full right-0 mb-4 whitespace-nowrap text-xs font-mono text-primary bg-black/60 px-3 py-1.5 border border-primary/30 rounded backdrop-blur-sm"
          >
            [FREE_CAM_ACTIVE]
          </motion.div>
        )}
      </div>
    </div>
  );
}
