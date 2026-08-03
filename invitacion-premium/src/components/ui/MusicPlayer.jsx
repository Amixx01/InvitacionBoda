import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { AudioPlayerContext } from '../../context/AudioPlayerContext';

const MusicPlayer = () => {
  const { isPlaying, togglePlay } = useContext(AudioPlayerContext);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5, delay: 1 }}
      onClick={togglePlay}
      className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100] w-12 h-12 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_10px_20px_-5px_rgba(47,62,70,0.2)] text-[#2F3E46] overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
           key={isPlaying ? 'playing' : 'paused'}
           initial={{ opacity: 0, y: 10, rotate: -45 }}
           animate={{ opacity: 1, y: 0, rotate: 0 }}
           exit={{ opacity: 0, y: -10, rotate: 45 }}
           transition={{ duration: 0.2 }}
        >
          {isPlaying ? <HiVolumeUp size={22} /> : <HiVolumeOff size={22} />}
        </motion.div>
      </AnimatePresence>

      {/* Decorative spinning vinyl effect behind the icon when playing */}
      {isPlaying && (
        <motion.div 
           className="absolute inset-0 border-2 border-transparent border-t-[#A88B5E]/50 rounded-full"
           animate={{ rotate: 360 }}
           transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />
      )}
    </motion.button>
  );
};

export default MusicPlayer;
