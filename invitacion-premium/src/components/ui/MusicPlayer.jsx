import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { AudioPlayerContext } from '../../context/AudioPlayerContext';
import data from '../../data/wedding.json';

const MusicPlayer = () => {
  const { isPlaying, togglePlay } = useContext(AudioPlayerContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100] flex items-center gap-3"
    >
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 20, width: 0 }}
            animate={{ opacity: 1, x: 0, width: 'auto' }}
            exit={{ opacity: 0, x: 20, width: 0 }}
            className="overflow-hidden whitespace-nowrap bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm"
          >
            <p className="font-sans text-[9px] sm:text-xs tracking-wider text-[#2F3E46] flex items-center gap-2">
              <HiOutlineMusicNote className="animate-pulse text-[#A88B5E]" />
              {data.music?.title || "Música de Fondo"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-[0_10px_20px_-5px_rgba(0,0,0,0.4)] bg-[#1A1A1A] border-2 border-neutral-800 overflow-hidden group flex items-center justify-center cursor-pointer"
      >
        {/* Vinyl texture ridges */}
        <div className="absolute inset-1 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute inset-[6px] rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute inset-3 rounded-full border border-white/5 pointer-events-none" />
        
        {/* Center label */}
        <div className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] bg-[#C4A47C] rounded-full z-10 flex items-center justify-center">
          <div className="w-[4px] h-[4px] sm:w-[6px] sm:h-[6px] bg-neutral-900 rounded-full" />
        </div>

        {/* Dynamic Rotation Wrapper for vinyl effects */}
        <motion.div
           className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
           animate={{ rotate: isPlaying ? 360 : 0 }}
           transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        >
          {/* Highlight sheen to simulate rotation reflection */}
          <div className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
          {/* Tiny marker dot to make rotation visible */}
          <div className="absolute top-2 right-3 w-[2px] h-[2px] bg-white/30 rounded-full" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default MusicPlayer;
